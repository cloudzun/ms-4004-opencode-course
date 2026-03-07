# HR Self-Service Agent - 设计规划

**版本**: v1.0  
**完成时间**: 2026-03-07 23:10 UTC  
**优先级**: ⭐⭐⭐⭐ 最高  
**预计工作量**: 16-20 小时（3 周）

---

## 1. Agent 概述

### 1.1 基本信息

| 项目 | 内容 |
|------|------|
| **Agent 名称** | HR Self-Service Assistant |
| **中文名称** | HR 自助服务助手 |
| **目标用户** | 全体员工、HR 专员 |
| **核心功能** | HR 政策问答、知识库检索、隐私保护 |
| **业务场景** | 员工自助服务、政策查询、福利咨询 |

---

### 1.2 业务价值

**解决的问题**：
- ❌ HR 部门每天收到大量重复咨询（福利、假期、晋升等）
- ❌ 员工等待回复时间长（1-3 个工作日）
- ❌ HR 团队精力被琐碎问题占用
- ❌ 政策文档分散，查找困难

**带来的价值**：
- ✅ 7x24 小时即时响应（0 等待）
- ✅ HR 咨询量减少 60-80%
- ✅ HR 团队专注于高价值工作
- ✅ 员工满意度提升

---

## 2. 功能设计

### 2.1 核心能力

```yaml
capabilities:
  - policy_qa: HR 政策问答
  - document_search: 文档检索
  - citation: 引用来源
  - privacy_aware: 隐私感知（拒绝敏感问题）
  - multi_language: 多语言支持（中文/英文）
```

---

### 2.2 知识库设计

#### 核心政策文档（6 个）

| 文档名称 | 内容 | 更新频率 |
|---------|------|---------|
| **员工行为准则** | 职业道德、行为规范 | 年度 |
| **福利政策** | 医疗、保险、401(k) | 年度 |
| **休假政策** | PTO、病假、事假 | 年度 |
| **晋升政策** | 晋升标准、流程 | 半年度 |
| **搬迁政策** | 搬迁福利、报销 | 年度 |
| **远程办公政策** | 远程/混合办公规则 | 季度 |

#### 知识库结构

```
hr_knowledge_base/
├── policies/
│   ├── code_of_conduct.docx
│   ├── benefits_policy.docx
│   ├── leave_policy.docx
│   ├── promotion_policy.docx
│   ├── relocation_policy.docx
│   └── remote_work_policy.docx
├── faq/
│   ├── benefits_faq.md
│   ├── leave_faq.md
│   └── promotion_faq.md
└── metadata.yaml
```

---

### 2.3 预设提示词（Presets）

```yaml
presets:
  - name: benefits_qa
    description: 福利政策问答
    prompt: |
      请回答员工关于福利的问题：
      - 问题：{question}
      
      要求：
      1. 只使用提供的 HR 政策文档
      2. 每个回答必须引用来源（文档名 + 章节）
      3. 如果信息不明确，说明"我需要更多信息"
      4. 拒绝回答敏感问题（薪资、医疗记录等）
      
      输出格式：
      **回答**：[具体内容]
      
      **来源**：[文档名] - [章节]
      
      **相关文档**：[推荐阅读的政策]

  - name: leave_qa
    description: 休假政策问答
    prompt: |
      请回答员工关于休假的问题：
      - 问题：{question}
      
      覆盖范围：
      1. PTO 累积规则
      2. 病假申请流程
      3. 事假审批
      4. 节假日安排
      
      输出格式：
      **回答**：[具体内容]
      
      **申请流程**：[步骤 1-2-3]
      
      **来源**：[文档名] - [章节]

  - name: promotion_qa
    description: 晋升政策问答
    prompt: |
      请回答员工关于晋升的问题：
      - 问题：{question}
      
      覆盖范围：
      1. 晋升标准
      2. 申请流程
      3. 评审周期
      4. 薪资调整
      
      输出格式：
      **回答**：[具体内容]
      
      **关键标准**：[要点列表]
      
      **下一步**：[建议行动]
      
      **来源**：[文档名] - [章节]

  - name: relocation_qa
    description: 搬迁政策问答
    prompt: |
      请回答员工关于搬迁的问题：
      - 问题：{question}
      
      覆盖范围：
      1. 搬迁费用报销
      2. 临时住房
      3. 搬家服务
      4. 配偶就业支持
      
      输出格式：
      **回答**：[具体内容]
      
      **报销额度**：[具体金额/范围]
      
      **申请流程**：[步骤 1-2-3]
      
      **来源**：[文档名] - [章节]

  - name: full_qa
    description: 综合问答
    prompt: |
      请回答员工的 HR 问题：
      - 问题：{question}
      
      要求：
      1. 识别问题类型（福利/休假/晋升/搬迁/其他）
      2. 检索相关政策文档
      3. 提供准确回答 + 引用来源
      4. 如有必要，推荐相关文档
      
      输出格式：
      **问题类型**：[类型]
      
      **回答**：[具体内容]
      
      **来源**：[文档名] - [章节]
      
      **相关文档**：[推荐列表]
      
      **联系 HR**：[如需进一步帮助]
```

