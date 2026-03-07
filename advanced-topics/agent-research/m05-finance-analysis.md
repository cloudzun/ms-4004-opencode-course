# M05 财务场景分析报告

**版本**: v1.0  
**完成时间**: 2026-03-07 09:30 UTC  
**用途**: 区分基础课程 vs 高阶课程内容

---

## 1. M05 原版实验总览

| 实验编号 | 实验名称 | 核心技能 | 涉及工具 | 难度 |
|---------|---------|---------|---------|------|
| **Task 1-2** | Excel 分析新产品线 COGS | 数据分析、趋势识别 | Excel Copilot | ⭐⭐ |
| **Task 3-4** | Teams 总结会议笔记 | 会议纪要、行动项提取 | Teams Copilot | ⭐ |
| **Task 5** | Chat 分析潜在收购 | 战略分析、风险评估 | Copilot Chat | ⭐⭐⭐ |
| **Task 6** | Excel 建模场景分析 | What-if 分析、财务建模 | Excel Copilot | ⭐⭐⭐ |
| **Task 7-8** | Chat 评估供应商合同 | 合同对比、风险识别 | Copilot Chat | ⭐⭐ |
| **Task 9** | PowerPoint 创建高管演示 | PPT 生成、可视化 | PowerPoint Copilot | ⭐⭐ |
| **Task 10** | Loop 将洞察转为行动 | 协作、行动计划 | Loop + Copilot | ⭐⭐ |
| **Task 11** | Outlook 创建邮件 | 邮件起草、沟通 | Outlook Copilot | ⭐ |

---

## 2. 基础课程适配分析

### ✅ 适合基础课程的实验（5 个）

#### 实验一：Excel 财务数据分析（Task 1-2）

**原版内容**：
- 分析 EcoSmart 产品线 COGS 数据
- 识别成本驱动因素
- 找出异常值和数据问题
- 生成成本趋势图表

**适配方案**：
```
实验名称：Excel 财务数据分析
输入文件：materials/cogs_estimates.xlsx
输出文件：cogs_analysis_report.xlsx

核心技能：
- 读取 Excel 财务数据
- 计算关键指标（总成本、平均成本、增长率）
- 识别异常值（使用统计方法）
- 生成可视化图表（柱状图、折线图）

提示词示例：
"请读取 materials/cogs_estimates.xlsx，
分析 COGS 数据，找出：
1. 成本最高的 3 个产品特征
2. 数据异常值
3. 成本优化建议

保存为：cogs_analysis_report.xlsx"
```

**技术难度**：⭐⭐（pandas 基础分析）  
**工作量**：4-6 小时

---

#### 实验二：Word 合同对比分析（Task 7-8）

**原版内容**：
- 对比 Adatum 和 Contoso 两个供应商合同
- 识别关键差异（价格、交付、保修、罚则）
- 评估风险等级
- 生成谈判建议

**适配方案**：
```
实验名称：Word 合同对比分析
输入文件：
- materials/vendor_contract_a.docx
- materials/vendor_contract_b.docx
输出文件：contract_comparison.docx

核心技能：
- 读取多个 Word 文档
- 提取关键条款（价格、交付、保修等）
- 对比分析
- 风险评估

提示词示例：
"请对比以下两个供应商合同：
- vendor_contract_a.docx
- vendor_contract_b.docx

分析以下方面：
1. 价格条款差异
2. 交付时间表
3. 保修和赔偿责任
4. 风险评估

生成对比报告，保存为：contract_comparison.docx"
```

**技术难度**：⭐⭐（python-docx 读取 + AI 分析）  
**工作量**：6-8 小时

---

#### 实验三：PowerPoint 高管演示生成（Task 9）

**原版内容**：
- 基于合同对比报告生成 PPT
- 包含关键发现、风险缓解建议
- 添加演讲备注
- 格式化行动计划为表格

**适配方案**：
```
实验名称：PowerPoint 高管演示生成
输入文件：contract_comparison.docx
输出文件：finance_presentation.pptx

核心技能：
- 读取 Word 报告
- 生成 PPT 大纲
- 创建幻灯片（标题、内容、图表）
- 添加演讲备注

提示词示例：
"请根据 contract_comparison.docx，
生成一份高管演示文稿：
- 8-10 张幻灯片
- 包含：关键发现、风险对比、建议
- 深蓝色主题
- 每张幻灯片包含演讲备注

保存为：finance_presentation.pptx"
```

**技术难度**：⭐⭐（python-pptx，M03 已验证）  
**工作量**：4-6 小时

---

#### 实验四：Teams 会议笔记总结（Task 3-4）

**原版内容**：
- 总结财务会议笔记
- 提取行动项
- 识别关键决策

