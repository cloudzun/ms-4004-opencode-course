# 操作手册评估 - "客服支持运营分析师" Agent

**评估时间**：2026-03-09 01:15 UTC  
**评估者**：HuaQloud AI Architect  
**范围**：专家组提供的操作手册可行性评估

---

## 📊 总体评估

| 步骤 | 可行性 | 问题 | 建议调整 |
|------|-------|------|---------|
| **第一步**：SOUL.md 定义 | ⚠️ 60% | OpenClaw 无 SOUL.md 上传功能 | 改为：在提示词中包含角色设定 |
| **第二步**：OpenClaw WebUI | ❌ 0% | **OpenClaw 无 WebUI** | 改为：命令行或 Discord 交互 |
| **第三步**：对话测试 | ✅ 100% | 无（概念正确） | 调整交互方式即可 |

---

## ⚠️ 关键问题：OpenClaw 无 WebUI！

### 专家手册假设
```
1. 登录 OpenClaw WebUI 平台
2. 点击左侧导航栏的 [创建新 Agent]
3. 点击上传按钮，选择 SOUL.md 文件
4. 点击 [+] 添加技能
5. 点击 [部署运行]
```

### 实际情况
```
❌ OpenClaw 无 WebUI 界面
❌ 无上传按钮
❌ 无 [创建新 Agent] 导航栏
❌ 无 [部署运行] 按钮
```

---

## ✅ 实际操作方式（基于当前 OpenClaw）

### 方式 A：Discord 交互（推荐用于教学）

**第一步：定义 Agent 配置（本地文件）**
```yaml
# agent_customer_service.yaml
name: 客服支持运营分析师
description: 分析客服数据，生成回复模板

prompt_template: |
  你是一位资深的客户支持运营分析师。
  
  核心职责：
  1. 分析客服数据时，读取 Excel 并计算 Top 3 问题
  2. 生成回复模板时，基于问题类型草拟邮件
  
  默认数据路径：C:\Vibe_Data\M09\support_cases_90days.xlsx
  汇报风格：先说结论，后列数据，使用 Markdown 表格。

skills:
  - name: support-case-analyzer
    type: data_analysis
    input: support_cases_90days.xlsx
    output: analysis_report.md
    
  - name: reply-template-generator
    type: document_generation
    input: analysis_report.md
    output: reply_template.docx
```

**第二步：在 Discord 中唤醒 Agent**
```
用户在 Discord 发送：
/@agent 客服支持运营分析师 启动

或者直接使用：
请分析最近 90 天的客服数据，找出 Top 3 的客诉问题类型
```

**第三步：OpenClaw 自动处理**
```
OpenClaw 接收消息 
→ 识别意图（分析数据）
→ 调用 sessions_spawn
→ 执行 support-case-analyzer 技能
→ 返回分析结果到 Discord
```

---

### 方式 B：命令行交互（适合开发者）

**第一步：创建 Agent 配置文件**
```bash
# 同上，创建 agent_customer_service.yaml
```

**第二步：通过 API 启动 Agent**
```bash
curl -X POST http://localhost:PORT/sessions/spawn \
  -H "Content-Type: application/json" \
  -d '{
    "runtime": "subagent",
    "task": "分析客服数据，找出 Top 3 问题",
    "mode": "run",
    "attachments": [
      {"name": "support_cases_90days.xlsx", "path": "C:\\Vibe_Data\\M09\\"}
    ]
  }'
```

**第三步：查看结果**
```bash
# 结果通过 API 返回，或保存到文件
cat analysis_report.md
```

---

### 方式 C：cron 定时任务（自动化场景）

**第一步：配置定时任务**
```bash
openclaw cron add \
  --name "客服周报生成" \
  --schedule "0 17 * * FRI" \
  --message "分析客服数据，生成周报" \
  --target isolated \
  --delivery discord
```

**第二步：自动执行**
```
每周五 17:00 UTC
→ OpenClaw cron 触发
→ 调用 sessions_spawn
→ 执行分析
→ 发送到 Discord 频道
```

---

## 🔧 操作手册调整建议

### 原手册 vs 调整后手册

