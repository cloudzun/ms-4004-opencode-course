# M07 运营场景分析报告

**版本**: v1.0  
**完成时间**: 2026-03-08 02:30 UTC  
**用途**: 区分基础课程 vs 高阶课程内容

---

## 1. M07 原版实验总览

| 实验编号 | 实验名称 | 核心技能 | 涉及工具 | 难度 |
|---------|---------|---------|---------|------|
| **Task 1** | Whiteboard 头脑风暴 | 创意生成、分类整理 | Whiteboard + Copilot | ⭐⭐ |
| **Task 2** | Word 文档对比 | 文档版本对比 | Word Copilot | ⭐⭐ |
| **Task 3** | PowerPoint 演示生成 | 演示文稿创建 | PowerPoint Copilot | ⭐⭐ |
| **Task 4** | Chat 准备供应商沟通 | 商务沟通准备 | Copilot Chat | ⭐⭐ |
| **Task 5** | Loop 跟踪里程碑 | 项目跟踪 | Loop + Copilot | ⭐⭐ |
| **Task 6** | Outlook 邮件通知变更 | 变更沟通 | Outlook Copilot | ⭐ |
| **Task 7** | OneNote 更新安全协议 | 文档更新 | OneNote Copilot | ⭐⭐ |
| **Task 8-12** | 创建设施扩展 Agent | Agent 创建 | Copilot Studio | ⭐⭐⭐⭐ |

---

## 2. 基础课程适配分析

### ✅ 适合基础课程的实验（5 个）

#### 实验一：Whiteboard 头脑风暴

**原版内容**：
- 使用 Whiteboard 进行项目计划头脑风暴
- 生成锅炉安装步骤建议
- 分类整理想法
- 生成总结

**适配方案**：
```
实验名称：Whiteboard 项目头脑风暴
输入：项目主题（如"办公室装修项目"）
输出：brainstorming_notes.md

核心技能：
- 生成项目步骤建议
- 分类整理想法
- 识别风险和建议
- 生成总结文档

提示词示例：
"请为办公室装修项目生成头脑风暴笔记：

包含：
1. 项目步骤建议（12-15 个）
2. 风险缓解建议（6-8 个）
3. 分类整理（按阶段）
4. 项目总结

保存为：brainstorming_notes.md"
```

**技术难度**：⭐⭐（文本生成 + 分类）  
**工作量**：4-6 小时

---

#### 实验二：Word 文档版本对比

**原版内容**：
- 对比两个版本的运营报告
- 识别关键差异
- 生成对比摘要

**适配方案**：
```
实验名称：Word 文档版本对比
输入：
- materials/report_v1.docx
- materials/report_v2.docx
输出：document_comparison.docx

核心技能：
- 读取两个 Word 文档
- 识别关键差异
- 生成对比摘要

提示词示例：
"请对比以下两个运营报告版本：
- report_v1.docx
- report_v2.docx

对比维度：
1. 关键数据变化
2. 新增/删除内容
3. 结论差异

生成对比报告，保存为：document_comparison.docx

格式要求：
- 标题字体：微软雅黑，16pt，加粗
- 正文字体：微软雅黑，10.5pt
- 英文字体：Arial"
```

**技术难度**：⭐⭐（python-docx 对比）  
**工作量**：4-6 小时

---

#### 实验三：PowerPoint 演示生成

**原版内容**：
- 基于项目数据生成演示文稿
- 包含里程碑、风险、下一步

**适配方案**：
```
实验名称：PowerPoint 项目演示生成
输入：project_data.xlsx
输出：project_presentation.pptx

核心技能：
- 读取项目数据
- 生成演示文稿大纲
- 创建幻灯片（10-12 张）
- 添加演讲备注

提示词示例：
"请根据 project_data.xlsx，
使用 python-pptx 库生成项目演示文稿。

要求：
- 页面比例：16:9
- 10-12 张幻灯片
- 包含：项目概述、里程碑、风险、下一步
- 深蓝色主题
- 中文字体：微软雅黑
- 英文字体：Arial

保存为：project_presentation.pptx"
```

**技术难度**：⭐⭐（python-pptx）  
**工作量**：4-6 小时

---

#### 实验四：Loop 项目跟踪

**原版内容**：
- 创建 Loop 页面跟踪项目里程碑
- 更新任务状态
- 生成进度报告

**适配方案**：
```
实验名称：Loop 项目跟踪文档
输入：project_milestones.xlsx
输出：project_tracker.md

核心技能：
- 读取项目里程碑数据
- 创建跟踪文档
- 定义状态（未开始/进行中/已完成）
- 生成进度报告

提示词示例：
"请基于 project_milestones.xlsx，
创建项目跟踪文档。

包含：
1. 所有里程碑列表
2. 状态跟踪（未开始/进行中/已完成）
3. 负责人和截止日期
4. 进度百分比
5. 风险和问题

保存为：project_tracker.md"
```

