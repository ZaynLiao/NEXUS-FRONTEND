import type { NexusHeroContent, NexusHeroStat } from "../types/nexusHero";

export type HeroStat = NexusHeroStat;

export type PaletteSwatch = {
  label: string;
  bg: string;
};

export type PaletteGroup = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  gradient: string;
  swatches: PaletteSwatch[];
  tokens: string[];
};

export type Rule = {
  badge: string;
  title: string;
  detail: string;
};

export type ContrastStep = {
  name: string;
  value: string;
  bar: string;
};

export type ButtonVariant = {
  label: string;
  class: string;
};

export type AlertPreset = {
  title: string;
  body: string;
  bg: string;
  border: string;
  accent: string;
  icon: string;
};

export type CardStudy = {
  title: string;
  body: string;
  iconBg: string;
  border: string;
};

export type StatusSignal = {
  label: string;
  detail: string;
  dot: string;
};

export type ProgressBar = {
  label: string;
  value: string;
  bar: string;
};

export type FormField = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "password" | "select" | "textarea";
  helper?: string;
  options?: string[];
  rows?: number;
};

export type ListEntry = {
  initials: string;
  name: string;
  email: string;
  accent: string;
};

export type TypographyRow = {
  label: string;
  sample: string;
  detail: string;
  meta: string;
};

export type GradientRecipe = {
  name: string;
  stops: string;
  usage: string;
  preview: string;
};

export type ShadowToken = {
  label: string;
  value: string;
  detail: string;
};

export const colorDemoHeroChips = [
  "Core Spectrum",
  "Accent Bloom",
  "Noir Mist",
];

export const colorDemoHeroStats: HeroStat[] = [
  {
    label: "Gradient Recipes",
    value: "03",
    detail: "Nebula Flux / Mist Spine / Pulse Halo",
  },
  {
    label: "Palette Groups",
    value: "03",
    detail: "Core / Accent / Neutral stacks",
  },
  {
    label: "Token Exports",
    value: "27",
    detail: "Tailwind classes for UI atoms",
  },
  {
    label: "Sync Cadence",
    value: "W1",
    detail: "與 Mirage Studio 每週互相校準",
  },
];

export const colorDemoPaletteGroups: PaletteGroup[] = [
  {
    id: "core",
    title: "Core Spectrum",
    subtitle: "Hero",
    body: "NEXUS 核心漸層沿用 Tailwind sky→indigo→violet，維持霓虹指標。",
    gradient: "bg-linear-to-br from-sky-400 via-indigo-500 to-violet-500",
    swatches: [
      { label: "Sky 400", bg: "bg-sky-400" },
      { label: "Sky 500", bg: "bg-sky-500" },
      { label: "Indigo 500", bg: "bg-indigo-500" },
      { label: "Violet 500", bg: "bg-violet-500" },
    ],
    tokens: ["--nx-core-1", "--nx-core-2", "--nx-core-3"],
  },
  {
    id: "accent",
    title: "Accent Bloom",
    subtitle: "Highlight",
    body: "Tailwind violet/pink 負責互動高亮，保持 15% 以下比例。",
    gradient: "bg-linear-to-br from-violet-400 via-pink-400 to-pink-500",
    swatches: [
      { label: "Violet 400", bg: "bg-violet-400" },
      { label: "Pink 400", bg: "bg-pink-400" },
      { label: "Pink 500", bg: "bg-pink-500" },
      { label: "Rose 500", bg: "bg-rose-500" },
    ],
    tokens: ["--nx-accent-1", "--nx-accent-2", "--nx-accent-3"],
  },
  {
    id: "neutral",
    title: "Noir Mist",
    subtitle: "Surface",
    body: "NEXUS Mist 以 Tailwind slate 950→700 疊出深色背景層。",
    gradient: "bg-linear-to-br from-slate-950 via-slate-900 to-slate-800",
    swatches: [
      { label: "Slate 950", bg: "bg-slate-950" },
      { label: "Slate 900", bg: "bg-slate-900" },
      { label: "Slate 800", bg: "bg-slate-800" },
      { label: "Slate 700", bg: "bg-slate-700" },
    ],
    tokens: ["--nx-mist-1", "--nx-mist-2", "--nx-mist-3"],
  },
  {
    id: "utility",
    title: "Utility Neon",
    subtitle: "Signal",
    body: "Utility Neon 採 emerald/cyan/sky，只放在狀態點與 HUD。",
    gradient: "bg-linear-to-br from-emerald-400 via-cyan-300 to-sky-400",
    swatches: [
      { label: "Emerald 400", bg: "bg-emerald-400" },
      { label: "Cyan 300", bg: "bg-cyan-300" },
      { label: "Sky 300", bg: "bg-sky-300" },
      { label: "Indigo 300", bg: "bg-indigo-300" },
    ],
    tokens: ["--nx-signal-success", "--nx-signal-info", "--nx-signal-alert"],
  },
];