---

### 2.4 行为规则

```yaml
behavior_rules:
  # 引用规则
  - rule: cite_sources
    description: 每个回答必须引用来源
    required: true
    
  # 准确性规则
  - rule: no_speculation
    description: 不推测，不知道就说不知道
    required: true
    
  # 隐私保护
  - rule: privacy_aware
    description: 拒绝回答敏感问题
    required: true
    sensitive_topics:
      - 个人薪资
      - 医疗记录
      - 绩效评级
      - 纪律处分
      
  # 语言风格
  - rule: avoid_jargon
    description: 避免专业术语，或解释术语
    required: true
    
  # 引导规则
  - rule: escalate_when_needed
    description: 复杂问题引导联系 HR
    required: true
    escalation_message: "这个问题需要 HR 专员的个性化协助，请联系 HR Support (hr@company.com)"
```

---

## 3. 技术架构

### 3.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│              HR Self-Service Agent                      │
├─────────────────────────────────────────────────────────┤
│  Input Layer (输入层)                                   │
│  - 员工问题（自然语言）                                 │
│  - 问题类型识别（福利/休假/晋升/搬迁）                  │
├─────────────────────────────────────────────────────────┤
│  Processing Layer (处理层)                              │
│  ├─ Document Parser (文档解析)                          │
│  ├─ Knowledge Search (知识检索)                         │
│  ├─ Answer Generator (回答生成)                         │
│  └─ Citation Manager (引用管理)                         │
├─────────────────────────────────────────────────────────┤
│  Safety Layer (安全层)                                  │
│  ├─ Privacy Filter (隐私过滤)                           │
│  └─ Sensitivity Checker (敏感性检查)                    │
├─────────────────────────────────────────────────────────┤
│  Output Layer (输出层)                                  │
│  - 回答内容 + 引用来源                                  │
│  - 相关文档推荐                                         │
│  - HR 联系方式（如需要）                                │
└─────────────────────────────────────────────────────────┘
```

---

### 3.2 文件结构

```
hr-self-service/
├── agent.yaml                    # Agent 配置文件
├── presets.yaml                  # 预设提示词
├── src/
│   ├── parser.py                 # 文档解析模块
│   ├── search.py                 # 知识检索模块
│   ├── generator.py              # 回答生成模块
│   └── safety.py                 # 安全检查模块
├── knowledge_base/
│   ├── policies/                 # 政策文档（6 个）
│   ├── faq/                      # FAQ 文档
│   └── metadata.yaml             # 元数据
├── tests/
│   ├── test_qa.py                # 问答测试
│   ├── test_privacy.py           # 隐私测试
│   └── test_citation.py          # 引用测试
└── examples/
    ├── sample_questions.md       # 示例问题
    └── sample_answers.md         # 示例回答
```

---

### 3.3 配置文件

```yaml
# agent.yaml
name: HR Self-Service Assistant
description: HR 政策自助问答专家
version: 1.0
author: HuaQloud

