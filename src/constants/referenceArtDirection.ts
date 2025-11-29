import type { NexusHeroContent, NexusHeroStat } from "../types/nexusHero";

export type ArtDirectionHeroStat = NexusHeroStat;

export type ArtDirectionColorStack = {
  label: string;
  description: string;
  preview: string;
  swatches: Array<{ name: string; bg: string }>;
};

export type ArtDirectionMoodPanel = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  hero: string;
};

export type ArtDirectionLayoutMove = {
  title: string;
  detail: string;
  icon: string;
  iconBg: string;
};

export type ArtDirectionTextureGuide = {
  title: string;
  tip: string;
  insight: string;
  preview: string;
};

export type ArtDirectionStoryBeat = {
  stage: string;
  title: string;
  copy: string;
  directives: string[];
};

export type ArtDirectionNarrativeCue = {
  badge: string;
  title: string;
  detail: string;
};

export type ArtDirectionGridSpec = {
  title: string;
  value: string;
  detail: string;
};

export type ArtDirectionLightingLayer = {
  label: string;
  mix: string;
  detail: string;
};

export const artDirectionHeroChips = [
  "Narrative Grid",
  "Pulse Lighting",
  "Glass Drift",
];

export const artDirectionHeroStats: ArtDirectionHeroStat[] = [
  {
    label: "Mood Panels",
    value: "03",
    detail: "Light Trails / Glass Drift / Data Bloom",
  },
  {
    label: "Layout Moves",
    value: "03",
    detail: "Hero stack / Modular section / CTA",
  },
  {
    label: "Texture Presets",
    value: "03",
    detail: "Aurora Blur / Noise Veil / Outline Glow",
  },
  {
    label: "Review Tempo",
    value: "14d",
    detail: "雙週同步 Mirage Studio",
  },
];

export const artDirectionHeroContent: NexusHeroContent = {
  eyebrow: "Art Direction",
  title: "Mirage Studio Nexus",
  subtitle:
    "這份筆記記錄 NEXUS 產品的視覺語彙，說明顏色、光線、材質以及排版節奏如何協奏，確保每個新頁面都延續一致的氣氛與氛圍。",
  chips: artDirectionHeroChips,
  stats: artDirectionHeroStats,
};

export const artDirectionColorStacks: ArtDirectionColorStack[] = [
  {
    label: "Pulse Bloom",
    description: "主視覺背景用於 Hero",
    preview: "bg-linear-to-br from-fuchsia-200 via-fuchsia-400 to-fuchsia-600",
    swatches: [
      { name: "fuchsia-200", bg: "bg-fuchsia-200" },
      { name: "fuchsia-400", bg: "bg-fuchsia-400" },
      { name: "fuchsia-500", bg: "bg-fuchsia-500" },
      { name: "fuchsia-600", bg: "bg-fuchsia-600" },
    ],
  },
  {
    label: "Noir Mist",
    description: "基底底色與玻璃擬態",
    preview: "bg-linear-to-br from-slate-900 via-slate-900 to-slate-800",
    swatches: [
      { name: "slate-900", bg: "bg-slate-900" },
      { name: "slate-800", bg: "bg-slate-800" },
      { name: "slate-700", bg: "bg-slate-700" },
      { name: "slate-600", bg: "bg-slate-600" },
    ],
  },
  {
    label: "Signal Bloom",
    description: "互動與狀態亮點",
    preview: "bg-linear-to-br from-fuchsia-200 via-fuchsia-400 to-fuchsia-500",
    swatches: [
      { name: "fuchsia-200", bg: "bg-fuchsia-200" },
      { name: "fuchsia-300", bg: "bg-fuchsia-300" },
      { name: "fuchsia-400", bg: "bg-fuchsia-400" },
      { name: "fuchsia-500", bg: "bg-fuchsia-500" },
    ],
  },
  {
    label: "Mono Layer",
    description: "文字階層與框線",
    preview: "bg-linear-to-r from-slate-600 via-slate-500 to-slate-300",
    swatches: [
      { name: "slate-500", bg: "bg-slate-500" },
      { name: "slate-400", bg: "bg-slate-400" },
      { name: "slate-300", bg: "bg-slate-300" },
      { name: "slate-200", bg: "bg-slate-200" },
    ],
  },
];

export const artDirectionMoodPanels: ArtDirectionMoodPanel[] = [
  {
    title: "Light Trails",
    subtitle: "Dynamic Glow",
    body: "條紋光束沿著卡片邊緣滑動，搭配粒子讓動態更柔和。",
    tags: ["長曝光", "粒子", "漸層邊框"],
    hero: "bg-linear-to-b from-fuchsia-400/50 via-fuchsia-500/20 to-slate-900/80",
  },
  {
    title: "Glass Drift",
    subtitle: "Floating Panels",
    body: "卡片以 4° 角度偏移，陰影使用粉色模糊，呈現漂浮質感。",
    tags: ["玻璃擬態", "柔焦", "懸停"],
    hero: "bg-linear-to-br from-fuchsia-500/45 via-pink-400/20 to-slate-900/90",
  },
  {
    title: "Data Bloom",
    subtitle: "Aurora Grid",
    body: "細線網格配合天空色光暈，營造科技儀表板感。",
    tags: ["網格", "霓虹", "HUD"],
    hero: "bg-linear-to-t from-fuchsia-500/50 via-fuchsia-400/20 to-slate-900/95",
  },
];

