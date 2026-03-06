# MS-4004 OpenCode 办公效率课程

> 基于 Microsoft MS-4004 官方课程内容，适配 OpenCode 本地化实现

---

## 📖 课程介绍

本课程面向企业高管和管理层，通过 OpenCode Desktop 提升日常办公效率。你不需要任何编程基础，只需要用自然语言告诉 OpenCode 你想做什么。

**课程特色**：
- ✅ 零基础友好：无需编程经验
- ✅ 本地运行：使用 OpenCode Desktop，数据不出本地
- ✅ 实战导向：10 个真实办公场景
- ✅ 即学即用：每个实验 15-30 分钟

---

## 📚 课程目录

| 模块 | 场景 | 状态 | 实验内容 |
|------|------|------|---------|
| **M01** | 高管场景 | ✅ 已完成 | Word 高管简报生成、Excel 预算分析 |
| M02 | 销售场景 | 🚧 进行中 | 销售报告、客户数据分析 |
| M03 | IT 场景 | ⏳ 待开发 | IT 资产管理、项目文档 |
| M04 | 市场场景 | ⏳ 待开发 | 营销材料、竞品分析 |
| M05 | 财务场景 | ⏳ 待开发 | 财务报告、预算编制 |
| M06 | HR 场景 | ⏳ 待开发 | 员工文档、招聘材料 |
| M07 | 运营场景 | ⏳ 待开发 | 运营报告、流程优化 |
| M08 | 沟通场景 | ⏳ 待开发 | 邮件、会议纪要 |
| M09 | 客服场景 | ⏳ 待开发 | 客服文档、FAQ |
| M10 | 法律场景 | ⏳ 待开发 | 合同、合规文档 |

---

## 🚀 快速开始

### 前置要求

- 安装 [OpenCode Desktop](https://github.com/openclaw/opencode)
- 配置 AI 模型（推荐：百炼 Code Plan / qwen3.5-plus）
- Python 3.8+（OpenCode 会自动管理依赖）

### 使用步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/cloudzun/ms-4004-opencode-course.git
   cd ms-4004-opencode-course/M01-executives
   ```

2. **打开 OpenCode Desktop**
   - 工作目录指向 `M01-executives/`

3. **按照实验手册操作**
   - 打开 `README.md`
   - 复制提示词，粘贴到 OpenCode 对话框
   - 等待生成结果

---

## 📁 项目结构

```
ms-4004-opencode-course/
├── README.md                    # 本文件
├── M01-executives/              # M01 高管场景
│   ├── README.md                # 实验手册
│   └── materials/               # 示例文件
│       ├── Northwind Traders Q3 sales data.xlsx
│       └── Northwind Traders Q4 budget forecast.xlsx
├── M02-sales/                   # M02 销售场景（开发中）
├── M03-it/                      # M03 IT 场景（待开发）
└── ...
```

---

## 📝 学习建议

1. **按顺序学习**：M01 → M02 → ... → M10，难度逐步提升
2. **动手实践**：每个实验都要自己跑一遍，不要只看
3. **举一反三**：学完后尝试用到自己的工作文件上
4. **记录问题**：遇到问题可以提 Issue，我们一起解决

---

## 🤝 贡献指南

欢迎贡献！如果你有好的实验想法或改进了提示词：

1. Fork 本仓库
2. 创建分支：`git checkout -b feature/my-improvement`
3. 提交修改：`git commit -m 'Add some improvement'`
4. 推送分支：`git push origin feature/my-improvement`
5. 提交 Pull Request

---

## 📄 许可证

MIT License

---

## 🔗 相关资源

- [OpenCode 官方文档](https://github.com/openclaw/opencode)
- [Microsoft MS-4004 原版课程](https://github.com/MicrosoftLearning/MS-4004-Empower-workforce-copilot-use-cases)
- [OpenClaw 社区](https://clawhub.ai)

---

**Made with ❤️ for OpenCode Community**