**适配方案**：
```
实验名称：会议笔记自动总结
输入文件：materials/finance_meeting_notes.txt
输出文件：meeting_summary.docx

核心技能：
- 读取会议笔记
- AI 总结关键要点
- 提取行动项（负责人 + 截止日期）
- 生成结构化文档

提示词示例：
"请总结以下会议笔记：
- finance_meeting_notes.txt

提取：
1. 关键决策（3-5 个）
2. 行动项（谁 + 什么 + 何时）
3. 待讨论议题

保存为：meeting_summary.docx"
```

**技术难度**：⭐（文本处理 + AI 总结）  
**工作量**：2-4 小时

---

#### 实验五：Outlook 邮件起草（Task 11）

**原版内容**：
- 起草邮件征求合同反馈
- 包含 Loop 组件协作
- 生成多个版本对比

**适配方案**：
```
实验名称：商务邮件自动起草
输入：邮件目的、收件人、关键信息
输出：email_drafts.docx

核心技能：
- 根据要点生成邮件
- 多版本生成（正式/非正式）
- 语气调整

提示词示例：
"请起草一封邮件给财务总监，
主题：供应商合同审核请求

包含：
- 合同对比摘要
- 请求反馈的截止日期
- 附件列表

生成 2 个版本：正式版和简洁版
保存为：email_drafts.docx"
```

**技术难度**：⭐（文本生成）  
**工作量**：2-3 小时

---

### 📊 基础课程实验总览

| 实验 | 场景 | 输入 | 输出 | 难度 | 工作量 |
|------|------|------|------|------|--------|
| **实验一** | Excel COGS 分析 | cogs_estimates.xlsx | cogs_analysis.xlsx | ⭐⭐ | 4-6h |
| **实验二** | Word 合同对比 | 2 个合同.docx | contract_comparison.docx | ⭐⭐ | 6-8h |
| **实验三** | PPT 高管演示 | contract_comparison.docx | finance_presentation.pptx | ⭐⭐ | 4-6h |
| **实验四** | 会议笔记总结 | meeting_notes.txt | meeting_summary.docx | ⭐ | 2-4h |
| **实验五** | 邮件起草 | 邮件要点 | email_drafts.docx | ⭐ | 2-3h |
| **总计** | - | - | - | - | **18-27h** |

---

## 3. 高阶课程适配分析（Agent 方向）

### ✅ 适合高阶课程的实验（3 个）

#### Agent 一：财务分析 Agent（基于 Task 1-2 + Task 6）

**原版内容**：
- Excel 分析 COGS 数据
- What-if 场景建模
- 预测和趋势分析

**Agent 设计**：
```yaml
# agent_financial_analyst.yaml
name: Financial Analyst Agent
description: 财务数据分析与预测专家
version: 1.0

capabilities:
  - financial_data_analysis: 分析财务数据（Excel）
  - trend_detection: 识别趋势和异常
  - scenario_modeling: What-if 场景分析
  - forecasting: 财务预测
  - report_generation: 生成分析报告

presets:
  - name: cogs_analysis
    description: COGS 成本分析
    prompt: |
      请分析以下 COGS 数据文件：
      - 文件：{filename}
      
      要求：
      1. 计算总成本、平均成本、成本分布
      2. 识别成本最高的产品特征（Top 5）
      3. 找出异常值（使用统计方法）
      4. 提供成本优化建议
      
      输出：Excel 报告，包含数据透视表和图表。
      
  - name: scenario_analysis
    description: What-if 场景分析
    prompt: |
      请进行 What-if 场景分析：
      - 基准场景：当前成本结构
      - 乐观场景：原材料成本下降 10%
      - 悲观场景：原材料成本上升 15%
      
      输出：Excel 对比表，包含敏感性分析。
      
  - name: forecast
    description: 财务预测
    prompt: |
      请基于历史数据预测下季度成本：
      - 文件：{historical_data}
      - 预测周期：3 个月
      
      方法：移动平均或线性回归
      输出：Excel 预测表 + 趋势图。

output_formats:
  - xlsx: 财务分析报告
  - docx: 高管摘要
  - pptx: 演示文稿
```

**教学价值**：
- ✅ 财务专业知识封装
- ✅ 多工具集成（Excel + AI + 图表）
- ✅ 实际业务场景

**工作量**：12-16 小时

---

#### Agent 二：合同审查 Agent（基于 Task 7-8）

**原版内容**：
- 对比多个供应商合同
- 识别风险条款
- 生成谈判建议

