import type { NexusHeroContent } from "../types/nexusHero";

export type GeneratePillar = {
  id: string;
  source: string;
  title: string;
  detail: string;
  accent: string;
  badge: string;
  steps: string[];
};

export type GenerateModule = {
  tag: string;
  title: string;
  detail: string;
  badge: string;
  preview: string;
  tokens: string[];
};

export type GenerateWorkflowStage = {
  stage: string;
  title: string;
  copy: string;
  cues: string[];
};

export type GenerateSignal = {
  label: string;
  value: string;
  detail: string;
  dot: string;
};

export type GenerateLaunchItem = {
  label: string;
  detail: string;
  status: string;
};

export type GenerateExportCard = {
  title: string;
  detail: string;
  snippet: string;
};

export const generateHeroContent: NexusHeroContent = {
  eyebrow: "Generate Console",
  title: "Flux Blueprint Hub",
  subtitle:
    "以 Mist / Pulse / Signal 三層資料自動拼裝新的 Nexus 版型，所有輸出都貼合 Tailwind token。",
  chips: ["Mist Frame", "Pulse Narrative", "Signal Ops"],
  stats: [
    { label: "Input Sources", value: "03", detail: "Color · Art · Prism" },
    { label: "Blocks Ready", value: "06", detail: "HUD · LAB · RELAY · Meta" },
    { label: "Variant Factor", value: "2.4x", detail: "平均每次生成" },
    { label: "Hot Swap", value: "18s", detail: "Preset rebuild" },
  ],
};

export const generatePillars: GeneratePillar[] = [
  {
    id: "spectral",
    source: "Color Demo",
    title: "色譜錨點",
    detail:
      "Mist / Accent / Utility 三段輸入各綁 4 個節點，系統自動調整對比避免新色暴衝。",
    accent: "bg-linear-to-r from-sky-400/30 to-indigo-500/30 text-sky-100",
    badge: "Palette",
    steps: [
      "Hero 固定 sky→indigo",
      "Mist 描邊 border-slate-800",
      "Utility 比例 < 20%",
    ],
  },
  {
    id: "narrative",
    source: "Art Direction",
    title: "節奏場景",
    detail:
      "沿用光霧層與三段 Story Beats，讓 Pulse 焦點與 CTA 呼吸節奏保持一致。",
    accent:
      "bg-linear-to-r from-fuchsia-400/30 to-violet-500/30 text-fuchsia-100",
    badge: "Narrative",
    steps: ["霧層透明≦45%", "Story Beats 維持 3 段", "CTA 雙按鈕節奏"],
  },
  {
    id: "template",
    source: "Prism Template",
    title: "模板輸出",
    detail:
      "HUD / LAB / RELAY 延伸三段 token，並將 Mist / Pulse / Signal 寫進 Tailwind component layer。",
    accent: "bg-linear-to-r from-lime-300/30 to-cyan-300/30 text-lime-100",
    badge: "Template",
    steps: ["HUD text-cyan-200", "LAB 24px padding", "RELAY 線條 0.5px"],
  },
];

export const generateModules: GenerateModule[] = [
  {
    tag: "Mist",
    title: "Mist Vessel",
    detail: "Color Demo 的 Mist 面板搭配 Art Direction 軟霧，提供背景骨架。",
    badge: "bg-slate-900/70 text-slate-200 border border-white/10",
    preview: "bg-linear-to-br from-slate-950 via-slate-900 to-slate-800",
    tokens: ["bg-slate-950/70", "border-slate-800", "shadow-slate-900"],
  },
  {
    tag: "Pulse",
    title: "Pulse Dynamo",
    detail: "Art Direction 的脈衝光感結合 Prism HUD 手法，專司 CTA 與焦點。",
    badge:
      "bg-linear-to-r from-rose-400/30 to-fuchsia-500/30 text-rose-100 border border-white/10",
    preview: "bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
    tokens: [
      "text-fuchsia-100",
      "ring-fuchsia-400/40",
      "shadow-fuchsia-500/30",
    ],
  },
  {
    tag: "Signal",
    title: "Signal Spine",
    detail: "Prism Signal 線條結合 Color Demo Utility Neon，維持 HUD 清晰度。",
    badge:
      "bg-linear-to-r from-cyan-300/30 to-lime-300/30 text-cyan-100 border border-white/10",
    preview: "bg-linear-to-r from-cyan-300 via-sky-400 to-lime-300",
    tokens: ["text-cyan-200", "border-cyan-300/40", "ring-lime-300/30"],
  },
];

export const generateWorkflow: GenerateWorkflowStage[] = [
  {
    stage: "01",
    title: "Flux Map",
    copy: "蒐集三頁 token 與敘事，建立 Mist / Pulse / Signal 的對照表。",
    cues: ["解析 Tailwind palette", "鎖定 Story Beats", "組出 HUD layout"],
  },
  {
    stage: "02",
    title: "Pulse Mix",
    copy: "以 Mist/Pulse/Signal 三段輸出跑試算，檢查對比與節奏。",
    cues: ["生成 glow 層", "導入 CTA 漸層", "噪點覆蓋 4%"],
  },
  {
    stage: "03",
    title: "Relay Deploy",
    copy: "輸出 Tailwind component layer 與 JSON token，推送到 Prism 管線。",
    cues: ["寫入 preset", "同步 sidebar palette", "通知 QA"],
  },
];

export const generateExportCards: GenerateExportCard[] = [
  {
    title: "Tailwind Preset",
    detail: "Mist / Pulse / Signal 對應 HUD / LAB / RELAY component layer。",
    snippet: `@layer components {
  .generate-mist { @apply bg-slate-950/80 text-slate-100 border border-slate-800/80; }
  .generate-pulse { @apply bg-linear-to-r from-rose-400 to-fuchsia-500 text-slate-950 shadow-xl; }
  .generate-signal { @apply bg-slate-900/70 text-cyan-100 border border-cyan-300/40 ring-1 ring-lime-200/30; }
}`,
  },
  {
    title: "JSON Tokens",
    detail: "同步給 Prism Forge 的色票輸出。",
    snippet: `{
  "mist": ["slate-950", "slate-900", "slate-800"],
  "pulse": ["rose-400", "fuchsia-500", "indigo-500"],
  "signal": ["cyan-300", "sky-400", "lime-300"]
}`,
  },
];

export const generateSignals: GenerateSignal[] = [
  {
    label: "Mist Frame",
    value: "92%",
    detail: "slate 背景覆蓋率",
    dot: "bg-slate-400 ring-2 ring-emerald-300/40",
  },
  {
    label: "Pulse Focus",
    value: "64%",
    detail: "CTA glow 完成度",
    dot: "bg-fuchsia-400 ring-2 ring-pink-300/40",
  },
  {
    label: "Signal HUD",
    value: "48%",
    detail: "線條與指示配置",
    dot: "bg-cyan-300 ring-2 ring-lime-200/40",
  },
];

export const generateLaunchChecklist: GenerateLaunchItem[] = [
  {
    label: "Preset 合法化",
    detail: "檢查 component layer 是否覆蓋 Mist/Pulse/Signal。",
    status: "完成",
  },
  {
    label: "Sidebar Palette",
    detail: "同步 generate sidebar tokens 以避免回退預設。",
    status: "進行中",
  },
  {
    label: "QA Ping",
    detail: "提示 QA 驗證 glow、noise 與無障礙對比。",
    status: "排程",
  },
];
