export type Lang = 'zh' | 'en'
export type RoleLens = 'ops' | 'pm'

export const CONTACT = {
  phone: '13692774440',
  email: '1009843439@qq.com',
  github: 'https://github.com/luowenxi76-coder',
  voxradioRepo: 'https://github.com/luowenxi76-coder/VoxRadio-public',
  molipulseReport: 'molipulse.html',
  e2eExample: 'https://e2e.com/examples/moli',
  e2eDocs: 'https://e2e.com/docs/integrations/moli',
  awesomeMoli: 'https://github.com/lexmount/awesome-moli',
  juejinArticle: 'https://juejin.cn/post/7706755914727981096',
  moliPr3478: 'https://github.com/lexmount/moli/pull/3478',
} as const

export interface MetricItem {
  value: string
  unit: string
  label: string
  detail: string
  accent: 'vermilion' | 'cobalt' | 'emerald' | 'ink'
}

export interface TabBlock {
  id: string
  label: string
  leftTitle: string
  leftPoints: string[]
  rightTitle: string
  rightPoints: string[]
}

export interface ProofLink {
  label: string
  href: string
  badge?: string
}

export interface SiteCopy {
  nav: {
    brandSub: string
    links: { id: string; label: string }[]
    voxPill: string
    pulsePill: string
    contactCta: string
  }
  hero: {
    eyebrow: string
    roleOps: string
    rolePm: string
    displayName: string
    headlineOps: string
    headlinePm: string
    subcopyOps: string
    subcopyPm: string
    primaryCta: string
    secondaryCta: string
    cmdHint: string
    metricsOps: MetricItem[]
    metricsPm: MetricItem[]
  }
  statement: {
    tag: string
    segmentsOps: { text: string; highlight?: 'vermilion' | 'cobalt' }[]
    segmentsPm: { text: string; highlight?: 'vermilion' | 'cobalt' }[]
  }
  labHeader: {
    eyebrow: string
    title: string
    subtitle: string
  }
  molipulse: {
    badge: string
    title: string
    subtitle: string
    summary: string
    tags: string[]
    nodes: {
      id: string
      step: string
      title: string
      sub: string
      stat: string
      desc: string
    }[]
    tabs: TabBlock[]
    ctaReport: string
  }
  voxradio: {
    badge: string
    title: string
    subtitle: string
    summary: string
    tags: string[]
    stations: {
      id: string
      name: string
      meta: string
      bpm: string
      hookStatus: string
      detail: string
    }[]
    agents: {
      name: string
      state: 'active' | 'idle' | 'verified'
      note: string
    }[]
    securityBanner: string
    tabs: TabBlock[]
    ctaRepo: string
  }
  moliCase: {
    eyebrow: string
    title: string
    period: string
    subtitle: string
    summary: string
    tags: string[]
    globeTitle: string
    globeHint: string
    pipelineTitle: string
    steps: {
      code: string
      title: string
      metric: string
      desc: string
      evidence: string
    }[]
    tabs: TabBlock[]
    callout: string
    proofLinks: ProofLink[]
  }
  modelbestCase: {
    eyebrow: string
    title: string
    period: string
    subtitle: string
    summary: string
    tags: string[]
    kpis: { value: string; label: string; sub: string }[]
    tabs: TabBlock[]
    honestyNote: string
  }
  commercial: {
    eyebrow: string
    title: string
    subtitle: string
    cards: {
      org: string
      period: string
      role: string
      headline: string
      body: string
      metrics: { val: string; label: string }[]
      tags: string[]
    }[]
  }
  capability: {
    eyebrow: string
    title: string
    subtitle: string
    pillars: {
      code: string
      title: string
      weightOps: number
      weightPm: number
      summary: string
      stack: string[]
    }[]
  }
  footer: {
    aboutTag: string
    name: string
    eduLine: string
    targetLine: string
    statusBadge: string
    copyPhone: string
    copyEmail: string
    openCmd: string
    archNotch: string
  }
  cmdPalette: {
    placeholder: string
    empty: string
    groups: { nav: string; actions: string; links: string }
    items: {
      gotoSystems: string
      gotoMoli: string
      gotoModelBest: string
      gotoCommercial: string
      gotoCapabilities: string
      toggleLang: string
      lensOps: string
      lensPm: string
      copyPhone: string
      copyEmail: string
      openMoliPulse: string
      openVoxRadio: string
      openPr: string
    }
  }
  toast: {
    phoneCopied: string
    emailCopied: string
    switchedToOps: string
    switchedToPm: string
    langSwitched: string
  }
}

