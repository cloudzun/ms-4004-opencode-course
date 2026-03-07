# Contract Reviewer Agent - 设计规划

**版本**: v1.0  
**完成时间**: 2026-03-07 09:35 UTC  
**优先级**: ⭐⭐⭐⭐ 最高  
**预计工作量**: 16-20 小时（3-4 周）

---

## 1. Agent 概述

### 1.1 基本信息

| 项目 | 内容 |
|------|------|
| **Agent 名称** | Contract Reviewer Agent |
| **中文名称** | 合同审查专家 |
| **目标用户** | 财务经理、采购经理、法务专员 |
| **核心功能** | 供应商合同对比、风险评估、谈判建议 |
| **业务场景** | 采购决策、供应商管理、合同谈判 |

---

### 1.2 业务价值

**解决的问题**：
- ❌ 手动对比多个合同耗时（2-4 小时/合同）
- ❌ 风险条款容易遗漏
- ❌ 谈判准备不充分
- ❌ 缺乏标准化评估框架

**带来的价值**：
- ✅ 合同对比时间缩短 80%（2 小时 → 20 分钟）
- ✅ 风险识别覆盖率提升至 95%+
- ✅ 谈判建议基于数据驱动
- ✅ 标准化评估框架可复用

---

## 2. 功能设计

### 2.1 核心能力

```yaml
capabilities:
  - contract_parsing: 解析合同条款
  - multi_contract_comparison: 多合同对比
  - risk_assessment: 风险评估
  - compliance_check: 合规性检查
  - negotiation_tips: 生成谈判建议
  - report_generation: 生成审查报告
```

---

### 2.2 功能模块

#### 模块一：合同解析（Contract Parsing）

**功能**：
- 读取 Word/PDF 合同文件
- 提取关键条款（价格、交付、保修、法律等）
- 结构化存储为 JSON/YAML

**技术实现**：
```python
from docx import Document
import re

def parse_contract(file_path):
    doc = Document(file_path)
    clauses = {
        'pricing': extract_pricing_clauses(doc),
        'delivery': extract_delivery_clauses(doc),
        'warranty': extract_warranty_clauses(doc),
        'liability': extract_liability_clauses(doc),
        'termination': extract_termination_clauses(doc),
    }
    return clauses
```

**输出示例**：
```json
{
  "contract_name": "Adatum Corp Smart Sensor Contract",
  "pricing": {
    "unit_price": "$12.50 per unit",
    "payment_terms": "Net 30 days",
    "volume_discount": "5% for orders > 10,000 units"
  },
  "delivery": {
    "lead_time": "6-8 weeks",
    "shipping_terms": "FOB Origin",
    "late_penalty": "1% per week, max 10%"
  },
  "warranty": {
    "period": "24 months",
    "coverage": "Defects in materials and workmanship",
    "response_time": "48 hours"
  }
}
```

---

#### 模块二：合同对比（Multi-Contract Comparison）

**功能**：
- 并排对比 2-5 个合同
- 识别差异点（完全相同/部分不同/完全不同）
- 生成对比矩阵表

**技术实现**：
```python
def compare_contracts(contracts):
    comparison = {
        'pricing': compare_pricing(contracts),
        'delivery': compare_delivery(contracts),
        'warranty': compare_warranty(contracts),
        'liability': compare_liability(contracts),
    }
    
    # 生成对比矩阵
    matrix = generate_comparison_matrix(comparison)
    return matrix
```

**输出示例**（Excel 对比表）：

| 条款维度 | 合同 A (Adatum) | 合同 B (Contoso) | 合同 C (Vendor C) | 最优 |
|---------|---------------|----------------|-----------------|------|
| **单价** | $12.50 | $11.80 | $13.20 | B |
| **付款条件** | Net 30 | Net 45 | Net 30 | B |
| **交付周期** | 6-8 周 | 8-10 周 | 4-6 周 | C |
| **保修期** | 24 个月 | 12 个月 | 36 个月 | C |
| **逾期罚则** | 1%/周 | 0.5%/周 | 2%/周 | A |

---

#### 模块三：风险评估（Risk Assessment）

**功能**：
- 评估每个合同的风险等级（高/中/低）
- 识别风险条款
- 生成风险矩阵

**风险评估框架**：

