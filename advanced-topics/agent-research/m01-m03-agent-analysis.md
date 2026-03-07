# M01-M03 Agent 功能分析报告

**版本**: v1.0  
**完成时间**: 2026-03-07 09:15 UTC  
**用途**: 高阶 OpenCode 课程开发参考

---

## 1. M01 高管场景：Business Insights Agent

### 1.1 Agent 信息

| 项目 | 内容 |
|------|------|
| **Agent 名称** | Northwind Business Insights Agent |
| **目标用户** | 企业高管 |
| **核心功能** | 监控业务指标、提供洞察、预警风险 |
| **知识源** | Q3 Executive Briefing.docx, Q4 Budget Forecast.xlsx |
| **实验编号** | Task 11-12 |

---

### 1.2 Agent 配置

**创建提示词**：
```
Create an agent titled Northwind Business Insights Agent. 
The purpose of this agent is to provide responses to questions related to 
Northwind Traders' Sales performance, Supply chain health, Customer sentiment, 
and Results compared to the Q4 budget forecast. 
The agent should only use the files assigned to it as knowledge sources. 
The agent is intended for an executive audience.
```

**核心指令**：
- Flag missing or incomplete information
- Never invent data or rely on sources outside the defined knowledge source documents
- Stay within the Northwind Traders' business context

**预设提示词**（6 个）：

| 标题 | 提示词 |
|------|--------|
| **Top risks** | What are the top risks to meeting our Q4 revenue forecast? |
| **Customer sentiment trends** | Summarize customer sentiment trends from the latest reports. |
| **Budget vs. Sales** | Compare actual sales performance to the Q4 budget forecast. |
| **Bottlenecks** | Identify supply chain bottlenecks that could affect Q4 delivery timelines. |
| **Top performing product categories** | Highlight the top-performing product categories based on recent sales data. |
| **Emerging market trends** | What emerging market trends should we watch for in the next quarter? |

---

### 1.3 OpenCode 实现方案

#### 配置文件

```yaml
# agent_business_insights.yaml
name: Business Insights Agent
description: 为高管提供业务洞察和预警
version: 1.0

capabilities:
  - document_read: 读取 Word/Excel 报告
  - data_analysis: 分析销售数据和预算对比
  - risk_detection: 识别业务风险
  - report_generation: 生成高管简报

knowledge_sources:
  - Q3_Executive_Briefing.docx
  - Q4_Budget_Forecast.xlsx

presets:
  - name: top_risks
    prompt: |
      请分析以下文件，识别影响 Q4 收入预测的主要风险：
      - Q3_Executive_Briefing.docx
      - Q4_Budget_Forecast.xlsx
      
      要求：
      1. 列出 3-5 个顶级风险
      2. 每个风险说明影响程度（高/中/低）
      3. 提供缓解建议
      
      格式：Word 文档，高管风格。
      
  - name: budget_vs_sales
    prompt: |
      请对比实际销售表现与 Q4 预算预测：
      - 计算差异百分比
      - 识别超出/低于预期的产品类别
      - 分析原因
      
      格式：Excel 报告，包含图表。
      
  - name: supply_chain_bottlenecks
    prompt: |
      请识别可能影响 Q4 交付的供应链瓶颈：
      - 列出关键瓶颈
      - 评估影响程度
      - 提供替代方案
      
      格式：Word 文档，包含行动建议。

output_formats:
  - docx: 高管简报
  - xlsx: 数据分析报告
```

---

### 1.4 教学价值

| 维度 | 评估 |
|------|------|
| **概念复杂度** | ⭐⭐ 中等（适合入门） |
| **技术难度** | ⭐⭐ 中等（文件读取 + 数据分析） |
| **业务价值** | ⭐⭐⭐⭐ 高（高管决策支持） |
| **可扩展性** | ⭐⭐⭐⭐ 高（可添加实时监控） |

---

## 2. M02 销售场景：RFP Response Agent

### 2.1 Agent 信息

| 项目 | 内容 |
|------|------|
| **Agent 名称** | EcoSense 360 RFP Response Agent |
| **目标用户** | 销售团队 |
| **核心功能** | 自动回答 RFP 问题、生成投标响应 |
| **知识源** | 5 个产品文档（技术规格、案例、定价等） |
| **实验编号** | Task 10-12 |

---

### 2.2 Agent 配置