export const colorDemoFoundationRules: Rule[] = [
  {
    badge: "HERO",
    title: "雙層漸層陣列",
    detail:
      "Hero 疊 `bg-linear-to-br from-sky-400 via-indigo-500` 與 Mist 網格，發光層透明度≦40%",
  },
  {
    badge: "PANEL",
    title: "描邊 0.5px",
    detail: "所有卡片使用 `border-slate-800/70` + rounded-2xl，維持霧化邊界",
  },
  {
    badge: "FOCUS",
    title: "光暈延遲 120ms",
    detail: "互動元件設定 `transition duration-150`，營造呼吸感",
  },
  {
    badge: "CTA",
    title: "主按鈕漸層",
    detail:
      "Primary 使用 sky→indigo 漸層，Secondary 採 Mist 面板 + indigo 描邊",
  },
];

export const colorDemoApplicationBeats = [
  "NEXUS Hero glow 覆蓋面積 < 25%",
  "每段落僅用 4 種 Tailwind palette 顏色",
  "CTA 區域顯示 text-xs text-slate-500 的 timestamp",
];

export const colorDemoContrastStack: ContrastStep[] = [
  {
    name: "Hero Title",
    value: "text-slate-50 on bg-slate-950 · 90%",
    bar: "w-11/12 bg-slate-100",
  },
  {
    name: "Body Copy",
    value: "text-slate-200 on bg-slate-900 · 70%",
    bar: "w-9/12 bg-slate-400",
  },
  {
    name: "Meta Text",
    value: "text-slate-400 on bg-slate-900 · 55%",
    bar: "w-7/12 bg-slate-500",
  },
  {
    name: "Lines",
    value: "border-slate-700 on bg-slate-950 · 35%",
    bar: "w-5/12 bg-slate-700",
  },
];

export const colorDemoTokenSnippet = `@layer base {
  :root {
    --nx-core-1: theme('colors.sky.400');
    --nx-core-2: theme('colors.indigo.500');
    --nx-core-3: theme('colors.violet.500');
    --nx-mist-1: theme('colors.slate.950');
    --nx-mist-2: theme('colors.slate.900');
    --nx-signal-success: theme('colors.emerald.400');
  }
}`;

export const colorDemoButtonVariants: ButtonVariant[] = [
  {
    label: "Primary",
    class:
      "px-4 py-2 text-sm text-white font-semibold rounded-full bg-linear-to-r from-sky-400 to-indigo-500 shadow-xl ring-1 ring-indigo-500/40 transition hover:scale-105",
  },
  {
    label: "Secondary",
    class:
      "px-4 py-2 text-sm text-indigo-100 font-medium rounded-full border border-indigo-400/40 bg-slate-900/70 shadow-sm hover:bg-slate-900",
  },
  {
    label: "Outlined",
    class:
      "px-4 py-2 text-sm text-sky-200 font-medium rounded-full border border-sky-400/60 hover:bg-sky-500/10",
  },
  {
    label: "Ghost",
    class:
      "px-4 py-2 text-sm text-slate-200 font-medium rounded-full border border-white/5 hover:bg-white/5",
  },
  {
    label: "Live",
    class:
      "px-4 py-2 text-sm inline-flex items-center gap-2 text-pink-200 font-medium rounded-full border border-pink-400/60 ring-1 ring-pink-400/40",
  },
  {
    label: "Disabled",
    class:
      "px-4 py-2 text-sm text-slate-500 font-medium rounded-full bg-slate-900/50 border border-slate-800 cursor-not-allowed opacity-60",
  },
];

export const colorDemoAlertPresets: AlertPreset[] = [
  {
    title: "操作成功",
    body: "設定已同步至雲端",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    accent: "text-emerald-200",
    icon: "M5 13l4 4L19 7",
  },
  {
    title: "系統通知",
    body: "今晚 23:00 進行維護",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    accent: "text-sky-200",
    icon: "M12 9v3m0 3h.01M12 5a7 7 0 110 14 7 7 0 010-14z",
  },
  {
    title: "紫曜提醒",
    body: "請確認最新配置",
    bg: "bg-linear-to-r from-indigo-500/15 to-pink-500/15",
    border: "border-indigo-500/30",
    accent: "text-indigo-200",
    icon: "M12 9v2m0 4h.01M12 5a7 7 0 110 14 7 7 0 010-14z",
  },
  {
    title: "錯誤狀態",
    body: "無法連接伺服器",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    accent: "text-rose-200",
    icon: "M6 18L18 6M6 6l12 12",
  },
];

export const colorDemoCardStudies: CardStudy[] = [
  {
    title: "漸層邊框",
    body: "before 元素堆疊柔光",
    iconBg: "bg-indigo-500/20 text-indigo-200 border border-indigo-500/30",
    border: "border border-indigo-500/30",
  },
  {
    title: "柔光卡片",
    body: "粉色陰影營造浮空",
    iconBg: "bg-pink-500/20 text-pink-200 border border-pink-500/30",
    border: "border border-pink-500/30",
  },
  {
    title: "玻璃擬態",
    body: "加入模糊與噪點",
    iconBg: "bg-slate-900/60 text-slate-200 border border-slate-700",
    border: "border border-slate-700",
  },
];