**技术难度**：⭐⭐（Markdown 文档生成）  
**工作量**：3-4 小时

---

#### 实验五：Outlook 变更沟通邮件

**原版内容**：
- 起草邮件通知安全协议变更
- 包含变更摘要、影响、行动要求

**适配方案**：
```
实验名称：Outlook 变更沟通邮件
输入：变更详情
输出：change_notification_email.docx

核心技能：
- 根据变更详情生成邮件
- 多版本生成（正式版/简洁版）
- 语气调整

提示词示例：
"请起草一封邮件通知安全协议变更，

包含：
- 变更摘要（3-5 个要点）
- 影响范围
- 行动要求
- 生效日期
- 联系人信息

生成 2 个版本：
1. 正式版（详细，200-300 字）
2. 简洁版（要点式，100-150 字）

保存为：change_notification_email.docx"
```

**技术难度**：⭐（文本生成）  
**工作量**：2-3 小时

---

### 📊 基础课程实验总览

| 实验 | 场景 | 输入 | 输出 | 难度 | 工作量 |
|------|------|------|------|------|--------|
| **实验一** | Whiteboard 头脑风暴 | 项目主题 | brainstorming_notes.md | ⭐⭐ | 4-6h |
| **实验二** | Word 文档对比 | 2 个报告版本 | comparison.docx | ⭐⭐ | 4-6h |
| **实验三** | PowerPoint 演示 | 项目数据 | presentation.pptx | ⭐⭐ | 4-6h |
| **实验四** | Loop 项目跟踪 | 里程碑数据 | tracker.md | ⭐⭐ | 3-4h |
| **实验五** | Outlook 变更邮件 | 变更详情 | email.docx | ⭐ | 2-3h |
| **总计** | - | - | - | - | **17-25h** |

---

## 3. 高阶课程适配分析（Agent 方向）

### ✅ 适合高阶课程的实验（1 个）

#### Agent 一：Facility Expansion FAQ Agent（基于 Task 8-12）

**原版内容**：
- 创建设施扩展 FAQ Agent
- 配置知识库（7 个文档）
- 定义 Agent 指令和行为
- 测试 Agent 响应

**Agent 设计**：
```yaml
# agent_facility_faq.yaml
name: Facility Expansion FAQ Assistant
description: 设施扩展项目问答专家
version: 1.0

capabilities:
  - project_qa: 项目问答
  - document_search: 文档检索
  - citation: 引用来源
  - timeline_aware: 时间线感知
  - safety_aware: 安全协议感知

knowledge_sources:
  - project_overview.docx
  - faq_reference.docx
  - knowledge_pack.docx
  - inventory_schedule.xlsx
  - safety_protocols.docx
  - evacuation_routes.docx
  - vendor_access.docx

presets:
  - name: timeline_qa
    description: 时间线问答
    prompt: |
      请回答关于项目时间线的问题：
      - 问题：{question}
      
      要求：
      1. 只使用提供的项目文档
      2. 每个回答必须引用来源
      3. 突出关键日期和阶段
      4. 如果信息不明确，说明"需要确认"
      
  - name: safety_qa
    description: 安全协议问答
    prompt: |
      请回答关于安全协议的问题：
      - 问题：{question}
      
      覆盖范围：
      1. PPE 要求
      2. 疏散路线
      3. 限制区域
      4. 紧急联系人
      
      输出：结构化回答 + 引用来源。
      
  - name: inventory_qa
    description: 库存搬迁问答
    prompt: |
      请回答关于库存搬迁的问题：
      - 问题：{question}
      
      覆盖范围：
      1. 搬迁批次
      2. 时间表
      3. 负责人
      4. 注意事项
      
      输出：表格 + 文字说明。

behavior_rules:
  - cite_sources: true
  - no_speculation: true
  - timeline_specific: true
  - safety_first: true

output_formats:
  - markdown: 问答结果
  - json: 结构化数据
```

**教学价值**：
- ✅ Agent 创建完整流程
- ✅ 多文档知识库配置
- ✅ 复杂指令工程
- ✅ 安全和合规意识

**工作量**：20-24 小时

---

### 📊 高阶课程 Agent 总览

| Agent | 功能 | 难度 | 工作量 | 优先级 |
|-------|------|------|--------|--------|
| **Facility FAQ** | 项目问答 + 知识库 | ⭐⭐⭐⭐ | 20-24h | ⭐⭐⭐⭐ 最高 |
| **总计** | - | - | **20-24h** | - |

---

## 4. 综合对比

### 4.1 基础课程 vs 高阶课程

