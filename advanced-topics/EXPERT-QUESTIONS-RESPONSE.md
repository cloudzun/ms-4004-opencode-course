# 专家组问题回复 - 开发团队详细反馈

**回复时间**：2026-03-09 01:00 UTC  
**回复者**：HuaQloud AI Architect (开发团队)  
**范围**：回答专家组 5 个问题 + 素材评估方法论应用

---

## Q1：M09 客服数据的 CSV 结构

### ✅ 数据结构详情

**文件位置**：`M09-customer-service/materials/support_cases_90days.xlsx`

**列名（8 列）**：
```python
[
    'Customer',              # 客户名称（字符串）
    'Case ID',               # 案例 ID（字符串，如 TR-3000）
    'Date Opened',           # 打开日期（字符串）
    'Issue Type',            # 问题类型（字符串，已预分类）✅
    'Module',                # 模块（字符串）
    'Severity',              # 严重程度（字符串，如 High/Medium/Low）
    'Resolution Time (hrs)', # 解决时间（小时，浮点数）
    'Escalated'              # 是否升级（字符串，Yes/No）
]
```

**前 5 行样本**：
```
Customer      | Case ID | Date Opened | Issue Type | Module | Severity | Resolution Time (hrs) | Escalated
Trey Research | TR-3000 | 2025-12-01  | Bug        | Billing| High     | 12.8                  | Yes
Trey Research | TR-3001 | 2025-12-02  | Feature    | API    | Medium   | 6.7                   | Yes
Trey Research | TR-3002 | 2025-12-03  | Bug        | UI     | Low      | 9.6                   | Yes
Trey Research | TR-3003 | 2025-12-04  | Question   | Docs   | Medium   | 6.9                   | No
Trey Research | TR-3004 | 2025-12-05  | Bug        | Core   | Low      | 1.8                   | No
```

**数据类型**：
- Customer: str
- Case ID: str
- Date Opened: str (ISO 格式：YYYY-MM-DD)
- Issue Type: str (**已预分类** ✅)
- Module: str
- Severity: str (High/Medium/Low)
- Resolution Time (hrs): float64
- Escalated: str (Yes/No)

---

### ⚠️ 关键发现

| 字段 | 状态 | 说明 |
|------|------|------|
| **satisfaction_score** | ❌ **不存在** | 无满意度评分字段 |
| **category** | ✅ **已预分类** | Issue Type 列即为分类（Bug/Feature/Question 等） |
| **情绪分析素材** | ⚠️ **缺失** | 无客户反馈文本，无法做情绪分析 |

---

### 🎯 对 Part 3 设计的影响

**原方案**：
```
读取 CSV → 提取 Top 3 问题 → 总结客户情绪 → 生成 Markdown 周报
```

**调整后方案**（基于实际数据结构）：
```
读取 Excel → 按 Issue Type 聚合 → 计算 Top 3 问题类型 → 
分析 Severity 分布 → 计算平均解决时间 → 生成 Markdown 周报
```

**分析逻辑调整**：
1. ❌ **无法做**：满意度精确计算（无评分字段）
2. ❌ **无法做**：客户情绪总结（无反饋文本）
3. ✅ **可以做**：
   - Top 3 问题类型（按 Case ID 计数）
   - Severity 分布（High/Medium/Low 占比）
   - 平均解决时间（按 Issue Type 分组）
   - 升级率分析（Escalated=Yes 的比例）

**建议 Lab 手册调整**：
```markdown
原技能：summary_skill.md（计算满意度公式）
调整为：analysis_skill.md（基于聚合统计的分析）

分析指标：
1. Top 3 问题类型（按案例数量排序）
2. 严重程度分布（High/Medium/Low 百分比）
3. 平均解决时间（按问题类型）
4. 升级率（升级案例/总案例）
```

---

## Q2：OpenClaw 的 Agent 配置方式

### ✅ 当前版本 OpenClaw 配置详解

**版本信息**：
- OpenClaw 版本：基于配置文件 `~/.openclaw/openclaw.json`
- 会话管理：基于 sessions_spawn API
- 定时任务：内置 cron 调度器

---

### 2.1 创建 Agent 的方式

**当前支持的方式**：

#### 方式 A： sessions_spawn API（推荐）
```python
# 通过 API 调用
POST /sessions/spawn
{
  "runtime": "subagent",
  "task": "你的提示词",
  "mode": "run"  # 或 "session"（持久会话）
}
```