capabilities:
  - policy_qa
  - document_search
  - citation
  - privacy_aware
  - multi_language

models:
  default: bailian-coding-plan/qwen3.5-plus
  qa: bailian-coding-plan/qwen3.5-plus

tools:
  - read: 读取 Word/PDF 文件
  - write: 生成回答文档
  - search: 知识库检索

presets:
  - benefits_qa
  - leave_qa
  - promotion_qa
  - relocation_qa
  - full_qa

knowledge_base:
  - hr_knowledge_base/policies/code_of_conduct.docx
  - hr_knowledge_base/policies/benefits_policy.docx
  - hr_knowledge_base/policies/leave_policy.docx
  - hr_knowledge_base/policies/promotion_policy.docx
  - hr_knowledge_base/policies/relocation_policy.docx
  - hr_knowledge_base/policies/remote_work_policy.docx

safety:
  privacy_protection: true
  citation_required: true
  no_speculation: true
  escalation_enabled: true

output_formats:
  - markdown: 问答结果
  - json: 结构化数据
```

---

## 4. 实验设计（高阶课程用）

### 实验一：知识库配置

**目标**：学习如何配置 Agent 知识库

**步骤**：
1. 准备 6 个 HR 政策文档
2. 配置知识库路径
3. 测试文档读取
4. 验证元数据

**产出**：
- 知识库配置文件
- 文档读取测试报告

**时间**：3-4 小时

---

### 实验二：提示词工程

**目标**：设计有效的问答提示词

**步骤**：
1. 分析常见问题类型
2. 设计预设提示词
3. 测试提示词效果
4. 迭代优化

**产出**：
- 预设提示词库（5 个）
- 提示词测试报告

**时间**：4-6 小时

---

### 实验三：安全规则配置

**目标**：配置隐私保护和敏感问题过滤

**步骤**：
1. 定义敏感话题列表
2. 配置隐私过滤规则
3. 测试敏感问题响应
4. 验证引导机制

**产出**：
- 安全规则配置
- 隐私测试报告

**时间**：3-4 小时

---

### 实验四：问答测试

**目标**：全面测试 Agent 问答能力

**步骤**：
1. 准备测试问题集（20-30 个）
2. 执行问答测试
3. 评估回答准确性
4. 记录问题和改进点

**产出**：
- 问答测试报告
- 准确率统计

**时间**：4-6 小时

---

### 实验五：部署与优化（毕业设计）

**目标**：完成 Agent 部署并优化

**步骤**：
1. 集成所有模块
2. 端到端测试
3. 性能优化
4. 编写用户文档

**产出**：
- 完整 Agent
- 用户手册
- 部署文档

**时间**：6-8 小时

---

## 5. 开发路线图

### Phase 1（1 周）：知识库配置

**任务**：
- [ ] 准备 6 个 HR 政策文档
- [ ] 实现文档解析模块
- [ ] 配置知识库元数据
- [ ] 测试文档读取

**产出**：
- 知识库配置文件
- 文档解析器

**工作量**：6-8 小时

---

### Phase 2（1 周）：提示词工程

**任务**：
- [ ] 分析常见问题类型
- [ ] 设计 5 个预设提示词
- [ ] 测试提示词效果
- [ ] 迭代优化

**产出**：
- 预设提示词库
- 提示词测试报告

**工作量**：6-8 小时

---

### Phase 3（1 周）：安全规则

**任务**：
- [ ] 定义敏感话题列表
- [ ] 配置隐私过滤规则
- [ ] 实现安全检查模块
- [ ] 测试敏感问题响应

**产出**：
- 安全规则配置
- 隐私测试报告

**工作量**：6-8 小时

---

### Phase 4（1 周）：集成测试

**任务**：
- [ ] 集成所有模块
- [ ] 端到端测试
- [ ] 性能优化
- [ ] 编写用户文档

**产出**：
- 完整 Agent
- 用户手册
- 测试报告

**工作量**：6-8 小时

---

**总计**：4 周，24-32 小时

---

## 6. 测试计划

### 6.1 单元测试

```python
# test_qa.py
def test_benefits_qa():
    question = "公司的 401(k) 匹配比例是多少？"
    answer = agent.answer(question)
    
    assert answer is not None
    assert "来源" in answer
    assert "benefits_policy" in answer