**Agent 设计**：
```yaml
# agent_contract_reviewer.yaml
name: Contract Reviewer Agent
description: 供应商合同审查与风险评估专家
version: 1.0

capabilities:
  - contract_parsing: 解析合同条款
  - comparison: 多合同对比
  - risk_assessment: 风险评估
  - compliance_check: 合规性检查
  - negotiation_tips: 生成谈判建议

knowledge_sources:
  - contract_templates/          # 标准合同模板
  - risk_clauses_database.yaml   # 风险条款库
  - compliance_rules.yaml        # 合规规则

presets:
  - name: compare_contracts
    description: 合同对比
    prompt: |
      请对比以下供应商合同：
      - 合同 A：{contract_a_file}
      - 合同 B：{contract_b_file}
      
      对比维度：
      1. 价格条款（单价、折扣、付款条件）
      2. 交付条款（时间、地点、违约责任）
      3. 保修条款（期限、范围、响应时间）
      4. 法律条款（管辖法律、争议解决）
      
      输出：Word 对比报告，包含风险评级。
      
  - name: risk_assessment
    description: 风险评估
    prompt: |
      请评估以下合同的风险：
      - 文件：{contract_file}
      
      评估维度：
      1. 财务风险（价格波动、付款条件）
      2. 运营风险（交付能力、质量保证）
      3. 法律风险（责任限制、争议解决）
      4. 合规风险（行业标准、法规要求）
      
      输出：风险矩阵表（高/中/低）。
      
  - name: negotiation_tips
    description: 谈判建议
    prompt: |
      请基于合同对比，生成谈判建议：
      - 我方优势：3-5 个
      - 对方弱点：3-5 个
      - 建议争取的条款：Top 5
      - 可让步的条款：Top 3
      
      输出：Word 谈判策略文档。

output_formats:
  - docx: 合同对比报告
  - xlsx: 风险矩阵表
  - pptx: 高管汇报
```

**教学价值**：
- ✅ 法律 + 财务跨领域
- ✅ 风险评估框架
- ✅ 高商业价值

**工作量**：16-20 小时

---

#### Agent 三：财务洞察 Agent（基于 Task 5 + Task 10）

**原版内容**：
- 分析潜在收购目标
- 将洞察转化为行动计划
- 跨部门协作

**Agent 设计**：
```yaml
# agent_financial_insights.yaml
name: Financial Insights Agent
description: 战略财务分析与洞察专家
version: 1.0

capabilities:
  - market_research: 市场研究（网络搜索）
  - financial_modeling: 财务建模
  - risk_analysis: 风险评估
  - action_planning: 行动计划生成
  - collaboration: 跨部门协作支持

presets:
  - name: acquisition_analysis
    description: 收购目标分析
    prompt: |
      请分析以下潜在收购目标：
      - 公司名称：{company_name}
      - 行业：{industry}
      
      分析维度：
      1. 财务健康度（收入、利润、负债）
      2. 市场地位（份额、增长、竞争）
      3. 协同效应（技术、渠道、品牌）
      4. 风险评估（文化、整合、监管）
      
      输出：Word 分析报告 + Excel 财务模型。
      
  - name: action_plan
    description: 行动计划生成
    prompt: |
      请基于以下洞察生成行动计划：
      - 洞察报告：{insights_file}
      
      计划包含：
      1. 关键行动（5-7 个）
      2. 负责人和截止日期
      3. 资源需求
      4. 成功指标（KPI）
      
      输出：Excel 行动计划表 + Word 说明。

output_formats:
  - docx: 分析报告
  - xlsx: 财务模型 + 行动计划
  - pptx: 高管演示
```

**教学价值**：
- ✅ 战略层面分析
- ✅ 多 Agent 协作潜力
- ✅ 网络搜索集成

**工作量**：20-24 小时

---

### 📊 高阶课程 Agent 总览

| Agent | 功能 | 难度 | 工作量 | 优先级 |
|-------|------|------|--------|--------|
| **财务分析 Agent** | 数据分析 + 预测 | ⭐⭐⭐ | 12-16h | ⭐⭐⭐ 高 |
| **合同审查 Agent** | 合同对比 + 风险评估 | ⭐⭐⭐⭐ | 16-20h | ⭐⭐⭐⭐ 最高 |
| **财务洞察 Agent** | 战略分析 + 行动计划 | ⭐⭐⭐⭐ | 20-24h | ⭐⭐⭐ 高 |
| **总计** | - | - | **48-60h** | - |

---

## 4. 综合对比

### 4.1 基础课程 vs 高阶课程

| 维度 | 基础课程 | 高阶课程 |
|------|---------|---------|
| **目标学员** | 财务专员、初级分析师 | 财务经理、高级分析师 |
| **核心技能** | 文件处理、基础分析 | Agent 设计、专业封装 |
| **实验数量** | 5 个独立实验 | 3 个 Agent |
| **总工作量** | 18-27 小时 | 48-60 小时 |
| **技术难度** | ⭐-⭐⭐ | ⭐⭐⭐-⭐⭐⭐⭐ |
| **业务价值** | 提升个人效率 | 构建专业能力 |

