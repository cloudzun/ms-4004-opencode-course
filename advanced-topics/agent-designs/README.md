# Agent Designs - 高阶 Agent 设计文档

本目录包含高阶 OpenCode 课程的 Agent 设计文档和开发规划。

---

## 📁 目录结构

```
agent-designs/
├── README.md                       # 本文件
├── contract-reviewer/              # 合同审查专家（优先级最高）
│   └── design.md                   # 完整设计文档
├── financial-analyst/              # 财务分析师（待开发）
└── financial-insights/             # 财务洞察专家（待开发）
```

---

## 🎯 可用 Agent 列表

| Agent | 状态 | 优先级 | 预计工作量 |
|-------|------|--------|-----------|
| **Contract Reviewer** | ✅ 设计完成 | ⭐⭐⭐⭐ 最高 | 16-20h |
| Financial Analyst | ⏳ 规划中 | ⭐⭐⭐ 高 | 12-16h |
| Financial Insights | ⏳ 规划中 | ⭐⭐⭐ 高 | 20-24h |

---

## 📊 Contract Reviewer Agent

**状态**：✅ 设计完成，待开发  
**优先级**：⭐⭐⭐⭐ 最高  
**预计工作量**：16-20 小时（3-4 周）

### 核心功能

- 合同解析（Word/PDF → 结构化数据）
- 多合同对比（生成对比矩阵）
- 风险评估（5 维度评估框架）
- 谈判建议（数据驱动策略）

### 输出文件

- `contract_comparison.xlsx` - 对比矩阵表
- `risk_assessment.docx` - 风险评估报告
- `negotiation_tips.docx` - 谈判策略文档
- `executive_summary.pptx` - 高管汇报

### 开发路线图

| Phase | 内容 | 周期 | 工作量 |
|-------|------|------|--------|
| **Phase 1** | 基础框架 + 合同解析 | 1 周 | 6-8h |
| **Phase 2** | 对比引擎 | 1 周 | 6-8h |
| **Phase 3** | 风险评估 | 1 周 | 8-10h |
| **Phase 4** | 谈判建议 + 集成 | 1 周 | 8-10h |
| **总计** | - | **4 周** | **28-36h** |

### 详细设计

📄 [查看完整设计文档](contract-reviewer/design.md)

---

## 🚀 下一步

### 正在进行

- ⏳ **M05 基础课程开发**（优先级：高）
  - 5 个独立实验
  - 2-3 周完成

### 接下来

- ⏳ **Contract Reviewer Agent 开发**（优先级：最高）
  - 4 周开发周期
  - 打造明星 Agent 案例

---

**维护者**：HuaQloud AI Architect  
**最后更新**：2026-03-07 09:35 UTC