**创建提示词**：
```
Create an agent titled EcoSense 360 RFP Response Agent. 
The purpose of this agent is to provide the Sales team with answers to questions 
related to customer sales proposals. It should also be able to generate a complete, 
customer-ready response to customer RFPs for the EcoSense 360 energy management solution. 
For knowledge sources, the agent should only use the documents stored in the 
EcoSense360-RFP-Documents folder. 
RFP responses should be based on the template file titled: EcoSense_360_RFP_Template.dotx.
```

**核心指令**：
- Responses must follow the RFP's formatting rules, include tables for compliance and pricing
- Maintain a professional, customer-focused tone
- Ensure responses are formatted for clarity with short labels and bullet points
- Cite sources for every answer
- Flag missing information

**预设提示词**（6 个）：

| 标题 | 提示词 |
|------|--------|
| **Product overview and benefits** | Provide a product overview and list of benefits. |
| **Competitor differentiation** | Provide a one-page summary of differentiators compared to competitors. |
| **Product integration** | Explain how the product integrates with existing hotel management systems. |
| **Product integration (HVAC)** | How does the EcoSense 360 integrate with HVAC and lighting systems? |
| **Energy savings** | What energy savings can customers expect? |
| **Implementation timeline** | What is the typical implementation timeline? |

---

### 2.3 OpenCode 实现方案

#### 配置文件

```yaml
# agent_rfp_response.yaml
name: RFP Response Agent
description: 自动生成 RFP 投标响应文档
version: 1.0

capabilities:
  - document_read: 读取产品文档和 RFP 文件
  - compliance_check: 检查 RFP 合规性
  - response_generation: 生成投标响应
  - citation_management: 管理引用来源

knowledge_sources:
  - EcoSense_360_Technical_Specifications.docx
  - EcoSense_360_Customer_Case_Study.docx
  - EcoSense_360_Sample_Pricing_Sheet.docx
  - EcoSense_360_Integration_Compatibility_Guide.docx
  - EcoSense_360_Compliance_Certification_Summary.docx

templates:
  - EcoSense_360_RFP_Template.dotx

presets:
  - name: rfp_overview
    prompt: |
      请根据以下 RFP 文件，生成产品概述和优势说明：
      - RFP 文件：{rfp_file}
      - 产品文档：EcoSense_360_Technical_Specifications.docx
      
      要求：
      1. 产品概述（300-500 字）
      2. 核心优势（5-7 个要点）
      3. 引用来源标注
      
      格式：Word 文档，专业商务风格。
      
  - name: compliance_matrix
    prompt: |
      请创建 RFP 合规矩阵表：
      - 列出所有技术要求
      - 标注合规状态（完全合规/部分合规/不合规）
      - 提供说明和引用
      
      格式：Excel 表格，包含筛选和排序功能。
      
  - name: pricing_response
    prompt: |
      请根据 RFP 要求生成定价响应：
      - 参考定价表：EcoSense_360_Sample_Pricing_Sheet.docx
      - 按 RFP 格式组织
      - 包含折扣和条款说明
      
      格式：Word 文档，包含表格。

output_formats:
  - docx: RFP 响应文档
  - xlsx: 合规矩阵表
```

---

### 2.4 教学价值

| 维度 | 评估 |
|------|------|
| **概念复杂度** | ⭐⭐⭐ 中高（涉及多文档整合） |
| **技术难度** | ⭐⭐⭐ 中等（文档解析 + 模板填充） |
| **业务价值** | ⭐⭐⭐⭐⭐ 极高（直接支持销售） |
| **可扩展性** | ⭐⭐⭐⭐ 高（可添加自动提交） |

---

## 3. M03 IT 场景：Surveys Agent + Analyst Agent

### 3.1 Agent 信息

| 项目 | Surveys Agent | Analyst Agent |
|------|--------------|---------------|
| **目标用户** | IT 团队 | IT 管理层 |
| **核心功能** | 创建反馈调查 | 分析调查结果 |
| **知识源** | 新功能文档 | 调查数据 |
| **实验编号** | Task 10 | Task 11 |

---

### 3.2 Surveys Agent 配置

**功能描述**：
- 设计调查问卷（8 个问题：5 个量化 + 3 个开放）
- 定义分支逻辑（根据回答跳转问题）
- 生成 Microsoft Forms 格式