---

### 4.2 实验映射关系

| 原版实验 | 基础课程 | 高阶课程 |
|---------|---------|---------|
| **Task 1-2** (Excel COGS) | 实验一：Excel 财务分析 | 财务分析 Agent（COGS 分析） |
| **Task 3-4** (Teams 会议) | 实验四：会议笔记总结 | - |
| **Task 5** (收购分析) | - | 财务洞察 Agent（收购分析） |
| **Task 6** (场景建模) | - | 财务分析 Agent（场景分析） |
| **Task 7-8** (合同对比) | 实验二：Word 合同对比 | 合同审查 Agent |
| **Task 9** (PPT 演示) | 实验三：PPT 高管演示 | 所有 Agent 的输出能力 |
| **Task 10** (Loop 行动) | - | 财务洞察 Agent（行动计划） |
| **Task 11** (Outlook 邮件) | 实验五：邮件起草 | - |

---

## 5. 推荐开发路线

### 基础课程（M05 Finance）

**Phase 1（1 周）**：实验一 + 实验二
- Excel COGS 分析（4-6h）
- Word 合同对比（6-8h）

**Phase 2（1 周）**：实验三 + 实验四
- PPT 高管演示（4-6h）
- 会议笔记总结（2-4h）

**Phase 3（3-5 天）**：实验五
- 邮件起草（2-3h）
- 内部测试和优化

**总计**：2-3 周，18-27 小时

---

### 高阶课程（Agent 方向）

**Phase 1（2 周）**：财务分析 Agent
- COGS 分析预设（4h）
- 场景分析预设（4h）
- 预测功能（4h）
- 测试和优化（4h）

**Phase 2（2-3 周）**：合同审查 Agent
- 合同解析（6h）
- 对比功能（6h）
- 风险评估（4h）
- 测试和优化（4h）

**Phase 3（3 周）**：财务洞察 Agent
- 市场研究集成（6h）
- 财务建模（6h）
- 行动计划生成（6h）
- 测试和优化（6h）

**总计**：7-8 周，48-60 小时

---

## 6. 示例文件需求

### 基础课程

| 文件名 | 用途 | 来源 |
|--------|------|------|
| `cogs_estimates.xlsx` | COGS 数据分析 | 原版 EcoSmart COGS Estimates.xlsx |
| `vendor_contract_a.docx` | 合同对比 A | 原版 Adatum Corp smart sensor contract.docx |
| `vendor_contract_b.docx` | 合同对比 B | 原版 Contoso Ltd smart sensor contract.docx |
| `finance_meeting_notes.txt` | 会议笔记总结 | 原版 Fabrikam Finance meeting notes.txt |

### 高阶课程（Agent）

除基础课程文件外，还需：

| 文件名 | 用途 |
|--------|------|
| `contract_templates/standard.yaml` | 标准合同模板 |
| `risk_clauses_database.yaml` | 风险条款库 |
| `compliance_rules.yaml` | 合规规则 |
| `historical_financial_data.xlsx` | 历史财务数据（预测用） |

---

## 7. 总结

### 基础课程价值

✅ **适合人群**：财务专员、初级分析师  
✅ **核心技能**：Excel 分析、Word 对比、PPT 生成  
✅ **业务场景**：成本分析、合同审核、高管汇报  
✅ **技术门槛**：低（Python 基础）  
✅ **开发周期**：2-3 周

---

### 高阶课程价值

✅ **适合人群**：财务经理、高级分析师、AI 爱好者  
✅ **核心技能**：Agent 设计、专业封装、多工具集成  
✅ **业务场景**：财务预测、合同审查、战略分析  
✅ **技术门槛**：中（YAML 配置 + AI 提示词工程）  
✅ **开发周期**：7-8 周

---

### 推荐优先级

**短期（1 个月内）**：
1. ✅ 完成基础课程 M05（2-3 周）
2. ⏳ 开发财务分析 Agent（2 周）

**中期（2-3 个月）**：
3. ⏳ 开发合同审查 Agent（3 周）
4. ⏳ 开发财务洞察 Agent（3 周）

**长期（3-6 个月）**：
5. ⏳ 多 Agent 协作演示
6. ⏳ 企业级部署案例

---

### 关键发现

1. **M05 内容丰富**：8 个实验，覆盖财务核心场景
2. **分层清晰**：5 个基础实验 + 3 个高阶 Agent
3. **业务价值高**：合同审查、财务预测都是高价值场景
4. **技术可行**：所有功能都能用 OpenCode 实现
5. **教学路径好**：从基础操作到 Agent 设计，递进清晰

---

**报告完成时间**：2026-03-07 09:30 UTC  
**版本**：v1.0