```

---

### 6.2 隐私测试

```python
# test_privacy.py
def test_salary_question():
    question = "我的薪资是多少？"
    answer = agent.answer(question)
    
    assert "无法回答" in answer or "请联系 HR" in answer
```

---

### 6.3 集成测试

```python
# test_integration.py
def test_full_qa_workflow():
    questions = [
        "年假如何累积？",
        "晋升标准是什么？",
        "搬迁福利有哪些？"
    ]
    
    for q in questions:
        answer = agent.answer(q)
        assert answer is not None
        assert "来源" in answer
```

---

## 7. 风险与挑战

### 7.1 技术风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| **文档格式多样** | 中 | 高 | 支持多种格式，提供手动校正 |
| **政策更新频繁** | 中 | 中 | 建立更新机制，版本控制 |
| **敏感问题识别** | 高 | 中 | 建立敏感词库，人工审核 |

---

### 7.2 业务风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| **回答不准确** | 高 | 低 | 人工审核关键回答，提供反馈渠道 |
| **隐私泄露** | 高 | 低 | 严格隐私规则，不存储个人数据 |
| **过度依赖 AI** | 中 | 中 | 明确 AI 辅助定位，复杂问题引导 HR |

---

## 8. 成功指标

### 8.1 技术指标

- ✅ 问答准确率 > 90%
- ✅ 引用准确率 > 95%
- ✅ 响应时间 < 5 秒
- ✅ 隐私问题拦截率 100%

---

### 8.2 业务指标

- ✅ HR 咨询量减少 60%
- ✅ 员工满意度 > 4/5
- ✅ 平均响应时间 < 1 分钟
- ✅ HR 团队效率提升 30%

---

### 8.3 教学指标

- ✅ 学员完成率 > 80%
- ✅ 实验满意度 > 4/5
- ✅ 知识掌握度 > 85%

---

## 9. 下一步行动

### 立即可做

1. ✅ 保存设计规划到 `agent-designs/hr-self-service/`
2. ⏳ 准备示例 HR 政策文档
3. ⏳ 搭建基础框架

### 短期（1-2 周）

4. ⏳ 实现文档解析模块
5. ⏳ 实现知识检索模块
6. ⏳ 编写单元测试

### 中期（3-4 周）

7. ⏳ 实现安全检查模块
8. ⏳ 实现回答生成模块
9. ⏳ 端到端测试

### 长期（5-8 周）

10. ⏳ 编写实验手册
11. ⏳ 内部测试和优化
12. ⏳ 发布高阶课程

---

## 10. 附录

### A. 示例 HR 政策文档结构

**福利政策示例**：
```markdown
# 员工福利政策

## 1. 医疗保险
- 覆盖范围：员工 + 家属
- 公司承担比例：80%
- 生效日期：入职后 30 天

## 2. 401(k) 计划
- 公司匹配：前 6% 薪资的 50%
- 归属期：3 年（20%/年）
- 投资选项：10+ 基金

## 3. 带薪休假
- PTO 累积：每月 1.5 天
- 病假：每年 10 天
- 节假日：11 天法定假日
```

---

### B. 常见问题列表

```yaml
benefits_questions:
  - 公司的 401(k) 匹配比例是多少？
  - 医疗保险覆盖哪些项目？
  - 何时可以更改保险计划？

leave_questions:
  - 年假如何累积？
  - 病假需要提前多久申请？
  - PTO 可以结转到下一年吗？

promotion_questions:
  - 晋升的标准是什么？
  - 多久可以申请一次晋升？
  - 晋升后薪资调整幅度是多少？
```

---

**文档完成时间**：2026-03-07 23:10 UTC  
**版本**：v1.0  
**状态**：✅ 设计完成，待开发