| 步骤 | 原手册（专家版） | 调整后手册（实际可行） |
|------|---------------|---------------------|
| **第一步** | OpenCode Desktop 写 SOUL.md | 本地创建 YAML 配置文件 |
| **第二步** | OpenClaw WebUI 上传文件 | Discord 消息或命令行调用 |
| **第三步** | 聊天界面测试 | Discord 对话或 API 调用 |

---

## 📋 调整后的操作手册

### 方案 A：Discord 交互版（推荐）

```markdown
# 操作手册：组装"客服支持运营分析师" Agent

## 🎯 实验目标
通过 Discord 与 Agent 交互，实现多技能自动调用。

---

## 📦 前置准备
1. **输入数据**：`C:\Vibe_Data\M09\support_cases_90days.xlsx`
2. **配置文件**：`agent_customer_service.yaml`（已预置）
3. **Discord 频道**：已配置 OpenClaw bot 的频道

---

## 📝 操作步骤

### 第一步：准备 Agent 配置文件（5 分钟）

1. 打开文本编辑器（如 Notepad++）
2. 创建文件 `agent_customer_service.yaml`
3. 粘贴以下内容：

```yaml
name: 客服支持运营分析师
description: 分析客服数据，生成回复模板

prompt_template: |
  你是一位资深的客户支持运营分析师。
  
  核心职责：
  1. 分析客服数据时，读取 Excel 并计算 Top 3 问题
  2. 生成回复模板时，基于问题类型草拟邮件
  
  默认数据路径：C:\Vibe_Data\M09\support_cases_90days.xlsx
  汇报风格：先说结论，后列数据，使用 Markdown 表格。
```

4. 保存到工作目录

---

### 第二步：在 Discord 中唤醒 Agent（2 分钟）

1. 打开 Discord，进入配置了 OpenClaw bot 的频道
2. 发送消息：

```
请启动客服支持运营分析师，分析最近 90 天的客服数据
```

3. OpenClaw 会自动：
   - 读取配置文件
   - 启动 subagent
   - 执行数据分析

---

### 第三步：对话与测试（5 分钟）

**第一轮指令（测试分析技能）**：

发送：
```
请分析一下最近 90 天的客服数据，找出 Top 3 的客诉问题类型，
并整理出严重程度（Severity）的分布情况。
```

**预期表现**：
- Agent 读取 Excel 文件
- 计算 Top 3 问题类型（按案例数量）
- 生成 Severity 分布（High/Medium/Low 百分比）
- 输出 Markdown 表格

**示例输出**：
```markdown
## 客服数据分析报告（90 天）

### Top 3 问题类型
| 排名 | 问题类型 | 案例数量 | 占比 |
|------|---------|---------|------|
| 1 | Bug | 245 | 42% |
| 2 | Feature Request | 178 | 31% |
| 3 | Question | 157 | 27% |

### 严重程度分布
- High: 23%
- Medium: 51%
- Low: 26%
```

---

**第二轮指令（测试连贯技能）**：

发送：
```
针对你刚才找出的排第一的高频问题，给我草拟一份对外的
安抚和解决方案邮件模板。
```

**预期表现**：
- Agent 记住上一轮的 Top 1 问题（Bug）
- 生成邮件模板
- 输出结构化 Markdown

**示例输出**：
```markdown
## 客户安抚邮件模板

主题：关于您反馈的问题 - 我们非常重视

尊敬的客户，

感谢您反馈的 Bug 问题。我们已收到您的报告，并正在紧急处理。

【当前进展】
- 已确认问题根源
- 开发团队正在修复
- 预计 48 小时内解决

【临时解决方案】
1. ...
2. ...

【后续跟进】
修复完成后，我们将第一时间通知您。

此致
客户支持团队
```

---

## ✅ 验收标准
- Agent 能够理解口语化指令
- 第一轮输出包含 Top 3 问题和 Severity 分布
- 第二轮输出包含邮件模板
- 两轮回答均生成结构化 Markdown

---

## 🛠️ 故障排查

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| Agent 无响应 | 文件路径错误 | 检查 `C:\Vibe_Data\M09\` 是否存在 |
| 输出格式混乱 | 提示词不清晰 | 在 prompt_template 中明确格式要求 |
| 数据读取失败 | Excel 被占用 | 关闭已打开的 Excel 文件 |
```

---

### 方案 B：命令行交互版（适合开发者）