**实际操作**：
```bash
# 命令行调用（通过 curl 或 Python SDK）
curl -X POST http://localhost:PORT/sessions/spawn \
  -H "Content-Type: application/json" \
  -d '{"runtime":"subagent","task":"分析客服数据","mode":"run"}'
```

#### 方式 B：Discord/Telegram 消息触发
```
用户在 Discord 发送消息 → OpenClaw 接收 → 自动 spawn subagent
```

**实际操作**：
```
用户在 Discord #ms-4004-transfer 频道发送：
"请分析 M09 的客服数据，生成周报"

→ OpenClaw 自动调用 sessions_spawn
→ 返回分析结果
```

#### 方式 C：cron 定时任务触发
```yaml
# ~/.openclaw/cron/jobs.json
{
  "id": "job-id",
  "schedule": {"kind": "cron", "expr": "0 17 * * FRI"},  # 每周五 17:00
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "分析客服数据，生成周报"
  }
}
```

---

### 2.2 "绑定 Skill" 的操作

**OpenClaw 无"skill 挂载"概念**，替代方案：

#### 方案 A：提示词模板（推荐）
```markdown
# 在 Agent 配置文件中定义
# agent_customer_service.yaml

name: Customer Service Analyst
description: 分析客服数据，生成周报

prompt_template: |
  你是一个客户体验洞察官。
  
  请读取以下文件并分析：
  - 文件：M09-customer-service/materials/support_cases_90days.xlsx
  
  分析步骤：
  1. 按 Issue Type 聚合，找出 Top 3 问题
  2. 计算 Severity 分布
  3. 计算平均解决时间
  4. 生成 Markdown 周报
  
  输出格式：Markdown，包含表格和图表建议。
```

**实际操作**：
1. 编写 YAML 配置文件（如上）
2. 在 sessions_spawn 时读取配置文件
3. 将 prompt_template 作为 task 参数传递

#### 方案 B：SKILL.md 文件（概念性）
```markdown
# skills/analysis_skill.md

## 角色
客户体验洞察官

## 输入
- support_cases_90days.xlsx

## 处理逻辑
1. 读取 Excel
2. 按 Issue Type 分组计数
3. 排序取 Top 3
4. 计算平均解决时间

## 输出
Markdown 周报
```

**实际操作**：
1. 编写 SKILL.md 文件
2. 在 sessions_spawn 时读取 SKILL.md 内容
3. 将内容作为 task 参数传递

**注意**：OpenClaw 本身不解析 SKILL.md，这只是文档组织方式。

---

### 2.3 定时任务的触发方式

**OpenClaw 内置 cron 调度器**：

#### 配置方式
```bash
# 查看 cron 状态
openclaw cron status

# 添加定时任务
openclaw cron add --schedule "0 17 * * FRI" \
  --message "分析客服数据，生成周报" \
  --target isolated
```

#### 触发机制
1. **内置 cron**：OpenClaw 启动时加载 cron 调度器
2. **定时触发**：到时间后自动调用 sessions_spawn
3. **结果交付**：
   - announce 模式：发送到 Discord 频道
   - webhook 模式：HTTP POST 到指定 URL

#### 实际操作示例
```json
// ~/.openclaw/cron/jobs.json
{
  "id": "customer-service-weekly",
  "name": "Customer Service Weekly Report",
  "schedule": {
    "kind": "cron",
    "expr": "0 17 * * FRI"  // 每周五 17:00 UTC
  },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "读取 M09-customer-service/materials/support_cases_90days.xlsx，生成周报"
  },
  "delivery": {
    "mode": "announce",
    "channel": "discord",
    "to": "1479381194343710792"
  }
}
```

**添加命令**：
```bash
openclaw cron add --job customer-service-weekly.json
```

---

### 📋 总结：OpenClaw 配置方式

| 操作 | 实际方式 | 界面/工具 |
|------|---------|----------|
| **创建 Agent** | sessions_spawn API | 命令行 / Discord 消息 |
| **绑定 Skill** | 提示词模板（YAML/Markdown） | 编写配置文件 |
| **定时任务** | OpenClaw cron 调度器 | `openclaw cron add` 命令 |
| **交付结果** | announce 模式（Discord） | 自动发送到频道 |

**无 Web GUI**，主要通过：
- 命令行工具（`openclaw` CLI）
- 配置文件（YAML/JSON）
- Discord/Telegram 消息交互