export const colorDemoStatusSignals: StatusSignal[] = [
  {
    label: "運作正常",
    detail: "服務運行穩定",
    dot: "bg-emerald-400 ring-2 ring-emerald-300/50",
  },
  {
    label: "同步中",
    detail: "資料寫入中",
    dot: "bg-sky-400 ring-2 ring-sky-300/50 animate-pulse",
  },
  {
    label: "高負載",
    detail: "queue 78%",
    dot: "bg-pink-400 ring-2 ring-pink-300/50",
  },
  {
    label: "服務異常",
    detail: "等待人工作業",
    dot: "bg-rose-500 ring-2 ring-rose-300/50",
  },
];

export const colorDemoProgressBars: ProgressBar[] = [
  {
    label: "上傳進度",
    value: "75%",
    bar: "w-3/4 bg-linear-to-r from-sky-400 via-indigo-500 to-pink-500",
  },
  { label: "同步任務", value: "42%", bar: "w-2/5 bg-indigo-400" },
  { label: "匯出佇列", value: "16%", bar: "w-1/6 bg-pink-400" },
];

export const colorDemoFormFields: FormField[] = [
  {
    label: "電子郵件",
    placeholder: "you@nexus.com",
    type: "email",
    helper: "使用認證網域",
  },
  {
    label: "密碼",
    placeholder: "••••••••",
    type: "password",
    helper: "建議 12 位以上",
  },
  {
    label: "分類",
    placeholder: "",
    type: "select",
    options: ["設計提案", "產品諮詢", "系統問題"],
  },
  { label: "備註", placeholder: "輸入訊息...", type: "textarea", rows: 3 },
];

export const colorDemoListEntries: ListEntry[] = [
  {
    initials: "AJ",
    name: "Alice Johnson",
    email: "alice@nexus.com",
    accent: "bg-indigo-500/20 text-indigo-100 border border-indigo-400/40",
  },
  {
    initials: "BS",
    name: "Bob Smith",
    email: "bob@nexus.com",
    accent: "bg-sky-500/20 text-sky-100 border border-sky-400/40",
  },
  {
    initials: "CW",
    name: "Carol White",
    email: "carol@nexus.com",
    accent: "bg-pink-500/20 text-pink-100 border border-pink-400/40",
  },
];

export const colorDemoTypographyScale: TypographyRow[] = [
  {
    label: "Display 54px",
    sample: "霓虹導視標題",
    detail: "Hero headline · text-5xl md:text-[54px] · tracking-[0.02em]",
    meta: "Tailwind text-5xl font-semibold",
  },
  {
    label: "Title 32px",
    sample: "章節節點",
    detail: "Section heading · text-3xl · leading-tight",
    meta: "Tailwind text-3xl font-semibold",
  },
  {
    label: "Body 18px",
    sample: "深色背景正文",
    detail: "Paragraphs · text-lg · leading-relaxed text-slate-200",
    meta: "Tailwind text-lg leading-7",
  },
  {
    label: "Micro 12px",
    sample: "UPPERCASE META",
    detail: "Meta label · text-xs · tracking-[0.35em] · uppercase",
    meta: "Tailwind text-xs tracking-[0.35em]",
  },
];

export const colorDemoHeroContent: NexusHeroContent = {
  eyebrow: "Color Reference",
  title: "Nexus Neon Atlas",
  subtitle:
    "延續美術指引的霧化霓虹語彙，這份配色範例規範核心漸層、對比階層與常用元件，提供每一個 Nexus 共享的視覺節奏。",
  chips: colorDemoHeroChips,
  stats: colorDemoHeroStats,
};

export const colorDemoGradientRecipes: GradientRecipe[] = [
  {
    name: "Nebula Flux",
    stops: "sky-400 → indigo-500 → pink-500",
    usage: "Hero CTA、主要發光層",
    preview: "bg-linear-to-r from-sky-400 via-indigo-500 to-pink-500",
  },
  {
    name: "Mist Spine",
    stops: "slate-950 → slate-900 → indigo-950",
    usage: "段落背景與導覽軸線",
    preview: "bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950",
  },
  {
    name: "Pulse Halo",
    stops: "pink-500 → pink-400 → transparent",
    usage: "晶粒光暈與狀態提醒",
    preview: "bg-linear-to-tr from-pink-500 via-pink-400 to-transparent",
  },
];

export const colorDemoShadowTokens: ShadowToken[] = [
  {
    label: "nx-shadow-mist",
    value: "shadow-2xl ring-1 ring-slate-900/50",
    detail: "Mist 面板浮空陰影，維持深色柔焦",
  },
  {
    label: "nx-shadow-aurora",
    value: "shadow-xl ring-1 ring-indigo-500/40",
    detail: "Hero 發光層與 CTA 外框",
  },
  {
    label: "nx-shadow-signal",
    value: "shadow-lg ring-1 ring-pink-500/40",
    detail: "Live/狀態點霓虹提示",
  },
  {
    label: "nx-shadow-outline",
    value: "ring-1 ring-slate-500/40",
    detail: "0.5px 描邊模擬，呼應 Mist 邊界",
  },
];