```markdown
# 操作手册：命令行组装"客服支持运营分析师" Agent

## 🎯 实验目标
通过命令行 API 调用 Agent，实现多技能自动调用。

---

## 📦 前置准备
1. **输入数据**：`C:\Vibe_Data\M09\support_cases_90days.xlsx`
2. **配置文件**：`agent_customer_service.yaml`
3. **工具**：curl 或 Python

---

## 📝 操作步骤

### 第一步：创建 Agent 配置文件

```bash
# 创建 agent_customer_service.yaml
cat > agent_customer_service.yaml << EOF
name: 客服支持运营分析师
description: 分析客服数据，生成回复模板

prompt_template: |
  你是一位资深的客户支持运营分析师。
  核心职责：分析客服数据，生成回复模板。
  汇报风格：先说结论，后列数据，使用 Markdown 表格。
EOF
```

---

### 第二步：通过 API 启动 Agent

```bash
curl -X POST http://localhost:8080/sessions/spawn \
  -H "Content-Type: application/json" \
  -d '{
    "runtime": "subagent",
    "task": "分析客服数据，找出 Top 3 问题类型和 Severity 分布",
    "mode": "run",
    "attachments": [
      {
        "name": "support_cases_90days.xlsx",
        "path": "C:\\Vibe_Data\\M09\\"
      }
    ]
  }'
```

---

### 第三步：查看结果

```bash
# 结果保存到 analysis_report.md
cat analysis_report.md
```

---

## ✅ 验收标准
- API 调用成功（返回 200 OK）
- analysis_report.md 包含 Top 3 问题
- 输出格式为 Markdown 表格
```

---

## 🎯 教学建议

### 针对不同受众选择交互方式

| 受众 | 推荐方式 | 理由 |
|------|---------|------|
| **企业培训（非技术）** | Discord 交互版 | 无需编程，像聊天一样简单 |
| **开发者培训** | 命令行交互版 | 展示 API 调用，适合集成 |
| **自动化场景** | cron 定时任务版 | 定期自动生成报告 |

---

### 关键教学点

1. **Agent 不是"创建"的，是"配置"的**
   - 无 WebUI 界面
   - 通过配置文件定义行为
   - 通过 API/Discord 唤醒

2. **Skill 不是"挂载"的，是"调用"的**
   - 无 Skill 上传功能
   - 在提示词中定义技能逻辑
   - Agent 根据意图自动选择

3. **SOUL.md 不是"上传"的，是"内嵌"的**
   - 无 SOUL.md 上传按钮
   - 角色设定写在 prompt_template 中
   - 作为 Agent 的"系统提示词"

---

## 📋 术语调整对照表

| 专家手册术语 | 实际 OpenClaw 术语 | 说明 |
|-------------|------------------|------|
| OpenClaw WebUI | OpenClaw CLI / Discord bot | 无 Web 界面 |
| 创建新 Agent | sessions_spawn API | 通过 API 调用 |
| 上传 SOUL.md | prompt_template 字段 | 内嵌在配置中 |
| 挂载 Skill | 技能逻辑写在提示词中 | 无 Skill 上传功能 |
| 部署运行 | 调用 API 或发送 Discord 消息 | 无部署按钮 |
| 好友列表/工作台 | Discord 频道或 API 返回 | 无好友列表概念 |

---

## ✅ 结论

### 专家手册的优点
- ✅ 实验目标清晰（多技能自动调用）
- ✅ 操作步骤逻辑连贯
- ✅ 验收标准明确
- ✅ 对话测试设计合理

### 需要调整的部分
- ❌ **OpenClaw WebUI 不存在** → 改为 Discord 或命令行
- ❌ **上传文件功能不存在** → 改为配置文件
- ❌ **Skill 挂载概念不存在** → 改为提示词模板
- ❌ **SOUL.md 上传不存在** → 改为内嵌在 prompt 中

### 推荐方案
**使用 Discord 交互版操作手册**：
- ✅ 无需编程基础
- ✅ 像聊天一样简单
- ✅ 适合企业培训场景
- ✅ 符合 OpenClaw 实际能力

---

**评估完成时间**：2026-03-09 01:15 UTC  
**下一步**：根据调整后的手册重新编写 Lab 2 实验指导
