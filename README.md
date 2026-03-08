# MS-4004 OpenCode 办公效率课程

> 基于 Microsoft MS-4004 官方课程内容，适配 OpenCode 本地化实现

**课程理念**：用自然语言与 AI 协作，提升办公效率

---

## 📖 课程介绍

本课程面向企业高管、销售人员、IT 专业人员等办公人群，通过 OpenCode Desktop 提升日常办公效率。

**课程特色**：
- ✅ **零基础友好**：不需要编程基础，用自然语言描述需求即可
- ✅ **本地运行**：使用 OpenCode Desktop，数据不出本地
- ✅ **实战导向**：10 个真实办公场景，每个场景 2-3 个实验
- ✅ **递进式学习**：入门版提示词 → 优化版提示词，循序渐进
- ✅ **探索式学习**：AI 输出偏差是 feature，鼓励迭代调整

---

## 📚 课程目录

| 模块 | 场景 | 适用人群 | 实验内容 | 状态 |
|------|------|---------|---------|------|
| **M01** | 高管场景 | 企业高管、管理层 | Word 高管简报、Excel 预算分析 | ✅ 完成 |
| **M02** | 销售场景 | 销售团队、售前工程师 | Word 销售提案、Excel RFP 分析 | ✅ 完成 |
| **M03** | IT 场景 | IT 项目经理、技术负责人 | Word 项目报告、Excel 调查分析、PPT 演示文稿 | ✅ 完成 |
| **M04** | 市场场景 | 市场团队、品牌专员 | Word 报告整合、Excel 营销分析、AI 创意生成、AI 文案优化 | ✅ 完成 |
| **M05** | 财务场景 | 财务人员、分析师 | Excel COGS 分析、Word 合同对比、PPT 高管演示、会议笔记总结、邮件起草 | ✅ 完成 |
| **M06** | HR 场景 | 人力资源、招聘团队 | Excel HR 数据分析、HR 报告生成、Outlook 沟通邮件、Loop 协作规划、HR 政策问答 | ✅ 完成 |
| M07 | 运营场景 | 运营团队、项目经理 | 运营报告、流程优化 | ⏳ 待开发 |
| M08 | 沟通场景 | 全员 | 邮件、会议纪要 | ⏳ 待开发 |
| M09 | 客服场景 | 客服团队 | 客服文档、FAQ | ⏳ 待开发 |
| M10 | 法律场景 | 法务团队 | 合同、合规文档 | ⏳ 待开发 |

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
   - 工作目录指向模块目录（如 `M01-executives/`）

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
├── M02-sales/                   # M02 销售场景
│   ├── README.md                # 实验手册
│   └── materials/               # 示例文件
├── M03-it/                      # M03 IT 场景
│   ├── README.md                # 实验手册
│   └── materials/               # 示例文件
├── M04-marketing/               # M04 市场场景
│   ├── README.md                # 实验手册
│   └── materials/               # 示例文件
├── M05-finance/                 # M05 财务场景（最新）
│   ├── README.md                # 实验手册
│   ├── experiment_verification_report_revised.md  # 验证报告
│   └── materials/               # 示例文件
└── advanced-topics/             # 高阶主题（Agent 设计）
    ├── README.md                # 导航文档
    ├── agent-research/          # Agent 研究报告
    └── agent-designs/           # Agent 设计文档
```

---

## 💡 学习建议

### 1. 从简单提示词开始

每个实验都提供**入门版提示词**，建议先尝试这个版本：

```
请读取 Excel 文件，生成高管简报。
内容要求：执行摘要、关键洞察、同比分析、风险提示。
```

### 2. 根据结果迭代优化

如果效果不满意，使用**优化版提示词**或自定义调整：

```
请添加两张可视化图表：
1. 各类别 2024 vs 2025 收入对比柱状图
2. 各地区收入增长率对比条形图
```

### 3. 使用前置提示词设置规范

为了获得更一致的输出质量，建议在开始实验前先设置格式规范：

```
在开始后续任务之前，请先了解以下格式规范：

**字体要求**：
- 中文字体：微软雅黑
- 英文字体：Verdana

**语言要求**：
- 所有输出使用简体中文
- 专业术语保留英文原文