export const CONTENT: Record<Lang, SiteCopy> = {
  zh: {
    nav: {
      brandSub: 'AI PRODUCT LAB',
      links: [
        { id: 'systems', label: '原生系统' },
        { id: 'moli', label: '出海生态' },
        { id: 'modelbest', label: '面壁实战' },
        { id: 'commercial', label: '商业底色' },
      ],
      voxPill: 'VoxRadio · 246 commits',
      pulsePill: 'MoliPulse · 18/18 tests',
      contactCta: '联系我',
    },
    hero: {
      eyebrow: '2027 届硕士 · 北京语言大学数字经济 · 意向：深圳 / 广州 / 东莞',
      roleOps: 'AI 产品运营 / 出海 GTM',
      rolePm: 'AI 产品经理视角',
      displayName: '罗文希',
      headlineOps: '用工程化工具思维，打造闭环的 AI 开发者生态与出海增长',
      headlinePm: '从真实痛点出发，用 Vibe Coding 交付可验证的原生 AI 系统',
      subcopyOps:
        '连续在揽岳智能（Moli）与面壁智能（OpenBMB / VoxCPM / 声辞）实战：主导海外官网合作落地（e2e）、12 平台零误差归因看板与三平台飞书监控机器人，并独立交付原生 MCP 与 macOS AI 产品。',
      subcopyPm:
        '坚持“真实场景洞察 + 原生代码落地 + 严谨证据核验”：独立迭代 246 commits 原生 macOS AI 电台 VoxRadio、交付 MoliPulse MCP 记忆引擎、独立输出 20 页声辞竞品报告获采纳并定位 57/57 测试盲区推合 PR #3478。',
      primaryCta: '浏览核心系统',
      secondaryCta: '体验 MoliPulse 核验报告',
      cmdHint: '按 ⌘K 唤起全局指令台',
      metricsOps: [
        { value: 'e2e', unit: '官网合作', label: 'Moli 海外生态落地', detail: '80 邀约 / 56 台账冷启动上官网', accent: 'vermilion' },
        { value: '12 平台', unit: '152 作品', label: '面壁挑战赛归因', detail: '20.1 万播放 · 复核零不一致', accent: 'cobalt' },
        { value: '18/18', unit: 'pytest', label: 'MoliPulse MCP', detail: '6 Tools + SQLite WAL 记忆层', accent: 'emerald' },
        { value: '20 万', unit: '日均预算', label: '优矩信息流投放', detail: '管理 100+ 抖音/头条/百度账户', accent: 'ink' },
      ],
      metricsPm: [
        { value: '246', unit: 'commits', label: 'VoxRadio 原生应用', detail: 'macOS SwiftUI + 14 Agent Hooks', accent: 'vermilion' },
        { value: 'PR #3478', unit: 'Merged', label: '57/57 测试盲区排查', detail: '端到端像素对比推动研发合入', accent: 'cobalt' },
        { value: '20 页', unit: '团队采纳', label: '声辞市场调研报告', detail: '5 款国内外语音输入法深度对标', accent: 'emerald' },
        { value: '48 条', unit: '原帖溯源', label: '海外竞品社区洞察', detail: '覆盖 Lightpanda / Browser Use 等', accent: 'ink' },
      ],
    },
    statement: {
      tag: 'MANIFESTO // 01',
      segmentsOps: [
        { text: '不止写方案，' },
        { text: '直接造工具把运营闭环跑通。', highlight: 'vermilion' },
        { text: '从海外开发者社区冷启动、' },
        { text: 'Native MCP 生态台账，', highlight: 'cobalt' },
        { text: '到多平台归因零误差复核——每一项增长都有可追溯的真实证据。' },
      ],
      segmentsPm: [
        { text: '好产品不是把 AI 控制台铺在用户脸上，' },
        { text: '而是做克制减法与可靠兜底。', highlight: 'vermilion' },
        { text: '用 Claude Code 与 Codex 快速原研，' },
        { text: '以像素级核验与工程闭环，', highlight: 'cobalt' },
        { text: '把模糊想法落成每天自己真在用的原生软件。' },
      ],
    },
    labHeader: {
      eyebrow: 'SYSTEMS LAB // 02',
      title: '自研原生 AI 系统 · 可交互架构展示',
      subtitle: '不靠 PPT 讲概念——以下两个系统均为解决真实高频痛点独立定义并持续迭代的原生工程作品。',
    },
    molipulse: {
      badge: 'AGENT-NATIVE MCP ENGINE',
      title: 'MoliPulse',
      subtitle: '给 Codex / Claude 装上确定性 GTM 记忆的 Native stdio MCP 引擎',
      summary:
        '不强迫团队再维护一个网页后台：直接通过 Native stdio MCP Server 挂进日常 AI 编程助手，基于 SQLite WAL 强去重台账、moli fetch 实拍取证与防冲突飞书同步，把每天早上的生态巡检压缩成一句指令。',
      tags: ['Native MCP (6 Tools + 3 URIs)', 'SQLite WAL', 'FastAPI + React', 'lark-cli 防冲突', '18/18 pytest'],
      nodes: [
        {
          id: 'ingest',
          step: '01',
          title: 'GitHub / moli',
          sub: '54 仓库 · 106 别名',
          stat: '实时采集',
          desc: '通过 GitHub API 与自研浏览器 moli fetch（v1.1.27+）抓取动态页面 Markdown、DOM Eval 与本地 PNG 截图证据，拒绝登录墙幻觉。',
        },
        {
          id: 'wal',
          step: '02',
          title: 'SQLite WAL',
          sub: '79 条结构化信号',
          stat: 'repo_id 强去重',
          desc: '以数字 repo_id 与历史别名表跨目录、跨改名去重；严格拆分外部事实 / 内部负责人 / 飞书回执三态，同一回复跨会话不重复打扰。',
        },
        {
          id: 'mcp',
          step: '03',
          title: 'Native MCP',
          sub: '6 Tools + 3 URIs',
          stat: '订阅优先',
          desc: '直接挂载至 Codex / Claude Code / Cursor，支持 pulse_today / pulse_scout / pulse_brief 三条核心流，内置 Pydantic 零幻觉守卫与离线兜底。',
        },
        {
          id: 'sync',
          step: '04',
          title: 'Feishu Sync',
          sub: '30m 守护进程',
          stat: '18/18 pass',
          desc: 'lark-cli 写回飞书前先做并发 diff 检测防覆盖同事修改；pulsed 每 30 分钟后台巡检，并可联动 VoxRadio 触发本地语音播报。',
        },
      ],
      tabs: [
        {
          id: 'pivot',
          label: '1. 产品重构：网页 → MCP',
          leftTitle: '为什么要推翻“再做一个后台”？',
          leftPoints: [
            '每天早上在 Codex 里问“今天有哪些新回复、等谁推进”，但无状态对话框跨会话会失忆、反复翻老帖。',
            '强迫运营每天切到独立网页填表反而增加负担；最优解是直接作为 Native stdio MCP Server 嵌入现有工作流。',
          ],
          rightTitle: '零习惯迁移的三条核心指令',
          rightPoints: [
            'pulse_today：精准捕获零点赞新回复与 PR 合入，自动分清等我 / 待研发 / 等对方。',
            'pulse_scout & pulse_brief：跨目录去重筛项目，一键导出周报、Discord 播报与零隐私公开核验页。',
          ],
        },
        {
          id: 'ledger',
          label: '2. 确定性台账与取证',
          leftTitle: 'SQLite WAL 强去重与三态分离',
          leftPoints: [
            '基于 GitHub 数字 repo_id 与 106 条历史别名强去重，内置 54 个开源生态仓库记录。',
            '严格分离外部事实 / 内部负责人 / 飞书回执三态；lark-cli 写回前先做并发 diff，绝不覆盖同事改动。',
          ],
          rightTitle: 'Dogfooding moli fetch 真实取证',
          rightPoints: [
            '调用自研浏览器 moli fetch 读取动态渲染页与本地落盘 PNG 截图，拒绝 Base64 污染上下文。',
            '遇到登录墙或空壳页面诚实标为 unverified 并保留检查点，绝不编造结论。',
          ],
        },
        {
          id: 'provider',
          label: '3. 三层 Provider 与联动',
          leftTitle: '订阅优先三层可插拔 Provider',
          leftPoints: [
            '优先无痛调用本机官方订阅 CLI（Codex / Claude Code）+ Pydantic JSON Schema 严格校验。',
            '同步兼容 OpenAI 协议 API Key 与离线规则引擎兜底，断网或额度耗尽绝不白屏。',
          ],
          rightTitle: '30m 守护进程与 18/18 自动化验收',
          rightPoints: [
            'pulsed 每 30 分钟静默巡检，支持 macOS 通知并直接联动 VoxRadio 语音提醒。',
            '完整配套 18 项 pytest 自动化验收测试（2.96s 全通过）及在线零隐私证据报告。',
          ],
        },
      ],
      ctaReport: '打开 MoliPulse 公开核验报告',
    },
    voxradio: {
      badge: 'NATIVE MACOS AI RADIO',
      title: 'VoxRadio',
      subtitle: '让 AI 安静嵌入日常听歌习惯的原生 macOS 私人电台与编码陪伴工具',
      summary:
        '源于面壁校园黑客松并历经 246 次真实提交推倒重构：首页砍掉一切工程噪点，收敛为 4 层极简电台体验；背后编排 Apple MusicKit、本地 VoxCPM2 TTS、天气/日历摘要，并以严格只读安全红线适配 14 种编码 Agent Hooks。',
      tags: ['246 Commits', 'SwiftUI + MusicKit', 'VoxCPM2 Sidecar', '14 Agent Hooks', 'Receive-Only'],
      stations: [
        {
          id: 'late-night',
          name: 'Late Night Build FM',
          meta: 'Apple MusicKit · 本地 VoxCPM2 旁白',
          bpm: '48 kHz · Live',
          hookStatus: 'Codex · Running',
          detail: '夜间编码静默电台模式：歌曲无缝切换，仅在外部编码 Agent 需要确认或构建完成时轻声播报。',
        },
        {
          id: 'daily-opening',
          name: 'Daily Opening · 早间开场',
          meta: 'Open-Meteo 天气 + EventKit 日历摘要',
          bpm: 'TTS · 12s',
          hookStatus: 'Calendar · Synced',
          detail: '先将当日天气、日程与本地 SQLite 听歌偏好压缩成短句再喂给 VoxCPM2 合成播报，播完直切歌单。',
        },
        {
          id: 'companion',
          name: 'Dev Companion · 14 Agents',
          meta: 'Python Hook Bridge · 零写入权限',
          bpm: '14 Hooks · Active',
          hookStatus: 'Receive-Only',
          detail: '通过统一只读 Hook 感知 14 种主流编码 Agent 的 running / needs attention / failed / completed 四态。',
        },
      ],
      agents: [
        { name: 'Codex', state: 'active', note: '实时捕获长任务完成与等待审批信号（仅读取通知，不反向干预执行）' },
        { name: 'Claude Code', state: 'active', note: '通过统一 Python Hook Bridge 上报会话状态与异常提醒' },
        { name: 'Cursor / Windsurf', state: 'verified', note: '纳入 14 种编码 Agent 适配清单，统一四态状态机映射' },
        { name: 'Receive-Only Redline', state: 'verified', note: '绝不审批命令、不注入 prompt、不执行外部工具；本地密钥零明文配置' },
      ],
      securityBanner: '安全红线：Receive-Only 只读监听 · 零明文密钥 · 显式 TLS 校验',
      tabs: [
        {
          id: 'design',
          label: '1. 产品定位与减法取舍',
          leftTitle: '为什么推倒黑客松初版重构？',
          leftPoints: [
            '初版把 TTS 队列、sidecar 状态和模型日志全铺在首页，像炫技的工程调试面板。',
            '每天打开听歌时视觉噪点极高，决定以消费级听觉产品标准重新收敛信息层级。',
          ],
          rightTitle: '收敛后的 4 层极简架构',
          rightPoints: [
            '对标 Spotify / Apple / ElevenLabs / Raycast / Linear 输出完整设计规范。',
            '首页仅保留：Now Playing 主卡 → 临时模式 Daily Opening → Apple Music 搜索 → 小型 Text DJ；所有诊断收进 Settings。',
          ],
        },
        {
          id: 'arch',
          label: '2. 多端 AI 编排与降级兜底',
          leftTitle: '个性化 Daily Opening 闭环',
          leftPoints: [
            '联动 Open-Meteo 天气 + EventKit 日历/提醒（先摘要短句再喂 TTS）+ 本地 V1 SQLite 听歌偏好记忆。',
            '由本地 VoxCPM2 TTS Sidecar 合成开场播报，播完无缝接管 Apple Music 真实播控。',
          ],
          rightTitle: '零依赖演示与优雅降级',
          rightPoints: [
            '提供不下载大模型的 Mock TTS 与本地 WAV 验收链路，确保快速演示零卡顿。',
            'Codex DJ provider 异常时保留基础快捷播控并明确提示降级，配套 Swift XCTest 与 Python 侧自动化校验。',
          ],
        },
        {
          id: 'security',
          label: '3. 14 种 Agent 只读安全边界',
          leftTitle: 'Dev Companion 编码陪伴场景',
          leftPoints: [
            '通过统一 Python Hook 入口与 Plugin Bridge 适配 14 种主流编码 Agent。',
            '听歌时低干扰感知 running / needs attention / failed / completed 四种关键状态。',
          ],
          rightTitle: '严格的 Receive-Only 安全红线',
          rightPoints: [
            '明确坚持只读原则：不审批请求、不反向分发 prompt、不执行外部工具。',
            '本地认证 secret 由服务管理器托管，配置中零明文密钥；显式代理拒绝明文推理 URL 并校验 TLS。',
          ],
        },
      ],
      ctaRepo: '查看 VoxRadio 公开仓库',
    },
    moliCase: {
      eyebrow: 'FIELD CASE 01 // OVERSEAS GTM & DEVREL',
      title: '揽岳智能（Lexmount / Moli）',
      period: '2026.10 – 至今 · GTM 运营实习生',
      subtitle: '面向 AI Agent 的轻量级浏览器 · 海外开发者生态冷启动、内容实测与产品排障',
      summary:
        '从 0 推进海外开源开发者外联登上 e2e 官网合作伙伴，沉淀 52 条目 7 语言 Awesome Moli 生态目录与 48 条竞品社区溯源痛点，并在真实排查中撕开 57/57 测试盲区推动官方合入修复 PR #3478。',
      tags: ['Moli × e2e 官网合作', 'Awesome Moli 52 条目 / 7 语言', '19 篇技术实测', '4 竞品 48 条痛点', 'PR #3478'],
      globeTitle: 'GLOBAL DEVREL TOPOLOGY · 可拖拽 3D 线框球',
      globeHint: '拖动旋转地球，观察海外开发者社区与集成触达节点',
      pipelineTitle: 'Moli × e2e 官网合作伙伴冷启动闭环（点击节点查看实证）',
      steps: [
        {
          code: 'STEP 01',
          title: '线索研判与精准邀约',
          metric: '80 邀约 / 56 台账',
          desc: '逐个核查目标开源仓库如何调用浏览器再发定制邀约，单阶段推进 80 个对象，飞书主表精细跟进 56 条仓库记录。',
          evidence: '拒绝模板群发，基于真实调用链路建立首轮开发者信任。',
        },
        {
          code: 'STEP 02',
          title: 'Slack 深度磋商对齐',
          metric: 'e2e 维护者直连',
          desc: '主动建联 e2e 官方维护者，在 Slack 持续推进接入场景、贡献规范与联合发布时间线，拆解双方交付清单。',
          evidence: '明确“可运行示例 + 官方文档 + 合作伙伴标识”三件套目标。',
        },
        {
          code: 'STEP 03',
          title: '研发协同与素材补齐',
          metric: '零损耗文档交付',
          desc: '协同研发落地公开仓库 PR，本人独立准备登录测试示例文案、实测截图与运行指南，大幅降低研发非代码消耗。',
          evidence: '确保外部开发者照抄文档 5 分钟即可跑通登录/截图/登出全链路。',
        },
        {
          code: 'STEP 04',
          title: '官网集成与长期获客',
          metric: 'e2e 官网上线',
          desc: '成功上线 e2e 官方集成文档并将 Lexmount 列为官网合作伙伴，在海外高频测试工具链官网留下长期试用入口。',
          evidence: '已公开可核验：e2e.com/examples/moli 与 e2e.com/docs/integrations/moli。',
        },
      ],
      tabs: [
        {
          id: 'eco',
          label: '1. Awesome Moli 与技术内容矩阵',
          leftTitle: 'Awesome Moli 生态目录建设（185 → 67 → 52）',
          leftPoints: [
            '逐项核查 185 条原始线索，确认 Moli 真实作用、可试用路径与作者署名偏好，筛出 67 条候选。',
            '助力上线 52 个条目、覆盖 7 种语言的公开生态目录，上线后闭环跟进海外作者（dsh-moli、CTI Expert 等）修订反馈。',
          ],
          rightTitle: '技术实测分发与社区案例共创',
          rightPoints: [
            '围绕登录态复用、动态网页读取、Playwright 迁移等高频痛点输出实测：19 篇实测稿中 16 篇公开，跨 6 平台发布 28 条次。',
            '沉淀高校获奖落地案例与首期 Built with Moli 双语案例；Discord 每 1–2 天梳理主分支合入发布用户向更新。',
          ],
        },
        {
          id: 'bug',
          label: '2. 竞品洞察与 57/57 排障推合 PR #3478',
          leftTitle: '4 个海外竞品社区 48 条带原帖痛点库',
          leftPoints: [
            '深度梳理 Lightpanda、Kitesurf、Obscura、Browser Use 四个海外竞品社区，沉淀 48 条带原帖链接的用户关注点。',
            '按“使用障碍 / 功能需求 / 教程缺口”归类，直接反哺 Moli 技术教程选题与产品体验迭代。',
          ],
          rightTitle: '撕开 57/57 测试盲区 → 推动修复 PR #3478',
          rightPoints: [
            '面对维护者反馈“多行文本框程序可读但截图空白”，而原兼容套件却报 57/57 全绿的矛盾现象。',
            '排查定位原测试用同一浏览器两次空白截图自对比（diff 为 0）；改用 Moli 与 Chrome 像素及 DOM 并排对照提交问题单，推动研发合入修复 PR #3478。',
          ],
        },
      ],
      callout: '核心方法论：区别于发完即忘的 PR 通稿，真正有复利的 AI DevRel 是在高频开发者工具链里留下可运行入口，并用工程证据反向驱动产品修 Bug。',
      proofLinks: [
        { label: 'e2e 官网合作伙伴案例', href: CONTACT.e2eExample, badge: 'LIVE' },
        { label: 'e2e 官方集成文档', href: CONTACT.e2eDocs, badge: 'DOCS' },
        { label: 'Awesome Moli 目录', href: CONTACT.awesomeMoli, badge: '52 ITEMS' },
        { label: '掘金实测文章', href: CONTACT.juejinArticle, badge: 'POST' },
        { label: '推动合入 PR #3478', href: CONTACT.moliPr3478, badge: 'MERGED' },
      ],
    },
    modelbestCase: {
      eyebrow: 'FIELD CASE 02 // AI OPS & DATA AUTOMATION',
      title: '面壁智能（ModelBest · OpenBMB / VoxCPM / 声辞）',
      period: '2026.04 – 2026.08 · AI 产品运营实习生',
      subtitle: '独立承接 5 条核心业务线：三平台数据监控机器人、12 平台活动归因、海外舆情与 20 页竞品调研',
      summary:
        '横跨开源模型生态与 C 端语音产品筹备：独立用 Python 搭建 Hugging Face / ModelScope / GitHub 三平台飞书监控流，实现 12 平台活动数据复核零不一致，独立撰写 20 页《声辞市场调研报告》获团队采纳。',
      tags: ['三平台监控机器人', '12 平台零误差归因', '海外舆情飞书化', '20 页竞品报告获采纳', 'OpenBMB 3,000+ 社区'],
      kpis: [
        { value: '246 + 189', label: '模型 & Traffic 快照', sub: '覆盖 99 个数据日期 · 28 项测试验收' },
        { value: '20.1 万', label: '挑战赛归因公开播放', sub: '12 平台 / 152 作品 / 99 去重创作者零误差' },
        { value: '802 → 314', label: '海外舆情实质评价', sub: 'X / Reddit / GitHub → 3 张 51 期飞书趋势表' },
        { value: '20 页 / 22 项', label: '声辞调研与渠道筹备', sub: '5 款竞品报告获采纳 · 10 渠道合规清单' },
      ],
      tabs: [
        {
          id: 'robot',
          label: '1. 三平台监控机器人与海外舆情',
          leftTitle: '独立搭建 VoxCPM2 三平台监控机器人',
          leftPoints: [
            '打通 Hugging Face、魔搭（ModelScope）、GitHub 三平台采集 → 本地快照 → 飞书 Base 写入 → 每日 10:00/18:00 定时群播报（Mac launchd 调度）。',
            '截至 8 月 3 日交接留存 246 条模型快照、189 条 Traffic 快照、覆盖 99 个数据日期（4.14–7.31），治理累计下载回退保护与按 data_date 去重，配套 28 项测试与回滚手册。',
          ],
          rightTitle: 'MiniCPM / VoxCPM 海外舆情飞书化',
          rightPoints: [
            '面向 X、Reddit、GitHub 搭建海外舆情归因流，归档 802 条分类候选并筛选 314 条实质用户评价。',
            '沉淀声量、口碑、生态 3 张飞书趋势表（各写入 51 期时间序列并完成回读 CSV 一致性校验），支撑团队周度复盘。',
          ],
        },
        {
          id: 'campaign',
          label: '2. 12 平台挑战赛归因与校园赛闭环',
          leftTitle: '创作者跨平台归并与零误差复核',
          leftPoints: [
            '解决同一创作者跨平台发帖重复累加痛点，建立“稳定作品 ID 去重 + 跨平台创作者归并”规则，清晰拆分活动口径与全网口径。',
            '覆盖 12 平台、152 条归因作品、127 账号、99 名去重创作者，活动公开播放 20.1 万、互动 4.75 万，8 项总览与 84 项分平台指标复核零不一致。',
          ],
          rightTitle: 'OpenBMB 社区与高校赛全链路闭环',
          rightPoints: [
            '服务 3,000+ 人 OpenBMB 开源社区，累计技术/活动答疑 50+ 次并推进大使与 Meetup 视觉传播物料。',
            '独立搭建校园赛报名/提交双表流程、对接 4 所高校并完整闭环 9 个有效参赛作品评审与奖品发放。',
          ],
        },
        {
          id: 'vype',
          label: '3. 声辞 20 页竞品报告与 10 渠道筹备',
          leftTitle: '20 页《声辞市场调研报告》获团队采纳',
          leftPoints: [
            '围绕 AI 语音输入法产品声辞，独立深度对标豆包输入法、微信输入法、搜狗输入法、Typeless、Wispr Flow 5 款国内外竞品。',
            '输出竞品档案、来源台账、公开评论主题归因与统一实测方案，差异化定位与商业化建议获团队评审采纳。',
          ],
          rightTitle: '国内外 10 渠道分发与合规筹备',
          rightPoints: [
            '独立梳理国内外 10 个应用商店上架规范，建立 22 项跨模块任务跟踪表（含 9 项 P0 关键路径）。',
            '协同法务与研发推进备案、隐私协议、商店素材、包体签名及 Apple 企业开发者电话核验等上线前筹备。',
          ],
        },
      ],
      honestyNote: '事实边界说明：声辞项目已完成调研报告采纳与 10 渠道上线前筹备，后续因业务策略调整未公开上架；上述每一项指标均经过交接底稿核验。',
    },
    commercial: {
      eyebrow: 'COMMERCIAL GROUNDING // 04',
      title: '商业化与转化底色',
      subtitle: '懂开源与技术，也真正跑过大盘预算投放与自负盈亏的电商转化漏斗。',
      cards: [
        {
          org: '优矩互动',
          period: '2025.12 – 2026.03',
          role: '信息流投放运营实习生',
          headline: '规模化信息流投放与 ROI 归因调优',
          body: '管理抖音、今日头条、百度 100+ 广告账户，日均管理投放预算 20 万元；围绕 CTR、CVR、ROI 输出日报/周报持续迭代定向与出价策略，协同创意团队产出 20+ 短视频与图文素材（篇均互动 30+）。',
          metrics: [
            { val: '20 万/日', label: '日均管理预算' },
            { val: '100+', label: '多平台广告账户' },
            { val: '20+', label: '协同爆款测试素材' },
          ],
          tags: ['抖音 / 头条 / 百度', 'CTR / CVR / ROI 漏斗', '数据日报周报'],
        },
        {
          org: '个人淘宝电商自营项目',
          period: '2021.08 – 2025.03',
          role: '独立操盘手（非正式受雇 · 个人自营）',
          headline: '从 0 到 1 独立经营 2 家淘宝店铺商业闭环',
          body: '独立经营水族宠物类目 2 家淘宝店铺，全链路操盘选品定价、视觉详情页转化优化、直通车关键词投放与售前售后复购闭环；持续追踪 PV、加购、转化率与 GMV，实现日均 GMV 500 元、店铺转化率 10%。',
          metrics: [
            { val: '2 家', label: '0→1 独立自营店铺' },
            { val: '10%', label: '店铺成交转化率' },
            { val: '¥500/日', label: '稳定日均 GMV' },
          ],
          tags: ['选品与定价', '直通车关键词调优', '转化与复购闭环'],
        },
      ],
    },
    capability: {
      eyebrow: 'SPEC MATRIX // 05',
      title: '复合能力规格表（随顶部岗位视角动态高亮）',
      subtitle: '兼具「AI Native 工具交付力」与「海内外生态增长执行力」，可无缝衔接字节 / 腾讯 AI 产品与运营团队。',
      pillars: [
        {
          code: 'CAP-01',
          title: 'AI 开发者生态 & 海外 GTM',
          weightOps: 96,
          weightPm: 84,
          summary: 'GitHub / Discord / Slack / Reddit / X 海外社区冷启动、官网合作落地、技术实测内容矩阵与生态目录治理。',
          stack: ['DevRel', 'e2e Partner', 'Awesome Catalog', 'CET-6 双语'],
        },
        {
          code: 'CAP-02',
          title: 'Vibe Coding & AI Native 工程交付',
          weightOps: 88,
          weightPm: 95,
          summary: '重度使用 Claude Code 与 Codex 独立构建 Native MCP Server、FastAPI、React + TS、SwiftUI 原生工具与自动化守护进程。',
          stack: ['Claude Code', 'Codex', 'MCP Server', 'Python / React / Swift'],
        },
        {
          code: 'CAP-03',
          title: '数据归因、自动化监控与产品调研',
          weightOps: 92,
          weightPm: 90,
          summary: '跨平台口径去重与零误差复核、Python→飞书自动化数据流、竞品系统拆解与结构化痛点反哺研发。',
          stack: ['SQLite WAL', '飞书 Base API', '归因看板', '竞品深度报告'],
        },
        {
          code: 'CAP-04',
          title: '商业增长漏斗与高自驱执行',
          weightOps: 86,
          weightPm: 82,
          summary: '日耗 20 万信息流投放复盘经验 + 2 家自营电商店铺从 0 到 1 商业闭环，对 ROI、转化与交付节奏高度敏感。',
          stack: ['ROI / CTR / CVR', 'A/B 素材测试', '0→1 自营闭环', '高抗压推进'],
        },
      ],
    },
    footer: {
      aboutTag: 'CANDIDATE PROFILE // 2027',
      name: '罗文希 · LUO WENXI',
      eduLine: '北京语言大学 数字经济硕士（2025.09–2027.06）｜ 广东财经大学 国际经济与贸易本科（2019.09–2023.06）',
      targetLine: '2027 届应届生身份纯净 · 意向全职城市：深圳 / 广州 / 东莞 · 欢迎随时约聊 AI 产品运营 / AI 产品经理机会',
      statusBadge: 'OPEN TO 2027 CAMPUS / INTERNSHIP',
      copyPhone: '复制手机号',
      copyEmail: '复制邮箱',
      openCmd: '打开 ⌘K 指令台',
      archNotch: 'LUO WENXI · SYSTEM ARCHITECTURE · 2027',
    },
    cmdPalette: {
      placeholder: '输入指令或关键词（如 MoliPulse、VoxRadio、PR、邮箱、英文）...',
      empty: '未找到匹配指令，试试输入 "MCP" 或 "邮箱"',
      groups: { nav: '页面快速跳转', actions: '快捷交互操作', links: '公开核验外链' },
      items: {
        gotoSystems: '跳转到：自研原生 AI 系统（MoliPulse & VoxRadio）',
        gotoMoli: '跳转到：揽岳智能 Moli × e2e 出海实战',
        gotoModelBest: '跳转到：面壁智能三平台监控与 12 平台归因',
        gotoCommercial: '跳转到：优矩投放与个人淘宝自营底色',
        gotoCapabilities: '跳转到：复合能力规格矩阵',
        toggleLang: '切换页面语言（中文 ↔ English）',
        lensOps: '切换至：AI 产品运营 / 出海 GTM 视角',
        lensPm: '切换至：AI 产品经理视角',
        copyPhone: '复制联系电话（13692774440）',
        copyEmail: '复制联系邮箱（1009843439@qq.com）',
        openMoliPulse: '打开 MoliPulse 在线公开核验报告 ↗',
        openVoxRadio: '打开 VoxRadio 公开 GitHub 仓库 ↗',
        openPr: '查看推动合入的 Moli PR #3478 ↗',
      },
    },
    toast: {
      phoneCopied: '已复制手机号',
      emailCopied: '已复制邮箱',
      switchedToOps: '已切换为：AI 产品运营 / 出海 GTM 视角',
      switchedToPm: '已切换为：AI 产品经理视角',
      langSwitched: '已切换为中文界面',
    },
  },
  en: {
    nav: {
      brandSub: 'AI PRODUCT LAB',
      links: [
        { id: 'systems', label: 'Systems' },
        { id: 'moli', label: 'Global GTM' },
        { id: 'modelbest', label: 'ModelBest' },
        { id: 'commercial', label: 'Commercial' },
      ],
      voxPill: 'VoxRadio · 246 commits',
      pulsePill: 'MoliPulse · 18/18 tests',
      contactCta: 'CONTACT',
    },
    hero: {
      eyebrow: 'CLASS OF 2027 M.S. DIGITAL ECONOMY (BLCU) · TARGET: SHENZHEN / GUANGZHOU / DONGGUAN',
      roleOps: 'AI Product Ops / GTM',
      rolePm: 'AI Product Manager',
      displayName: 'LUO WENXI',
      headlineOps: 'Building Grounded AI Systems & Global Developer Ecosystems',
      headlinePm: 'Shipping Native AI Products Through Insight, Craft & Grounded Verification',
      subcopyOps:
        'Hands-on across Lexmount (Moli) and ModelBest (OpenBMB / VoxCPM): landed the official e2e website partnership, built zero-discrepancy 12-platform attribution & 3-platform Feishu monitors, and shipped native MCP & macOS AI software.',
      subcopyPm:
        'Grounded in real pain points, native prototyping, and pixel-level proof: iterated VoxRadio (246 commits, SwiftUI + 14 Agent Hooks), architected MoliPulse Native MCP Engine, authored a team-adopted 20-page voice-input market report, and unmasked a 57/57 test blind spot into merged PR #3478.',
      primaryCta: 'EXPLORE SYSTEMS',
      secondaryCta: 'MoliPulse Live Spec',
      cmdHint: 'Press ⌘K for command palette',
      metricsOps: [
        { value: 'e2e', unit: 'Official Partner', label: 'Moli Global Ecosystem', detail: '80 targeted outreaches / 56 repo CRM', accent: 'vermilion' },
        { value: '12 Platforms', unit: '152 Works', label: 'ModelBest Attribution', detail: '201K views · 0 audit discrepancies', accent: 'cobalt' },
        { value: '18/18', unit: 'pytest pass', label: 'MoliPulse Native MCP', detail: '6 Tools + SQLite WAL memory ledger', accent: 'emerald' },
        { value: '¥200K', unit: 'Daily Budget', label: 'Youju Paid Growth', detail: '100+ Douyin / Toutiao / Baidu accounts', accent: 'ink' },
      ],
      metricsPm: [
        { value: '246', unit: 'commits', label: 'VoxRadio macOS App', detail: 'SwiftUI + MusicKit + 14 Agent Hooks', accent: 'vermilion' },
        { value: 'PR #3478', unit: 'Merged', label: '57/57 Test Blind Spot', detail: 'Side-by-side DOM & pixel diagnosis', accent: 'cobalt' },
        { value: '20 Pages', unit: 'Adopted', label: 'Voice Input Research', detail: '5 domestic & global competitors audited', accent: 'emerald' },
        { value: '48', unit: 'Cited Threads', label: 'Competitor Insights', detail: 'Lightpanda / Kitesurf / Browser Use', accent: 'ink' },
      ],
    },
    statement: {
      tag: 'MANIFESTO // 01',
      segmentsOps: [
        { text: 'Beyond slide decks—' },
        { text: 'engineering closed-loop GTM systems.', highlight: 'vermilion' },
        { text: ' From global developer partnerships and ' },
        { text: 'Native MCP memory ledgers', highlight: 'cobalt' },
        { text: ' to zero-error multi-platform attribution, every growth claim stays grounded in verifiable proof.' },
      ],
      segmentsPm: [
        { text: 'Great AI products hide the console—' },
        { text: 'focused on subtraction and graceful fallback.', highlight: 'vermilion' },
        { text: ' Rapidly built with Claude Code & Codex, ' },
        { text: 'verified at the pixel and schema level,', highlight: 'cobalt' },
        { text: ' turning daily workflow friction into native software I actually rely on.' },
      ],
    },
    labHeader: {
      eyebrow: 'SYSTEMS LAB // 02',
      title: 'Native AI Systems · Interactive Lab',
      subtitle: 'Built to solve real daily bottlenecks—explore the live architecture, data pipelines, and verified specs below.',
    },
    molipulse: {
      badge: 'AGENT-NATIVE MCP ENGINE',
      title: 'MoliPulse',
      subtitle: 'Deterministic GTM & Ecosystem Memory via Native stdio MCP Server',
      summary:
        'Instead of forcing yet another web dashboard, MoliPulse plugs directly into Codex, Claude Code, and Cursor as a Native stdio MCP Server—backed by SQLite WAL deduplication, moli fetch screenshot proof, and conflict-safe Feishu sync.',
      tags: ['Native MCP (6 Tools + 3 URIs)', 'SQLite WAL', 'FastAPI + React', 'lark-cli Safe Sync', '18/18 pytest'],
      nodes: [
        {
          id: 'ingest',
          step: '01',
          title: 'GitHub / HN / moli fetch',
          sub: '54 Repos · 106 Aliases',
          stat: 'Live Capture',
          desc: 'Combines GitHub API and dogfooded moli fetch (v1.1.27+) for dynamic Markdown, DOM Eval, and local PNG proof—marking login walls honestly as unverified.',
        },
        {
          id: 'wal',
          step: '02',
          title: 'SQLite WAL Ledger',
          sub: '79 Verified Signals',
          stat: 'repo_id Dedup',
          desc: 'Deduplicates across repo renames via immutable GitHub repo_id + alias table, separating external facts, internal owners, and Feishu receipts cleanly.',
        },
        {
          id: 'mcp',
          step: '03',
          title: 'Native stdio MCP',
          sub: '6 Tools + 3 URIs',
          stat: 'Sub-First',
          desc: 'Exposed directly inside Codex / Claude Code / Cursor via pulse_today, pulse_scout, and pulse_brief with Pydantic JSON schema guards and offline fallback.',
        },
        {
          id: 'sync',
          step: '04',
          title: 'Feishu & VoxRadio',
          sub: '30m pulsed Daemon',
          stat: '18/18 pass',
          desc: 'Checks concurrent edit diffs before lark-cli Feishu writes; 30-minute background daemon notifies macOS or triggers spoken alerts in VoxRadio.',
        },
      ],
      tabs: [
        {
          id: 'pivot',
          label: '1. Pivot: Web App → MCP Layer',
          leftTitle: 'Why kill the standalone admin dashboard?',
          leftPoints: [
            'Every morning started in Codex asking for fresh replies and pending threads, yet stateless chats forgot yesterday’s context.',
            'Forcing manual updates into a separate web portal added friction; shipping as a Native stdio MCP Server eliminated habit switching.',
          ],
          rightTitle: 'Three Zero-Friction Workflows',
          rightPoints: [
            'pulse_today: surfaces zero-like replies and merged PRs, sorting Waiting on Me / Engineering / External with once-only reminders.',
            'pulse_scout & pulse_brief: deduplicated repo scouting plus one-click weekly briefs, Discord notes, and sanitized public proof exports.',
          ],
        },
        {
          id: 'ledger',
          label: '2. Deterministic Ledger & Proof',
          leftTitle: 'SQLite WAL Dedup & 3-State Separation',
          leftPoints: [
            'Strong deduplication via numeric GitHub repo_id and 106 historical aliases across 54 Awesome Moli ecosystem repositories.',
            'Cleanly decouples external facts, internal owners, and Feishu sync receipts; conflict diffs protect teammates’ edits before write-back.',
          ],
          rightTitle: 'Dogfooding moli fetch Evidence',
          rightPoints: [
            'Reads JS-rendered pages with moli fetch and stores local PNG screenshots instead of bloating LLM context with Base64.',
            'Login walls and empty shells are explicitly flagged unverified with checkpoints—zero fabricated summaries.',
          ],
        },
        {
          id: 'provider',
          label: '3. 3-Tier Providers & VoxRadio',
          leftTitle: 'Subscription-First Provider Stack',
          leftPoints: [
            'Prioritizes local official subscription CLIs (Codex / Claude Code) paired with strict Pydantic JSON Schema validation.',
            'Seamlessly falls back to OpenAI-compatible API keys or deterministic offline rule engines—never fails blank.',
          ],
          rightTitle: '30m Daemon & 18/18 Automated Tests',
          rightPoints: [
            'pulsed polls quietly every 30 minutes, routing priority updates to macOS notifications or VoxRadio spoken alerts.',
            'Verified by 18 automated pytest integration checks (passing in 2.96s) with a live sanitized public showcase page.',
          ],
        },
      ],
      ctaReport: 'Open MoliPulse Live Proof Report',
    },
    voxradio: {
      badge: 'NATIVE MACOS AI RADIO',
      title: 'VoxRadio',
      subtitle: 'Quiet Native macOS AI Radio & Read-Only Multi-Agent Dev Companion',
      summary:
        'Born at ModelBest’s campus hackathon and rebuilt over 246 commits: stripped away engineering clutter into a serene 4-layer player orchestrating Apple MusicKit, local VoxCPM2 TTS, calendar/weather briefings, and 14 coding agent hooks under a strict receive-only boundary.',
      tags: ['246 Commits', 'SwiftUI + MusicKit', 'VoxCPM2 Sidecar', '14 Agent Hooks', 'Receive-Only'],
      stations: [
        {
          id: 'late-night',
          name: 'Late Night Build FM',
          meta: 'Apple MusicKit · Local VoxCPM2 DJ',
          bpm: '48 kHz · Live',
          hookStatus: 'Codex · Running',
          detail: 'Low-distraction coding radio: seamless music playback that softly speaks up only when an external agent needs attention or finishes.',
        },
        {
          id: 'daily-opening',
          name: 'Daily Opening Briefing',
          meta: 'Open-Meteo Weather + EventKit Calendar',
          bpm: 'TTS · 12s',
          hookStatus: 'Calendar · Synced',
          detail: 'Summarizes today’s weather, calendar events, and local SQLite listening tastes into concise spoken openings via local VoxCPM2 TTS.',
        },
        {
          id: 'companion',
          name: 'Dev Companion · 14 Agents',
          meta: 'Python Hook Bridge · Zero Write Access',
          bpm: '14 Hooks · Active',
          hookStatus: 'Receive-Only',
          detail: 'Unifies running / needs attention / failed / completed telemetry across 14 coding agents without interrupting focus.',
        },
      ],
      agents: [
        { name: 'Codex', state: 'active', note: 'Monitors long-running build completions & approval prompts strictly read-only' },
        { name: 'Claude Code', state: 'active', note: 'Unified Python Hook Bridge streams session transitions & failure alerts' },
        { name: 'Cursor / Windsurf', state: 'verified', note: 'Part of 14 supported coding agents mapped to a clean 4-state model' },
        { name: 'Receive-Only Redline', state: 'verified', note: 'Never approves requests, injects prompts, or runs external tools; zero plaintext secrets' },
      ],
      securityBanner: 'SECURITY REDLINE: RECEIVE-ONLY HOOKS · ZERO PLAINTEXT SECRETS · STRICT TLS',
      tabs: [
        {
          id: 'design',
          label: '1. Product Subtraction',
          leftTitle: 'Why tear down the v1 hackathon build?',
          leftPoints: [
            'v1 exposed TTS queues, sidecar status, and raw model logs right on the main screen—feeling like a noisy debug panel.',
            'Everyday music listening demands calm hierarchy, not flexing internal plumbing.',
          ],
          rightTitle: 'Refined 4-Layer Architecture',
          rightPoints: [
            'Authored a design spec benchmarked against Spotify, Apple, ElevenLabs, Raycast, and Linear.',
            'Home screen keeps only: Now Playing → transient Daily Opening → Apple Music Search → compact Text DJ; diagnostics stay tucked in Settings.',
          ],
        },
        {
          id: 'arch',
          label: '2. Orchestration & Fallbacks',
          leftTitle: 'Personalized Daily Opening Flow',
          leftPoints: [
            'Combines Open-Meteo weather, EventKit reminders/events (pre-summarized for natural pacing), and local SQLite listening memory.',
            'Synthesizes opening voice tracks on local VoxCPM2 TTS Sidecar before transitioning seamlessly into Apple Music playback.',
          ],
          rightTitle: 'Zero-Dependency Demo & Resilience',
          rightPoints: [
            'Includes Mock TTS and local WAV verification pipelines for instant demos without downloading multi-GB weights.',
            'Preserves core playback with clear degraded-state notices whenever Codex DJ is unreachable; covered by Swift XCTest & Python checks.',
          ],
        },
        {
          id: 'security',
          label: '3. 14-Agent Read-Only Redline',
          leftTitle: 'Dev Companion Workflow',
          leftPoints: [
            'Unified Python Hook entry point and Plugin Bridge supporting 14 mainstream coding agents.',
            'Ambient awareness of running / needs attention / failed / completed states while staying in flow.',
          ],
          rightTitle: 'Hard Receive-Only Security Boundary',
          rightPoints: [
            'Strictly receive-only: never approves actions, never dispatches prompts, never executes external tools.',
            'Managed service secrets (zero plaintext keys in config) and explicit proxy TLS enforcement rejecting cleartext inference URLs.',
          ],
        },
      ],
      ctaRepo: 'View Public VoxRadio Repo',
    },
    moliCase: {
      eyebrow: 'FIELD CASE 01 // OVERSEAS GTM & DEVREL',
      title: 'Lexmount (Moli AI Browser)',
      period: '2026.10 – Present · GTM Operations Intern',
      subtitle: 'Lightweight Browser for AI Agents · Global DevRel Cold-Start, Technical Content & Bug Triage',
      summary:
        'Drove cold-start overseas open-source outreach onto the official e2e website partner showcase, curated the 52-entry / 7-language Awesome Moli ecosystem catalog, audited 48 cited competitor community threads, and exposed a 57/57 test blind spot resulting in merged PR #3478.',
      tags: ['Moli × e2e Partner', 'Awesome Moli 52 / 7 Langs', '19 Tech Benchmarks', '48 Competitor Citations', 'PR #3478'],
      globeTitle: 'GLOBAL DEVREL TOPOLOGY · DRAGGABLE 3D WIREFRAME',
      globeHint: 'Drag to spin — active global developer ecosystem nodes',
      pipelineTitle: 'Moli × e2e Official Partnership Pipeline (Click any node)',
      steps: [
        {
          code: 'STEP 01',
          title: 'Targeted Repo Qualification',
          metric: '80 Outreaches / 56 CRM',
          desc: 'Inspected how each repo invokes browsers before sending tailored invites: 80 targeted leads advanced with 56 tracked in Feishu CRM.',
          evidence: 'Zero spray-and-pray—every outreach opened with concrete technical fit.',
        },
        {
          code: 'STEP 02',
          title: 'Slack Alignment w/ e2e',
          metric: 'Maintainer Sync',
          desc: 'Initiated direct Slack collaboration with e2e maintainers to lock integration scenarios, contribution standards, and co-marketing milestones.',
          evidence: 'Scoped a durable triad: runnable example + official docs + partner listing.',
        },
        {
          code: 'STEP 03',
          title: 'Eng Coordination & Docs',
          metric: 'Turnkey Assets',
          desc: 'Coordinated engineering PR delivery while independently producing login test walkthroughs, screenshots, and reproducible setup guides.',
          evidence: 'Minimized engineering overhead and ensured developers run tests in minutes.',
        },
        {
          code: 'STEP 04',
          title: 'Official Website Launch',
          metric: 'Live on e2e.com',
          desc: 'Published official Moli integration docs on e2e.com with Lexmount featured as a partner—creating an evergreen developer acquisition entry.',
          evidence: 'Publicly live at e2e.com/examples/moli and e2e.com/docs/integrations/moli.',
        },
      ],
      tabs: [
        {
          id: 'eco',
          label: '1. Awesome Moli & Technical Content',
          leftTitle: 'Awesome Moli Ecosystem Directory (185 → 67 → 52)',
          leftPoints: [
            'Audited 185 raw leads for actual Moli usage, trialability, and author attribution preferences—shortlisting 67 candidates.',
            'Co-launched a 52-item directory spanning 7 languages and closed revision loops directly with overseas authors (dsh-moli, CTI Expert).',
          ],
          rightTitle: 'Technical Benchmarks & Community Stories',
          rightPoints: [
            'Published hands-on benchmarks on session reuse, dynamic rendering, and Playwright migration: 19 drafts → 16 published, 28 posts across 6 platforms.',
            'Co-created the inaugural bilingual Built with Moli showcase and shipped Discord main-branch release notes every 1–2 days.',
          ],
        },
        {
          id: 'bug',
          label: '2. Competitor Insights & PR #3478 Triage',
          leftTitle: '48 Cited Pain Points Across 4 Competitor Communities',
          leftPoints: [
            'Systematically audited Lightpanda, Kitesurf, Obscura, and Browser Use communities into 48 source-linked insights.',
            'Tagged by adoption friction, feature gaps, and doc needs—directly informing Moli’s tutorial roadmap and product fixes.',
          ],
          rightTitle: 'Exposing a 57/57 Test Blind Spot → PR #3478',
          rightPoints: [
            'Investigated a maintainer report where prefilled textarea values were readable in DOM yet blank in screenshots despite 57/57 green tests.',
            'Discovered the suite diffed two identical blank Moli screenshots (diff = 0); produced side-by-side Moli vs. Chrome pixel/DOM evidence leading to merged PR #3478.',
          ],
        },
      ],
      callout: 'Core DevRel Thesis: Forget disposable press releases—durable developer growth leaves runnable code inside high-intent toolchains and turns community bug triage into shipped PRs.',
      proofLinks: [
        { label: 'e2e Official Partner Example', href: CONTACT.e2eExample, badge: 'LIVE' },
        { label: 'e2e Integration Docs', href: CONTACT.e2eDocs, badge: 'DOCS' },
        { label: 'Awesome Moli Catalog', href: CONTACT.awesomeMoli, badge: '52 ITEMS' },
        { label: 'Juejin Benchmark Post', href: CONTACT.juejinArticle, badge: 'POST' },
        { label: 'Merged PR #3478', href: CONTACT.moliPr3478, badge: 'MERGED' },
      ],
    },
    modelbestCase: {
      eyebrow: 'FIELD CASE 02 // AI OPS & DATA AUTOMATION',
      title: 'ModelBest (OpenBMB / VoxCPM / Shengci)',
      period: '2026.04 – 2026.08 · AI Product Operations Intern',
      subtitle: 'Owned 5 End-to-End Workstreams: 3-Platform Monitor Bot, 12-Platform Attribution, Global Sentiment & 20-Page Research',
      summary:
        'Bridged open-source model ecosystems and consumer AI product readiness: built a Python→Feishu monitor across Hugging Face, ModelScope, and GitHub; delivered zero-error 12-platform campaign attribution; and authored a team-adopted 20-page voice-input market report.',
      tags: ['3-Platform Monitor Bot', '12-Platform Zero-Error Audit', 'Global Sentiment Pipeline', '20-Page Adopted Report', '3,000+ OpenBMB Community'],
      kpis: [
        { value: '246 + 189', label: 'Model & Traffic Snapshots', sub: '99 data dates · 28 automated test methods' },
        { value: '201K', label: 'Attributed Campaign Views', sub: '12 platforms / 152 works / 99 creators · 0 diff' },
        { value: '802 → 314', label: 'Substantive Reviews', sub: 'X / Reddit / GitHub → 3×51 Feishu time-series' },
        { value: '20p / 22 Tasks', label: 'Shengci Research & Prep', sub: '5-competitor report adopted · 10-store matrix' },
      ],
      tabs: [
        {
          id: 'robot',
          label: '1. 3-Platform Bot & Global Sentiment',
          leftTitle: 'VoxCPM2 3-Platform Monitor Bot (Python → Feishu)',
          leftPoints: [
            'Automated Hugging Face, ModelScope, and GitHub scraping → local snapshots → Feishu Base writes → 10:00/18:00 daily group digests via Mac launchd.',
            'Handed over 246 model snapshots & 189 traffic snapshots spanning 99 dates (Apr 14–Jul 31), with rollback guards, data_date dedup, and 28 test methods.',
          ],
          rightTitle: 'MiniCPM / VoxCPM Global Sentiment to Feishu',
          rightPoints: [
            'Built an X, Reddit, and GitHub ingestion & attribution flow archiving 802 classified candidates and 314 substantive user reviews.',
            'Populated Volume, Sentiment, and Ecosystem Feishu trend tables (51 time-series rows each with CSV readback integrity verification).',
          ],
        },
        {
          id: 'campaign',
          label: '2. 12-Platform Attribution & Campus Contest',
          leftTitle: 'Cross-Platform Creator Dedup & Zero-Error Audit',
          leftPoints: [
            'Eliminated double-counting across cross-posted creators using stable work IDs + creator aliasing, cleanly separating campaign vs. organic totals.',
            'Audited 12 platforms, 152 attributed works, 127 accounts, and 99 unique creators (201K views, 47.5K engagements) with 0 discrepancies across 8 summary + 84 platform metrics.',
          ],
          rightTitle: 'OpenBMB Community & Campus Contest Loop',
          rightPoints: [
            'Supported 3,000+ OpenBMB community members (50+ Q&A resolutions) and produced Meetup / ambassador campaign visuals.',
            'Owned the campus AI contest registration/submission workflow across 4 universities, closing evaluation and prize fulfillment for all 9 valid entries.',
          ],
        },
        {
          id: 'vype',
          label: '3. 20-Page Market Report & 10-Channel Prep',
          leftTitle: 'Team-Adopted 20-Page Voice Input Market Report',
          leftPoints: [
            'Benchmarked 5 domestic and global AI voice input products: Doubao Input, WeChat Input, Sogou Input, Typeless, and Wispr Flow.',
            'Delivered structured competitor dossiers, review topic attribution, and standardized testing protocols—positioning recommendations adopted by the team.',
          ],
          rightTitle: '10-Channel Domestic & Global Launch Prep',
          rightPoints: [
            'Mapped compliance and submission rules across 10 app stores into a 22-task tracker (including 9 P0 blockers).',
            'Coordinated legal and engineering on filings, privacy policies, store assets, signed builds, and Apple enterprise phone verification.',
          ],
        },
      ],
      honestyNote: 'Factual Scope Note: Shengci’s 20-page research report was formally adopted and 10-channel pre-launch prep completed, though the product did not publicly release due to business strategy adjustments.',
    },
    commercial: {
      eyebrow: 'COMMERCIAL GROUNDING // 04',
      title: 'Commercial & Paid Growth Foundation',
      subtitle: 'Beyond AI tooling and DevRel—tested in high-budget paid acquisition and self-funded e-commerce conversion funnels.',
      cards: [
        {
          org: 'Youju Interactive',
          period: '2025.12 – 2026.03',
          role: 'Performance Ad Operations Intern',
          headline: 'Scaled Feed Ad Optimization & ROI Attribution',
          body: 'Managed 100+ ad accounts across Douyin, Toutiao, and Baidu at ¥200K average daily spend; delivered daily/weekly CTR, CVR, and ROI diagnostics to tune targeting and bids while collaborating on 20+ video/image creatives (30+ avg. interactions).',
          metrics: [
            { val: '¥200K/d', label: 'Avg. Daily Ad Spend' },
            { val: '100+', label: 'Managed Ad Accounts' },
            { val: '20+', label: 'Creative Iterations' },
          ],
          tags: ['Douyin / Toutiao / Baidu', 'CTR / CVR / ROI', 'Daily Funnel Reviews'],
        },
        {
          org: 'Self-Run Taobao E-Commerce',
          period: '2021.08 – 2025.03',
          role: 'Independent Operator (Personal Venture)',
          headline: '0→1 Operation of 2 Self-Funded Taobao Stores',
          body: 'Independently built and operated two aquarium/pet Taobao stores end-to-end: product sourcing, pricing, PDP conversion optimization, Zhitongche keyword bidding, and repeat-purchase service—reaching ¥500 avg. daily GMV at a 10% store conversion rate.',
          metrics: [
            { val: '2 Stores', label: '0→1 Independent Ops' },
            { val: '10%', label: 'Store Conversion Rate' },
            { val: '¥500/d', label: 'Steady Daily GMV' },
          ],
          tags: ['Pricing & Sourcing', 'Keyword Bidding', 'Conversion & Retention'],
        },
      ],
    },
    capability: {
      eyebrow: 'SPEC MATRIX // 05',
      title: 'Capability Specification (Adapts to Role Lens)',
      subtitle: 'Bridging AI-Native engineering delivery with global developer ecosystem execution.',
      pillars: [
        {
          code: 'CAP-01',
          title: 'Global DevRel & AI Ecosystem GTM',
          weightOps: 96,
          weightPm: 84,
          summary: 'Cold-start developer outreach across GitHub, Discord, Slack, Reddit & X; official partner integrations; technical content matrices.',
          stack: ['DevRel', 'e2e Partner', 'Awesome Catalog', 'Bilingual CET-6'],
        },
        {
          code: 'CAP-02',
          title: 'Vibe Coding & AI-Native Prototyping',
          weightOps: 88,
          weightPm: 95,
          summary: 'Heavy Claude Code & Codex builder shipping Native MCP Servers, FastAPI, React + TS, SwiftUI apps, and background daemons.',
          stack: ['Claude Code', 'Codex', 'MCP Server', 'Python / React / Swift'],
        },
        {
          code: 'CAP-03',
          title: 'Attribution, Automation & Research',
          weightOps: 92,
          weightPm: 90,
          summary: 'Zero-discrepancy multi-platform auditing, Python→Feishu automated telemetry, structured competitor dossiers & engineering feedback loops.',
          stack: ['SQLite WAL', 'Feishu Base API', 'Attribution Audits', 'Market Dossiers'],
        },
        {
          code: 'CAP-04',
          title: 'Commercial Funnel & High Agency',
          weightOps: 86,
          weightPm: 82,
          summary: '¥200K/day feed ads optimization + two self-run e-commerce stores from 0 to 1—sharp instinct for conversion, ROI, and shipping cadence.',
          stack: ['ROI / CTR / CVR', 'Creative Testing', '0→1 Venture', 'Owner Mentality'],
        },
      ],
    },
    footer: {
      aboutTag: 'CANDIDATE PROFILE // 2027',
      name: 'LUO WENXI · 罗文希',
      eduLine: 'M.S. Digital Economy, Beijing Language and Culture University (2025.09–2027.06) | B.A. Int’l Economics & Trade, GDUFE (2019.09–2023.06)',
      targetLine: 'Clean 2027 Fresh Graduate Status · Target Cities: Shenzhen / Guangzhou / Dongguan · Open to AI Product Ops & AI PM Roles',
      statusBadge: 'OPEN TO 2027 CAMPUS / INTERNSHIP',
      copyPhone: 'Copy Phone',
      copyEmail: 'Copy Email',
      openCmd: 'Open ⌘K Palette',
      archNotch: 'LUO WENXI · SYSTEM ARCHITECTURE · 2027',
    },
    cmdPalette: {
      placeholder: 'Type a command or search (MoliPulse, VoxRadio, PR, Email, 中文)...',
      empty: 'No matching commands. Try "MCP", "PR", or "Email".',
      groups: { nav: 'Jump to Section', actions: 'Quick Actions', links: 'Verified Proof Links' },
      items: {
        gotoSystems: 'Jump to: Native AI Systems (MoliPulse & VoxRadio)',
        gotoMoli: 'Jump to: Lexmount Moli × e2e Global GTM',
        gotoModelBest: 'Jump to: ModelBest 3-Platform Bot & 12-Platform Audit',
        gotoCommercial: 'Jump to: Youju Ads & Self-Run E-Commerce',
        gotoCapabilities: 'Jump to: Capability Specification Matrix',
        toggleLang: 'Switch Language (English ↔ 中文)',
        lensOps: 'Switch Lens: AI Product Ops / Global GTM',
        lensPm: 'Switch Lens: AI Product Manager',
        copyPhone: 'Copy Phone Number (13692774440)',
        copyEmail: 'Copy Email Address (1009843439@qq.com)',
        openMoliPulse: 'Open MoliPulse Live Proof Report ↗',
        openVoxRadio: 'Open VoxRadio Public GitHub Repo ↗',
        openPr: 'View Merged Moli PR #3478 ↗',
      },
    },
    toast: {
      phoneCopied: 'Phone copied',
      emailCopied: 'Email copied',
      switchedToOps: 'Switched to AI Product Ops / GTM Lens',
      switchedToPm: 'Switched to AI Product Manager Lens',
      langSwitched: 'Switched to English UI',
    },
  },
}
