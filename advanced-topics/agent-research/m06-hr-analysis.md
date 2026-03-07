# M06 HR 场景分析报告

**版本**: v1.0  
**完成时间**: 2026-03-07 23:00 UTC  
**用途**: 区分基础课程 vs 高阶课程内容

---

## 1. M06 原版实验总览

| 实验编号 | 实验名称 | 核心技能 | 涉及工具 | 难度 |
|---------|---------|---------|---------|------|
| **Task 1-2** | Excel 识别经理指标 | HR 数据分析 | Excel Copilot | ⭐⭐ |
| **Task 3-4** | Excel 生成经理报告 | 报告生成 | Excel Copilot | ⭐⭐ |
| **Task 5** | Outlook 沟通发现 | 商务沟通 | Outlook Copilot | ⭐ |
| **Task 6** | Loop 协作规划 | 团队协作 | Loop + Copilot | ⭐⭐ |
| **Task 7-8** | 创建 HR 自助服务 Agent | Agent 创建 | Copilot Studio | ⭐⭐⭐⭐ |
| **Task 9** | Viva Engage 宣布 Agent | 内部沟通 | Viva Engage | ⭐ |
| **Task 10** | 使用自助服务 Agent | Agent 使用 | 自定义 Agent | ⭐⭐ |
| **Task 11** | 使用 Researcher Agent | 网络研究 | Researcher Agent | ⭐⭐⭐ |

---

## 2. 基础课程适配分析

### ✅ 适合基础课程的实验（5 个）

#### 实验一：Excel HR 数据分析（Task 1-2）

**原版内容**：
- 分析经理绩效和参与度指标
- 识别关键 HR 指标（参与度、离职率、培训完成率）
- 生成经理效能报告
- 可视化团队健康数据

**适配方案**：
```
实验名称：Excel HR 数据分析
输入文件：materials/manager_metrics.xlsx
输出文件：hr_manager_analysis.xlsx

核心技能：
- 读取 Excel HR 数据
- 计算关键指标（平均参与度、离职率、培训完成率）
- 识别问题经理（参与度<70% 且离职率>15%）
- 生成可视化图表（热力图、柱状图）

提示词示例：
"请读取 materials/manager_metrics.xlsx，
分析经理绩效数据，找出：
1. 参与度低于 70% 的经理
2. 离职率高于 15% 的团队
3. 培训完成率与绩效评级的相关性

保存为：hr_manager_analysis.xlsx"
```

**技术难度**：⭐⭐（pandas 基础分析 + 相关性计算）  
**工作量**：4-6 小时

**示例数据结构**：
```excel
Manager Name | Department | Engagement Score | Attrition Rate | Training Completion | Team Tenure | Promotions | Performance Rating
John Smith   | Sales      | 75%              | 12%            | 85%                 | 3.5 years   | 2          | 4.2
```

---

#### 实验二：HR 报告自动生成（Task 3-4）

**原版内容**：
- 基于经理指标生成个人报告
- 识别优势和改进机会
- 生成可操作的洞察

**适配方案**：
```
实验名称：HR 报告自动生成
输入文件：hr_manager_analysis.xlsx
输出文件：manager_reports.docx（多个）

核心技能：
- 读取 Excel 分析结果
- 为每个经理生成个性化报告
- 识别优势和改进领域
- 提供可操作建议

提示词示例：
"请根据 hr_manager_analysis.xlsx，
为每位经理生成个性化报告：

包含：
1. 关键指标摘要
2. 优势领域（Top 3）
3. 改进机会（Top 3）
4. 具体建议（3-5 条）

为每位经理保存独立文档：
manager_report_[姓名].docx"
```

**技术难度**：⭐⭐（python-docx 批量生成）  
**工作量**：6-8 小时

---

#### 实验三：Outlook HR 沟通邮件（Task 5）

**原版内容**：
- 起草邮件给高管沟通 HR 发现
- 总结关键发现和建议
- 专业商务沟通

**适配方案**：
```
实验名称：HR 沟通邮件起草
输入：分析结果、收件人列表
输出：hr_communication_emails.docx

核心技能：
- 根据分析结果生成邮件
- 多版本生成（正式/简洁）
- 语气调整（专业/友好）

提示词示例：
"请起草一封邮件给 CFO，
主题：Q1 经理绩效分析发现

包含：
- 关键发现摘要（3-5 个要点）
- 高风险经理名单
- 建议的干预措施
- 附件列表

生成 2 个版本：正式版和简洁版
保存为：hr_communication_emails.docx"
```

