# M10 法律场景 - 高阶 Agent 设计（存放版）

**版本**: v1.0  
**状态**: 🔵 设计完成，待实现  
**完成时间**: 2026-03-08 07:15 UTC

---

## Agent 1：Regulatory Inquiry Assistant（监管查询助手）

### 1.1 Agent 概览

**用途**：为法务团队提供权威法规查询和审计支持  
**适用场景**：监管审计、法规咨询、合规风险评估  
**技术栈**：OpenCode + Web Search + YAML 配置

---

### 1.2 Agent 设计规范

```yaml
agent:
  name: Regulatory Inquiry Assistant
  version: 1.0
  
  metadata:
    description: |
      监管查询助手 - 为法务团队提供权威法规查询和审计支持。
      通过搜索官方政府网站、监管机构网站、法律法规数据库，
      生成有依据的答案，帮助法务团队应对监管审计。
    
    target_audience: 法务经理、合规负责人、法务专员
    language: 中文/English
    complexity_level: 高阶（Agent 设计）
  
  capabilities:
    - name: web_search
      description: 搜索权威法规来源
      sources:
        - government_sites  # .gov 网站
        - regulatory_agencies  # 监管机构
        - legal_databases  # 法律法规数据库
      
    - name: regulatory_qa
      description: 法规问答
      features:
        - cite_sources: true  # 引用来源
        - flag_uncertainty: true  # 标注不确定性
        - version_tracking: true  # 版本跟踪
        - changelog_aware: true  # 感知法规变更
    
    - name: audit_support
      description: 审计支持
      features:
        - risk_assessment: true  # 风险评估
        - timeline_recommendations: true  # 时间建议
        - mitigation_strategies: true  # 缓解策略
    
    - name: cross_reference
      description: 交叉引用
      features:
        - multi_regulation: true  # 多法规对比
        - jurisdiction_mapping: true  # 管辖权映射
        - version_comparison: true  # 版本对比
  
  knowledge_sources:
    primary:
      - name: Government Regulatory Websites
        url_pattern: "*.gov.cn, *.gov"  # 中国、美国政府网站
        credibility: ⭐⭐⭐⭐⭐
        
      - name: Regulatory Agencies
        examples:
          - 中国网络信息办公室（CAC）
          - 美国 FDA（食药监）
          - 美国 FTC（联邦贸易委员会）
        credibility: ⭐⭐⭐⭐⭐
      
      - name: Legal Databases
        examples:
          - 中国法律信息库
          - Justia（美国）
          - EUR-Lex（欧盟）
        credibility: ⭐⭐⭐⭐⭐
    
    secondary:
      - name: Official Legal Commentaries
        credibility: ⭐⭐⭐⭐
      
      - name: Case Law Databases
        credibility: ⭐⭐⭐⭐

behavior_rules:
  professionalism:
    - tone: professional  # 专业语气
    - precision: high  # 高准确度
    - clarity: maximum  # 最大清晰度
  
  compliance:
    - cite_sources: mandatory  # 强制引用
    - flag_uncertainties: mandatory  # 强制标注不确定性
    - version_control: mandatory  # 版本控制
    - legal_disclaimer: mandatory  # 法律免责声明
  
  quality:
    - authoritative_only: true  # 只使用权威来源
    - reject_unverified: true  # 拒绝未验证信息
    - cross_check: true  # 交叉检查
    - update_frequency: weekly  # 每周更新

output_configuration:
  formats:
    - markdown  # 问答结果
    - json  # 结构化数据
    - html  # 网页报告
  
  structure:
    question: 用户问题
    answer: 权威答案
    sources:
      - source_name: 来源名称
        url: URL
        credibility: 可信度
        last_updated: 最后更新时间
    
    related_regulations: 相关法规列表
    version_info: 法规版本信息
    
    uncertainties: 不确定项
    legal_disclaimer: 法律免责声明
    
    recommendation: 建议
    next_steps: 后续步骤
```

---

### 1.3 Suggested Prompts（预定义提示词）

#### Prompt 1：消费者权利时间线

```
请回答以下关于消费者权利的问题：

消费者权利时间线
- 问题：在 CCPA/CPRA 框架下，经过核实的消费者请求（访问、删除、更正）
  的响应时间是多少？适用哪些例外情况？

输出要求：
1. 响应时间要求（按请求类型）
2. 验证要求
3. 可适用的例外情况
4. 权威来源和直接链接

来源优先级：
- 官方政府网站（.gov）
- 监管机构指导
- 法律法规数据库
```

#### Prompt 2：分享 vs 销售定义