| 风险维度 | 权重 | 评估标准 |
|---------|------|---------|
| **财务风险** | 30% | 价格波动、付款条件、违约金 |
| **运营风险** | 25% | 交付能力、质量保证、产能 |
| **法律风险** | 20% | 责任限制、争议解决、管辖法律 |
| **合规风险** | 15% | 行业标准、法规要求、认证 |
| **供应商风险** | 10% | 财务健康、依赖度、替代性 |

**技术实现**：
```python
def assess_risk(clauses):
    risk_scores = {
        'financial': calculate_financial_risk(clauses['pricing']),
        'operational': calculate_operational_risk(clauses['delivery']),
        'legal': calculate_legal_risk(clauses['liability']),
        'compliance': calculate_compliance_risk(clauses),
        'vendor': calculate_vendor_risk(clauses),
    }
    
    # 加权计算总分
    total_score = (
        risk_scores['financial'] * 0.30 +
        risk_scores['operational'] * 0.25 +
        risk_scores['legal'] * 0.20 +
        risk_scores['compliance'] * 0.15 +
        risk_scores['vendor'] * 0.10
    )
    
    # 风险等级
    if total_score >= 7:
        level = '高'
    elif total_score >= 4:
        level = '中'
    else:
        level = '低'
    
    return {
        'scores': risk_scores,
        'total': total_score,
        'level': level
    }
```

**输出示例**（风险矩阵）：

| 合同 | 财务风险 | 运营风险 | 法律风险 | 合规风险 | 供应商风险 | 总分 | 等级 |
|------|---------|---------|---------|---------|-----------|------|------|
| **Adatum** | 3.5 | 4.0 | 5.0 | 3.0 | 4.5 | 4.1 | 中 |
| **Contoso** | 2.5 | 5.5 | 6.0 | 4.0 | 5.0 | 4.5 | 中 |
| **Vendor C** | 5.0 | 3.0 | 4.0 | 3.5 | 3.5 | 3.8 | 中 |

---

#### 模块四：谈判建议（Negotiation Tips）

**功能**：
- 基于对比和风险评估生成谈判建议
- 识别我方优势
- 识别对方弱点
- 建议争取的条款
- 可让步的条款

**技术实现**：
```python
def generate_negotiation_tips(comparison, risks):
    tips = {
        'our_strengths': identify_strengths(comparison),
        'their_weaknesses': identify_weaknesses(comparison),
        'request_list': prioritize_requests(comparison, risks),
        'concession_list': identify_concessions(risks),
        'fallback_positions': define_fallbacks(risks),
    }
    return tips
```

**输出示例**（谈判策略文档）：

```markdown
# 谈判策略建议 - Adatum Corp

## 我方优势
1. 订单量大（年采购 50,000+ 单位）
2. 长期合作潜力（3 年框架协议）
3. 付款记录良好（平均付款周期 25 天）
4. 有多个替代供应商

## 对方弱点
1. 产能利用率仅 70%（急需订单）
2. 产品差异化小（可替代性强）
3. 财务压力（应收账款周期长）

## 建议争取的条款（优先级）
1. **价格**：目标$11.50（当前$12.50，对标 Contoso）
2. **付款条件**：Net 45 天（当前 Net 30）
3. **保修期**：延长至 36 个月（当前 24 个月）
4. **交付周期**：缩短至 4-6 周（当前 6-8 周）

## 可让步的条款
1. 首单预付款比例（可接受 20%）
2. 年度价格调整机制（可接受 CPI+2%）
3. 最小订单量（可接受 5,000 单位/季度）

## 底线条款（不可让步）
1. 质量保证金（必须 5%）
2. 逾期交付罚则（必须 1%/周）
3. 知识产权归属（必须归我方）
```

---

### 2.3 预设提示词（Presets）