---

## Q3：RFP 场景的实际运行效果

### ✅ 最简版本试跑计划

**任务**：
1. 读取 `VanArsdel_RFP.docx` → 提取问题列表
2. 用关键词在 5 个产品文档中检索答案
3. 生成一份简单的响应文档

---

### 现有素材检查

**RFP 文件**：
```
M02-sales/materials/VanArsdel_RFP.docx ✅
```

**产品知识库（5 个文档）**：
```
M02-sales/materials/EcoSense_360_Technical_Specifications.docx ✅
M02-sales/materials/EcoSense_360_Customer_Case_Study.docx ✅
M02-sales/materials/EcoSense_360_Sample_Pricing_Sheet.docx ✅
M2-sales/materials/EcoSense_360_Integration_Compatibility_Guide.docx ✅
M02-sales/materials/EcoSense_360_Compliance_Certification_Summary.docx ✅
```

**模板/历史数据**：
```
M02-sales/materials/Fabrikam_Historical_RFP_Data.xlsx ✅
```

---

### 试跑计划

**步骤 1：RFP 问题提取（预计 2-3h）**
```python
from docx import Document

doc = Document('VanArsdel_RFP.docx')
questions = []
for para in doc.paragraphs:
    if '?' in para.text or para.style.name == 'Heading':
        questions.append(para.text)
        
print(f"提取到 {len(questions)} 个问题")
```

**步骤 2：关键词检索（预计 3-4h）**
```python
# 简单关键词检索
def search_knowledge_base(question, docs):
    keywords = extract_keywords(question)
    results = []
    for doc in docs:
        for keyword in keywords:
            if keyword in doc.text:
                results.append(doc.text)
    return results
```

**步骤 3：生成响应文档（预计 3-4h）**
```python
from docx import Document

response = Document()
for q, a in zip(questions, answers):
    response.add_heading(q, level=1)
    response.add_paragraph(a)
response.save('rfp_response.docx')
```

---

### 预期反馈（基于经验）

| 项目 | 预期结果 |
|------|---------|
| **跑通时间** | 8-12 小时（首次实现） |
| **主要卡点** | 1. RFP 格式解析（需处理表格）<br>2. 关键词检索准确性<br>3. 答案组织和引用管理 |
| **产出质量** | 基础版：60-70% 准确率<br>优化版：80-85% 准确率（需人工审核） |

---

### 建议

**立即执行试跑**，反馈以下信息：
1. 实际跑通时间
2. RFP 问题提取的准确率
3. 关键词检索的召回率和准确率
4. 生成文档的可直接用程度

**试跑结果将决定**：
- Lab 手册的详细步骤
- 是否需要额外的预处理逻辑
- 工作量估算是否需要调整

---

## Q4：合同样本的替代方案

### ✅ 现有合同文档检查

**M05 合同**：
```
M05-finance/materials/vendor_contract_a.docx ✅
M05-finance/materials/vendor_contract_b.docx ✅
```

**M10 合同**：
```
M10-legal/materials/Tailwind_Traders_Supplier_Agreement.docx ✅
```

**总计**：3 份合同（还差 2-5 份）

---

### 替代方案

#### 方案 A：AI 生成模拟合同（推荐）
**可行性**：✅ 完全可行  
**工作量**：2-3 小时  
**质量**：教学演示足够

**生成方法**：
```python
# 使用 AI 生成 3 份模拟合同
contracts = [
    {
        "name": "tech_services_contract.docx",
        "risk_level": "Low",
        "clauses": {
            "payment_terms": "Net 30",
            "penalty": "5% of contract value",
            "warranty": "12 months"
        }
    },
    {
        "name": "construction_contract.docx",
        "risk_level": "Medium",
        "clauses": {
            "payment_terms": "Net 60",
            "penalty": "15% of contract value",
            "warranty": "24 months"
        }
    },
    {
        "name": "software_license_contract.docx",
        "risk_level": "High",
        "clauses": {
            "payment_terms": "Upfront",
            "penalty": "30% of contract value",
            "warranty": "3 months"
        }
    }
]
```

**生成步骤**：
1. 定义合同模板（条款结构）
2. 使用 AI 生成具体内容
3. 用 python-docx 生成 Word 文档
4. 保存到 materials 目录

---