```
请回答以下问题：

分享 vs 销售定义与影响
- 问题：CPRA 如何定义和区分"分享"与"销售"个人信息？
  这对选择退出权和跨情景行为广告有什么实际合规影响？

输出要求：
1. 法律定义对比
2. 实际合规影响
3. 企业操作指南
4. 权威来源引用

分析维度：
- 定义差异
- 实际案例
- 企业风险
- 合规建议
```

#### Prompt 3：数据泄露通知

```
请回答以下问题：

数据泄露通知要求
- 问题：影响加州居民的数据泄露通知的核心要素、时间和收件人要求是什么？
  在监管沟通中应引用哪些权威来源？

输出要求：
1. 核心要素清单
2. 通知时间表
3. 收件人类别
4. 权威来源和链接

重点覆盖：
- 通知时限
- 通知对象
- 通知内容
- 特殊场景例外
```

#### Prompt 4：数据保留指南

```
请回答以下问题：

数据保留和最小化指南
- 问题：总结 CPRA 关于数据保留、最小化和目的限制的要求。
  为法律审查提供适合的通俗语言解释。

输出要求：
1. 通俗语言解释
2. 可操作步骤（5 个）
3. 保留计划建议
4. 权威来源（优先政府网站）

输出形式：
- 法律要求说明
- 操作实现指南
- 保留计划模板
- 定期审查建议
```

#### Prompt 5：服务商和承包商义务

```
请回答以下问题：

服务商/承包商义务
- 问题：CCPA/CPRA 下服务商和承包商的合同义务是什么？
  需要哪些必要条款（使用限制、消费者请求协助、后续转移控制、审计）？

输出要求：
1. 条款对比表（条款名称 → 目的）
2. 合同模板建议
3. 供应商管理指南
4. 权威来源引用

表格形式：
| 条款名称 | 法律要求 | 实现要点 | 风险 |
|---------|---------|---------|------|
| ... | ... | ... | ... |
```

#### Prompt 6：执法和处罚风险

```
请回答以下问题：

执法和处罚风险评估
- 问题：CCPA/CPRA 的执法机制和处罚是什么？
  三种常见违规场景的风险等级如何？

输出要求：
1. 执法机构说明
2. 处罚范围说明
3. 风险矩阵（低/中/高）

场景 1: 未履行选择退出权
场景 2: 不当处理消费者请求
场景 3: 信息披露不足

输出形式：
- 风险矩阵
- 纠正措施建议
- 权威来源引用
```

---

### 1.4 Agent 工作流程

```
用户输入法规问题
       ↓
Agent 理解和分类问题
       ↓
确定所需法规和来源
       ↓
搜索权威网站（.gov/监管机构/数据库）
       ↓
提取和交叉验证信息
       ↓
生成答案（含引用和来源）
       ↓
标注不确定性和版本信息
       ↓
输出结构化结果（Markdown/JSON）
```

---

### 1.5 实现检查清单

- [ ] Web 搜索配置（政府网站、监管机构、数据库）
- [ ] 数据源优先级设置
- [ ] 引用格式规范化
- [ ] 不确定性标注规则
- [ ] 法律免责声明
- [ ] 预定义提示词 6 个
- [ ] 测试用例 10 个
- [ ] 文档完善

---

## Agent 2：Legal Risk Assessment（法律风险评估助手）

### 2.1 Agent 概览

**用途**：进行企业法律风险评估和合规框架设计  
**适用场景**：风险识别、合规规划、内部治理  
**技术栈**：OpenCode + Data Analysis + Risk Matrix

---

### 2.2 Agent 设计规范

```yaml
agent:
  name: Legal Risk Assessment Assistant
  version: 1.0
  
  metadata:
    description: |
      法律风险评估助手 - 根据业务场景、所在地区、行业特征，
      生成企业级法律风险评估报告。包含风险识别、优先级排序、
      缓解策略和合规框架设计。
    
    target_audience: 法务经理、风险官、合规负责人、企业管理层
    language: 中文/English
    complexity_level: 高阶（Agent 设计）
  
  capabilities:
    - name: risk_identification
      description: 风险识别
      features:
        - industry_specific: true  # 行业特定
        - geography_aware: true  # 地域感知
        - regulatory_aware: true  # 法规感知
        - business_context: true  # 业务场景
    
    - name: risk_prioritization
      description: 风险优先级排序
      features:
        - likelihood_assessment: true  # 可能性评估
        - impact_assessment: true  # 影响评估
        - risk_matrix: true  # 风险矩阵
    
    - name: mitigation_strategies
      description: 缓解策略
      features:
        - preventive: true  # 预防性措施
        - detective: true  # 检测性措施
        - corrective: true  # 纠正性措施
    
    - name: compliance_framework
      description: 合规框架
      features:
        - governance_structure: true  # 治理结构
        - policy_templates: true  # 政策模板
        - monitoring_plan: true  # 监控计划
  
  analysis_dimensions:
    - contract_law  # 合同法
    - employment_law  # 劳动法
    - data_privacy  # 数据隐私
    - intellectual_property  # 知识产权
    - regulatory_compliance  # 法规合规
    - litigation_risk  # 诉讼风险
    - fraud_risk  # 欺诈风险

output_structure:
  executive_summary: 执行摘要
  
  risk_matrix:
    - high_high: 高优先级
    - high_low: 中高优先级
    - low_high: 中低优先级
    - low_low: 低优先级
  
  risk_details:
    - risk_id: 风险编号
    - risk_category: 风险类别
    - description: 风险描述
    - likelihood: 可能性
    - impact: 影响
    - priority: 优先级
    - applicable_regulations: 适用法规
    - mitigation_strategies: 缓解策略
    - responsible_party: 责任方
    - timeline: 时间表
  
  compliance_framework:
    - governance: 治理建议
    - policies: 政策模板
    - monitoring: 监控计划
    - audit: 审计建议
  
  recommendations: 建议和后续步骤
```