| 维度 | 基础课程 | 高阶课程 |
|------|---------|---------|
| **目标学员** | 运营专员、项目助理 | 运营经理、项目经理 |
| **核心技能** | 文档处理、基础分析 | Agent 设计、知识库配置 |
| **实验数量** | 5 个独立实验 | 1 个 Agent |
| **总工作量** | 17-25 小时 | 20-24 小时 |
| **技术难度** | ⭐-⭐⭐ | ⭐⭐⭐⭐ |
| **业务价值** | 提升个人效率 | 构建团队问答能力 |

---

### 4.2 实验映射关系

| 原版实验 | 基础课程 | 高阶课程 |
|---------|---------|---------|
| **Task 1** (Whiteboard) | 实验一：头脑风暴 | - |
| **Task 2** (Word 对比) | 实验二：文档对比 | - |
| **Task 3** (PPT) | 实验三：演示生成 | - |
| **Task 4** (Chat) | - | - |
| **Task 5** (Loop) | 实验四：项目跟踪 | - |
| **Task 6** (Outlook) | 实验五：变更邮件 | - |
| **Task 7** (OneNote) | - | - |
| **Task 8-12** (Agent) | - | Facility FAQ Agent |

---

## 5. 推荐开发路线

### 基础课程（M07 运营）

**Phase 1（1 周）**：实验一 + 实验二
- Whiteboard 头脑风暴（4-6h）
- Word 文档对比（4-6h）

**Phase 2（1 周）**：实验三 + 实验四
- PowerPoint 演示生成（4-6h）
- Loop 项目跟踪（3-4h）

**Phase 3（3-5 天）**：实验五
- Outlook 变更邮件（2-3h）
- 内部测试和优化

**总计**：2-3 周，17-25 小时

---

### 高阶课程（Agent 方向）

**Phase 1（3 周）**：Facility FAQ Agent
- 知识库配置（7 个文档）（8h）
- 指令工程（8h）
- 时间线和安全规则（4h）
- 测试和优化（4h）

**总计**：3 周，20-24 小时

---

## 6. 示例文件需求

### 基础课程

| 文件名 | 用途 | 来源 |
|--------|------|------|
| `project_data.xlsx` | 项目数据 | 原版项目文件 |
| `report_v1.docx` | 报告版本 1 | 原版运营报告 |
| `report_v2.docx` | 报告版本 2 | 原版运营报告 |
| `project_milestones.xlsx` | 里程碑数据 | 原版 Loop 数据 |

### 高阶课程（Agent）

除基础课程文件外，还需：

| 文件名 | 用途 |
|--------|------|
| `project_overview.docx` | 项目概述 |
| `faq_reference.docx` | FAQ 参考 |
| `knowledge_pack.docx` | 知识包 |
| `inventory_schedule.xlsx` | 库存时间表 |
| `safety_protocols.docx` | 安全协议 |
| `evacuation_routes.docx` | 疏散路线 |
| `vendor_access.docx` | 供应商访问 |

---

## 7. 总结

### 基础课程价值

✅ **适合人群**：运营专员、项目助理、运营通才  
✅ **核心技能**：头脑风暴、文档对比、演示生成、项目跟踪、变更沟通  
✅ **业务场景**：项目规划、报告对比、演示准备、进度跟踪、变更通知  
✅ **技术门槛**：低（Python 基础）  
✅ **开发周期**：2-3 周

---

### 高阶课程价值

✅ **适合人群**：运营经理、项目经理、运营技术团队  
✅ **核心技能**：Agent 设计、多文档知识库、复杂指令工程  
✅ **业务场景**：设施扩展问答、项目咨询、安全协议查询  
✅ **技术门槛**：中（YAML 配置 + AI 提示词工程）  
✅ **开发周期**：3 周

---

### 推荐优先级

**短期（1 个月内）**：
1. ✅ 完成基础课程 M07（2-3 周）
2. ⏳ 开发 Facility FAQ Agent（3 周）

**中期（2-3 个月）**：
3. ⏳ 整合 M01-M07 基础课程
4. ⏳ 发布完整课程体系

**长期（3-6 个月）**：
5. ⏳ 多 Agent 协作（运营团队自动化）
6. ⏳ 企业级部署案例

---

### 关键发现

1. **M07 内容丰富**：8 个实验，覆盖运营核心场景
2. **分层清晰**：5 个基础实验 + 1 个高阶 Agent
3. **业务价值高**：设施扩展、项目跟踪都是高频场景
4. **技术可行**：所有功能都能用 OpenCode 实现
5. **教学路径好**：从基础操作到 Agent 设计，递进清晰

---

### 可用 Agent 总数（M01-M07）

| 模块 | Agent 数 | 实验数 |
|------|---------|--------|
| M01 | 1 | 2 |
| M02 | 1 | 3 |
| M03 | 2 | 2 |
| M04 | 2 | 3 |
| M05 | 3 | 8 |
| M06 | 3 | 8 |
| M07 | 1 | 8 |
| **总计** | **13 个 Agent** | **34 个实验** |

---

**报告完成时间**：2026-03-08 02:30 UTC  
**版本**：v1.0