export const artDirectionLayoutMoves: ArtDirectionLayoutMove[] = [
  {
    title: "雙段式 Hero",
    detail: "上層用圖形敘事，下層接 3~4 個統計亮點。",
    icon: "A",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/30",
  },
  {
    title: "模組化段落",
    detail: "每個段落限制 2 欄，避免資訊寬度過長。",
    icon: "M",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/30",
  },
  {
    title: "反差 CTA",
    detail: "結尾 CTA 需改用純色描邊，呼應系統按鈕語彙。",
    icon: "C",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/30",
  },
];

export const artDirectionTextureGuides: ArtDirectionTextureGuide[] = [
  {
    title: "Aurora Blur",
    tip: "背景漸層＋8px 模糊",
    insight: "只放在 Hero 與章節開頭，避免干擾閱讀。",
    preview:
      "bg-linear-to-br from-fuchsia-500/30 via-fuchsia-400/20 to-fuchsia-600/30",
  },
  {
    title: "Noise Veil",
    tip: "細微噪點 4%",
    insight: "在深色背景上叠加可提升質感，保持透明度 0.04。",
    preview:
      "bg-linear-to-tr from-slate-400/20 via-transparent to-slate-400/20",
  },
  {
    title: "Outline Glow",
    tip: "外框陰影 20px",
    insight: "給互動卡片，加上粉、藍陰影讓層次更清楚。",
    preview: "bg-slate-900 shadow-2xl ring-1 ring-fuchsia-500/30",
  },
];

export const artDirectionLightingLayers: ArtDirectionLightingLayer[] = [
  {
    label: "Aurora Wash",
    mix: "sky 400 + fuchsia 500 @ 35%",
    detail: "覆蓋 Hero 的大面積，透明度不超過 0.4。",
  },
  {
    label: "Pulse Beam",
    mix: "pink 400 線條 + 20px 模糊",
    detail: "用於 CTA 與關鍵指示的邊緣閃光。",
  },
  {
    label: "Noir Base",
    mix: "slate 950 + noise 4%",
    detail: "保持 Mist 層的霧化質地，連結 Color Demo。",
  },
];

export const artDirectionStoryBeats: ArtDirectionStoryBeat[] = [
  {
    stage: "Chapter 01",
    title: "沉浸開場",
    copy: "Hero 需描述「資料潛航」的世界觀，視覺以波紋與光束呈現。",
    directives: ["置入核心 slogan", "提供 2 個行動按鈕", "用淡入動態"],
  },
  {
    stage: "Chapter 02",
    title: "介面証據",
    copy: "展示實際元件時，以卡片牆搭配簡潔說明，避免資訊過載。",
    directives: ["卡片使用 16px 內距", "最多三個狀態", "使用 icon 說故事"],
  },
  {
    stage: "Chapter 03",
    title: "引導行動",
    copy: "結尾 CTA 提醒讀者同步最新規範，並提供下載稿。",
    directives: ["主要 CTA 亮色描邊", "次要按鈕用霧面背景", "顯示更新時間"],
  },
];

export const artDirectionNarrativeCues: ArtDirectionNarrativeCue[] = [
  {
    badge: "BALANCE",
    title: "Glow ≤ 30%",
    detail: "霓虹光源面積控制在畫面的 30% 內，保留 Mist 文字層。",
  },
  {
    badge: "HIERARCHY",
    title: "雙層標題",
    detail: "Hero + Section title 共用 tracking 0.3em，行距 1.2。",
  },
  {
    badge: "FOCUS",
    title: "延遲 120ms",
    detail: "Hover 動畫延遲與 Color Demo 對齊，營造同一呼吸感。",
  },
];

export const artDirectionGridSpecs: ArtDirectionGridSpec[] = [
  {
    title: "Baseline",
    value: "8pt",
    detail: "內距、按鈕、陰影皆依 8pt 設定。",
  },
  {
    title: "Columns",
    value: "12c / 64px",
    detail: "桌機段落採 12 欄，保留 64px gutter。",
  },
  {
    title: "Radius",
    value: "24px",
    detail: "卡片與 CTA 使用 24px 圓角，與 Color Demo 一致。",
  },
  {
    title: "Stroke",
    value: "0.5px Mist",
    detail: "用陰影堆疊模擬 0.5px 邊界，避免顯示器失真。",
  },
];