---

### 2.3 应用场景

**场景 1**：初创 SaaS 公司（美国）
- 数据隐私风险（CCPA/GDPR）
- 雇佣合规风险
- 知识产权保护

**场景 2**：制造企业（中国）
- 产品安全和责任
- 环保合规
- 劳动法合规

**场景 3**：医疗健康企业
- 医疗法规
- 数据隐私（HIPAA）
- 合同审查

---

## Agent 3：Contract Intelligence（合同智能分析助手）

### 3.1 Agent 概览

**用途**：合同智能分析、条款识别、风险警告  
**适用场景**：合同审查、供应商管理、风险控制  
**技术栈**：OpenCode + Document Analysis + NLP

---

### 3.2 Agent 设计规范

```yaml
agent:
  name: Contract Intelligence Assistant
  version: 1.0
  
  metadata:
    description: |
      合同智能分析助手 - 自动分析合同条款，识别关键条款，
      标注风险条款，提供修改建议。支持多语言、多管辖权合同。
    
    target_audience: 法务专员、采购经理、合同管理员
    language: 中文/English
    complexity_level: 高阶（Agent 设计）
  
  capabilities:
    - name: clause_extraction
      description: 条款提取
      clause_types:
        - payment_terms  # 支付条款
        - delivery_terms  # 交付条款
        - liability_limits  # 责任限制
        - termination_clauses  # 终止条款
        - indemnification  # 赔偿条款
        - governing_law  # 管辖法律
        - dispute_resolution  # 纠纷解决
        - confidentiality  # 保密条款
    
    - name: risk_detection
      description: 风险检测
      risk_types:
        - unfair_liability  # 不公平责任
        - ambiguous_terms  # 模糊条款
        - missing_protections  # 缺失保护
        - one_sided_terms  # 单边条款
    
    - name: comparative_analysis
      description: 对比分析
      features:
        - vs_company_standard  # 与公司标准对比
        - vs_industry_standard  # 与行业标准对比
        - red_flag_detection  # 红旗条款检测
    
    - name: amendment_suggestions
      description: 修改建议
      features:
        - clause_revision  # 条款修改
        - risk_mitigation  # 风险缓解
        - market_benchmark  # 市场基准

output_structure:
  contract_summary: 合同摘要
  
  key_terms: 关键条款
    - party_info: 当事人信息
    - term_period: 期限
    - consideration: 对价
    - primary_obligations: 主要义务
  
  risk_assessment: 风险评估
    - high_risk_clauses: 高风险条款
    - medium_risk_clauses: 中风险条款
    - missing_protections: 缺失保护
  
  amendment_recommendations: 修改建议
    - clause_id: 条款编号
    - current_language: 当前语言
    - issue: 问题
    - suggested_revision: 建议修改
    - rationale: 理由
  
  approval_recommendation: 批准建议
```

---

## 总结：高阶 Agent 设计

| Agent | 核心功能 | 工作量 | 优先级 |
|-------|---------|--------|--------|
| **Regulatory Inquiry** | 法规查询 + 审计 | 16-20h | ⭐⭐⭐⭐ 最高 |
| **Risk Assessment** | 风险评估框架 | 20-24h | ⭐⭐⭐ 高 |
| **Contract Intelligence** | 合同分析 | 20-24h | ⭐⭐⭐ 高 |
| **总计** | - | **56-68h（3-4 周）** | - |

---

**设计完成时间**：2026-03-08 07:15 UTC  
**版本**：v1.0（设计存放）  
**状态**：🔵 待实现
