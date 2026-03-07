# Advanced Topics - 高阶 OpenCode 课程资料

本目录包含高阶 OpenCode 课程的研发资料，包括 Agent 定制、多 Agent 协作、企业级部署等主题。

---

## 📁 目录

| 子目录 | 主题 | 状态 |
|--------|------|------|
| **agent-research/** | Agent 定制可行性研究 | ✅ 完成 |
| **agent-designs/** | Agent 详细设计文档 | ✅ 进行中 |

---

## 🎯 研究方向

### 1. Agent 定制（Agent Customization）
**目标**：教学生创建专业领域的 AI Agent

**主题**：
- Agent 角色定义
- 预设提示词设计
- 知识源配置
- 工具集成

**参考文档**：
- [可行性分析报告](agent-research/feasibility-analysis.md)
- [M01-M03 Agent 分析](agent-research/m01-m03-agent-analysis.md)

---

### 2. 多 Agent 协作（Multi-Agent Collaboration）
**目标**：实现多个 Agent 之间的任务分配和协作

**主题**：
- Agent 间通信
- 任务链设计
- 数据传递
- 结果整合

**状态**：⏳ 规划中

---

### 3. 企业级部署（Enterprise Deployment）
**目标**：生产环境 Agent 部署最佳实践

**主题**：
- OpenClaw 多 Agent 架构
- 会话隔离
- 认证和授权
- 监控和日志

**状态**：⏳ 规划中

---

## 📊 可用 Agent 素材

基于 M01-M05 模块分析，共发现 **9 个 Agent，18 个实验**：

| 模块 | Agent | 数量 | 实验数 |
|------|-------|------|--------|
| M01 | Business Insights | 1 | 2 |
| M02 | RFP Response | 1 | 3 |
| M03 | Surveys + Analyst | 2 | 2 |
| M04 | Market Research + Analyst | 2 | 3 |
| M05 | Financial Analyst + Contract Reviewer + Financial Insights | 3 | 8 |
| **总计** | - | **9** | **18** |

详细分析：
- [M01-M03 Agent 分析](agent-research/m01-m03-agent-analysis.md)
- [M04 可行性分析](agent-research/feasibility-analysis.md)
- [M05 财务场景分析](agent-research/m05-finance-analysis.md)

---

## 🚀 开发路线图

| Phase | 主题 | 周期 | 状态 |
|-------|------|------|------|
| **Phase 1** | M01 Business Insights Agent | 1-2 周 | ⏳ 待开始 |
| **Phase 2** | M03 Surveys + Analyst Agents | 2-3 周 | ⏳ 待开始 |
| **Phase 3** | M02 RFP Response Agent | 3-4 周 | ⏳ 待开始 |
| **Phase 4** | M04 Market Research + Analyst | 4-6 周 | ⏳ 待开始 |
| **Phase 5** | M05 Contract Reviewer Agent | 4 周 | ⏳ 待开始 |

> 💡 **优先级最高**：Contract Reviewer Agent（合同审查专家）- 商业价值最高，设计文档已完成

---

## 📚 相关资源

- [OpenClaw 多 Agent 架构文档](https://docs.openclaw.ai/concepts/multi-agent)
- [M04 可行性分析报告](agent-research/feasibility-analysis.md)
- [M01-M03 Agent 分析](agent-research/m01-m03-agent-analysis.md)

---

**维护者**：HuaQloud AI Architect  
**最后更新**：2026-03-07 11:30 UTC

---

## 📝 更新日志

- **2026-03-07**：新增 M05 财务场景分析，Agent 总数增至 9 个
- **2026-03-07**：新增 `agent-designs/` 目录，存放详细设计文档
- **2026-03-07**：Contract Reviewer Agent 设计文档完成（优先级最高）
