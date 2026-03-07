// 根据 PPT 演讲大纲生成 PowerPoint 演示文稿
// 使用方法：node generate-ppt.js

const pptx = require("./pptx-generator.js");

// 演示文稿数据（根据实际大纲内容调整）
const presentationData = {
  title: "IT 项目状态报告（2026 年第一季度）",
  subtitle: "高级管理层汇报",
  date: "2026 年 3 月",
  slides: [
    {
      type: "title",
      title: "IT 项目状态报告（2026 年第一季度）",
      subtitle: "高级管理层汇报",
      date: "2026 年 3 月"
    },
    {
      type: "content",
      title: "执行摘要",
      bullets: [
        "多个 IT 项目按计划推进，整体进展良好",
        "CipherGuard 安全部署项目进入部署规划环节",
        "Fargo 配送中心扩建项目处于早期建设阶段",
        "Fabrikam 项目组合表现强劲，部分项目已产生业务价值",
        "整体风险可控，关键里程碑基本按计划达成"
      ],
      notes: "本季度公司 IT 项目整体表现良好。网络安全部署项目已完成安全评估，配送中心扩建按计划进行。多个创新项目已完成并产生显著业务价值。"
    },
    {
      type: "content",
      title: "项目组合概览",
      bullets: [
        "进行中项目：7 个",
        "计划中项目：2 个",
        "已完成项目：2 个",
        "重点项目：CipherGuard 安全部署、Fargo 配送中心扩建",
        "创新项目：EV 电池设计、智能部件集成、数字孪生平台"
      ],
      notes: "当前项目组合包含 11 个项目，涵盖安全、基础设施、研发等多个领域。重点项目进展顺利。"
    },
    {
      type: "table",
      title: "重点项目进度",
      headers: ["项目名称", "状态", "关键里程碑", "预计完成"],
      rows: [
        ["CipherGuard 安全部署", "进行中", "安全评估完成，部署规划中", "2026 年 Q3"],
        ["Fargo 配送中心扩建", "进行中", "基础工程完成", "2026 年 6 月 22 日"],
        ["EV 电池外壳重新设计", "进行中", "原型完成，材料测试中", "2026 年 Q3"],
        ["OEM 合作伙伴扩展", "已完成", "签署 3 家新合同", "已完成"]
      ],
      notes: "重点项目进度表显示各项目按计划推进。CipherGuard 和 Fargo 项目是关键路径项目，需重点关注。"
    },
    {
      type: "two-column",
      title: "主要风险与问题",
      leftTitle: "主要风险",
      leftBullets: [
        "技术集成风险：兼容性问题可能影响部署",
        "资源约束风险：多项目并行导致资源紧张",
        "合规风险：Q3 审计时间紧迫",
        "供应链风险：外部供应商交付可能延迟"
      ],
      rightTitle: "已识别问题",
      rightBullets: [
        "Fargo 施工期间需协调临时货运路线",
        "可持续涂层计划技术难度较高",
        "智能部件集成试点协调成本较高"
      ],
      notes: "风险和问题总体可控。需重点关注技术集成和资源协调问题。"
    },
    {
      type: "content",
      title: "用户反馈与调查结果",
      bullets: [
        "调查参与人数：50 人，响应率 83%",
        "平均评分：2.98 分（1=非常满意，5=非常不满意）",
        "满意度分布：满意 42%，中性 30%，不满意 28%",
        "正面反馈：沟通清晰、期限达成、项目管理良好",
        "改进建议：加强沟通、改进时间线遵守、优化系统体验"
      ],
      notes: "用户调查显示整体满意度中等。需要加强沟通和项目管理系统体验优化。"
    },
    {
      type: "content",
      title: "下一步计划",
      bullets: [
        "CipherGuard：完成部署规划，启动产品配置和安装（4 月）",
        "Fargo 配送中心：完成建筑框架（3 月 2 日），推进电气系统安装",
        "ERP 现代化：启动第二阶段 rollout（Q2）",
        "ISO 合规审计：完成文档和流程审查，准备 Q3 审计",
        "自动化装配线：完成前期准备，Q2 正式启动"
      ],
      notes: "下季度关键任务明确。需重点关注 CipherGuard 部署和 Fargo 项目建设。"
    },
    {
      type: "content",
      title: "关键交付物时间表",
      bullets: [
        "CipherGuard 部署完成报告及测试验证文档（Q3）",
        "Fargo 配送中心正式投入使用（6 月 22 日）",
        "EV 电池外壳新材料量产方案（Q3）",
        "可持续性仪表板季度分析报告（Q2）",
        "ISO 合规认证文档（Q3）"
      ],
      notes: "关键交付物时间表显示 Q3 是交付高峰期。需提前做好资源规划。"
    },
    {
      type: "content",
      title: "后续行动计划",
      bullets: [
        "建立定期沟通机制，每月发布项目进度通报（4 月中旬）",
        "优化项目管理系统用户体验，解决技术问题（5 月底）",
        "开展项目协作最佳实践培训，提升团队协作效率（Q3）",
        "建立反馈跟踪机制，确保改进建议得到落实（4 月底）"
      ],
      notes: "后续行动计划针对用户反馈提出改进措施。需确保按时落实。"
    },
    {
      type: "content",
      title: "Q&A",
      bullets: [
        "感谢各位管理层的关注与支持",
        "欢迎提问和讨论"
      ],
      notes: "结束页。准备回答管理层可能提出的问题。"
    }
  ]
};

// 主函数
async function main() {
  console.log("开始生成 PPT 演示文稿...");
  
  // 创建演示文稿
  const pres = pptx.createPresentation(presentationData.title);
  
  // 添加幻灯片
  for (const slideData of presentationData.slides) {
    switch (slideData.type) {
      case "title":
        pptx.addTitleSlide(pres, slideData.title, slideData.subtitle, slideData.date);
        break;
      case "content":
        pptx.addContentSlide(pres, slideData.title, slideData.bullets, slideData.notes);
        break;
      case "two-column":
        pptx.addTwoColumnSlide(pres, slideData.title, slideData.leftTitle, slideData.leftBullets, slideData.rightTitle, slideData.rightBullets);
        break;
      case "table":
        pptx.addTableSlide(pres, slideData.title, slideData.headers, slideData.rows, slideData.notes);
        break;
    }
  }
  
  // 保存演示文稿
  const filename = "IT 项目状态报告_2026Q1.pptx";
  await pptx.savePresentation(pres, filename);
  
  console.log("PPT 生成完成！");
}

// 运行主函数
main().catch(console.error);