```yaml
presets:
  - name: parse_contract
    description: 解析单个合同
    prompt: |
      请解析以下合同文件，提取关键条款：
      - 文件：{contract_file}
      
      提取维度：
      1. 价格条款（单价、折扣、付款条件）
      2. 交付条款（时间、地点、违约责任）
      3. 保修条款（期限、范围、响应时间）
      4. 法律条款（责任限制、争议解决）
      5. 终止条款（通知期、违约金）
      
      输出：JSON 格式结构化数据。

  - name: compare_contracts
    description: 多合同对比
    prompt: |
      请对比以下供应商合同：
      - 合同 A：{contract_a_file}
      - 合同 B：{contract_b_file}
      - 合同 C：{contract_c_file}（可选）
      
      对比维度：
      1. 价格条款（单价、折扣、付款条件）
      2. 交付条款（时间、地点、违约责任）
      3. 保修条款（期限、范围、响应时间）
      4. 法律条款（责任限制、争议解决）
      
      输出：
      - Excel 对比矩阵表
      - Word 对比报告（包含差异分析）

  - name: risk_assessment
    description: 风险评估
    prompt: |
      请评估以下合同的风险：
      - 文件：{contract_file}
      
      评估维度：
      1. 财务风险（30% 权重）
      2. 运营风险（25% 权重）
      3. 法律风险（20% 权重）
      4. 合规风险（15% 权重）
      5. 供应商风险（10% 权重）
      
      输出：
      - Excel 风险矩阵表
      - Word 风险评估报告（包含高/中/低评级）

  - name: negotiation_tips
    description: 谈判建议
    prompt: |
      请基于合同对比，生成谈判建议：
      - 对比报告：{comparison_report_file}
      - 风险评估：{risk_assessment_file}
      
      输出内容：
      1. 我方优势（3-5 个）
      2. 对方弱点（3-5 个）
      3. 建议争取的条款（Top 5，按优先级排序）
      4. 可让步的条款（Top 3）
      5. 底线条款（不可让步）
      
      输出：Word 谈判策略文档。

  - name: full_review
    description: 完整审查流程
    prompt: |
      请对以下供应商合同进行完整审查：
      - 合同 A：{contract_a_file}
      - 合同 B：{contract_b_file}
      
      执行流程：
      1. 解析两个合同
      2. 对比分析
      3. 风险评估
      4. 生成谈判建议
      
      输出：
      - contract_comparison.xlsx（对比矩阵）
      - risk_assessment.docx（风险评估）
      - negotiation_tips.docx（谈判建议）
      - executive_summary.pptx（高管汇报）
```

---

## 3. 技术架构

### 3.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│                   Contract Reviewer Agent               │
├─────────────────────────────────────────────────────────┤
│  Input Layer (输入层)                                   │
│  - contract_a.docx                                      │
│  - contract_b.docx                                      │
│  - contract_c.docx (optional)                           │
├─────────────────────────────────────────────────────────┤
│  Processing Layer (处理层)                              │
│  ├─ Contract Parser (合同解析)                          │
│  ├─ Comparison Engine (对比引擎)                        │
│  ├─ Risk Assessor (风险评估)                            │
│  └─ Tips Generator (建议生成)                           │
├─────────────────────────────────────────────────────────┤
│  Output Layer (输出层)                                  │
│  - contract_comparison.xlsx                             │
│  - risk_assessment.docx                                 │
│  - negotiation_tips.docx                                │
│  - executive_summary.pptx                               │
└─────────────────────────────────────────────────────────┘
```

---

### 3.2 文件结构

```
contract-reviewer/
├── agent.yaml                    # Agent 配置文件
├── presets.yaml                  # 预设提示词
├── src/
│   ├── parser.py                 # 合同解析模块
│   ├── comparison.py             # 对比引擎
│   ├── risk_assessment.py        # 风险评估模块
│   └── tips_generator.py         # 建议生成模块
├── templates/
│   ├── comparison_matrix.xlsx    # 对比矩阵模板
│   ├── risk_matrix.xlsx          # 风险矩阵模板
│   └── negotiation_tips.docx     # 谈判建议模板
├── knowledge/
│   ├── risk_clauses.yaml         # 风险条款库
│   ├── compliance_rules.yaml     # 合规规则
│   └── industry_standards.yaml   # 行业标准
├── examples/
│   ├── sample_contract_a.docx    # 示例合同 A
│   ├── sample_contract_b.docx    # 示例合同 B
│   └── sample_outputs/           # 示例输出
└── tests/
    ├── test_parser.py
    ├── test_comparison.py
    └── test_risk_assessment.py
```

---

### 3.3 配置文件

```yaml
# agent.yaml
name: Contract Reviewer Agent
description: 供应商合同审查与风险评估专家
version: 1.0
author: HuaQloud