#### 方案 B：复用 MS-4004 其他模块
**检查结果**：
- M05：2 份供应商合同（已有）
- M10：1 份供应商协议（已有）
- 其他模块：❌ 无合同文档

**结论**：无法复用更多，需 AI 生成。

---

#### 方案 C：使用真实合同（需脱敏）
**可行性**：⚠️ 需法律审核  
**工作量**：不确定  
**风险**：法律风险

**不建议**，除非有现成脱敏合同。

---

### 🎯 推荐方案

**AI 生成 3 份模拟合同**：
- 工作量：2-3 小时
- 风险：无
- 质量：教学演示足够
- 可控制风险等级（Low/Medium/High）

---

## Q5：HR 场景的降级方案评估

### 原方案 vs 降级方案

| 功能 | 原方案 | 降级方案 |
|------|-------|---------|
| **政策问答** | ✅ 包含 | ✅ 保留 |
| **假期计算** | ✅ 包含 | ❌ 移除 |
| **意图判断** | ✅ 包含 | ✅ 简化（只有政策问答） |
| **多轮对话** | ✅ 包含 | ✅ 保留 |

---

### 降级方案评估

#### 功能范围
```
HR Policy QA Agent
├─ 输入：用户问题（如"年假有多少天？"）
├─ 处理：
│   ├─ 读取 HR 政策文档（6 个 Word 文档）
│   └─ 关键词检索 + AI 理解
└─ 输出：答案（Markdown 或 Word）
```

#### 素材检查
**现有 HR 政策文档（6 个）**：
```
M06-hr/materials/benefits_policy.docx ✅
M06-hr/materials/promotion_policy.docx ✅
M06-hr/materials/leave_policy.docx ✅  ← 核心文档
M06-hr/materials/code_of_conduct.docx ✅
M06-hr/materials/remote_work_policy.docx ✅
M06-hr/materials/relocation_policy.docx ✅
```

**素材充足度**：✅ 100%（无需补充）

---

### 工作量重新评估

| 阶段 | 原方案 | 降级方案 | 变化 |
|------|-------|---------|------|
| **政策文档索引** | 6-8h | 6-8h | 不变 |
| **假期计算逻辑** | 4-6h | 0h | ✅ 节省 4-6h |
| **意图判断** | 4-5h | 2-3h | ✅ 节省 2-3h |
| **QA 库建设** | 6-8h | 4-6h | ✅ 节省 2h |
| **多轮对话** | 4-6h | 3-4h | ✅ 节省 1-2h |
| **测试验证** | 4-5h | 3-4h | ✅ 节省 1h |
| **总计** | **28-38h** | **18-27h** | ✅ **节省 10h** |

---

### 可行性重新评估

| 维度 | 原方案 | 降级方案 | 变化 |
|------|-------|---------|------|
| **技术可行性** | 65% | 85% | ✅ +20% |
| **素材充足度** | 50% | 100% | ✅ +50% |
| **工作量** | 29-41h | 18-27h | ✅ -10h |
| **风险等级** | 🟠 中高 | 🟡 中 | ✅ 降低 |
| **商业价值** | 8/10 | 7/10 | ⚠️ -1 |

---

### 🎯 推荐

**采用降级方案**：
- ✅ 可行性从 65% 提升到 85%
- ✅ 工作量减少 10 小时
- ✅ 素材 100% 充足
- ⚠️ 商业价值略降（7/10 vs 8/10）

**Lab 手册调整**：
```markdown
原 Lab 4：HR Self-Service Assistant（政策问答 + 假期计算）
调整为：HR Policy QA Agent（仅政策问答）

功能：
- 读取 6 个 HR 政策文档
- 回答员工常见问题
- 支持多轮对话

移除：
- 假期余额计算
- 员工数据读取
```

---

# 📊 素材评估方法论应用

## Step 1：列出每个 Lab 的输入文件需求

### Lab 1：Customer Service Analyst
```
├── 步骤 1：读取客服数据 → support_cases_90days.xlsx ✅
├── 步骤 2：按 Issue Type 聚合 → （无需额外文件）✅
├── 步骤 3：生成 Markdown 周报 → （无需额外文件）✅
└── 结论：素材 100% ✅
```

### Lab 2：RFP Response Agent
```
├── 步骤 1：读取 RFP → VanArsdel_RFP.docx ✅
├── 步骤 2：检索产品知识 → 5 个产品文档 ✅
├── 步骤 3：生成响应文档 → Fabrikam_Historical_RFP_Data.xlsx ✅
└── 结论：素材 100% ✅
```