**技术难度**：⭐（文本生成）  
**工作量**：2-3 小时

---

#### 实验四：Loop 协作规划（Task 6）

**原版内容**：
- 创建协作页面分享 HR 发现
- 邀请高管评论和反馈
- 跟踪行动项

**适配方案**：
```
实验名称：HR 协作规划文档
输入：manager_reports.docx
输出：hr_action_plan.md

核心技能：
- 创建结构化协作文档
- 定义行动项和负责人
- 设置时间节点

提示词示例：
"请基于经理报告，
创建 HR 改进行动计划：

包含：
1. 关键行动项（5-7 个）
2. 负责人和截止日期
3. 资源需求
4. 成功指标（KPI）

保存为：hr_action_plan.md"
```

**技术难度**：⭐⭐（Markdown 文档生成）  
**工作量**：3-4 小时

---

#### 实验五：HR 政策问答（简化版 Task 10）

**原版内容**：
- 使用预设 Agent 问答 HR 政策
- 测试 Agent 响应质量

**适配方案**：
```
实验名称：HR 政策问答（简化版）
输入：hr_policies/（PDF/Word 文档）
输出：hr_qa_results.md

核心技能：
- 读取 HR 政策文档
- AI 问答测试
- 评估回答准确性

提示词示例：
"请读取 hr_policies/ 中的政策文档，
回答以下员工常见问题：

1. 年假如何累积？
2. 远程办公政策是什么？
3. 晋升标准是什么？

保存问答结果为：hr_qa_results.md"
```

**技术难度**：⭐⭐（文档读取 + AI 问答）  
**工作量**：4-6 小时

---

### 📊 基础课程实验总览

| 实验 | 场景 | 输入 | 输出 | 难度 | 工作量 |
|------|------|------|------|------|--------|
| **实验一** | Excel HR 数据分析 | manager_metrics.xlsx | hr_analysis.xlsx | ⭐⭐ | 4-6h |
| **实验二** | HR 报告自动生成 | hr_analysis.xlsx | manager_reports.docx | ⭐⭐ | 6-8h |
| **实验三** | Outlook 沟通邮件 | 分析结果 | hr_emails.docx | ⭐ | 2-3h |
| **实验四** | Loop 协作规划 | 经理报告 | hr_action_plan.md | ⭐⭐ | 3-4h |
| **实验五** | HR 政策问答 | hr_policies/ | hr_qa_results.md | ⭐⭐ | 4-6h |
| **总计** | - | - | - | - | **19-27h** |

---

## 3. 高阶课程适配分析（Agent 方向）

### ✅ 适合高阶课程的实验（3 个）

#### Agent 一：HR 自助服务 Agent（基于 Task 7-8）

**原版内容**：
- 创建 HR 自助服务 Agent
- 配置知识库（6 个 HR 政策文档）
- 定义 Agent 指令和行为
- 测试 Agent 响应

**Agent 设计**：
```yaml
# agent_hr_self_service.yaml
name: HR Self-Service Assistant
description: HR 政策自助问答专家
version: 1.0

capabilities:
  - policy_qa: HR 政策问答
  - document_search: 文档检索
  - citation: 引用来源
  - privacy_aware: 隐私感知（拒绝敏感问题）

knowledge_sources:
  - hr_policies/code_of_conduct.docx
  - hr_policies/benefits_policy.docx
  - hr_policies/leave_policy.docx
  - hr_policies/promotion_policy.docx
  - hr_policies/relocation_policy.docx
  - hr_policies/remote_work_policy.docx

presets:
  - name: benefits_qa
    description: 福利政策问答
    prompt: |
      请回答员工关于福利的问题：
      - 问题：{question}
      
      要求：
      1. 只使用提供的 HR 政策文档
      2. 每个回答必须引用来源
      3. 如果信息不明确，说明"我需要更多信息"
      4. 拒绝回答敏感问题（薪资、医疗等）
      
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
      
      输出：结构化回答 + 引用来源。

behavior_rules:
  - cite_sources: true
  - no_speculation: true
  - privacy_aware: true
  - avoid_jargon: true

output_formats:
  - markdown: 问答结果
  - json: 结构化数据
```

**教学价值**：
- ✅ Agent 创建完整流程
- ✅ 知识库配置
- ✅ 指令工程
- ✅ 隐私和安全意识

**工作量**：16-20 小时

---

#### Agent 二：HR Researcher Agent（基于 Task 11）

**原版内容**：
- 使用 Researcher Agent 研究搬迁城市
- 网络搜索 + 数据整合
- 城市和学校排名