capabilities:
  - contract_parsing
  - multi_contract_comparison
  - risk_assessment
  - compliance_check
  - negotiation_tips
  - report_generation

models:
  default: bailian-coding-plan/qwen3.5-plus
  analysis: bailian-coding-plan/qwen3.5-plus

tools:
  - read: 读取 Word/PDF 文件
  - write: 生成 Word/Excel/PPT 文件
  - exec: 运行 Python 脚本
  - web_search: 搜索供应商信息（可选）

presets:
  - parse_contract
  - compare_contracts
  - risk_assessment
  - negotiation_tips
  - full_review

output_formats:
  - xlsx: 对比矩阵、风险矩阵
  - docx: 审查报告、谈判建议
  - pptx: 高管汇报

risk_weights:
  financial: 0.30
  operational: 0.25
  legal: 0.20
  compliance: 0.15
  vendor: 0.10
```

---

## 4. 实验设计（高阶课程用）

### 实验一：合同解析基础

**目标**：理解合同解析原理

**步骤**：
1. 阅读示例合同
2. 手动标注关键条款
3. 使用 Agent 自动解析
4. 对比人工 vs AI 结果

**产出**：
- 标注的合同副本
- AI 解析的 JSON 数据
- 对比分析报告

**时间**：2-3 小时

---

### 实验二：多合同对比

**目标**：掌握合同对比方法

**步骤**：
1. 准备 2-3 个供应商合同
2. 运行对比预设
3. 分析差异点
4. 识别最优条款

**产出**：
- 对比矩阵表（Excel）
- 差异分析报告（Word）

**时间**：3-4 小时

---

### 实验三：风险评估

**目标**：学习风险评估框架

**步骤**：
1. 选择 1 个合同
2. 运行风险评估预设
3. 解读风险矩阵
4. 制定缓解措施

**产出**：
- 风险矩阵表（Excel）
- 风险评估报告（Word）
- 风险缓解计划

**时间**：3-4 小时

---

### 实验四：谈判策略制定

**目标**：生成数据驱动的谈判建议

**步骤**：
1. 基于对比和风险评估
2. 运行谈判建议预设
3. 审查和优化建议
4. 模拟谈判演练

**产出**：
- 谈判策略文档（Word）
- 谈判演练记录

**时间**：3-4 小时

---

### 实验五：完整审查流程（毕业设计）

**目标**：独立完成完整合同审查

**步骤**：
1. 接收 2 个新供应商合同
2. 执行完整审查流程
3. 生成所有输出文件
4. 向"高管"汇报（模拟）

**产出**：
- 完整审查报告包
- 高管汇报 PPT
- 个人反思报告

**时间**：6-8 小时

---

## 5. 开发路线图

### Phase 1（1 周）：基础框架

**任务**：
- [ ] 创建 Agent 配置文件（agent.yaml）
- [ ] 实现合同解析模块（parser.py）
- [ ] 测试解析功能

**产出**：
- 可运行的合同解析器
- 示例合同解析结果

**工作量**：6-8 小时

---

### Phase 2（1 周）：对比引擎

**任务**：
- [ ] 实现对比引擎（comparison.py）
- [ ] 生成对比矩阵模板
- [ ] 测试对比功能

**产出**：
- 对比矩阵生成器
- 示例对比报告

**工作量**：6-8 小时

---

### Phase 3（1 周）：风险评估

**任务**：
- [ ] 实现风险评估模块（risk_assessment.py）
- [ ] 定义风险条款库
- [ ] 测试评估功能

**产出**：
- 风险评估器
- 风险矩阵模板
- 示例评估报告

**工作量**：8-10 小时

---

### Phase 4（1 周）：谈判建议 + 集成

**任务**：
- [ ] 实现建议生成模块（tips_generator.py）
- [ ] 集成所有模块
- [ ] 端到端测试
- [ ] 编写实验手册

**产出**：
- 完整 Agent
- 实验手册
- 示例输出包

**工作量**：8-10 小时

---

**总计**：4 周，28-36 小时

---

## 6. 测试计划

### 6.1 单元测试

```python
# test_parser.py
def test_parse_pricing_clause():
    contract = load_sample_contract('adatum')
    result = parse_pricing(contract)
    assert result['unit_price'] == '$12.50'
    assert result['payment_terms'] == 'Net 30'

