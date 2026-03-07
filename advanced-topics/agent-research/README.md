# Agent 研究资料库

本目录包含 OpenCode 定制 Agent 的可行性分析和课程设计资料，用于高阶 OpenCode 课程开发。

---

## 📁 目录结构

```
agent-research/
├── README.md                      # 本文件
├── feasibility-analysis.md        # 可行性分析报告（M04 Agent）
├── m01-m03-agent-analysis.md      # M01-M03 Agent 功能分析
├── agents/                        # Agent 配置文件（待开发）
│   ├── business-insights/
│   ├── rfp-response/
│   ├── surveys/
│   └── market-research/
├── experiments/                   # 实验手册（待开发）
│   ├── m01-business-insights/
│   ├── m02-rfp-response/
│   ├── m03-surveys-analyst/
│   └── m04-market-research/
└── docs/                          # 技术文档（待开发）
    ├── agent-design-guide.md
    ├── preset-prompt-templates.md
    └── multi-agent-collaboration.md
```

---

## 📊 核心文档

### 1. 可行性分析报告
**文件**：`feasibility-analysis.md`  
**内容**：
- M04 Market Research Agent + Analyst Agent 功能分析
- OpenCode 能力映射（技术可行性 9/10）
- 两种实现方案（轻量级 vs 完整版）
- 教学价值和实验设计建议
- 与原版 Copilot Studio 对比

**结论**：✅ 技术上完全可行，推荐方案 A（轻量级）用于高阶课程

---

### 2. M01-M03 Agent 功能分析
**文件**：`m01-m03-agent-analysis.md`  
**内容**：
- M01: Business Insights Agent（高管场景）
- M02: RFP Response Agent（销售场景）
- M03: Surveys Agent + Analyst Agent（IT 场景）
- 综合对比分析
- 推荐开发优先级

**可用 Agent 素材**：6 个 Agent，10 个实验

---

## 🎯 可用 Agent 汇总

| 模块 | Agent 名称 | 核心功能 | 难度 | 优先级 |
|------|-----------|---------|------|--------|
| **M01** | Business Insights | 业务监控 + 风险预警 | ⭐⭐ | ⭐⭐⭐ 高 |
| **M02** | RFP Response | RFP 自动响应 | ⭐⭐⭐ | ⭐⭐ 中 |
| **M03** | Surveys | 调查问卷设计 | ⭐⭐ | ⭐⭐⭐⭐ 最高 |
| **M03** | Analyst | 调查数据分析 | ⭐⭐⭐ | ⭐⭐⭐⭐ 最高 |
| **M04** | Market Research | 市场研究 | ⭐⭐⭐ | ⭐⭐⭐ 高 |
| **M04** | Analyst | 战略建议 | ⭐⭐⭐⭐ | ⭐⭐⭐ 高 |

---

## 📋 开发路线图

### Phase 1（1-2 周）：M01 Business Insights Agent
- 定义 Agent 配置文件
- 设计 6 个预设提示词
- 实现文件读取和数据分析
- 编写实验手册

**工作量**：8-12 小时

---

### Phase 2（2-3 周）：M03 Surveys + Analyst Agents
- Surveys Agent：问卷设计和导出
- Analyst Agent：数据分析和可视化
- 多 Agent 协作演示

**工作量**：16-24 小时

---

### Phase 3（3-4 周）：M02 RFP Response Agent
- 多文档整合
- 模板填充和格式化
- 合规矩阵生成

**工作量**：24-32 小时

---

### Phase 4（4-6 周）：M04 Market Research + Analyst
- 网络搜索集成
- 多 Agent 任务传递
- PPT 演示文稿自动化

**工作量**：40-60 小时

---

## 🔧 技术方案

### 方案 A：轻量级实现（推荐）

**核心理念**：自然语言提示词 + YAML 配置文件

**架构**：
```
用户输入 → OpenCode 理解 → 调用工具 → 输出结果
         ↑
    预设提示词（定义 Agent 角色）
```

**优点**：
- ✅ 快速验证（1-2 天）
- ✅ 教学友好
- ✅ 成本低

**适合场景**：教学/原型/个人使用

---

### 方案 B：完整 Agent 架构

**核心理念**：基于 OpenClaw 多 Agent 架构

**架构**：
```
OpenClaw Gateway
├── Agent: market_research
├── Agent: analyst
├── Agent: business_insights
└── Agent: rfp_response
```

**优点**：
- ✅ 生产级
- ✅ 完全隔离
- ✅ 可扩展

**适合场景**：企业部署/生产环境

---

## 📚 教学资源

### 实验设计模板

```markdown
# 实验 X：创建 [Agent 名称]

## 场景描述
[业务场景和痛点]

## 学习目标
- 理解 Agent 概念
- 设计预设提示词
- 调用工具完成任务

## 前置准备
- 示例文件列表
- 环境配置

## 实验步骤
1. 定义 Agent 角色
2. 配置知识源
3. 设计预设提示词
4. 测试和优化

## 预期输出
- [输出文件列表]

## 练习任务
- [扩展练习]
```

---

### 配置文件模板

```yaml
# agent_template.yaml
name: {Agent Name}
description: {Agent Description}
version: 1.0

capabilities:
  - web_search: 搜索网络
  - document_read: 读取文件
  - data_analysis: 数据分析
  - report_generation: 生成报告

presets:
  - name: {preset_name}
    description: {描述}
    prompt: |
      {提示词模板}
    output_format: {docx|xlsx|pptx}
```

---

## 🚀 快速开始

### 1. 阅读可行性分析
```bash
cat feasibility-analysis.md
```

### 2. 查看 M01-M03 分析
```bash
cat m01-m03-agent-analysis.md
```

### 3. 选择 Phase 1 开始开发
```bash
cd agents/business-insights/
# 创建 agent.yaml 和 presets.yaml
```

---

## 📝 更新日志

| 日期 | 版本 | 更新内容 |
|------|------|---------|
| 2026-03-07 | v1.0 | 初始版本，包含可行性分析和 M01-M03 分析 |

---

**维护者**：HuaQloud AI Architect  
**最后更新**：2026-03-07 09:15 UTC