**预设提示词**：
```
Create a new survey that captures feedback on VanArsdel's employee experience 
with the new Microsoft 365 features.

Requirements:
- One-sentence introduction
- 8 questions: 5 quantitative (Likert scales, multiple choice) + 3 open-text
- Branching rules: If "No" to adoption questions → follow-up open-text question
- One demographic question (department)
- Text explanations for all Likert scale options (1-5)
```

---

### 3.3 Analyst Agent 配置

**功能描述**：
- 分析调查结果
- 识别趋势和模式
- 生成改进建议

**预设提示词**：
```
Analyze the survey results and provide insights on:
1. Overall satisfaction score
2. Feature adoption rates
3. Top pain points
4. Department-level differences
5. Recommended actions

Format: PowerPoint presentation with charts and key findings.
```

---

### 3.4 OpenCode 实现方案

#### 配置文件

```yaml
# agent_surveys.yaml
name: Surveys Agent
description: 设计和生成反馈调查问卷
version: 1.0

capabilities:
  - survey_design: 设计问卷结构
  - question_generation: 生成问题（量化 + 开放）
  - branching_logic: 定义跳转逻辑
  - forms_export: 导出为 Microsoft Forms 格式

presets:
  - name: create_survey
    prompt: |
      请设计一份员工反馈调查问卷：
      
      要求：
      - 简介：1 句话
      - 问题：8 个（5 个量化 + 3 个开放）
      - 量化问题：Likert 量表（1-5，带文字说明）
      - 开放问题：收集具体反馈
      - 分支逻辑：如果回答"否"→追问原因
      - 人口统计问题：部门
      
      输出：Markdown 格式，可直接导入 Microsoft Forms。
      
  - name: analyze_responses
    prompt: |
      请分析以下调查回复：
      - 文件：survey_responses.xlsx
      - 计算满意度分数
      - 识别主要趋势
      - 列出改进行议
      
      输出：Word 报告 + Excel 分析表。

output_formats:
  - md: 调查问卷（可导入 Forms）
  - xlsx: 回复数据
  - docx: 分析报告
```

---

### 3.5 教学价值

| 维度 | Surveys Agent | Analyst Agent |
|------|--------------|---------------|
| **概念复杂度** | ⭐⭐ 中等 | ⭐⭐⭐ 中高 |
| **技术难度** | ⭐⭐ 中等 | ⭐⭐⭐ 中等 |
| **业务价值** | ⭐⭐⭐ 高 | ⭐⭐⭐⭐ 高 |
| **可扩展性** | ⭐⭐⭐ 中等 | ⭐⭐⭐⭐ 高 |

---

## 4. 综合对比分析

### 4.1 Agent 功能对比

| 模块 | Agent 名称 | 核心功能 | 知识源 | 输出格式 | 难度 |
|------|-----------|---------|--------|---------|------|
| **M01** | Business Insights | 业务监控 + 风险预警 | 2 个文件 | docx/xlsx | ⭐⭐ |
| **M02** | RFP Response | RFP 自动响应 | 5 个文件 + 模板 | docx/xlsx | ⭐⭐⭐ |
| **M03** | Surveys | 调查问卷设计 | 1 个文件 | md/forms | ⭐⭐ |
| **M03** | Analyst | 调查数据分析 | 调查数据 | docx/xlsx/pptx | ⭐⭐⭐ |
| **M04** | Market Research | 市场研究 | 网络 + 文件 | docx/xlsx/pptx | ⭐⭐⭐ |
| **M04** | Analyst | 战略建议 | 市场报告 | pptx/pdf | ⭐⭐⭐⭐ |

---

### 4.2 技术共性

| 能力 | M01 | M02 | M03 | M04 |
|------|-----|-----|-----|-----|
| **文件读取** | ✅ | ✅ | ✅ | ✅ |
| **文件生成** | ✅ | ✅ | ✅ | ✅ |
| **数据分析** | ✅ | ✅ | ✅ | ✅ |
| **网络搜索** | ❌ | ❌ | ❌ | ✅ |
| **模板填充** | ❌ | ✅ | ❌ | ❌ |
| **多轮对话** | ✅ | ✅ | ✅ | ✅ |
| **预设提示词** | ✅ | ✅ | ✅ | ✅ |

---

### 4.3 教学路径建议