def test_parse_delivery_clause():
    contract = load_sample_contract('adatum')
    result = parse_delivery(contract)
    assert result['lead_time'] == '6-8 weeks'
```

---

### 6.2 集成测试

```python
# test_full_review.py
def test_full_review_workflow():
    contracts = ['contract_a.docx', 'contract_b.docx']
    
    # 执行完整流程
    parsed = parse_contracts(contracts)
    comparison = compare(parsed)
    risks = assess_risks(parsed)
    tips = generate_tips(comparison, risks)
    
    # 验证输出
    assert comparison is not None
    assert risks is not None
    assert tips is not None
```

---

### 6.3 用户验收测试

**测试场景**：
1. 采购经理审查 2 个供应商合同
2. 法务专员评估合同风险
3. 财务经理准备谈判策略

**验收标准**：
- 对比准确率 > 90%
- 风险识别覆盖率 > 95%
- 用户满意度 > 4/5

---

## 7. 风险与挑战

### 7.1 技术风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| **合同格式多样** | 中 | 高 | 支持多种模板，提供手动校正 |
| **法律术语理解** | 高 | 中 | 建立术语库，AI 微调 |
| **风险评估主观性** | 中 | 中 | 提供可配置权重，允许调整 |

---

### 7.2 业务风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| **法律责任** | 高 | 低 | 明确免责声明，人工审核 |
| **商业机密泄露** | 高 | 低 | 本地部署，数据加密 |
| **过度依赖 AI** | 中 | 中 | 强调 AI 辅助，最终决策在人 |

---

## 8. 成功指标

### 8.1 技术指标

- ✅ 合同解析准确率 > 90%
- ✅ 对比矩阵生成时间 < 2 分钟
- ✅ 风险评估一致性 > 85%
- ✅ 系统可用性 > 99%

---

### 8.2 业务指标

- ✅ 合同审查时间缩短 80%
- ✅ 风险识别覆盖率 > 95%
- ✅ 用户满意度 > 4/5
- ✅ 谈判成功率提升 20%

---

### 8.3 教学指标

- ✅ 学员完成率 > 80%
- ✅ 实验满意度 > 4/5
- ✅ 知识掌握度 > 85%

---

## 9. 下一步行动

### 立即可做

1. ✅ 保存设计规划到 `agent-designs/contract-reviewer/`
2. ⏳ 创建示例合同文件
3. ⏳ 搭建基础框架

### 短期（1-2 周）

4. ⏳ 实现合同解析模块
5. ⏳ 实现对比引擎
6. ⏳ 编写单元测试

### 中期（3-4 周）

7. ⏳ 实现风险评估模块
8. ⏳ 实现谈判建议模块
9. ⏳ 端到端测试

### 长期（5-8 周）

10. ⏳ 编写实验手册
11. ⏳ 内部测试和优化
12. ⏳ 发布高阶课程

---

## 10. 附录

### A. 示例合同条款

**价格条款示例**：
```
单价：每单位$12.50
折扣：订单量超过 10,000 单位享受 5% 折扣
付款条件：发票日后 30 天内付款（Net 30）
价格调整：每年根据 CPI 调整，上限 5%
```

**交付条款示例**：
```
交付周期：订单确认后 6-8 周
交货地点：FOB 原产地
逾期罚则：每逾期一周罚款 1%，最高 10%
```

**保修条款示例**：
```
保修期：24 个月
保修范围：材料和工艺缺陷
响应时间：48 小时内响应
```

---

### B. 风险评估问卷

```yaml
financial_risk_questions:
  - 价格是否固定？（是=1 分，否=3 分）
  - 付款条件是否有利？（Net 45+=1 分，Net 30=2 分，Net 15-=3 分）
  - 是否有违约金条款？（是=1 分，否=3 分）

operational_risk_questions:
  - 交付周期是否可接受？（是=1 分，否=3 分）
  - 是否有质量保证？（是=1 分，否=3 分）
  - 供应商产能是否充足？（是=1 分，否=3 分）
```

---

**文档完成时间**：2026-03-07 09:35 UTC  
**版本**：v1.0  
**状态**：✅ 设计完成，待开发