**Agent 设计**：
```yaml
# agent_hr_researcher.yaml
name: HR Researcher Agent
description: 员工搬迁研究专家
version: 1.0

capabilities:
  - web_search: 网络搜索
  - data_comparison: 数据对比
  - ranking: 排名分析
  - report_generation: 报告生成

presets:
  - name: city_research
    description: 城市研究
    prompt: |
      请研究以下城市：
      - 目标城市：{target_city}
      - 半径范围：{radius}英里
      
      研究维度：
      1. 住房市场和可负担性
      2. 生活成本
      3. 家庭友好设施
      4. 医疗和安全
      5. 生活方式和社区
      6. 税收和财务
      7. 通勤时间
      
      输出：对比表格 + 排名。
      
  - name: school_research
    description: 学校研究
    prompt: |
      请研究以下地区的学校：
      - 目标地区：{target_area}
      - 学校类型：public/private
      
      研究维度：
      1. IB/AP 课程
      2. 大学录取率
      3. 课外活动
      4. 师生比例
      5. 毕业率
      
      输出：学校排名表。

output_formats:
  - markdown: 研究报告
  - xlsx: 对比表格
  - json: 结构化数据
```

**教学价值**：
- ✅ 网络搜索集成
- ✅ 多维度数据分析
- ✅ 排名算法
- ✅ 报告生成

**工作量**：12-16 小时

---

#### Agent 三：HR Analytics Agent（扩展场景）

**原版内容**：
- 基于 Task 1-2 的数据分析
- 扩展为持续监控 Agent

**Agent 设计**：
```yaml
# agent_hr_analytics.yaml
name: HR Analytics Agent
description: HR 数据分析与预警专家
version: 1.0

capabilities:
  - data_analysis: HR 数据分析
  - trend_detection: 趋势识别
  - anomaly_detection: 异常检测
  - alert_generation: 预警生成

presets:
  - name: monthly_report
    description: 月度 HR 报告
    prompt: |
      请分析本月 HR 数据：
      - 数据文件：{monthly_data.xlsx}
      
      分析维度：
      1. 参与度趋势
      2. 离职率变化
      3. 培训完成率
      4. 绩效分布
      
      输出：月度报告 + 可视化。
      
  - name: risk_alert
    description: 风险预警
    prompt: |
      请识别高风险经理：
      - 数据文件：{manager_data.xlsx}
      
      风险标准：
      - 参与度 < 70%
      - 离职率 > 15%
      - 培训完成率 < 80%
      
      输出：风险名单 + 干预建议。

output_formats:
  - xlsx: 分析报告
  - docx: 高管摘要
  - pptx: 演示文稿
```

**教学价值**：
- ✅ 持续监控能力
- ✅ 预警系统
- ✅ 自动化报告
- ✅ 数据驱动决策

**工作量**：12-16 小时

---

### 📊 高阶课程 Agent 总览

| Agent | 功能 | 难度 | 工作量 | 优先级 |
|-------|------|------|--------|--------|
| **HR Self-Service** | 政策问答 + 知识库 | ⭐⭐⭐⭐ | 16-20h | ⭐⭐⭐⭐ 最高 |
| **HR Researcher** | 网络研究 + 排名 | ⭐⭐⭐ | 12-16h | ⭐⭐⭐ 高 |
| **HR Analytics** | 数据分析 + 预警 | ⭐⭐⭐ | 12-16h | ⭐⭐⭐ 高 |
| **总计** | - | - | **40-52h** | - |

---

## 4. 综合对比

### 4.1 基础课程 vs 高阶课程

| 维度 | 基础课程 | 高阶课程 |
|------|---------|---------|
| **目标学员** | HR 专员、HR 助理 | HR 经理、HRIS 专家 |
| **核心技能** | 文件处理、基础分析 | Agent 设计、知识库配置 |
| **实验数量** | 5 个独立实验 | 3 个 Agent |
| **总工作量** | 19-27 小时 | 40-52 小时 |
| **技术难度** | ⭐-⭐⭐ | ⭐⭐⭐-⭐⭐⭐⭐ |
| **业务价值** | 提升个人效率 | 构建组织能力 |

---

### 4.2 实验映射关系