#### 入门级（M01）
**目标**：理解 Agent 基本概念

**实验**：
1. 定义 Agent 角色和能力
2. 配置知识源文件
3. 设计预设提示词
4. 测试简单查询

**产出**：Business Insights Agent 原型

---

#### 进阶级（M02 + M03）
**目标**：掌握复杂 Agent 设计

**实验**：
1. 多文档整合（M02 RFP Response）
2. 模板填充和格式化
3. 调查问卷设计（M03 Surveys）
4. 数据分析可视化（M03 Analyst）

**产出**：RFP Response Agent + Surveys Agent

---

#### 高级（M04）
**目标**：实现多 Agent 协作

**实验**：
1. 网络搜索集成（M04 Market Research）
2. 多 Agent 任务传递
3. 战略报告生成
4. PPT 演示文稿自动化

**产出**：Market Research + Analyst 协作系统

---

## 5. 推荐开发优先级

### Phase 1（1-2 周）：M01 Business Insights Agent
**理由**：
- ✅ 最简单（2 个文件，基础分析）
- ✅ 高管场景，业务价值高
- ✅ 可复用 M01 现有材料

**工作量**：8-12 小时

---

### Phase 2（2-3 周）：M03 Surveys + Analyst Agents
**理由**：
- ✅ 两个 Agent 可独立开发
- ✅ 调查场景通用性强
- ✅ 可演示多 Agent 协作

**工作量**：16-24 小时

---

### Phase 3（3-4 周）：M02 RFP Response Agent
**理由**：
- ✅ 销售场景，商业价值最高
- ✅ 涉及模板填充，技术挑战适中
- ✅ 可作为毕业设计项目

**工作量**：24-32 小时

---

### Phase 4（4-6 周）：M04 Market Research + Analyst
**理由**：
- ✅ 最复杂（网络搜索 + 多 Agent）
- ✅ 综合所有技能
- ✅ 适合作为高级课程

**工作量**：40-60 小时

---

## 6. 示例代码库结构

```
advanced-topics/
└── agent-research/
    ├── feasibility-analysis.md          # 可行性分析报告
    ├── m01-m03-agent-analysis.md        # 本文件
    ├── agents/
    │   ├── business-insights/
    │   │   ├── agent.yaml
    │   │   ├── presets.yaml
    │   │   └── examples/
    │   ├── rfp-response/
    │   │   ├── agent.yaml
    │   │   ├── presets.yaml
    │   │   └── templates/
    │   ├── surveys/
    │   │   ├── agent.yaml
    │   │   └── presets.yaml
    │   └── market-research/
    │       ├── agent.yaml
    │       └── presets.yaml
    ├── experiments/
    │   ├── m01-business-insights/
    │   ├── m02-rfp-response/
    │   ├── m03-surveys-analyst/
    │   └── m04-market-research/
    └── docs/
        ├── agent-design-guide.md
        ├── preset-prompt-templates.md
        └── multi-agent-collaboration.md
```

---

## 7. 总结

### 可用 Agent 素材汇总

| 模块 | Agent 数量 | 实验数量 | 推荐优先级 |
|------|-----------|---------|-----------|
| **M01** | 1 个 | 2 个 | ⭐⭐⭐ 高 |
| **M02** | 1 个 | 3 个 | ⭐⭐ 中 |
| **M03** | 2 个 | 2 个 | ⭐⭐⭐⭐ 最高 |
| **M04** | 2 个 | 3 个 | ⭐⭐⭐ 高 |
| **总计** | **6 个** | **10 个** | - |

---

### 关键发现

1. **每个模块都有 Agent 相关实验**：M01-M04 都包含至少 1 个 Agent 创建/使用实验
2. **功能递进清晰**：从简单查询（M01）到复杂协作（M04）
3. **技术可复用**：文件处理、数据分析、报告生成等能力可跨模块复用
4. **业务场景丰富**：高管、销售、IT、市场，覆盖多个职业角色

---

### 下一步行动

1. ✅ 保存分析报告到 `advanced-topics/agent-research/`
2. ⏳ 选择 Phase 1（M01 Business Insights）开始开发
3. ⏳ 创建 Agent 配置文件模板
4. ⏳ 编写实验手册初稿
5. ⏳ 内部测试和优化

---

**报告完成时间**：2026-03-07 09:15 UTC  
**版本**：v1.0