请在后续所有任务中记住并应用这些规范。
```

### 4. 鼓励迭代调整

**AI 的输出偏差是 feature，不是 bug**——你可以像和同事交流一样不断调整，直到满意为止。

**示例**：

| 轮次 | 你的提示词 | 结果 |
|------|-----------|------|
| 第一次 | "请生成一份销售提案" | 只有文字，没有数据表格 |
| 第二次 | "请添加 ROI 分析表格，展示不同规模酒店的投资回报" | 有表格，但数据不完整 |
| 第三次 | "请补充表格数据，包含小型/中型/大型酒店的成本和回报周期" | 完美 ✅ |

---

## 🎯 提示词技巧

好的提示词包含四个要素，能帮助 OpenCode 给出更准确的结果：

| 要素 | 说明 | 示例 |
|------|------|------|
| **目标** | 你想让 OpenCode 做什么 | "生成一份高管简报" |
| **背景** | 为什么需要这个，给谁看 | "为高级领导团队准备，用于季度汇报" |
| **来源** | 数据从哪里来 | "基于 Q3 销售数据 Excel 文件" |
| **要求** | 格式、结构、细节要求 | "包含执行摘要和关键洞察，保存为 Word 文档" |

---

## ❓ 常见问题

### Q1: 为什么生成了 `_v2` 版本的文件？

**原因**：原文件已被打开或占用，OpenCode 无法覆盖。

**解决**：
1. 关闭已打开的文件
2. 让 OpenCode 重新生成，或手动将 `_v2` 版本重命名

**预防**：生成文件前先关闭目标文件。

---

### Q2: 图表中的中文显示为方框怎么办？

**原因**：matplotlib 默认字体不支持中文。

**解决**：输入以下提示词让 OpenCode 修复：

```
请在生成图表的 Python 脚本中，添加中文字体配置：

import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei']
plt.rcParams['axes.unicode_minus'] = False

然后重新运行脚本生成报告。
```

> 💡 **已优化**：本课程的提示词已包含中文字体配置要求，第一次生成就应该正常显示中文。

---

### Q3: 提示"Permission denied"或"Device or resource busy"怎么办？

**原因**：Word/Excel 文件已被打开，无法写入。

**解决**：
1. 关闭已打开的文件
2. 让 OpenCode 重新生成

---

### Q4: 生成的内容和格式不符合要求怎么办？

**这是正常的！** OpenCode 是根据你的提示词生成内容的，如果结果不满意：

1. **明确指出问题**：如"ROI 分析表格缺失"
2. **告诉它如何修改**：如"请添加一个表格，展示不同规模酒店的投资回报"
3. **迭代优化**：可能需要 2-3 轮对话才能达到理想效果

> 💡 **鼓励**：不要担心需要多轮对话，这正是 AI 办公的优势——你可以像和同事交流一样不断调整，直到满意为止。AI 的输出偏差是 feature，不是 bug。

---

### Q5: OpenCode 生成了英文内容怎么办？

**原因**：提示词中没有明确指定语言。

**解决**：

```
请使用简体中文重新生成，专业术语保留英文原文（如 ROI、KPI、SLA）。
```

**预防**：在提示词开头明确"使用简体中文"。

---

### Q6: PPT 生成的样式太简单怎么办？（M03）

**原因**：VBA 宏自动生成的 PPT 只包含基本内容，没有精美样式。

**解决**：
1. **使用 PowerPoint 设计师工具**：打开 PPT 后，使用"设计师"功能自动美化
2. **手动调整**：应用 PowerPoint 内置模板，调整配色和布局
3. **等待 skill**：关注 OpenClaw 社区的 PPT 生成 skill 进展

**预期管理**：当前 VBA 方案适合快速生成初稿，正式场合建议手动美化。

---

## 🔗 相关资源

### 官方文档
- [OpenCode 官方文档](https://github.com/openclaw/opencode)
- [Microsoft MS-4004 原版课程](https://github.com/MicrosoftLearning/MS-4004-Empower-workforce-copilot-use-cases)
- [OpenClaw 社区](https://clawhub.ai)

### 技术参考
- [python-docx 库文档](https://python-docx.readthedocs.io/)（Word 文档处理）
- [openpyxl 库文档](https://openpyxl.readthedocs.io/)（Excel 文件操作）
- [matplotlib 库文档](https://matplotlib.org/)（图表生成）
- [python-pptx 库文档](https://python-pptx.readthedocs.io/)（PPT 生成技术参考）

### 技能扩展
- [office-automation-skill](https://github.com/texiaoyao/office-automation-skill)（Office 文档处理 skill）
- [markitdown-skill](https://github.com/karmanverma/markitdown-skill)（文档转 Markdown skill）

---

## 📄 许可证

MIT License

---

## 🙏 致谢

- 基于 Microsoft MS-4004 官方课程内容改编
- 感谢 OpenClaw 社区提供的工具和平台支持

---

**Made with ❤️ for OpenCode Community**