| 原版实验 | 基础课程 | 高阶课程 |
|---------|---------|---------|
| **Task 1-2** (Excel 指标) | 实验一：HR 数据分析 | HR Analytics Agent |
| **Task 3-4** (Excel 报告) | 实验二：报告生成 | HR Analytics Agent |
| **Task 5** (Outlook 邮件) | 实验三：沟通邮件 | - |
| **Task 6** (Loop 协作) | 实验四：协作规划 | - |
| **Task 7-8** (创建 Agent) | - | HR Self-Service Agent |
| **Task 9** (Viva Engage) | - | - |
| **Task 10** (使用 Agent) | 实验五：政策问答 | HR Self-Service Agent |
| **Task 11** (Researcher) | - | HR Researcher Agent |

---

## 5. 推荐开发路线

### 基础课程（M06 HR）

**Phase 1（1 周）**：实验一 + 实验二
- Excel HR 数据分析（4-6h）
- HR 报告自动生成（6-8h）

**Phase 2（1 周）**：实验三 + 实验四
- Outlook 沟通邮件（2-3h）
- Loop 协作规划（3-4h）

**Phase 3（3-5 天）**：实验五
- HR 政策问答（4-6h）
- 内部测试和优化

**总计**：2-3 周，19-27 小时

---

### 高阶课程（Agent 方向）

**Phase 1（2-3 周）**：HR Self-Service Agent
- 知识库配置（6h）
- 指令工程（6h）
- 隐私规则（4h）
- 测试和优化（4h）

**Phase 2（2 周）**：HR Researcher Agent
- 网络搜索集成（6h）
- 排名算法（4h）
- 报告生成（4h）
- 测试和优化（4h）

**Phase 3（2 周）**：HR Analytics Agent
- 数据分析模块（6h）
- 预警系统（4h）
- 自动化报告（4h）
- 测试和优化（4h）

**总计**：6-7 周，40-52 小时

---

## 6. 示例文件需求

### 基础课程

| 文件名 | 用途 | 来源 |
|--------|------|------|
| `manager_metrics.xlsx` | HR 经理指标数据 | 原版 Contoso_HR_ManagerMetrics.xlsx |
| `hr_policies/` | HR 政策文档（6 个） | 原版 Adatum HR 政策文件 |

### 高阶课程（Agent）

除基础课程文件外，还需：

| 文件名 | 用途 |
|--------|------|
| `agent_hr_self_service.yaml` | 自助服务 Agent 配置 |
| `agent_hr_researcher.yaml` | Researcher Agent 配置 |
| `agent_hr_analytics.yaml` | Analytics Agent 配置 |
| `hr_qa_test_cases.md` | 问答测试用例 |

---

## 7. 总结

### 基础课程价值

✅ **适合人群**：HR 专员、HR 助理、HR 通才  
✅ **核心技能**：Excel 分析、报告生成、商务沟通  
✅ **业务场景**：经理绩效分析、HR 报告、政策问答  
✅ **技术门槛**：低（Python 基础）  
✅ **开发周期**：2-3 周

---

### 高阶课程价值

✅ **适合人群**：HR 经理、HRIS 专家、HR 技术团队  
✅ **核心技能**：Agent 设计、知识库配置、网络研究  
✅ **业务场景**：员工自助服务、搬迁研究、数据预警  
✅ **技术门槛**：中（YAML 配置 + AI 提示词工程）  
✅ **开发周期**：6-7 周

---

### 推荐优先级

**短期（1 个月内）**：
1. ✅ 完成基础课程 M06（2-3 周）
2. ⏳ 开发 HR Self-Service Agent（3 周）

**中期（2-3 个月）**：
3. ⏳ 开发 HR Researcher Agent（2 周）
4. ⏳ 开发 HR Analytics Agent（2 周）

**长期（3-6 个月）**：
5. ⏳ 多 Agent 协作（HR 团队自动化）
6. ⏳ 企业级部署案例

---

### 关键发现

1. **M06 内容丰富**：8 个实验，覆盖 HR 核心场景
2. **分层清晰**：5 个基础实验 + 3 个高阶 Agent
3. **业务价值高**：员工自助服务、搬迁研究都是高频场景
4. **技术可行**：所有功能都能用 OpenCode 实现
5. **教学路径好**：从基础操作到 Agent 设计，递进清晰

---

### 可用 Agent 总数（M01-M06）

| 模块 | Agent 数 | 实验数 |
|------|---------|--------|
| M01 | 1 | 2 |
| M02 | 1 | 3 |
| M03 | 2 | 2 |
| M04 | 2 | 3 |
| M05 | 3 | 8 |
| M06 | 3 | 8 |
| **总计** | **12 个 Agent** | **26 个实验** |

---

**报告完成时间**：2026-03-07 23:00 UTC  
**版本**：v1.0