### Lab 3：Facility Expansion Planner
```
├── 步骤 1：输入项目目标 → （用户输入）✅
├── 步骤 2：生成 WBS → （需历史 WBS 样本）⚠️ 缺失
├── 步骤 3：风险预测 → （需风险库）⚠️ 缺失
├── 步骤 4：生成甘特图数据 → （需模板）⚠️ 缺失
└── 结论：素材 50% ⚠️
```

### Lab 4：Contract Reviewer
```
├── 步骤 1：读取合同 → 3 份合同 ✅
├── 步骤 2：提取条款 → （无需额外文件）✅
├── 步骤 3：风险评估 → （需风险规则集）⚠️ 缺失
├── 步骤 4：生成对比表 → （需模板）⚠️ 缺失
└── 结论：素材 60% ⚠️
```

### Lab 5：HR Policy QA Agent（降级版）
```
├── 步骤 1：读取 HR 政策 → 6 个政策文档 ✅
├── 步骤 2：构建 QA 索引 → （可 AI 生成）✅
├── 步骤 3：回答用户问题 → （无需额外文件）✅
└── 结论：素材 100% ✅
```

---

## Step 2：判断缺失文件能否 AI 生成

| 缺失文件 | 能否 AI 生成 | 预计时间 | 备注 |
|---------|-------------|---------|------|
| **历史 WBS 样本** | ✅ 能 | 2-3h | AI 生成 3-5 个示例 |
| **风险库** | ✅ 能 | 2-3h | AI 生成常见风险列表 |
| **甘特图模板** | ✅ 能 | 1-2h | Excel 模板设计 |
| **风险规则集** | ✅ 能 | 2-3h | AI 生成评估规则 |
| **合同样本（额外 2 份）** | ✅ 能 | 2-3h | AI 生成模拟合同 |
| **QA 库（HR）** | ✅ 能 | 2-3h | AI 从政策文档提取 |

**结论**：所有缺失文件都可以 AI 生成，无硬依赖！

---

## Step 3：计算"可教学最小版本"

| Lab | 现有素材 | 可教学最小版本 | 需补充 |
|-----|---------|---------------|--------|
| **Customer Service** | 100% | Top 3 问题 + 统计周报 | 无 |
| **RFP Response** | 100% | 基础响应文档生成 | 无 |
| **Facility Expansion** | 50% | WBS 生成（无风险预测） | WBS 样本、风险库 |
| **Contract Reviewer** | 60% | 条款提取（无风险评估） | 风险规则集、合同样本 |
| **HR Policy QA** | 100% | 政策问答 | 无（降级后） |

---

# 🎯 最终建议

## 开发顺序（基于素材充足度）

```
第 1 阶段：RFP Response Agent ⭐
├─ 素材：100%
├─ 可行性：80%
├─ 商业价值：10/10
└─ 工作量：30-41h

第 2 阶段：Customer Service Analyst ⭐
├─ 素材：100%
├─ 可行性：85%
├─ 商业价值：8/10
└─ 工作量：16-22h

第 3 阶段：HR Policy QA Agent（降级版）⭐
├─ 素材：100%
├─ 可行性：85%
├─ 商业价值：7/10
└─ 工作量：18-27h

第 4 阶段：Facility Expansion Planner
├─ 素材：50%（需 AI 生成补充）
├─ 可行性：90%
├─ 商业价值：7/10
└─ 工作量：21-29h

第 5 阶段：Contract Reviewer
├─ 素材：60%（需 AI 生成补充）
├─ 可行性：75%
├─ 商业价值：10/10
└─ 工作量：27-37h
```

---

## 关键调整

1. **Part 3（Customer Service）**：
   - 移除"客户情绪分析"（无文本数据）
   - 改为"统计指标分析"（Top 3 问题、Severity 分布、平均解决时间）

2. **HR 场景**：
   - 降级为"HR Policy QA Agent"
   - 移除假期计算功能
   - 可行性从 65% 提升到 85%

3. **Contract Reviewer**：
   - AI 生成 2-3 份模拟合同
   - AI 生成风险规则集
   - 工作量增加 4-6h（素材生成）

---

**回复完成时间**：2026-03-09 01:00 UTC  
**下一步**：等待专家组确认调整方案，开始第 1 阶段开发
