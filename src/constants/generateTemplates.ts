import type { NexusTheme, SidebarPalette } from "./nexusThemes";

export type TemplateVariantCard = {
  slug: string;
  name: string;
  origin: string;
  energy: string;
  description: string;
  gradient: string;
  stats: { label: string; value: string }[];
  swatches: string[];
  accent: string;
};

type TemplateVariantStat = {
  label: string;
  value: string;
  detail: string;
};

type TemplateVariantHero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips: string[];
  stats: TemplateVariantStat[];
};

type TemplateVariantConfig = {
  slug: string;
  label: string;
  summary: string;
  accent: string;
  hero: TemplateVariantHero;
  theme: NexusTheme;
  stageBackground: string;
  card: TemplateVariantCard;
};

type TemplateStoryboard = {
  title: string;
  tone: string;
  focus: string;
  badge: string;
  description: string;
  preview: string;
  cues: string[];
};

type TemplateGuideline = {
  principle: string;
  mode: string;
  palette: string;
  direction: string;
  action: string;
  paletteSwatches: string[];
  directionSwatches: string[];
};

type TemplateGradientToken = {
  name: string;
  usage: string;
  token: string;
  gradient: string;
  tips: string[];
};

type TemplateApplication = {
  label: string;
  theme: string;
  channel: string;
  description: string;
  preview: string;
  swatches: string[];
};

type TemplateActionButton = {
  label: string;
  border: string;
  text: string;
  hover: string;
};

export type GenerateTemplateConfig = {
  slug: string;
  name: string;
  navLabel: string;
  navIcon: string;
  switcherTitle: string;
  switcherBody: string;
  boardTitle: string;
  boardSubtitle: string;
  boardDescription: string;
  storyboardsTitle: string;
  storyboardsDescription: string;
  guidelinesTitle: string;
  guidelinesDescription: string;
  tokensTitle: string;
  tokensDescription: string;
  applicationTitle: string;
  applicationDescription: string;
  buttonLeft: TemplateActionButton;
  buttonRight: TemplateActionButton;
  variants: TemplateVariantConfig[];
  storyboards: TemplateStoryboard[];
  guidelineMatrix: TemplateGuideline[];
  gradientTokens: TemplateGradientToken[];
  applicationDeck: TemplateApplication[];
  swatchLabelMap: Record<string, string>;
  variantMap: Record<string, TemplateVariantConfig>;
};

const buildVariantMap = (variants: TemplateVariantConfig[]) =>
  variants.reduce<Record<string, TemplateVariantConfig>>((map, variant) => {
    map[variant.slug] = variant;
    return map;
  }, {});

const violetVariants: TemplateVariantConfig[] = [
  {
    slug: "violet-echo",
    label: "電脈回聲",
    summary: "紫脈 x 霓迴",
    accent: "text-violet-200",
    hero: {
      eyebrow: "極域紫聲",
      title: "極域紫聲 · 電脈回聲",
      subtitle: "冷霓 pulse 疊加 neon echo，保持深空科技的震盪。",
      chips: ["Violet Pulse", "Neon Echo", "深空網格"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "脈衝 · 霓光 · 網格" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Pulse / Echo / Drift" },
        { label: "Deploy Time", value: "45s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "violet-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950",
        text: "text-violet-100",
        border: "border-violet-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-violet-300",
        body: "text-violet-100/80",
        gradientText:
          "bg-linear-to-r from-violet-300 via-purple-400 to-indigo-500",
        gridOverlay:
          "bg-linear-to-br from-violet-400/20 via-transparent to-indigo-500/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-violet-500/30",
        glowSecondary: "bg-indigo-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-violet-400/30",
      },
      text: {
        section: "text-violet-300",
        muted: "text-violet-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-violet-400/30",
        text: "text-violet-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-violet-400 via-purple-500 to-indigo-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-violet-300/30 text-violet-100 rounded-full hover:bg-violet-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-violet-400/20",
        chipText: "text-violet-100",
        statCard: "rounded-2xl border border-violet-400/10 bg-slate-900/60",
        statValue: "text-violet-100",
        statLabel: "text-violet-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-violet-950 to-indigo-950 text-violet-100 border-violet-400/40",
        headerBorder: "border-violet-400/40",
        subtitle: "text-violet-200/60",
        titleGradient:
          "bg-linear-to-r from-violet-300 via-purple-400 to-indigo-500",
        sectionButton:
          "bg-slate-900/70 border border-violet-400/40 text-violet-200/60 hover:border-violet-300 hover:text-white",
        sectionTitle: "text-violet-300",
        sectionSubtitle: "text-violet-200/50",
        listBorder: "border-violet-400/30",
        linkIdle: "text-violet-100/70 border-violet-300/10",
        linkHover:
          "hover:text-white hover:border-violet-300 hover:bg-violet-500/10",
        linkActive: "bg-violet-500/15 border-violet-300 text-white",
        iconIdle: "text-violet-200/50",
        iconActive: "text-violet-300",
        footerDot: "bg-violet-400 ring-2 ring-violet-300/40",
        footerText: "text-violet-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.18),_rgba(2,6,23,0.98))]",
    card: {
      slug: "violet-echo",
      name: "電脈回聲",
      origin: "極域紫聲",
      energy: "脈衝 / 回聲",
      description: "深紫脈衝配霓迴光束，打造帶科技質地的暗夜氛圍。",
      gradient: "bg-linear-to-r from-violet-300 via-purple-400 to-indigo-500",
      stats: [
        { label: "脈衝", value: "42%" },
        { label: "回聲", value: "35%" },
        { label: "漂移", value: "23%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-violet-500",
        "bg-purple-400",
        "bg-indigo-500",
      ],
      accent: "text-violet-300",
    },
  },
  {
    slug: "violet-nebula",
    label: "霧環星羽",
    summary: "星霧 x 羽暈",
    accent: "text-purple-200",
    hero: {
      eyebrow: "極域紫聲",
      title: "極域紫聲 · 霧環星羽",
      subtitle: "氣霧 halo 包覆星羽 gradient，適合展示流線敘事。",
      chips: ["Nebula Sheet", "Halo Echo", "Feather Light"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "霧層 · 星羽 · Halo" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Orbit / Glow" },
        { label: "Deploy Time", value: "44s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "violet-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950",
        text: "text-violet-100",
        border: "border-purple-300/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-purple-200",
        body: "text-violet-100/80",
        gradientText:
          "bg-linear-to-r from-purple-200 via-violet-300 to-indigo-400",
        gridOverlay:
          "bg-linear-to-br from-purple-300/20 via-transparent to-indigo-400/20 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-purple-400/25",
        glowSecondary: "bg-indigo-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-purple-300/25",
      },
      text: {
        section: "text-purple-200",
        muted: "text-violet-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-purple-300/30",
        text: "text-purple-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-purple-200 via-violet-300 to-indigo-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-purple-200/30 text-purple-100 rounded-full hover:bg-purple-400/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-purple-200/20",
        chipText: "text-purple-100",
        statCard: "rounded-2xl border border-purple-300/10 bg-slate-900/60",
        statValue: "text-purple-100",
        statLabel: "text-violet-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-indigo-950 via-violet-950 to-purple-950 text-violet-100 border-purple-300/40",
        headerBorder: "border-purple-300/40",
        subtitle: "text-violet-200/60",
        titleGradient:
          "bg-linear-to-r from-purple-200 via-violet-300 to-indigo-400",
        sectionButton:
          "bg-slate-900/70 border border-purple-300/40 text-violet-200/60 hover:border-purple-200 hover:text-white",
        sectionTitle: "text-purple-200",
        sectionSubtitle: "text-violet-200/50",
        listBorder: "border-purple-300/30",
        linkIdle: "text-violet-100/70 border-violet-200/10",
        linkHover:
          "hover:text-white hover:border-purple-200 hover:bg-purple-400/10",
        linkActive: "bg-purple-400/15 border-purple-200 text-white",
        iconIdle: "text-violet-200/50",
        iconActive: "text-purple-200",
        footerDot: "bg-purple-300 ring-2 ring-purple-200/35",
        footerText: "text-violet-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(216,180,254,0.18),_rgba(2,6,23,0.98))]",
    card: {
      slug: "violet-nebula",
      name: "霧環星羽",
      origin: "極域紫聲",
      energy: "霧層 / 星羽",
      description: "紫霧 halo 包覆星羽筆觸，適合敘事長條與冷色 CTA。",
      gradient: "bg-linear-to-r from-purple-200 via-violet-300 to-indigo-400",
      stats: [
        { label: "霧層", value: "38%" },
        { label: "星羽", value: "37%" },
        { label: "Halo", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-indigo-900",
        "bg-purple-400",
        "bg-violet-300",
      ],
      accent: "text-purple-200",
    },
  },
  {
    slug: "violet-surge",
    label: "磁脈脈衝",
    summary: "磁雲 x 超載",
    accent: "text-indigo-200",
    hero: {
      eyebrow: "極域紫聲",
      title: "極域紫聲 · 磁脈脈衝",
      subtitle: "磁雲 streak 與脈衝波交錯，為系統強調態提供濃烈色能。",
      chips: ["Mag Surge", "Pulse Wave", "System Alert"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "磁雲 · 脈衝 · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Mag / Pulse / Alert" },
        { label: "Deploy Time", value: "41s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "violet-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950",
        text: "text-indigo-100",
        border: "border-indigo-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-indigo-200",
        body: "text-indigo-100/80",
        gradientText:
          "bg-linear-to-r from-indigo-300 via-violet-400 to-blue-500",
        gridOverlay:
          "bg-linear-to-br from-indigo-400/20 via-transparent to-blue-500/20 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-indigo-500/30",
        glowSecondary: "bg-blue-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-indigo-400/30",
      },
      text: {
        section: "text-indigo-200",
        muted: "text-indigo-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-indigo-400/30",
        text: "text-indigo-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-indigo-300 via-violet-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-indigo-300/30 text-indigo-100 rounded-full hover:bg-indigo-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-indigo-400/20",
        chipText: "text-indigo-100",
        statCard: "rounded-2xl border border-indigo-400/10 bg-slate-900/60",
        statValue: "text-indigo-100",
        statLabel: "text-indigo-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-indigo-950 to-blue-950 text-indigo-100 border-indigo-400/40",
        headerBorder: "border-indigo-400/40",
        subtitle: "text-indigo-200/60",
        titleGradient:
          "bg-linear-to-r from-indigo-300 via-violet-400 to-blue-500",
        sectionButton:
          "bg-slate-900/70 border border-indigo-400/40 text-indigo-200/60 hover:border-indigo-300 hover:text-white",
        sectionTitle: "text-indigo-200",
        sectionSubtitle: "text-indigo-200/50",
        listBorder: "border-indigo-400/30",
        linkIdle: "text-indigo-100/70 border-indigo-300/10",
        linkHover:
          "hover:text-white hover:border-indigo-300 hover:bg-indigo-500/10",
        linkActive: "bg-indigo-500/15 border-indigo-300 text-white",
        iconIdle: "text-indigo-200/50",
        iconActive: "text-indigo-300",
        footerDot: "bg-indigo-400 ring-2 ring-indigo-300/40",
        footerText: "text-indigo-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_rgba(2,6,23,0.98))]",
    card: {
      slug: "violet-surge",
      name: "磁脈脈衝",
      origin: "極域紫聲",
      energy: "磁雲 / 脈衝",
      description: "藍紫磁雲與訊號脈衝高速交錯，適合警示與引導動態。",
      gradient: "bg-linear-to-r from-indigo-300 via-violet-400 to-blue-500",
      stats: [
        { label: "磁雲", value: "43%" },
        { label: "脈衝", value: "34%" },
        { label: "Signal", value: "23%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-indigo-500",
        "bg-violet-500",
        "bg-blue-500",
      ],
      accent: "text-indigo-200",
    },
  },
];

const auroraVariants: TemplateVariantConfig[] = [
  {
    slug: "tide-prism",
    label: "潮汐稜鏡",
    summary: "天幕霧層 x 青藍脈衝",
    accent: "text-sky-200",
    hero: {
      eyebrow: "霓海極光",
      title: "霓海極光 · 潮汐稜鏡",
      subtitle: "冷霧天幕搭配 cyan 脈衝比例，維持 Mist/Pulse 的沉靜節奏。",
      chips: ["極境載入", "霧層均衡", "訊號守恆"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Edge / Ray" },
        { label: "Deploy Time", value: "42s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "aurora-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950",
        text: "text-slate-100",
        border: "border-sky-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-sky-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-sky-200 via-cyan-300 to-blue-400",
        gridOverlay:
          "bg-linear-to-br from-sky-300/25 via-transparent to-blue-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-sky-300/30",
        glowSecondary: "bg-blue-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-sky-400/30",
      },
      text: {
        section: "text-sky-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-sky-400/30",
        text: "text-sky-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-sky-950 to-blue-950 text-slate-100 border-sky-400/40",
        headerBorder: "border-sky-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-sky-200 via-cyan-300 to-blue-400",
        sectionButton:
          "bg-slate-900/70 border border-sky-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-sky-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-sky-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-sky-200",
        footerDot: "bg-sky-300 ring-2 ring-sky-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_rgba(4,10,24,0.98))]",
    card: {
      slug: "tide-prism",
      name: "潮汐稜鏡",
      origin: "Color Demo",
      energy: "Mist / Pulse",
      description: "以 sky 霧層鋪底，加入 cyan 折射脈衝營造極光開場。",
      gradient: "bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500",
      stats: [
        { label: "Mist", value: "50%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "15%" },
      ],
      swatches: ["bg-slate-950", "bg-sky-600", "bg-cyan-400", "bg-blue-500"],
      accent: "text-sky-200",
    },
  },
  {
    slug: "glacier-line",
    label: "冰脈折線",
    summary: "靛冰光束 x HUD 軌跡",
    accent: "text-blue-200",
    hero: {
      eyebrow: "霓海極光",
      title: "霓海極光 · 冰脈折線",
      subtitle: "深冰靛光束拉出 HUD 軌跡，提升資料層的冷冽亮度。",
      chips: ["訊號軌跡", "光束就緒", "靛冰方格"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Edge / Ray" },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "aurora-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950",
        text: "text-slate-100",
        border: "border-blue-500/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-blue-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-blue-200 via-indigo-300 to-blue-500",
        gridOverlay:
          "bg-linear-to-br from-blue-400/25 via-transparent to-indigo-500/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-blue-500/30",
        glowSecondary: "bg-indigo-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-blue-500/30",
      },
      text: {
        section: "text-blue-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-blue-500/30",
        text: "text-blue-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-blue-300 via-indigo-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-slate-100 border-blue-500/40",
        headerBorder: "border-blue-500/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-blue-200 via-indigo-300 to-blue-500",
        sectionButton:
          "bg-slate-900/70 border border-blue-500/40 text-slate-400 hover:border-indigo-400 hover:text-white",
        sectionTitle: "text-blue-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-blue-500/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-blue-400 hover:bg-blue-400/10",
        linkActive: "bg-blue-400/15 border-blue-300 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-blue-200",
        footerDot: "bg-blue-400 ring-2 ring-blue-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.14),_rgba(2,6,23,0.98))]",
    card: {
      slug: "glacier-line",
      name: "冰脈折線",
      origin: "Color Demo",
      energy: "Pulse / Signal",
      description: "以 indigo beam 帶出 HUD 節奏，保持冷色對比。",
      gradient: "bg-linear-to-r from-blue-500 via-indigo-500 to-slate-900",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-blue-700",
        "bg-indigo-500",
        "bg-slate-800",
      ],
      accent: "text-blue-200",
    },
  },
  {
    slug: "polar-signal",
    label: "極地訊號",
    summary: "高亮青脈 x 冰層爆裂",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "霓海極光",
      title: "霓海極光 · 極地訊號",
      subtitle: "高亮 cyan 光束聚焦警示層，讓 CTA 與指示燈同步閃耀。",
      chips: ["訊號光束", "警示穩定", "冰環軌道"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Edge / Ray" },
        { label: "Deploy Time", value: "35s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "aurora-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950",
        text: "text-slate-100",
        border: "border-cyan-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-cyan-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-cyan-200 via-sky-300 to-blue-400",
        gridOverlay:
          "bg-linear-to-br from-cyan-300/25 via-transparent to-blue-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-cyan-300/30",
        glowSecondary: "bg-blue-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-cyan-400/30",
      },
      text: {
        section: "text-cyan-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-cyan-400/30",
        text: "text-cyan-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-cyan-950 to-blue-950 text-slate-100 border-cyan-400/40",
        headerBorder: "border-cyan-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-blue-400",
        sectionButton:
          "bg-slate-900/70 border border-cyan-400/40 text-slate-400 hover:border-sky-300 hover:text-white",
        sectionTitle: "text-cyan-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-cyan-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-cyan-200",
        footerDot: "bg-cyan-300 ring-2 ring-cyan-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_rgba(5,10,25,0.98))]",
    card: {
      slug: "polar-signal",
      name: "極地訊號",
      origin: "Art Direction",
      energy: "Glow / Signal",
      description: "以 cyan ray 做為提示層，讓 CTA 與 HUD 同步閃爍。",
      gradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-blue-400",
      stats: [
        { label: "Mist", value: "20%" },
        { label: "Pulse", value: "30%" },
        { label: "Signal", value: "50%" },
      ],
      swatches: ["bg-slate-900", "bg-cyan-300", "bg-sky-400", "bg-blue-500"],
      accent: "text-cyan-200",
    },
  },
];

const forestVariants: TemplateVariantConfig[] = [
  {
    slug: "moss-weave",
    label: "苔脈織層",
    summary: "翠霧鋪底 x 枝網連結",
    accent: "text-emerald-200",
    hero: {
      eyebrow: "森域織層",
      title: "森域織層 · 苔脈織層",
      subtitle: "以 emerald 霧層鋪底，搭配 lime 網格串起森林敘事。",
      chips: ["林冠就緒", "霧層緩衝", "生態網格"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Vine / Pulse / Ray" },
        { label: "Deploy Time", value: "50s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "forest-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950",
        text: "text-slate-100",
        border: "border-emerald-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-emerald-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-emerald-200 via-teal-300 to-lime-300",
        gridOverlay:
          "bg-linear-to-br from-emerald-300/20 via-transparent to-lime-300/20 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-emerald-300/30",
        glowSecondary: "bg-lime-300/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-emerald-400/30",
      },
      text: {
        section: "text-emerald-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-emerald-300/30",
        text: "text-emerald-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-emerald-300 via-teal-400 to-lime-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-emerald-950 to-green-950 text-slate-100 border-emerald-400/40",
        headerBorder: "border-emerald-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-emerald-200 via-teal-300 to-lime-300",
        sectionButton:
          "bg-slate-900/70 border border-emerald-400/40 text-slate-400 hover:border-lime-300 hover:text-white",
        sectionTitle: "text-emerald-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-emerald-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-emerald-300 hover:bg-emerald-300/10",
        linkActive: "bg-emerald-300/15 border-emerald-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-emerald-200",
        footerDot: "bg-emerald-300 ring-2 ring-emerald-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_rgba(4,10,18,0.98))]",
    card: {
      slug: "moss-weave",
      name: "苔脈織層",
      origin: "Color Demo",
      energy: "Mist / Pulse",
      description: "霧層採 emerald 與 teal 疊帶，建立森林式冷暖差。",
      gradient: "bg-linear-to-r from-emerald-300 via-teal-400 to-lime-400",
      stats: [
        { label: "Mist", value: "45%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-emerald-600",
        "bg-teal-400",
        "bg-lime-400",
      ],
      accent: "text-emerald-200",
    },
  },
  {
    slug: "canopy-signal",
    label: "樹冠訊流",
    summary: "青綠脈衝 x 樹冠光束",
    accent: "text-teal-200",
    hero: {
      eyebrow: "森域織層",
      title: "森域織層 · 樹冠訊流",
      subtitle: "青綠脈衝沿樹冠延伸，HUD 指示維持自然節奏。",
      chips: ["訊號青綠", "藤脈網格", "柔和警示"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Vine / Pulse / Ray" },
        { label: "Deploy Time", value: "46s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "forest-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950",
        text: "text-slate-100",
        border: "border-teal-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-teal-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-teal-200 via-emerald-300 to-lime-300",
        gridOverlay:
          "bg-linear-to-br from-teal-300/20 via-transparent to-emerald-400/20 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-teal-300/30",
        glowSecondary: "bg-emerald-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-teal-400/30",
      },
      text: {
        section: "text-teal-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-teal-300/30",
        text: "text-teal-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-teal-300 via-emerald-400 to-lime-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-teal-950 to-emerald-950 text-slate-100 border-teal-400/40",
        headerBorder: "border-teal-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-teal-200 via-emerald-300 to-lime-300",
        sectionButton:
          "bg-slate-900/70 border border-teal-400/40 text-slate-400 hover:border-emerald-300 hover:text-white",
        sectionTitle: "text-teal-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-teal-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-teal-300 hover:bg-teal-300/10",
        linkActive: "bg-teal-300/15 border-teal-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-teal-200",
        footerDot: "bg-teal-300 ring-2 ring-teal-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),_rgba(3,15,18,0.98))]",
    card: {
      slug: "canopy-signal",
      name: "樹冠訊流",
      origin: "Color Demo",
      energy: "Pulse / Signal",
      description: "Pulse 線條貼著 canopy 移動，保留自然呼吸感。",
      gradient: "bg-linear-to-r from-teal-300 via-emerald-400 to-lime-400",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-teal-600",
        "bg-emerald-400",
        "bg-lime-400",
      ],
      accent: "text-teal-200",
    },
  },
  {
    slug: "grove-flare",
    label: "林暈燈序",
    summary: "萊姆光暈 x 警示節點",
    accent: "text-lime-200",
    hero: {
      eyebrow: "森域織層",
      title: "森域織層 · 林暈燈序",
      subtitle: "lime 光暈提醒互動節點，適合加入 eco 儀表板。",
      chips: ["光暈訊號", "葉脈警示", "萊姆軌道"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Vine / Pulse / Ray" },
        { label: "Deploy Time", value: "44s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "forest-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-emerald-950 to-lime-950",
        text: "text-slate-100",
        border: "border-lime-300/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-lime-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-lime-200 via-emerald-300 to-teal-400",
        gridOverlay:
          "bg-linear-to-br from-lime-300/25 via-transparent to-emerald-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-lime-300/30",
        glowSecondary: "bg-emerald-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-lime-300/30",
      },
      text: {
        section: "text-lime-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-lime-300/30",
        text: "text-lime-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-lime-300 via-emerald-400 to-teal-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-lime-950 to-emerald-950 text-slate-100 border-lime-300/40",
        headerBorder: "border-lime-300/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-lime-200 via-emerald-300 to-teal-400",
        sectionButton:
          "bg-slate-900/70 border border-lime-300/40 text-slate-400 hover:border-emerald-300 hover:text-white",
        sectionTitle: "text-lime-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-lime-300/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-lime-300 hover:bg-lime-300/10",
        linkActive: "bg-lime-300/15 border-lime-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-lime-200",
        footerDot: "bg-lime-300 ring-2 ring-lime-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(190,242,100,0.18),_rgba(5,10,14,0.98))]",
    card: {
      slug: "grove-flare",
      name: "林暈燈序",
      origin: "Art Direction",
      energy: "Glow / Signal",
      description: "lime glow 聚焦 CTA 與警示層，保持自然亮度。",
      gradient: "bg-linear-to-r from-lime-200 via-emerald-300 to-teal-400",
      stats: [
        { label: "Mist", value: "20%" },
        { label: "Pulse", value: "30%" },
        { label: "Signal", value: "50%" },
      ],
      swatches: [
        "bg-slate-900",
        "bg-lime-300",
        "bg-emerald-400",
        "bg-teal-500",
      ],
      accent: "text-lime-200",
    },
  },
];

const magmaVariants: TemplateVariantConfig[] = [
  {
    slug: "ember-vein",
    label: "灼脈熔紋",
    summary: "玫瑰霧層 x 琥珀光暈",
    accent: "text-rose-200",
    hero: {
      eyebrow: "熔芯炎序",
      title: "熔芯炎序 · 灼脈熔紋",
      subtitle: "rose 霧層疊上 amber 光暈，打造岩漿式 CTA 敘事。",
      chips: ["警示就緒", "光暈堆疊", "熱核山脊"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Core / Pulse / Beam" },
        { label: "Deploy Time", value: "40s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "magma-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-rose-950 to-amber-950",
        text: "text-slate-100",
        border: "border-rose-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-rose-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-rose-200 via-orange-300 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-rose-300/30 via-transparent to-amber-300/30 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-rose-400/30",
        glowSecondary: "bg-amber-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-rose-400/30",
      },
      text: {
        section: "text-rose-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-rose-300/30",
        text: "text-rose-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-rose-950 to-amber-950 text-slate-100 border-rose-400/40",
        headerBorder: "border-rose-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-rose-200 via-orange-300 to-amber-300",
        sectionButton:
          "bg-slate-900/70 border border-rose-400/40 text-slate-400 hover:border-orange-300 hover:text-white",
        sectionTitle: "text-rose-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-rose-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-rose-300 hover:bg-rose-300/10",
        linkActive: "bg-rose-300/15 border-rose-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-rose-200",
        footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.18),_rgba(15,6,8,0.98))]",
    card: {
      slug: "ember-vein",
      name: "灼脈熔紋",
      origin: "Color Demo",
      energy: "Mist / Pulse",
      description: "霧層採 rose，Pulse 以 orange 線性帶出熱度。",
      gradient: "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400",
      stats: [
        { label: "Mist", value: "40%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-rose-500",
        "bg-orange-400",
        "bg-amber-300",
      ],
      accent: "text-rose-200",
    },
  },
  {
    slug: "ash-core",
    label: "玄燼熔核",
    summary: "熔核脈衝 x 玄岩底板",
    accent: "text-orange-200",
    hero: {
      eyebrow: "熔芯炎序",
      title: "熔芯炎序 · 玄燼熔核",
      subtitle: "暗岩底色襯托 orange 核心，適合監測儀表板。",
      chips: ["核心穩定", "玄岩網格", "脈衝熱度"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Core / Pulse / Beam" },
        { label: "Deploy Time", value: "36s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "magma-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-orange-950 to-red-950",
        text: "text-slate-100",
        border: "border-orange-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-orange-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-orange-200 via-amber-300 to-red-400",
        gridOverlay:
          "bg-linear-to-br from-orange-300/30 via-transparent to-red-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-orange-400/30",
        glowSecondary: "bg-red-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-orange-400/30",
      },
      text: {
        section: "text-orange-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-orange-300/30",
        text: "text-orange-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-orange-300 via-amber-400 to-red-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-orange-950 to-red-950 text-slate-100 border-orange-400/40",
        headerBorder: "border-orange-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-orange-200 via-amber-300 to-red-400",
        sectionButton:
          "bg-slate-900/70 border border-orange-400/40 text-slate-400 hover:border-amber-300 hover:text-white",
        sectionTitle: "text-orange-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-orange-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-orange-300 hover:bg-orange-300/10",
        linkActive: "bg-orange-300/15 border-orange-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-orange-200",
        footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_rgba(15,6,6,0.98))]",
    card: {
      slug: "ash-core",
      name: "玄燼熔核",
      origin: "Color Demo",
      energy: "Pulse / Signal",
      description: "orange core 與 red signal 分層，突顯監控節奏。",
      gradient: "bg-linear-to-r from-orange-300 via-amber-400 to-red-500",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "45%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: ["bg-slate-950", "bg-orange-500", "bg-amber-400", "bg-red-500"],
      accent: "text-orange-200",
    },
  },
  {
    slug: "lava-signal",
    label: "熔炬訊號",
    summary: "琥珀光束 x 警示鏈",
    accent: "text-amber-200",
    hero: {
      eyebrow: "熔芯炎序",
      title: "熔芯炎序 · 熔炬訊號",
      subtitle: "amber 光束滑過 CTA 與 HUD，維持高對比警示流。",
      chips: ["訊號光束", "CTA 光暈", "警示鏈路"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Core / Pulse / Beam" },
        { label: "Deploy Time", value: "34s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "magma-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-amber-950 to-rose-950",
        text: "text-slate-100",
        border: "border-amber-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-amber-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-amber-200 via-orange-300 to-red-400",
        gridOverlay:
          "bg-linear-to-br from-amber-300/30 via-transparent to-red-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-amber-400/30",
        glowSecondary: "bg-rose-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-amber-400/30",
      },
      text: {
        section: "text-amber-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-amber-300/30",
        text: "text-amber-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-amber-300 via-orange-400 to-red-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-amber-950 to-rose-950 text-slate-100 border-amber-400/40",
        headerBorder: "border-amber-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-amber-200 via-orange-300 to-red-400",
        sectionButton:
          "bg-slate-900/70 border border-amber-400/40 text-slate-400 hover:border-orange-300 hover:text-white",
        sectionTitle: "text-amber-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-amber-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-amber-300 hover:bg-amber-300/10",
        linkActive: "bg-amber-300/15 border-amber-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-amber-200",
        footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_rgba(18,6,8,0.98))]",
    card: {
      slug: "lava-signal",
      name: "熔炬訊號",
      origin: "Art Direction",
      energy: "Glow / Signal",
      description: "amber beam 讓 CTA 與 HUD 共享相同警示力量。",
      gradient: "bg-linear-to-r from-amber-200 via-orange-300 to-red-500",
      stats: [
        { label: "Mist", value: "25%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "40%" },
      ],
      swatches: ["bg-slate-900", "bg-amber-300", "bg-orange-400", "bg-red-500"],
      accent: "text-amber-200",
    },
  },
];

const atmosphereVariants: TemplateVariantConfig[] = [
  {
    slug: "stratos-halo",
    label: "平流暈冠",
    summary: "紫霧雲頂 x 金色光束",
    accent: "text-violet-200",
    hero: {
      eyebrow: "平流天象",
      title: "平流天象 · 平流暈冠",
      subtitle: "violet 霧層配合金色光束，營造宏大的大氣儀表舞台。",
      chips: ["暈光就緒", "金耀軌跡", "靜穩霧層"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Mist / Beam / Ray" },
        { label: "Deploy Time", value: "47s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "atmos-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950",
        text: "text-slate-100",
        border: "border-violet-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-violet-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-violet-200 via-purple-300 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-violet-300/25 via-transparent to-amber-200/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-violet-400/30",
        glowSecondary: "bg-amber-300/30",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-violet-400/30",
      },
      text: {
        section: "text-violet-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-violet-300/30",
        text: "text-violet-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-violet-300 via-purple-400 to-amber-300 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-violet-950 to-indigo-900 text-slate-100 border-violet-400/40",
        headerBorder: "border-violet-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-violet-200 via-purple-300 to-amber-300",
        sectionButton:
          "bg-slate-900/70 border border-violet-400/40 text-slate-400 hover:border-amber-300 hover:text-white",
        sectionTitle: "text-violet-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-violet-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-violet-300 hover:bg-violet-300/10",
        linkActive: "bg-violet-300/15 border-violet-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-violet-200",
        footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(196,181,253,0.16),_rgba(6,6,26,0.98))]",
    card: {
      slug: "stratos-halo",
      name: "平流暈冠",
      origin: "Color Demo",
      energy: "Mist / Beam",
      description: "使用 violet mist 與 amber beam，堆疊大氣感 halo。",
      gradient: "bg-linear-to-r from-violet-300 via-purple-400 to-amber-300",
      stats: [
        { label: "Mist", value: "45%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-violet-600",
        "bg-purple-400",
        "bg-amber-300",
      ],
      accent: "text-violet-200",
    },
  },
  {
    slug: "auric-front",
    label: "金暈前線",
    summary: "琥珀光暈 x 靛藍脈衝",
    accent: "text-amber-200",
    hero: {
      eyebrow: "平流天象",
      title: "平流天象 · 金暈前線",
      subtitle: "amber 光暈與 indigo 脈衝交錯，帶出雲頂預報場景。",
      chips: ["光暈軌道", "風暴掃描", "金耀光束"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Beam / Ray" },
        { label: "Deploy Time", value: "44s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "atmos-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-amber-950 to-indigo-950",
        text: "text-slate-100",
        border: "border-amber-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-amber-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-amber-200 via-indigo-300 to-violet-300",
        gridOverlay:
          "bg-linear-to-br from-amber-300/25 via-transparent to-indigo-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-amber-400/30",
        glowSecondary: "bg-indigo-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-amber-400/30",
      },
      text: {
        section: "text-amber-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-amber-300/30",
        text: "text-amber-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-amber-300 via-indigo-400 to-violet-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-amber-950 to-indigo-950 text-slate-100 border-amber-400/40",
        headerBorder: "border-amber-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-amber-200 via-indigo-300 to-violet-400",
        sectionButton:
          "bg-slate-900/70 border border-amber-400/40 text-slate-400 hover:border-indigo-300 hover:text-white",
        sectionTitle: "text-amber-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-amber-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-amber-300 hover:bg-amber-300/10",
        linkActive: "bg-amber-300/15 border-amber-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-amber-200",
        footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_rgba(6,8,24,0.98))]",
    card: {
      slug: "auric-front",
      name: "金暈前線",
      origin: "Art Direction",
      energy: "Glow / Signal",
      description: "amber glow 線條跨越 indigo 背景，呈現天氣帶動。",
      gradient: "bg-linear-to-r from-amber-200 via-indigo-300 to-violet-400",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-amber-400",
        "bg-indigo-500",
        "bg-violet-500",
      ],
      accent: "text-amber-200",
    },
  },
  {
    slug: "polar-cirrus",
    label: "極霧卷流",
    summary: "青霧底座 x 極光射束",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "平流天象",
      title: "平流天象 · 極霧卷流",
      subtitle: "cyan 霧層作為底座，搭配 aurora 光束拉出高空資料波。",
      chips: ["卷雲掃描", "冰藍軌道", "靜脈脈衝"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Mist / Pulse / Signal",
        },
        { label: "Deploy Time", value: "41s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "atmos-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-cyan-950 to-violet-950",
        text: "text-slate-100",
        border: "border-cyan-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-cyan-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-cyan-200 via-sky-300 to-violet-300",
        gridOverlay:
          "bg-linear-to-br from-cyan-300/25 via-transparent to-violet-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-cyan-300/30",
        glowSecondary: "bg-violet-300/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-cyan-400/30",
      },
      text: {
        section: "text-cyan-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-cyan-300/30",
        text: "text-cyan-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-cyan-950 to-violet-950 text-slate-100 border-cyan-400/40",
        headerBorder: "border-cyan-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-violet-400",
        sectionButton:
          "bg-slate-900/70 border border-cyan-400/40 text-slate-400 hover:border-violet-300 hover:text-white",
        sectionTitle: "text-cyan-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-cyan-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-cyan-200",
        footerDot: "bg-cyan-300 ring-2 ring-cyan-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_rgba(5,8,24,0.98))]",
    card: {
      slug: "polar-cirrus",
      name: "極霧卷流",
      origin: "Color Demo",
      energy: "Mist / Signal",
      description: "cyan mist 與 aurora beam 讓空氣層帶有科幻感。",
      gradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-violet-400",
      stats: [
        { label: "Mist", value: "40%" },
        { label: "Pulse", value: "30%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: ["bg-slate-950", "bg-cyan-500", "bg-sky-400", "bg-violet-500"],
      accent: "text-cyan-200",
    },
  },
];

const techVariants: TemplateVariantConfig[] = [
  {
    slug: "ion-grid",
    label: "離子晶格",
    summary: "電漿霧層 x 霓虹電路",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "霓核智域",
      title: "霓核智域 · 離子晶格",
      subtitle: "霓虹電路搭配 plasma 霧層，展現高科技監控場景。",
      chips: ["電路守恆", "霓虹光束", "核心邏輯"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Trace / Beam" },
        { label: "Deploy Time", value: "39s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "tech-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-cyan-950 to-emerald-950",
        text: "text-slate-100",
        border: "border-cyan-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-cyan-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-cyan-200 via-emerald-300 to-lime-300",
        gridOverlay:
          "bg-linear-to-br from-cyan-300/25 via-transparent to-emerald-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-cyan-300/30",
        glowSecondary: "bg-emerald-300/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-cyan-400/30",
      },
      text: {
        section: "text-cyan-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-cyan-300/30",
        text: "text-cyan-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-cyan-300 via-emerald-400 to-lime-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-cyan-950 to-emerald-950 text-slate-100 border-cyan-400/40",
        headerBorder: "border-cyan-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-cyan-200 via-emerald-300 to-lime-400",
        sectionButton:
          "bg-slate-900/70 border border-cyan-400/40 text-slate-400 hover:border-emerald-300 hover:text-white",
        sectionTitle: "text-cyan-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-cyan-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-cyan-200",
        footerDot: "bg-cyan-300 ring-2 ring-cyan-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_rgba(2,10,8,0.98))]",
    card: {
      slug: "ion-grid",
      name: "離子晶格",
      origin: "Color Demo",
      energy: "Mist / Pulse",
      description: "plasma 霧與 neon 電路，製造高科技監控節奏。",
      gradient: "bg-linear-to-r from-cyan-200 via-emerald-300 to-lime-300",
      stats: [
        { label: "Mist", value: "35%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-cyan-500",
        "bg-emerald-400",
        "bg-lime-400",
      ],
      accent: "text-cyan-200",
    },
  },
  {
    slug: "quantum-node",
    label: "量子節點",
    summary: "紫域脈衝 x 霓虹射束",
    accent: "text-fuchsia-200",
    hero: {
      eyebrow: "霓核智域",
      title: "霓核智域 · 量子節點",
      subtitle: "紫外脈衝配搭 magenta 射束，展示資料核融合。",
      chips: ["節點就緒", "脈衝橋接", "量子同步"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Ray / Core" },
        { label: "Deploy Time", value: "42s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "tech-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-fuchsia-950 to-indigo-950",
        text: "text-slate-100",
        border: "border-fuchsia-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-fuchsia-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-fuchsia-200 via-purple-300 to-cyan-300",
        gridOverlay:
          "bg-linear-to-br from-fuchsia-300/25 via-transparent to-cyan-300/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-fuchsia-400/30",
        glowSecondary: "bg-cyan-300/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-fuchsia-400/30",
      },
      text: {
        section: "text-fuchsia-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-fuchsia-300/30",
        text: "text-fuchsia-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-fuchsia-300 via-purple-400 to-cyan-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-fuchsia-950 to-indigo-950 text-slate-100 border-fuchsia-400/40",
        headerBorder: "border-fuchsia-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-fuchsia-200 via-purple-300 to-cyan-300",
        sectionButton:
          "bg-slate-900/70 border border-fuchsia-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-fuchsia-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-fuchsia-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-fuchsia-300 hover:bg-fuchsia-300/10",
        linkActive: "bg-fuchsia-300/15 border-fuchsia-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-fuchsia-200",
        footerDot: "bg-fuchsia-300 ring-2 ring-fuchsia-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(232,121,249,0.16),_rgba(6,4,21,0.98))]",
    card: {
      slug: "quantum-node",
      name: "量子節點",
      origin: "Art Direction",
      energy: "Pulse / Signal",
      description: "紫外 pulse 與 magenta ray 共同凸顯資料核。",
      gradient: "bg-linear-to-r from-fuchsia-200 via-purple-300 to-cyan-300",
      stats: [
        { label: "Mist", value: "25%" },
        { label: "Pulse", value: "45%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-fuchsia-500",
        "bg-purple-400",
        "bg-cyan-400",
      ],
      accent: "text-fuchsia-200",
    },
  },
  {
    slug: "lumen-core",
    label: "流明核心",
    summary: "白色電漿 x 青藍光束",
    accent: "text-sky-200",
    hero: {
      eyebrow: "霓核智域",
      title: "霓核智域 · 流明核心",
      subtitle: "白色 plasma 面板搭配 cyan 光束，營造冷冽科技儀表。",
      chips: ["核心穩定", "流明光暈", "訊號軌道"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Pulse / Beam" },
        { label: "Deploy Time", value: "37s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "tech-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-950",
        text: "text-slate-100",
        border: "border-sky-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-sky-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-sky-200 via-cyan-300 to-white",
        gridOverlay:
          "bg-linear-to-br from-sky-300/25 via-transparent to-white/20 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-sky-300/30",
        glowSecondary: "bg-white/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-sky-400/30",
      },
      text: {
        section: "text-sky-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-sky-300/30",
        text: "text-sky-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-sky-300 via-cyan-400 to-white text-slate-900 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-sky-950 to-cyan-950 text-slate-100 border-sky-400/40",
        headerBorder: "border-sky-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-sky-200 via-cyan-300 to-white",
        sectionButton:
          "bg-slate-900/70 border border-sky-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-sky-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-sky-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover: "hover:text-white hover:border-sky-300 hover:bg-sky-300/10",
        linkActive: "bg-sky-300/15 border-sky-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-sky-200",
        footerDot: "bg-sky-300 ring-2 ring-sky-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.16),_rgba(3,10,18,0.98))]",
    card: {
      slug: "lumen-core",
      name: "流明核心",
      origin: "Art Direction",
      energy: "Glow / Signal",
      description: "白色 plasma 面板搭配 cyan beam，冷冽科技儀表。",
      gradient: "bg-linear-to-r from-sky-200 via-cyan-300 to-white",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "35%" },
      ],
      swatches: ["bg-slate-950", "bg-sky-500", "bg-cyan-400", "bg-white"],
      accent: "text-sky-200",
    },
  },
];

const auroraTemplate: GenerateTemplateConfig = {
  slug: "aurora",
  name: "霓海極光套件",
  navLabel: "霓海極光模板",
  navIcon: "M12 3v18m0 0l4-4m-4 4l-4-4M3 12h18m0 0l-4-4m4 4l-4 4",
  switcherTitle: "霓海極光色帶",
  switcherBody: "切換極光色帶即可同步改變英雄、背景與 sidebar。",
  boardTitle: "冰潮極光色板",
  boardSubtitle: "Color Demo x Art Direction",
  boardDescription:
    "以 Tailwind sky / cyan / blue 色票推導霧層、脈衝與訊號節奏。",
  storyboardsTitle: "極光敘事與流動",
  storyboardsDescription:
    "拆解 mist、pulse、signal 三段 storyboard，保留北境式敘事感。",
  guidelinesTitle: "霧層 / 折射交叉表",
  guidelinesDescription:
    "依 Color Demo 層次與 Art Direction 提示，列出極光應用守則。",
  tokensTitle: "霓海漸層庫",
  tokensDescription: "整理 Mist / Pulse / Signal 常用漸層與 tips。",
  applicationTitle: "極光變奏樣板",
  applicationDescription: "HUD、敘事卡、監控板三種場景呈現藍色系變奏。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-sky-300/60",
    text: "text-sky-100",
    hover: "hover:bg-sky-300/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-blue-300/60",
    text: "text-blue-100",
    hover: "hover:bg-blue-300/10",
  },
  variants: auroraVariants,
  storyboards: [
    {
      title: "Crystal CTA",
      tone: "Frosted",
      focus: "CTA",
      badge: "text-sky-200",
      description: "CTA 採透明玻璃描邊，內層用 sky gradient 提醒交互。",
      preview: "bg-linear-to-r from-sky-300/20 via-cyan-400/10 to-transparent",
      cues: ["玻璃描邊 1px", "hover 加 105% scale", "陰影維持冷色"],
    },
    {
      title: "Orbit HUD",
      tone: "Signal",
      focus: "HUD",
      badge: "text-blue-200",
      description: "細線 HUD 以 blue → cyan 描邊，對齊資料層分組。",
      preview: "bg-linear-to-r from-blue-500/20 via-cyan-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點加入 pulse", "背景使用 12px grid"],
    },
    {
      title: "Drift Canvas",
      tone: "Mist",
      focus: "Background",
      badge: "text-cyan-200",
      description: "大面積霧層延伸 sky/blue，並保留 40% 暗部層次。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40",
      cues: ["暗部 40% 以上", "亮斑放在角落", "粒子尺寸 < 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "折射分層",
      mode: "Layer",
      palette: "Tide · Mist/Pulse",
      direction: "外圈 sky 霧, 內圈 cyan pulse",
      action: "背景 Mist 壓到 50%，Pulse 只進入 CTA 與重要資訊。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-sky-700",
        "bg-cyan-400",
        "bg-blue-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-sky-400/40 to-transparent",
        "bg-linear-to-r from-cyan-400/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "訊號權重",
      mode: "Contrast",
      palette: "Glacier · Pulse/Signal",
      direction: "維持 40/40/20 亮度比例",
      action: "Pulse 用於主標, Signal 僅限定 icon/指示燈, 其它皆 Mist。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-blue-700",
        "bg-indigo-500",
        "bg-slate-800",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-blue-500 to-blue-400",
        "bg-linear-to-r from-cyan-400 to-sky-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "光暈節拍",
      mode: "Halo",
      palette: "Polar · Glow",
      direction: "雙層 halo + beam",
      action: "Halo 用 sky blur，beam 用 cyan 線性，兩者相差 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-sky-400",
        "bg-cyan-300",
        "bg-blue-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-sky-400/40 to-transparent",
        "bg-linear-to-r from-cyan-400/40 to-transparent",
        "bg-linear-to-r from-blue-500/30 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Mist Sheet",
      usage: "背景",
      token: "token-mist",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
      tips: ["模糊 18px", "noise 3%"],
    },
    {
      name: "Pulse Edge",
      usage: "CTA / Tag",
      token: "token-pulse",
      gradient: "bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500",
      tips: ["描邊 1px 白", "hover 時加 glow"],
    },
    {
      name: "Signal Ray",
      usage: "HUD 線條",
      token: "token-signal",
      gradient: "bg-linear-to-r from-cyan-300 via-sky-400 to-blue-400",
      tips: ["線寬 0.75px", "加上 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "Polar HUD",
      theme: "Tide Prism",
      channel: "Data",
      description: "HUD 由 sky→cyan 轉場，搭配 pulse dots 呈現冷冽動態。",
      preview: "bg-linear-to-br from-sky-300/20 via-slate-900 to-slate-950",
      swatches: ["text-sky-200", "text-cyan-200", "text-slate-400"],
    },
    {
      label: "Glacier Narrative",
      theme: "Glacier Line",
      channel: "Story",
      description: "敘事卡保留透明 halo，底部維持 blue gradient 銜接圖像。",
      preview: "bg-linear-to-br from-blue-400/20 via-slate-900 to-slate-950",
      swatches: ["text-blue-200", "text-cyan-200", "text-white"],
    },
    {
      label: "Signal Monitor",
      theme: "Polar Signal",
      channel: "Monitor",
      description: "儀表板以 cyan signal 提醒異常，仍保留 60% 暗色背景。",
      preview: "bg-linear-to-br from-cyan-300/30 via-slate-950 to-slate-950",
      swatches: ["text-cyan-200", "text-blue-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-sky-200": "Mist",
    "text-cyan-200": "Signal",
    "text-blue-200": "Pulse",
    "text-slate-400": "Base",
    "text-white": "Contrast",
    "text-slate-300": "Support",
  },
  variantMap: buildVariantMap(auroraVariants),
};

const forestTemplate: GenerateTemplateConfig = {
  slug: "forest",
  name: "森域織層套件",
  navLabel: "森域織層模板",
  navIcon: "M4 17l4-6 4 6 4-6 4 6",
  switcherTitle: "森域織層色帶",
  switcherBody: "切換森林色帶讓霧層、面板與 sidebar 同步換色。",
  boardTitle: "森林色稿面板",
  boardSubtitle: "Color Demo x Eco Direction",
  boardDescription:
    "以 emerald / teal / lime 建立自然主題的 Mist・Pulse・Signal。",
  storyboardsTitle: "森林敘事節奏",
  storyboardsDescription: "把霧層、藤脈與警示燈拆段，維持生態敘事感。",
  guidelinesTitle: "葉脈 / 光斑交叉表",
  guidelinesDescription:
    "定義 Color Demo 與 Art Direction 在 eco 場景中的運用。",
  tokensTitle: "林域漸層庫",
  tokensDescription: "列出 Moss / Vine / Beam 三組漸層配方。",
  applicationTitle: "森林變奏樣板",
  applicationDescription: "在 Data / Story / Monitor 場景套用綠色系主題。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-emerald-300/60",
    text: "text-emerald-100",
    hover: "hover:bg-emerald-300/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-lime-300/60",
    text: "text-lime-100",
    hover: "hover:bg-lime-300/10",
  },
  variants: forestVariants,
  storyboards: [
    {
      title: "Vine CTA",
      tone: "Moss",
      focus: "CTA",
      badge: "text-emerald-200",
      description: "CTA 採透明薄霧 + lime 描邊，凸顯自然互動。",
      preview:
        "bg-linear-to-r from-emerald-300/20 via-lime-300/10 to-transparent",
      cues: ["描邊 1px", "hover 加亮 8%", "陰影採 moss 色"],
    },
    {
      title: "Canopy HUD",
      tone: "Signal",
      focus: "HUD",
      badge: "text-teal-200",
      description: "細線 HUD 以 teal 走向，模擬樹冠傳輸。",
      preview:
        "bg-linear-to-r from-teal-400/20 via-emerald-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點加入 pulse", "背景使用 8px grid"],
    },
    {
      title: "Grove Canvas",
      tone: "Mist",
      focus: "Background",
      badge: "text-lime-200",
      description: "大面積霧層使用 emerald gradient，亮度集中邊角。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40",
      cues: ["暗部 40% 以上", "亮點放在角落", "粒子尺寸 < 3px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "藤脈疊層",
      mode: "Layer",
      palette: "Moss · Mist/Pulse",
      direction: "外圈 emerald 霧, 內圈 lime pulse",
      action: "Mist 覆蓋 55%，Pulse 於 CTA 與 chips。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-emerald-700",
        "bg-teal-400",
        "bg-lime-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-emerald-400/40 to-transparent",
        "bg-linear-to-r from-lime-400/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "層級對比",
      mode: "Contrast",
      palette: "Canopy · Pulse/Signal",
      direction: "Pulse 40 / Signal 30 / Base 30",
      action: "Pulse 用於主標, Signal 只在 icon 與指示燈。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-teal-600",
        "bg-emerald-400",
        "bg-lime-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-teal-500 to-teal-400",
        "bg-linear-to-r from-emerald-400 to-emerald-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "光斑節奏",
      mode: "Halo",
      palette: "Grove · Glow",
      direction: "lime halo + emerald beam",
      action: "Halo 半徑差 36px，beam 緊貼 CTA。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-lime-300",
        "bg-emerald-400",
        "bg-teal-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-lime-300/40 to-transparent",
        "bg-linear-to-r from-emerald-400/40 to-transparent",
        "bg-linear-to-r from-teal-500/30 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Moss Sheet",
      usage: "背景",
      token: "token-moss",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
      tips: ["noise 4%", "blur 14px"],
    },
    {
      name: "Vine Edge",
      usage: "CTA / Tag",
      token: "token-vine",
      gradient: "bg-linear-to-r from-emerald-300 via-teal-400 to-lime-400",
      tips: ["描邊 1px 白", "hover 加 glow"],
    },
    {
      name: "Leaf Ray",
      usage: "HUD 線條",
      token: "token-leaf",
      gradient: "bg-linear-to-r from-teal-300 via-emerald-300 to-lime-300",
      tips: ["線寬 0.75px", "加上 14px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "Canopy HUD",
      theme: "Moss Weave",
      channel: "Data",
      description: "HUD 由 emerald→teal 轉場，呈現 eco 監控。",
      preview: "bg-linear-to-br from-emerald-300/20 via-slate-900 to-slate-950",
      swatches: ["text-emerald-200", "text-teal-200", "text-slate-400"],
    },
    {
      label: "Grove Narrative",
      theme: "Canopy Signal",
      channel: "Story",
      description: "敘事卡沿用 lime halo，並在底部加入 fern grid。",
      preview: "bg-linear-to-br from-lime-300/20 via-slate-900 to-slate-950",
      swatches: ["text-lime-200", "text-emerald-200", "text-white"],
    },
    {
      label: "Eco Monitor",
      theme: "Grove Flare",
      channel: "Monitor",
      description: "儀表板以 lime signal 提醒異常，保持 60% 暗底。",
      preview: "bg-linear-to-br from-teal-400/30 via-slate-950 to-slate-950",
      swatches: ["text-teal-200", "text-lime-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-emerald-200": "Mist",
    "text-teal-200": "Pulse",
    "text-lime-200": "Signal",
    "text-slate-400": "Base",
    "text-white": "Contrast",
    "text-slate-300": "Support",
  },
  variantMap: buildVariantMap(forestVariants),
};

const magmaTemplate: GenerateTemplateConfig = {
  slug: "magma",
  name: "熔芯炎序套件",
  navLabel: "熔芯炎序模板",
  navIcon: "M5 3l7 7 7-7M5 21l7-7 7 7",
  switcherTitle: "熔芯炎序色帶",
  switcherBody: "切換岩漿色帶即可讓 hero、背景與 sidebar 全面換色。",
  boardTitle: "熔岩主題色板",
  boardSubtitle: "Color Demo x Alert Direction",
  boardDescription:
    "鎖定 rose / orange / amber 色系，定義 Mist・Pulse・Signal 熱度。",
  storyboardsTitle: "岩漿敘事節奏",
  storyboardsDescription:
    "拆成 mist、pulse、beam 三段 storyboard，方便警示與敘事。",
  guidelinesTitle: "熔光 / 警示交叉表",
  guidelinesDescription: "列出顏色比例與 halo 疊帶，維持高能驚喜。",
  tokensTitle: "熔芯漸層庫",
  tokensDescription: "建立 Core / Pulse / Beam 三組暖色漸層。",
  applicationTitle: "岩漿變奏樣板",
  applicationDescription: "HUD、敘事卡與監控板皆能快速套用紅橙系統。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-rose-300/60",
    text: "text-rose-100",
    hover: "hover:bg-rose-300/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-amber-300/60",
    text: "text-amber-100",
    hover: "hover:bg-amber-300/10",
  },
  variants: magmaVariants,
  storyboards: [
    {
      title: "Core CTA",
      tone: "Glow",
      focus: "CTA",
      badge: "text-rose-200",
      description: "CTA 以 rose 玻璃描邊，內層 amber gradient 提醒互動。",
      preview:
        "bg-linear-to-r from-rose-400/20 via-amber-300/10 to-transparent",
      cues: ["描邊 1px", "hover scale 1.05", "陰影採 orange"],
    },
    {
      title: "Lava HUD",
      tone: "Signal",
      focus: "HUD",
      badge: "text-orange-200",
      description: "HUD 線條沿 orange beam 延伸，突出警示節奏。",
      preview:
        "bg-linear-to-r from-orange-400/20 via-amber-300/10 to-transparent",
      cues: ["線寬 0.5px", "節點 pulse", "背景使用 10px grid"],
    },
    {
      title: "Ash Canvas",
      tone: "Mist",
      focus: "Background",
      badge: "text-amber-200",
      description: "暗岩底色保留 60%，頂層加入 rose halo。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40",
      cues: ["暗部 60%", "halo 位在角落", "噪點 < 5%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "熔霧分層",
      mode: "Layer",
      palette: "Ember · Mist/Pulse",
      direction: "外圈 rose 霧, 內圈 orange pulse",
      action: "Mist 50%，Pulse 控制在 CTA 與重點欄。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-rose-500",
        "bg-orange-400",
        "bg-amber-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-rose-400/40 to-transparent",
        "bg-linear-to-r from-orange-400/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "熱度比例",
      mode: "Contrast",
      palette: "Ash · Pulse/Signal",
      direction: "Pulse 45 / Signal 35 / Base 20",
      action: "Pulse 負責大標, Signal 只附著 icon 與警示燈。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-orange-500",
        "bg-amber-400",
        "bg-red-500",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-orange-500 to-orange-400",
        "bg-linear-to-r from-amber-400 to-amber-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "光暈疊帶",
      mode: "Halo",
      palette: "Lava · Glow",
      direction: "amber halo + rose beam",
      action: "Halo 半徑差 30px，beam 緊貼 CTA/警示。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-amber-300",
        "bg-orange-400",
        "bg-rose-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-amber-300/40 to-transparent",
        "bg-linear-to-r from-orange-400/40 to-transparent",
        "bg-linear-to-r from-rose-500/30 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Core Sheet",
      usage: "背景",
      token: "token-core",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
      tips: ["noise 5%", "blur 18px"],
    },
    {
      name: "Pulse Ridge",
      usage: "CTA / Tag",
      token: "token-pulse",
      gradient: "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400",
      tips: ["描邊 1px 白", "hover 增加 glow"],
    },
    {
      name: "Beam Ember",
      usage: "HUD 線條",
      token: "token-beam",
      gradient: "bg-linear-to-r from-amber-300 via-orange-400 to-red-500",
      tips: ["線寬 0.75px", "Blur 18px"],
    },
  ],
  applicationDeck: [
    {
      label: "Lava HUD",
      theme: "Ember Vein",
      channel: "Data",
      description: "HUD 由 rose→orange 轉場，呈現熱能儀表。",
      preview: "bg-linear-to-br from-rose-300/20 via-slate-900 to-slate-950",
      swatches: ["text-rose-200", "text-orange-200", "text-slate-400"],
    },
    {
      label: "Ember Narrative",
      theme: "Ash Core",
      channel: "Story",
      description: "敘事卡維持 amber gradient，描邊帶入紅熱 halo。",
      preview: "bg-linear-to-br from-amber-300/20 via-slate-900 to-slate-950",
      swatches: ["text-amber-200", "text-orange-200", "text-white"],
    },
    {
      label: "Alert Monitor",
      theme: "Lava Signal",
      channel: "Monitor",
      description: "儀表板以 amber signal 聚焦警示，底部保持 60% 暗色。",
      preview: "bg-linear-to-br from-orange-400/30 via-slate-950 to-slate-950",
      swatches: ["text-orange-200", "text-amber-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-rose-200": "Mist",
    "text-orange-200": "Pulse",
    "text-amber-200": "Signal",
    "text-slate-400": "Base",
    "text-white": "Contrast",
    "text-slate-300": "Support",
  },
  variantMap: buildVariantMap(magmaVariants),
};

const atmosphereTemplate: GenerateTemplateConfig = {
  slug: "atmos",
  name: "平流天象套件",
  navLabel: "平流天象模板",
  navIcon: "M3 12h18M12 3v18",
  switcherTitle: "平流天象色帶",
  switcherBody: "切換大氣色帶即可同步改變 hero、背景與 sidebar。",
  boardTitle: "高空色稿面板",
  boardSubtitle: "Color Demo x Atmos Direction",
  boardDescription: "以 violet / amber / cyan 推出 Mist・Beam・Signal。",
  storyboardsTitle: "大氣敘事節奏",
  storyboardsDescription: "拆成 halo、beam、canvas 三段 storyboard。",
  guidelinesTitle: "雲層 / 光束交叉表",
  guidelinesDescription: "定義霧層與光束的配比，維持宏偉的天氣語彙。",
  tokensTitle: "平流漸層庫",
  tokensDescription: "列出 Mist / Beam / Signal 常用漸層並附 tips。",
  applicationTitle: "大氣變奏樣板",
  applicationDescription: "適用預報站、天文儀表、空境敘事等場景。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-violet-300/60",
    text: "text-violet-100",
    hover: "hover:bg-violet-300/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-amber-300/60",
    text: "text-amber-100",
    hover: "hover:bg-amber-300/10",
  },
  variants: atmosphereVariants,
  storyboards: [
    {
      title: "Halo CTA",
      tone: "Mist",
      focus: "CTA",
      badge: "text-violet-200",
      description: "CTA 以 violet halo 包覆，邊緣加入金色描邊。",
      preview:
        "bg-linear-to-r from-violet-300/20 via-amber-200/10 to-transparent",
      cues: ["描邊 1px", "hover glow 12px", "字重維持 600"],
    },
    {
      title: "Jet HUD",
      tone: "Signal",
      focus: "HUD",
      badge: "text-amber-200",
      description: "HUD 線條沿 auric beam 移動，傳達高空資料。",
      preview:
        "bg-linear-to-r from-amber-300/20 via-indigo-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 12px glow", "背景格線 8px"],
    },
    {
      title: "Cirrus Canvas",
      tone: "Mist",
      focus: "Background",
      badge: "text-cyan-200",
      description: "大面積 cyan mist 與 violet halo 交錯，維持 50% 暗部。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40",
      cues: ["暗部 50%", "亮點僅角落", "噪點 3%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "雲層分層",
      mode: "Layer",
      palette: "Stratos · Mist/Beam",
      direction: "外圈 violet 霧, 內圈 amber beam",
      action: "Mist 55%，Beam 僅在 CTA 與 hero label。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-violet-600",
        "bg-purple-400",
        "bg-amber-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-violet-400/40 to-transparent",
        "bg-linear-to-r from-amber-300/30 to-transparent",
        "bg-slate-900",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "光束節奏",
      mode: "Contrast",
      palette: "Auric · Pulse/Signal",
      direction: "Pulse 40 / Signal 30 / Base 30",
      action: "Pulse 用於標題，Signal 只在重點指示燈。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-amber-400",
        "bg-indigo-500",
        "bg-violet-500",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-amber-400 to-amber-300",
        "bg-linear-to-r from-indigo-500 to-violet-400",
        "bg-slate-800",
      ],
    },
    {
      principle: "極光呼吸",
      mode: "Halo",
      palette: "Cirrus · Glow",
      direction: "cyan halo + violet ray",
      action: "Halo 半徑相差 28px，ray 緊貼 CTA。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-cyan-300",
        "bg-sky-400",
        "bg-violet-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-cyan-300/40 to-transparent",
        "bg-linear-to-r from-sky-400/30 to-transparent",
        "bg-linear-to-r from-violet-400/30 to-transparent",
        "bg-slate-950",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Stratos Sheet",
      usage: "背景",
      token: "token-stratos",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
      tips: ["blur 16px", "noise 3%"],
    },
    {
      name: "Auric Beam",
      usage: "CTA / Tag",
      token: "token-auric",
      gradient: "bg-linear-to-r from-amber-200 via-indigo-300 to-violet-400",
      tips: ["描邊 1px 白", "hover 時加 glow"],
    },
    {
      name: "Cirrus Ray",
      usage: "HUD",
      token: "token-cirrus",
      gradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-violet-300",
      tips: ["線寬 0.75px", "blur 14px"],
    },
  ],
  applicationDeck: [
    {
      label: "Orbit HUD",
      theme: "Stratos Halo",
      channel: "Data",
      description: "HUD 以 violet→amber 漸層追蹤高空資料。",
      preview: "bg-linear-to-br from-violet-400/20 via-slate-900 to-slate-950",
      swatches: ["text-violet-200", "text-amber-200", "text-slate-400"],
    },
    {
      label: "Forecast Narrative",
      theme: "Auric Front",
      channel: "Story",
      description: "敘事卡採 amber beam 描邊，保留雲層噪點。",
      preview: "bg-linear-to-br from-amber-300/20 via-slate-900 to-slate-950",
      swatches: ["text-amber-200", "text-indigo-200", "text-white"],
    },
    {
      label: "Cirrus Monitor",
      theme: "Polar Cirrus",
      channel: "Monitor",
      description: "監控面板以 cyan signal 提示異常，底層保持 60% 暗度。",
      preview: "bg-linear-to-br from-cyan-300/30 via-slate-950 to-slate-950",
      swatches: ["text-cyan-200", "text-violet-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-violet-200": "Mist",
    "text-amber-200": "Pulse",
    "text-cyan-200": "Signal",
    "text-slate-400": "Base",
    "text-white": "Contrast",
    "text-slate-300": "Support",
  },
  variantMap: buildVariantMap(atmosphereVariants),
};

const techTemplate: GenerateTemplateConfig = {
  slug: "tech",
  name: "霓核智域套件",
  navLabel: "霓核智域模板",
  navIcon: "M7 8h10l4 4-4 4H7L3 12z",
  switcherTitle: "霓核智域色帶",
  switcherBody: "切換霓虹色帶，讓高科技 hero、背景與 sidebar 同步更新。",
  boardTitle: "科技脈衝面板",
  boardSubtitle: "Color Demo x System Direction",
  boardDescription: "以 cyan / fuchsia / white 建構 Mist・Pulse・Signal。",
  storyboardsTitle: "科技敘事節奏",
  storyboardsDescription: "拆成 grid、nodes、canvas 三段 storyboard。",
  guidelinesTitle: "電路 / 光束交叉表",
  guidelinesDescription: "定義電路亮度與 pulse 權重，維持高對比資訊流。",
  tokensTitle: "霓虹漸層庫",
  tokensDescription: "列出 Sheet / Trace / Beam 三組漸層與提示。",
  applicationTitle: "科技變奏樣板",
  applicationDescription: "適合控制板、風險看板、量測儀等數據場景。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-cyan-300/60",
    text: "text-cyan-100",
    hover: "hover:bg-cyan-300/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-fuchsia-300/60",
    text: "text-fuchsia-100",
    hover: "hover:bg-fuchsia-300/10",
  },
  variants: techVariants,
  storyboards: [
    {
      title: "Grid CTA",
      tone: "Circuit",
      focus: "CTA",
      badge: "text-cyan-200",
      description: "CTA 採透明電路描邊，底層貼著 cyan beam。",
      preview:
        "bg-linear-to-r from-cyan-300/20 via-emerald-300/10 to-transparent",
      cues: ["描邊 1px", "hover scale 1.04", "陰影採 neon"],
    },
    {
      title: "Node HUD",
      tone: "Pulse",
      focus: "HUD",
      badge: "text-fuchsia-200",
      description: "HUD 以 fuchsia node 連接，維持 10px 網格。",
      preview:
        "bg-linear-to-r from-fuchsia-300/20 via-purple-300/10 to-transparent",
      cues: ["線寬 0.5px", "節點 10px", "背板 opacity 70%"],
    },
    {
      title: "Lumen Canvas",
      tone: "Mist",
      focus: "Background",
      badge: "text-sky-200",
      description: "大面積 sky mist 搭配 cyan halo，凸顯高科技深度。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40",
      cues: ["暗部 45%", "亮度聚焦中心", "噪點 4%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "電路層次",
      mode: "Layer",
      palette: "Ion · Mist/Pulse",
      direction: "外圈 cyan 霧, 內圈 lime pulse",
      action: "Mist 50%，Pulse 限定 CTA 與重點框。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-cyan-500",
        "bg-emerald-400",
        "bg-lime-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-cyan-400/40 to-transparent",
        "bg-linear-to-r from-emerald-300/30 to-transparent",
        "bg-slate-900",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "脈衝權重",
      mode: "Contrast",
      palette: "Quantum · Pulse/Signal",
      direction: "Pulse 45 / Signal 35 / Base 20",
      action: "Pulse 為主標, Signal 僅限 icon 與儀表指示。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-fuchsia-500",
        "bg-purple-400",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-fuchsia-500 to-purple-400",
        "bg-linear-to-r from-cyan-400 to-sky-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "光核節奏",
      mode: "Halo",
      palette: "Lumen · Glow",
      direction: "white halo + cyan beam",
      action: "Halo 半徑差 32px，beam 貼合 CTA。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-white",
        "bg-sky-400",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-white/40 to-transparent",
        "bg-linear-to-r from-sky-400/30 to-transparent",
        "bg-linear-to-r from-cyan-400/30 to-transparent",
        "bg-slate-950",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Ion Sheet",
      usage: "背景",
      token: "token-ion",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
      tips: ["blur 18px", "噪點 5%"],
    },
    {
      name: "Quantum Trace",
      usage: "電路",
      token: "token-quantum",
      gradient: "bg-linear-to-r from-fuchsia-200 via-purple-300 to-cyan-300",
      tips: ["線寬 0.6px", "加柔光 20%"],
    },
    {
      name: "Lumen Beam",
      usage: "CTA",
      token: "token-lumen",
      gradient: "bg-linear-to-r from-sky-200 via-cyan-300 to-white",
      tips: ["描邊 1px", "hover glow 14px"],
    },
  ],
  applicationDeck: [
    {
      label: "Logic HUD",
      theme: "Ion Grid",
      channel: "Data",
      description: "HUD 以 cyan→lime 線條呈現能源儀表。",
      preview: "bg-linear-to-br from-cyan-300/20 via-slate-900 to-slate-950",
      swatches: ["text-cyan-200", "text-emerald-200", "text-slate-400"],
    },
    {
      label: "Quantum Narrative",
      theme: "Quantum Node",
      channel: "Story",
      description: "敘事卡使用 fuchsia pulse 描邊，凸顯資料核心。",
      preview: "bg-linear-to-br from-fuchsia-300/20 via-slate-900 to-slate-950",
      swatches: ["text-fuchsia-200", "text-cyan-200", "text-white"],
    },
    {
      label: "Lumen Monitor",
      theme: "Lumen Core",
      channel: "Monitor",
      description: "儀表板加入白色 halo 與 cyan alert，維持高科技空氣感。",
      preview: "bg-linear-to-br from-sky-300/30 via-slate-950 to-slate-950",
      swatches: ["text-sky-200", "text-cyan-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-cyan-200": "Mist",
    "text-emerald-200": "Pulse",
    "text-lime-200": "Signal",
    "text-fuchsia-200": "Pulse",
    "text-sky-200": "Glow",
    "text-slate-400": "Base",
    "text-white": "Contrast",
  },
  variantMap: buildVariantMap(techVariants),
};

const ivoryVariants: TemplateVariantConfig[] = [
  {
    slug: "ivory-flow",
    label: "霧階流光",
    summary: "象牙霧 x 銀束",
    accent: "text-white",
    hero: {
      eyebrow: "象牙霧境",
      title: "象牙霧境 · 霧階流光",
      subtitle: "純白霧層搭配 silver ray，維持極簡而安定的節奏。",
      chips: ["霧階均衡", "銀束描邊", "潔淨訊號"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "霧階 · 銀束 · 月暈" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Veil / Beam / Signal" },
        { label: "Deploy Time", value: "40s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "ivory-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        text: "text-slate-100",
        border: "border-white/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-white",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-white via-slate-200 to-slate-400",
        gridOverlay:
          "bg-linear-to-br from-white/10 via-transparent to-slate-400/10 opacity-40 mix-blend-overlay",
        glowPrimary: "bg-white/20",
        glowSecondary: "bg-slate-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-white/20",
      },
      text: {
        section: "text-white",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-white/30",
        text: "text-white",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-white via-slate-200 to-slate-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/20",
        chipText: "text-white",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-white/20",
        headerBorder: "border-white/20",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-white via-slate-200 to-slate-400",
        sectionButton:
          "bg-slate-900/70 border border-white/20 text-slate-400 hover:border-white hover:text-white",
        sectionTitle: "text-white",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-white/10",
        linkIdle: "text-slate-300 border-white/10",
        linkHover: "hover:text-white hover:border-white hover:bg-white/10",
        linkActive: "bg-white/15 border-white text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-white",
        footerDot: "bg-white ring-2 ring-white/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_rgba(2,6,23,0.98))]",
    card: {
      slug: "ivory-flow",
      name: "霧階流光",
      origin: "象牙霧境",
      energy: "霧階 / 銀束",
      description: "全幅象牙霧覆蓋再以銀束描邊，營造純粹的冷靜開場。",
      gradient: "bg-linear-to-r from-slate-100 via-white to-slate-300",
      stats: [
        { label: "霧階", value: "55%" },
        { label: "銀束", value: "35%" },
        { label: "訊號", value: "10%" },
      ],
      swatches: ["bg-slate-950", "bg-white", "bg-slate-300", "bg-slate-500"],
      accent: "text-white",
    },
  },
  {
    slug: "ivory-halo",
    label: "銀暈折射",
    summary: "月暈霧 x 霜藍",
    accent: "text-slate-200",
    hero: {
      eyebrow: "象牙霧境",
      title: "象牙霧境 · 銀暈折射",
      subtitle: "月暈 halo 環繞 CTA，霜藍束線為 HUD 注入柔亮節奏。",
      chips: ["月暈光", "霜藍描邊", "柔亮 CTA"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "霧暈 · 冷束 · 輕訊" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Veil / Halo / Beam" },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "ivory-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950",
        text: "text-slate-100",
        border: "border-slate-200/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-slate-100",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-white via-slate-200 to-sky-300",
        gridOverlay:
          "bg-linear-to-br from-slate-200/20 via-transparent to-sky-300/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-white/15",
        glowSecondary: "bg-sky-300/20",
      },
      surfaces: {
        panel: "bg-slate-950/75",
        softPanel: "bg-slate-950/60",
        border: "border-slate-200/20",
      },
      text: {
        section: "text-slate-100",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-slate-200/30",
        text: "text-slate-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-white via-slate-200 to-sky-300 text-slate-900 font-semibold rounded-full",
        secondary:
          "border border-white/20 text-slate-100 rounded-full hover:bg-white/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/15",
        chipText: "text-white",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-slate-100 border-slate-200/30",
        headerBorder: "border-slate-200/30",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-white via-slate-200 to-sky-300",
        sectionButton:
          "bg-slate-900/70 border border-slate-200/30 text-slate-400 hover:border-white hover:text-white",
        sectionTitle: "text-slate-100",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-slate-200/20",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-slate-100 hover:bg-slate-100/10",
        linkActive: "bg-slate-100/15 border-white text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-slate-100",
        footerDot: "bg-slate-100 ring-2 ring-sky-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.16),_rgba(2,6,23,0.98))]",
    card: {
      slug: "ivory-halo",
      name: "銀暈折射",
      origin: "象牙霧境",
      energy: "月暈 / 霜藍",
      description: "銀暈 halo 為 CTA 披上霜藍光暈，適合需要柔亮引導的介面。",
      gradient: "bg-linear-to-r from-white via-slate-200 to-sky-300",
      stats: [
        { label: "霧暈", value: "45%" },
        { label: "霜藍", value: "35%" },
        { label: "訊號", value: "20%" },
      ],
      swatches: ["bg-slate-950", "bg-slate-700", "bg-slate-200", "bg-sky-300"],
      accent: "text-slate-200",
    },
  },
  {
    slug: "ivory-signal",
    label: "冰脈訊號",
    summary: "霧黑底 x 冰線",
    accent: "text-sky-200",
    hero: {
      eyebrow: "象牙霧境",
      title: "象牙霧境 · 冰脈訊號",
      subtitle: "深霧底襯托冰藍訊號線，適合監控與警示場景。",
      chips: ["冰線 alert", "暗夜霧", "HUD 強化"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "霧黑 · 冰線 · 警示" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Edge / Ray" },
        { label: "Deploy Time", value: "36s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "ivory-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900",
        text: "text-slate-100",
        border: "border-sky-200/30",
      },
      hero: {
        surface: "bg-slate-950/88",
        label: "text-sky-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-sky-200 via-cyan-200 to-white",
        gridOverlay:
          "bg-linear-to-br from-sky-200/20 via-transparent to-white/15 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-sky-300/25",
        glowSecondary: "bg-white/15",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/55",
        border: "border-sky-200/20",
      },
      text: {
        section: "text-sky-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-sky-200/30",
        text: "text-sky-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-sky-200 via-cyan-300 to-white text-slate-900 font-semibold rounded-full",
        secondary:
          "border border-sky-200/40 text-sky-100 rounded-full hover:bg-sky-200/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-sky-200/20",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100 border-sky-200/30",
        headerBorder: "border-sky-200/30",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-sky-200 via-cyan-200 to-white",
        sectionButton:
          "bg-slate-900/70 border border-sky-200/30 text-slate-400 hover:border-white hover:text-white",
        sectionTitle: "text-sky-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-sky-200/20",
        linkIdle: "text-slate-300 border-white/10",
        linkHover: "hover:text-white hover:border-sky-200 hover:bg-sky-200/10",
        linkActive: "bg-sky-200/15 border-sky-100 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-sky-200",
        footerDot: "bg-sky-200 ring-2 ring-sky-100/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.12),_rgba(2,6,23,0.98))]",
    card: {
      slug: "ivory-signal",
      name: "冰脈訊號",
      origin: "象牙霧境",
      energy: "霧底 / 冰線",
      description: "以深霧鋪底並鎖定冰藍訊號線條，適合冷冽監控 UI。",
      gradient: "bg-linear-to-r from-slate-900 via-sky-400 to-white",
      stats: [
        { label: "霧底", value: "40%" },
        { label: "冰線", value: "40%" },
        { label: "警示", value: "20%" },
      ],
      swatches: ["bg-slate-950", "bg-slate-800", "bg-sky-400", "bg-white"],
      accent: "text-sky-200",
    },
  },
];

const sakuraVariants: TemplateVariantConfig[] = [
  {
    slug: "sakura-neon",
    label: "花霧霓序",
    summary: "粉霧 x 霓虹",
    accent: "text-pink-300",
    hero: {
      eyebrow: "櫻霞霓序",
      title: "櫻霞霓序 · 花霧霓序",
      subtitle: "粉霧主體結合霓虹脈衝，構築活力十足的賽博花園。",
      chips: ["花霧 CTA", "霓虹脈衝", "賽博玫瑰"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "花霧 · 霓光 · 荊棘" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Petal / Neon / Thorn" },
        { label: "Deploy Time", value: "40s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "sakura-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950",
        text: "text-pink-100",
        border: "border-pink-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-pink-300",
        body: "text-pink-100/80",
        gradientText:
          "bg-linear-to-r from-pink-300 via-rose-400 to-fuchsia-500",
        gridOverlay:
          "bg-linear-to-br from-pink-400/20 via-transparent to-rose-500/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-pink-500/30",
        glowSecondary: "bg-rose-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-pink-400/30",
      },
      text: {
        section: "text-pink-300",
        muted: "text-pink-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-pink-400/30",
        text: "text-pink-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-pink-400 via-rose-500 to-fuchsia-500 text-white font-semibold rounded-full",
        secondary:
          "border border-pink-300/30 text-pink-100 rounded-full hover:bg-pink-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-pink-400/20",
        chipText: "text-pink-100",
        statCard: "rounded-2xl border border-pink-400/10 bg-slate-900/60",
        statValue: "text-pink-100",
        statLabel: "text-pink-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-pink-950 to-rose-950 text-pink-100 border-pink-400/40",
        headerBorder: "border-pink-400/40",
        subtitle: "text-pink-200/60",
        titleGradient:
          "bg-linear-to-r from-pink-300 via-rose-400 to-fuchsia-500",
        sectionButton:
          "bg-slate-900/70 border border-pink-400/40 text-pink-200/60 hover:border-pink-300 hover:text-white",
        sectionTitle: "text-pink-300",
        sectionSubtitle: "text-pink-200/50",
        listBorder: "border-pink-400/30",
        linkIdle: "text-pink-100/70 border-pink-300/10",
        linkHover:
          "hover:text-white hover:border-pink-300 hover:bg-pink-500/10",
        linkActive: "bg-pink-500/15 border-pink-300 text-white",
        iconIdle: "text-pink-200/50",
        iconActive: "text-pink-300",
        footerDot: "bg-pink-400 ring-2 ring-pink-300/40",
        footerText: "text-pink-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_rgba(2,6,23,0.98))]",
    card: {
      slug: "sakura-neon",
      name: "花霧霓序",
      origin: "櫻霞霓序",
      energy: "花霧 / 霓光",
      description: "粉霧鋪底搭配霓虹脈衝，適合敘事開場或互動 CTA。",
      gradient: "bg-linear-to-r from-pink-400 via-rose-500 to-fuchsia-500",
      stats: [
        { label: "花霧", value: "50%" },
        { label: "霓光", value: "35%" },
        { label: "荊棘", value: "15%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-pink-500",
        "bg-rose-400",
        "bg-fuchsia-600",
      ],
      accent: "text-pink-300",
    },
  },
  {
    slug: "sakura-flare",
    label: "霓芯脈衝",
    summary: "玫瑰霓光 x Pulse",
    accent: "text-rose-300",
    hero: {
      eyebrow: "櫻霞霓序",
      title: "櫻霞霓序 · 霓芯脈衝",
      subtitle: "玫瑰霓光沿 HUD 流動，適合高對比的資訊層。",
      chips: ["霓芯 HUD", "Pulse Beam", "玫瑰描邊"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "霓芯 · 脈衝 · Alert" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Neon / Beam / Ray" },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "sakura-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-rose-950 via-pink-950 to-fuchsia-950",
        text: "text-rose-100",
        border: "border-rose-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-rose-200",
        body: "text-rose-100/80",
        gradientText:
          "bg-linear-to-r from-rose-300 via-pink-400 to-fuchsia-500",
        gridOverlay:
          "bg-linear-to-br from-rose-400/25 via-transparent to-fuchsia-500/25 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-rose-500/30",
        glowSecondary: "bg-fuchsia-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-rose-400/30",
      },
      text: {
        section: "text-rose-300",
        muted: "text-rose-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-rose-400/30",
        text: "text-rose-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-rose-400 via-pink-500 to-fuchsia-500 text-white font-semibold rounded-full",
        secondary:
          "border border-rose-300/30 text-rose-100 rounded-full hover:bg-rose-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-rose-400/20",
        chipText: "text-rose-100",
        statCard: "rounded-2xl border border-rose-400/10 bg-slate-900/60",
        statValue: "text-rose-100",
        statLabel: "text-rose-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-rose-950 via-pink-950 to-fuchsia-950 text-rose-100 border-rose-400/40",
        headerBorder: "border-rose-400/40",
        subtitle: "text-rose-200/60",
        titleGradient:
          "bg-linear-to-r from-rose-300 via-pink-400 to-fuchsia-500",
        sectionButton:
          "bg-slate-900/70 border border-rose-400/40 text-rose-200/60 hover:border-rose-300 hover:text-white",
        sectionTitle: "text-rose-300",
        sectionSubtitle: "text-rose-200/50",
        listBorder: "border-rose-400/30",
        linkIdle: "text-rose-100/70 border-rose-300/10",
        linkHover:
          "hover:text-white hover:border-rose-300 hover:bg-rose-500/10",
        linkActive: "bg-rose-500/15 border-rose-300 text-white",
        iconIdle: "text-rose-200/50",
        iconActive: "text-rose-300",
        footerDot: "bg-rose-400 ring-2 ring-rose-300/40",
        footerText: "text-rose-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.2),_rgba(2,6,23,0.98))]",
    card: {
      slug: "sakura-flare",
      name: "霓芯脈衝",
      origin: "櫻霞霓序",
      energy: "霓芯 / 脈衝",
      description: "玫瑰霓光沿 HUD 延展，適合高密度儀表或告警場景。",
      gradient: "bg-linear-to-r from-rose-400 via-pink-500 to-fuchsia-500",
      stats: [
        { label: "霓芯", value: "45%" },
        { label: "脈衝", value: "40%" },
        { label: "警示", value: "15%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-rose-500",
        "bg-pink-500",
        "bg-fuchsia-600",
      ],
      accent: "text-rose-300",
    },
  },
  {
    slug: "sakura-thorn",
    label: "荊棘信標",
    summary: "深櫻霧 x Alert",
    accent: "text-fuchsia-300",
    hero: {
      eyebrow: "櫻霞霓序",
      title: "櫻霞霓序 · 荊棘信標",
      subtitle: "深粉霧與紫信標搭配，聚焦在高危的賽博警示。",
      chips: ["Thorn Alert", "Pulse Beam", "Dark Bloom"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Dark · Pulse · Alert" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Sheet / Edge / Ray" },
        { label: "Deploy Time", value: "36s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "sakura-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-rose-950 to-fuchsia-950",
        text: "text-fuchsia-100",
        border: "border-fuchsia-400/40",
      },
      hero: {
        surface: "bg-slate-950/88",
        label: "text-fuchsia-200",
        body: "text-pink-100/80",
        gradientText:
          "bg-linear-to-r from-fuchsia-300 via-rose-400 to-purple-500",
        gridOverlay:
          "bg-linear-to-br from-fuchsia-400/25 via-transparent to-purple-500/25 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-fuchsia-500/30",
        glowSecondary: "bg-purple-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/55",
        border: "border-fuchsia-400/30",
      },
      text: {
        section: "text-fuchsia-300",
        muted: "text-fuchsia-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-fuchsia-400/30",
        text: "text-fuchsia-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-fuchsia-400 via-rose-500 to-purple-500 text-white font-semibold rounded-full",
        secondary:
          "border border-fuchsia-300/30 text-fuchsia-100 rounded-full hover:bg-fuchsia-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-fuchsia-400/20",
        chipText: "text-fuchsia-100",
        statCard: "rounded-2xl border border-fuchsia-400/10 bg-slate-900/60",
        statValue: "text-fuchsia-100",
        statLabel: "text-fuchsia-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-rose-950 to-fuchsia-950 text-fuchsia-100 border-fuchsia-400/40",
        headerBorder: "border-fuchsia-400/40",
        subtitle: "text-fuchsia-200/60",
        titleGradient:
          "bg-linear-to-r from-fuchsia-300 via-rose-400 to-purple-500",
        sectionButton:
          "bg-slate-900/70 border border-fuchsia-400/40 text-fuchsia-200/60 hover:border-fuchsia-300 hover:text-white",
        sectionTitle: "text-fuchsia-300",
        sectionSubtitle: "text-fuchsia-200/50",
        listBorder: "border-fuchsia-400/30",
        linkIdle: "text-fuchsia-100/70 border-fuchsia-300/10",
        linkHover:
          "hover:text-white hover:border-fuchsia-300 hover:bg-fuchsia-500/10",
        linkActive: "bg-fuchsia-500/15 border-fuchsia-300 text-white",
        iconIdle: "text-fuchsia-200/50",
        iconActive: "text-fuchsia-300",
        footerDot: "bg-fuchsia-400 ring-2 ring-fuchsia-300/40",
        footerText: "text-fuchsia-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(219,39,119,0.2),_rgba(2,4,16,0.98))]",
    card: {
      slug: "sakura-thorn",
      name: "荊棘信標",
      origin: "櫻霞霓序",
      energy: "暗霧 / 信標",
      description: "深粉霧鋪底加上紫色信標，適合高危警示資訊。",
      gradient: "bg-linear-to-r from-fuchsia-400 via-rose-500 to-purple-500",
      stats: [
        { label: "暗霧", value: "40%" },
        { label: "脈衝", value: "35%" },
        { label: "警示", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-rose-600",
        "bg-fuchsia-500",
        "bg-purple-600",
      ],
      accent: "text-fuchsia-300",
    },
  },
];

const amberVariants: TemplateVariantConfig[] = [
  {
    slug: "amber-flux",
    label: "晨耀流",
    summary: "琥珀霧 x 金束",
    accent: "text-amber-300",
    hero: {
      eyebrow: "琥珀晨耀",
      title: "琥珀晨耀 · 晨耀流",
      subtitle: "琥珀霧層交織金色 ray，帶來帶暖的晨曦能量。",
      chips: ["晨霧 CTA", "金束描邊", "暖核能量"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "晨霧 · 金束 · 熱核" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Sheet / Beam / Signal",
        },
        { label: "Deploy Time", value: "42s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "amber-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950",
        text: "text-amber-100",
        border: "border-amber-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-amber-300",
        body: "text-amber-100/80",
        gradientText:
          "bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500",
        gridOverlay:
          "bg-linear-to-br from-amber-400/20 via-transparent to-orange-500/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-amber-500/30",
        glowSecondary: "bg-orange-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-amber-400/30",
      },
      text: {
        section: "text-amber-300",
        muted: "text-amber-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-amber-400/30",
        text: "text-amber-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-amber-400 via-yellow-500 to-orange-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-amber-300/30 text-amber-100 rounded-full hover:bg-amber-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-amber-400/20",
        chipText: "text-amber-100",
        statCard: "rounded-2xl border border-amber-400/10 bg-slate-900/60",
        statValue: "text-amber-100",
        statLabel: "text-amber-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-amber-950 to-orange-950 text-amber-100 border-amber-400/40",
        headerBorder: "border-amber-400/40",
        subtitle: "text-amber-200/60",
        titleGradient:
          "bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500",
        sectionButton:
          "bg-slate-900/70 border border-amber-400/40 text-amber-200/60 hover:border-amber-300 hover:text-white",
        sectionTitle: "text-amber-300",
        sectionSubtitle: "text-amber-200/50",
        listBorder: "border-amber-400/30",
        linkIdle: "text-amber-100/70 border-amber-300/10",
        linkHover:
          "hover:text-white hover:border-amber-300 hover:bg-amber-500/10",
        linkActive: "bg-amber-500/15 border-amber-300 text-white",
        iconIdle: "text-amber-200/50",
        iconActive: "text-amber-300",
        footerDot: "bg-amber-400 ring-2 ring-amber-300/40",
        footerText: "text-amber-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_rgba(2,6,23,0.98))]",
    card: {
      slug: "amber-flux",
      name: "晨耀流",
      origin: "琥珀晨耀",
      energy: "晨霧 / 金束",
      description: "琥珀霧配金束描邊，帶來充滿朝氣的暖色氣氛。",
      gradient: "bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500",
      stats: [
        { label: "晨霧", value: "50%" },
        { label: "金束", value: "35%" },
        { label: "熱核", value: "15%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-amber-500",
        "bg-yellow-400",
        "bg-orange-600",
      ],
      accent: "text-amber-300",
    },
  },
  {
    slug: "amber-halo",
    label: "日暈弧",
    summary: "金暈 x 琥珀霧",
    accent: "text-yellow-200",
    hero: {
      eyebrow: "琥珀晨耀",
      title: "琥珀晨耀 · 日暈弧",
      subtitle: "日暈 halo 與琥珀霧堆疊，適合敘事卡與 CTA 強調。",
      chips: ["Halo Glow", "Warm CTA", "Sun Trace"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "暈光 · 霧層 · 射線" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Halo / Beam / Spark" },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "amber-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-amber-950 via-yellow-900 to-orange-950",
        text: "text-amber-100",
        border: "border-yellow-300/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-yellow-200",
        body: "text-amber-100/80",
        gradientText:
          "bg-linear-to-r from-yellow-200 via-amber-300 to-orange-400",
        gridOverlay:
          "bg-linear-to-br from-yellow-300/25 via-transparent to-amber-400/25 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-yellow-400/25",
        glowSecondary: "bg-amber-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-yellow-300/25",
      },
      text: {
        section: "text-yellow-200",
        muted: "text-amber-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-yellow-300/30",
        text: "text-yellow-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-yellow-300 via-amber-300 to-orange-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-yellow-200/30 text-yellow-100 rounded-full hover:bg-yellow-400/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-yellow-200/20",
        chipText: "text-yellow-100",
        statCard: "rounded-2xl border border-yellow-300/10 bg-slate-900/60",
        statValue: "text-yellow-100",
        statLabel: "text-amber-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-amber-950 via-yellow-900 to-orange-950 text-amber-100 border-yellow-300/30",
        headerBorder: "border-yellow-300/30",
        subtitle: "text-amber-200/60",
        titleGradient:
          "bg-linear-to-r from-yellow-200 via-amber-300 to-orange-400",
        sectionButton:
          "bg-slate-900/70 border border-yellow-300/30 text-amber-200/60 hover:border-yellow-200 hover:text-white",
        sectionTitle: "text-yellow-200",
        sectionSubtitle: "text-amber-200/50",
        listBorder: "border-yellow-300/20",
        linkIdle: "text-amber-100/70 border-amber-200/10",
        linkHover:
          "hover:text-white hover:border-yellow-200 hover:bg-yellow-200/10",
        linkActive: "bg-yellow-200/15 border-yellow-100 text-white",
        iconIdle: "text-amber-200/50",
        iconActive: "text-yellow-200",
        footerDot: "bg-yellow-200 ring-2 ring-yellow-100/35",
        footerText: "text-amber-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(253,224,71,0.2),_rgba(2,6,16,0.98))]",
    card: {
      slug: "amber-halo",
      name: "日暈弧",
      origin: "琥珀晨耀",
      energy: "日暈 / 暖束",
      description: "暖色日暈包覆 CTA 與圖像，適合敘事或 hero 場景。",
      gradient: "bg-linear-to-r from-yellow-200 via-amber-300 to-orange-400",
      stats: [
        { label: "暈光", value: "48%" },
        { label: "霧層", value: "32%" },
        { label: "訊號", value: "20%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-amber-500",
        "bg-yellow-300",
        "bg-orange-400",
      ],
      accent: "text-yellow-200",
    },
  },
  {
    slug: "amber-signal",
    label: "耀斑警示",
    summary: "橘束 x Alert",
    accent: "text-orange-200",
    hero: {
      eyebrow: "琥珀晨耀",
      title: "琥珀晨耀 · 耀斑警示",
      subtitle: "橘色 signal 緊貼 HUD，維持警示導向的暖色姿態。",
      chips: ["Flare Alert", "Signal Beam", "Heat Core"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Flare · Signal · Alert" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Core / Beam / Signal" },
        { label: "Deploy Time", value: "36s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "amber-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-orange-950 to-rose-950",
        text: "text-amber-100",
        border: "border-orange-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-orange-200",
        body: "text-amber-100/80",
        gradientText: "bg-linear-to-r from-orange-300 via-amber-400 to-red-500",
        gridOverlay:
          "bg-linear-to-br from-orange-400/25 via-transparent to-red-500/25 opacity-55 mix-blend-soft-light",
        glowPrimary: "bg-orange-500/30",
        glowSecondary: "bg-red-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-orange-400/30",
      },
      text: {
        section: "text-orange-200",
        muted: "text-amber-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-orange-400/30",
        text: "text-orange-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-orange-400 via-amber-400 to-red-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-orange-300/30 text-orange-100 rounded-full hover:bg-orange-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-orange-400/20",
        chipText: "text-orange-100",
        statCard: "rounded-2xl border border-orange-400/10 bg-slate-900/60",
        statValue: "text-orange-100",
        statLabel: "text-amber-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-orange-950 to-rose-950 text-amber-100 border-orange-400/40",
        headerBorder: "border-orange-400/40",
        subtitle: "text-amber-200/60",
        titleGradient:
          "bg-linear-to-r from-orange-300 via-amber-400 to-red-500",
        sectionButton:
          "bg-slate-900/70 border border-orange-400/40 text-amber-200/60 hover:border-orange-300 hover:text-white",
        sectionTitle: "text-orange-200",
        sectionSubtitle: "text-amber-200/50",
        listBorder: "border-orange-400/30",
        linkIdle: "text-amber-100/70 border-orange-300/10",
        linkHover:
          "hover:text-white hover:border-orange-300 hover:bg-orange-500/10",
        linkActive: "bg-orange-500/15 border-orange-300 text-white",
        iconIdle: "text-amber-200/50",
        iconActive: "text-orange-200",
        footerDot: "bg-orange-400 ring-2 ring-orange-300/40",
        footerText: "text-amber-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.2),_rgba(4,6,14,0.98))]",
    card: {
      slug: "amber-signal",
      name: "耀斑警示",
      origin: "琥珀晨耀",
      energy: "耀斑 / 警示",
      description: "橘色耀斑穿過 CTA 與 HUD，強調即時告警。",
      gradient: "bg-linear-to-r from-orange-400 via-amber-400 to-red-500",
      stats: [
        { label: "耀斑", value: "40%" },
        { label: "脈衝", value: "35%" },
        { label: "警示", value: "25%" },
      ],
      swatches: ["bg-slate-950", "bg-orange-500", "bg-amber-400", "bg-red-500"],
      accent: "text-orange-200",
    },
  },
];

const limeVariants: TemplateVariantConfig[] = [
  {
    slug: "lime-surge",
    label: "螢酸湧流",
    summary: "酸霧 x 霓網",
    accent: "text-lime-300",
    hero: {
      eyebrow: "霓酸序列",
      title: "霓酸序列 · 螢酸湧流",
      subtitle: "acid green 穿越 cyber grid，帶來極具侵略性的 CTA 氣場。",
      chips: ["Acid Flow", "Cyber Grid", "Neon Surge"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "酸霧 · 霓束 · 網格" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Mist / Beam / Signal" },
        { label: "Deploy Time", value: "34s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "lime-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-lime-950 to-green-950",
        text: "text-lime-100",
        border: "border-lime-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-lime-300",
        body: "text-lime-100/80",
        gradientText:
          "bg-linear-to-r from-lime-300 via-green-400 to-emerald-500",
        gridOverlay:
          "bg-linear-to-br from-lime-400/20 via-transparent to-green-500/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-lime-500/30",
        glowSecondary: "bg-green-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-lime-400/30",
      },
      text: {
        section: "text-lime-300",
        muted: "text-lime-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-lime-400/30",
        text: "text-lime-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-lime-400 via-green-500 to-emerald-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-lime-300/30 text-lime-100 rounded-full hover:bg-lime-500/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-lime-400/20",
        chipText: "text-lime-100",
        statCard: "rounded-2xl border border-lime-400/10 bg-slate-900/60",
        statValue: "text-lime-100",
        statLabel: "text-lime-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-lime-950 to-green-950 text-lime-100 border-lime-400/40",
        headerBorder: "border-lime-400/40",
        subtitle: "text-lime-200/60",
        titleGradient:
          "bg-linear-to-r from-lime-300 via-green-400 to-emerald-500",
        sectionButton:
          "bg-slate-900/70 border border-lime-400/40 text-lime-200/60 hover:border-lime-300 hover:text-white",
        sectionTitle: "text-lime-300",
        sectionSubtitle: "text-lime-200/50",
        listBorder: "border-lime-400/30",
        linkIdle: "text-lime-100/70 border-lime-300/10",
        linkHover:
          "hover:text-white hover:border-lime-300 hover:bg-lime-500/10",
        linkActive: "bg-lime-500/15 border-lime-300 text-white",
        iconIdle: "text-lime-200/50",
        iconActive: "text-lime-300",
        footerDot: "bg-lime-400 ring-2 ring-lime-300/40",
        footerText: "text-lime-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.18),_rgba(2,6,23,0.98))]",
    card: {
      slug: "lime-surge",
      name: "螢酸湧流",
      origin: "霓酸序列",
      energy: "酸霧 / 霓束",
      description: "酸綠霧牆搭配霓網描邊，迅速建立極科技的高壓氛圍。",
      gradient: "bg-linear-to-r from-lime-300 via-green-400 to-emerald-500",
      stats: [
        { label: "Acid", value: "55%" },
        { label: "Grid", value: "30%" },
        { label: "Surge", value: "15%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-lime-500",
        "bg-green-500",
        "bg-emerald-600",
      ],
      accent: "text-lime-300",
    },
  },
  {
    slug: "lime-circuit",
    label: "矩陣光牆",
    summary: "晶格 x 電跡",
    accent: "text-emerald-200",
    hero: {
      eyebrow: "霓酸序列",
      title: "霓酸序列 · 矩陣光牆",
      subtitle: "emerald lattice 與 cyan 電跡交錯，適合資料牆與 HUD 疊面。",
      chips: ["Matrix Glow", "Signal Route", "Cold Neon"],
      stats: [
        {
          label: "Theme Slots",
          value: "03",
          detail: "Lattice · Route · Signal",
        },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Mesh / Beam / Node" },
        { label: "Deploy Time", value: "37s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "lime-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-950",
        text: "text-emerald-100",
        border: "border-emerald-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-emerald-200",
        body: "text-emerald-100/80",
        gradientText:
          "bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400",
        gridOverlay:
          "bg-linear-to-br from-emerald-300/20 via-transparent to-cyan-400/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-emerald-400/25",
        glowSecondary: "bg-cyan-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-emerald-400/30",
      },
      text: {
        section: "text-emerald-200",
        muted: "text-emerald-100/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-emerald-300/30",
        text: "text-emerald-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-emerald-300 via-teal-400 to-cyan-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-emerald-200/30 text-emerald-100 rounded-full hover:bg-emerald-400/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-emerald-300/20",
        chipText: "text-emerald-100",
        statCard: "rounded-2xl border border-emerald-400/10 bg-slate-900/60",
        statValue: "text-emerald-100",
        statLabel: "text-emerald-100/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-emerald-950 to-cyan-950 text-emerald-100 border-emerald-400/40",
        headerBorder: "border-emerald-400/40",
        subtitle: "text-emerald-100/60",
        titleGradient:
          "bg-linear-to-r from-emerald-300 via-teal-400 to-cyan-400",
        sectionButton:
          "bg-slate-900/70 border border-emerald-400/40 text-emerald-200/60 hover:border-emerald-200 hover:text-white",
        sectionTitle: "text-emerald-200",
        sectionSubtitle: "text-emerald-100/50",
        listBorder: "border-emerald-400/30",
        linkIdle: "text-emerald-100/70 border-emerald-200/10",
        linkHover:
          "hover:text-white hover:border-emerald-300 hover:bg-emerald-400/10",
        linkActive: "bg-emerald-400/15 border-emerald-300 text-white",
        iconIdle: "text-emerald-100/50",
        iconActive: "text-emerald-200",
        footerDot: "bg-emerald-300 ring-2 ring-emerald-200/40",
        footerText: "text-emerald-100/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_rgba(3,10,20,0.98))]",
    card: {
      slug: "lime-circuit",
      name: "矩陣光牆",
      origin: "霓酸序列",
      energy: "矩陣 / 電跡",
      description: "晶格式亮牆配 cyan 電跡，適合資料牆與儀表板的冷色提醒。",
      gradient: "bg-linear-to-r from-emerald-300 via-teal-400 to-cyan-400",
      stats: [
        { label: "Lattice", value: "44%" },
        { label: "Route", value: "33%" },
        { label: "Signal", value: "23%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-emerald-500",
        "bg-teal-400",
        "bg-cyan-400",
      ],
      accent: "text-emerald-200",
    },
  },
  {
    slug: "lime-warning",
    label: "離子警戒",
    summary: "離子霧 x 警示波",
    accent: "text-green-200",
    hero: {
      eyebrow: "霓酸序列",
      title: "霓酸序列 · 離子警戒",
      subtitle: "離子霧鋪底並以黃綠 signal 提醒告警，適合監控或系統提示。",
      chips: ["Ion Mist", "Alert Beam", "Radar Ping"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Alert · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Mist / Beam / Alert" },
        { label: "Deploy Time", value: "33s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "lime-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-green-950 to-yellow-900",
        text: "text-lime-100",
        border: "border-yellow-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-green-200",
        body: "text-lime-100/80",
        gradientText:
          "bg-linear-to-r from-lime-200 via-yellow-300 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-lime-300/20 via-transparent to-yellow-300/20 opacity-50 mix-blend-soft-light",
        glowPrimary: "bg-lime-300/25",
        glowSecondary: "bg-yellow-300/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-yellow-400/30",
      },
      text: {
        section: "text-green-200",
        muted: "text-lime-200/60",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-yellow-300/30",
        text: "text-lime-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-lime-200 via-yellow-300 to-amber-300 text-slate-900 font-semibold rounded-full",
        secondary:
          "border border-yellow-200/30 text-lime-100 rounded-full hover:bg-yellow-300/10",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-yellow-300/20",
        chipText: "text-lime-100",
        statCard: "rounded-2xl border border-yellow-300/10 bg-slate-900/60",
        statValue: "text-lime-100",
        statLabel: "text-lime-200/60",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-green-950 to-yellow-900 text-lime-100 border-yellow-400/40",
        headerBorder: "border-yellow-400/40",
        subtitle: "text-lime-200/60",
        titleGradient:
          "bg-linear-to-r from-lime-200 via-yellow-300 to-amber-300",
        sectionButton:
          "bg-slate-900/70 border border-yellow-400/40 text-lime-200/60 hover:border-yellow-200 hover:text-white",
        sectionTitle: "text-green-200",
        sectionSubtitle: "text-lime-200/50",
        listBorder: "border-yellow-400/30",
        linkIdle: "text-lime-100/70 border-yellow-200/10",
        linkHover:
          "hover:text-white hover:border-yellow-200 hover:bg-yellow-200/10",
        linkActive: "bg-yellow-200/15 border-yellow-100 text-white",
        iconIdle: "text-lime-200/50",
        iconActive: "text-yellow-200",
        footerDot: "bg-yellow-300 ring-2 ring-yellow-200/35",
        footerText: "text-lime-200/60",
      },
    },
    stageBackground:
      "bg-[radial-gradient(circle_at_top,_rgba(202,255,115,0.18),_rgba(4,8,12,0.98))]",
    card: {
      slug: "lime-warning",
      name: "離子警戒",
      origin: "霓酸序列",
      energy: "離子霧 / 警示",
      description: "黃綠 signal 前景提醒狀態，背景維持深綠霧層以保留對比。",
      gradient: "bg-linear-to-r from-lime-200 via-yellow-300 to-amber-300",
      stats: [
        { label: "Mist", value: "48%" },
        { label: "Alert", value: "32%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-lime-400",
        "bg-yellow-300",
        "bg-amber-400",
      ],
      accent: "text-green-200",
    },
  },
];

const cobaltVariants: TemplateVariantConfig[] = [
  {
    slug: "cobalt-tide",
    label: "潮律鈷艦",
    summary: "鈷霧 x 湛流",
    accent: "text-sky-200",
    hero: {
      eyebrow: "鈷潮湛境",
      title: "鈷潮湛境 · 潮律鈷艦",
      subtitle: "鈷霧霧層搭配青藍脈衝，維持低溫監控節奏。",
      chips: ["鈷霧鋪底", "冷潮訊號", "深藍軌跡"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Tide / Beam / Signal" },
        { label: "Deploy Time", value: "40s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "cobalt-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950",
        text: "text-slate-100",
        border: "border-blue-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-sky-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-sky-200 via-cyan-300 to-blue-400",
        gridOverlay:
          "bg-linear-to-br from-blue-400/25 via-transparent to-cyan-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-sky-300/30",
        glowSecondary: "bg-blue-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-blue-400/30",
      },
      text: {
        section: "text-sky-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-blue-300/30",
        text: "text-sky-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-sky-300 via-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-blue-950 to-cyan-950 text-slate-100 border-blue-400/40",
        headerBorder: "border-blue-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-sky-200 via-cyan-300 to-blue-400",
        sectionButton:
          "bg-slate-900/70 border border-blue-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-sky-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-blue-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover: "hover:text-white hover:border-sky-300 hover:bg-sky-300/10",
        linkActive: "bg-sky-300/15 border-sky-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-sky-200",
        footerDot: "bg-sky-300 ring-2 ring-sky-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900",
    card: {
      slug: "cobalt-tide",
      name: "潮律鈷艦",
      origin: "鈷潮湛境",
      energy: "鈷霧 / 湛流",
      description: "鈷霧鋪底搭配青藍折射，營造低溫警戒感。",
      gradient: "bg-linear-to-r from-blue-400 via-cyan-400 to-sky-500",
      stats: [
        { label: "Mist", value: "45%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: ["bg-slate-950", "bg-blue-700", "bg-sky-500", "bg-cyan-400"],
      accent: "text-sky-200",
    },
  },
  {
    slug: "cobalt-ridge",
    label: "冰棱鈷線",
    summary: "靛峰 x 鈷電",
    accent: "text-blue-200",
    hero: {
      eyebrow: "鈷潮湛境",
      title: "鈷潮湛境 · 冰棱鈷線",
      subtitle: "靛峰 beam 拉出 HUD 軌跡，呈現冷硬資料節拍。",
      chips: ["靛峰折射", "鈷核電弧", "HUD 棱徑"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Tide / Beam / Signal" },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "cobalt-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900",
        text: "text-slate-100",
        border: "border-indigo-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-blue-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-blue-200 via-indigo-300 to-blue-500",
        gridOverlay:
          "bg-linear-to-br from-indigo-400/25 via-transparent to-blue-500/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-blue-500/30",
        glowSecondary: "bg-indigo-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-indigo-400/30",
      },
      text: {
        section: "text-blue-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-indigo-300/30",
        text: "text-blue-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-blue-300 via-indigo-400 to-blue-600 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-indigo-950 to-blue-900 text-slate-100 border-indigo-400/40",
        headerBorder: "border-indigo-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-blue-200 via-indigo-300 to-blue-500",
        sectionButton:
          "bg-slate-900/70 border border-indigo-400/40 text-slate-400 hover:border-blue-300 hover:text-white",
        sectionTitle: "text-blue-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-indigo-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-blue-400 hover:bg-blue-400/10",
        linkActive: "bg-blue-400/15 border-blue-300 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-blue-200",
        footerDot: "bg-blue-400 ring-2 ring-blue-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900",
    card: {
      slug: "cobalt-ridge",
      name: "冰棱鈷線",
      origin: "鈷潮湛境",
      energy: "靛峰 / 鈷電",
      description: "靛峰 beam 帶出 HUD 節奏，呈現硬朗對比。",
      gradient: "bg-linear-to-r from-blue-500 via-indigo-500 to-slate-900",
      stats: [
        { label: "Mist", value: "30%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "30%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-blue-700",
        "bg-indigo-500",
        "bg-slate-800",
      ],
      accent: "text-blue-200",
    },
  },
  {
    slug: "cobalt-signal",
    label: "深渦鈷訊",
    summary: "青脈 x 警示",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "鈷潮湛境",
      title: "鈷潮湛境 · 深渦鈷訊",
      subtitle: "高亮 cyan ray 聚焦警示層，凸顯深渦警戒。",
      chips: ["青脈光束", "警示守恆", "渦環座標"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Tide / Beam / Signal" },
        { label: "Deploy Time", value: "36s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "cobalt-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900",
        text: "text-slate-100",
        border: "border-cyan-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-cyan-200",
        body: "text-slate-300",
        gradientText: "bg-linear-to-r from-cyan-200 via-sky-300 to-blue-400",
        gridOverlay:
          "bg-linear-to-br from-cyan-300/25 via-transparent to-blue-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-cyan-300/30",
        glowSecondary: "bg-blue-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-cyan-400/30",
      },
      text: {
        section: "text-cyan-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-cyan-300/30",
        text: "text-cyan-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-cyan-950 to-blue-900 text-slate-100 border-cyan-400/40",
        headerBorder: "border-cyan-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-blue-400",
        sectionButton:
          "bg-slate-900/70 border border-cyan-400/40 text-slate-400 hover:border-blue-300 hover:text-white",
        sectionTitle: "text-cyan-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-cyan-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-cyan-200",
        footerDot: "bg-cyan-300 ring-2 ring-cyan-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900",
    card: {
      slug: "cobalt-signal",
      name: "深渦鈷訊",
      origin: "鈷潮湛境",
      energy: "青脈 / 警示",
      description: "青脈 signal 聚焦 CTA 與警示燈，形成深渦提示。",
      gradient: "bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500",
      stats: [
        { label: "Mist", value: "25%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "40%" },
      ],
      swatches: ["bg-slate-950", "bg-cyan-500", "bg-sky-400", "bg-blue-500"],
      accent: "text-cyan-200",
    },
  },
];

const terracottaVariants: TemplateVariantConfig[] = [
  {
    slug: "terracotta-halo",
    label: "陶暈炙階",
    summary: "陶砂 x 日熾",
    accent: "text-amber-200",
    hero: {
      eyebrow: "陶砂炙層",
      title: "陶砂炙層 · 陶暈炙階",
      subtitle: "陶砂霧鋪底並以琥珀曙光描邊，構築溫暖 CTA。",
      chips: ["陶砂霧層", "日熾描邊", "暖域梯度"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Clay / Flare / Signal",
        },
        { label: "Deploy Time", value: "44s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "terracotta-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-stone-900 to-amber-900",
        text: "text-slate-100",
        border: "border-amber-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-amber-200",
        body: "text-slate-200",
        gradientText:
          "bg-linear-to-r from-amber-200 via-orange-300 to-rose-300",
        gridOverlay:
          "bg-linear-to-br from-amber-400/25 via-transparent to-orange-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-amber-300/30",
        glowSecondary: "bg-orange-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-amber-400/30",
      },
      text: {
        section: "text-amber-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-amber-300/30",
        text: "text-amber-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-amber-300 via-orange-400 to-rose-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-stone-900 to-amber-900 text-slate-100 border-amber-400/40",
        headerBorder: "border-amber-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-amber-200 via-orange-300 to-rose-300",
        sectionButton:
          "bg-slate-900/70 border border-amber-400/40 text-slate-400 hover:border-orange-300 hover:text-white",
        sectionTitle: "text-amber-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-amber-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-amber-300 hover:bg-amber-300/10",
        linkActive: "bg-amber-300/15 border-amber-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-amber-200",
        footerDot: "bg-amber-400 ring-2 ring-amber-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-stone-900 to-amber-900",
    card: {
      slug: "terracotta-halo",
      name: "陶暈炙階",
      origin: "陶砂炙層",
      energy: "陶砂 / 日暈",
      description: "陶砂霧層加上琥珀暈光，建立柔和卻高能的 CTA。",
      gradient: "bg-linear-to-r from-amber-300 via-orange-400 to-rose-400",
      stats: [
        { label: "Mist", value: "48%" },
        { label: "Pulse", value: "32%" },
        { label: "Signal", value: "20%" },
      ],
      swatches: ["bg-slate-950", "bg-stone-700", "bg-amber-500", "bg-rose-400"],
      accent: "text-amber-200",
    },
  },
  {
    slug: "terracotta-grid",
    label: "砂陣脈線",
    summary: "石紋 x 琥珀",
    accent: "text-orange-200",
    hero: {
      eyebrow: "陶砂炙層",
      title: "陶砂炙層 · 砂陣脈線",
      subtitle: "石紋 grid 搭配琥珀脈線，塑造暖色 HUD。",
      chips: ["砂紋格線", "琥珀脈線", "穩定對比"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Clay / Beam / Signal" },
        { label: "Deploy Time", value: "41s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "terracotta-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-stone-900 to-orange-900",
        text: "text-slate-100",
        border: "border-orange-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-orange-200",
        body: "text-slate-200",
        gradientText:
          "bg-linear-to-r from-orange-200 via-amber-300 to-stone-300",
        gridOverlay:
          "bg-linear-to-br from-orange-400/25 via-transparent to-amber-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-orange-400/25",
        glowSecondary: "bg-amber-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-orange-400/30",
      },
      text: {
        section: "text-orange-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-orange-300/30",
        text: "text-orange-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-orange-300 via-amber-400 to-stone-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-stone-900 to-orange-900 text-slate-100 border-orange-400/40",
        headerBorder: "border-orange-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-orange-200 via-amber-300 to-stone-300",
        sectionButton:
          "bg-slate-900/70 border border-orange-400/40 text-slate-400 hover:border-amber-300 hover:text-white",
        sectionTitle: "text-orange-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-orange-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-orange-300 hover:bg-orange-300/10",
        linkActive: "bg-orange-300/15 border-orange-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-orange-200",
        footerDot: "bg-orange-400 ring-2 ring-orange-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-stone-900 to-orange-900",
    card: {
      slug: "terracotta-grid",
      name: "砂陣脈線",
      origin: "陶砂炙層",
      energy: "石紋 / 琥珀",
      description: "石紋格線加上琥珀脈線，維持沉穩的資料節奏。",
      gradient: "bg-linear-to-r from-orange-300 via-amber-300 to-stone-400",
      stats: [
        { label: "Mist", value: "35%" },
        { label: "Pulse", value: "40%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-stone-700",
        "bg-orange-500",
        "bg-amber-400",
      ],
      accent: "text-orange-200",
    },
  },
  {
    slug: "terracotta-warning",
    label: "炭丘預警",
    summary: "暮焰 x 警示",
    accent: "text-rose-200",
    hero: {
      eyebrow: "陶砂炙層",
      title: "陶砂炙層 · 炭丘預警",
      subtitle: "暮焰 beam 聚焦警示燈，街口呈現 desert alert 對比。",
      chips: ["暮焰光束", "Alert Halo", "砂丘指示"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        { label: "Token Recipes", value: "03", detail: "Clay / Beam / Alert" },
        { label: "Deploy Time", value: "37s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "terracotta-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-rose-900 to-amber-900",
        text: "text-slate-100",
        border: "border-rose-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-rose-200",
        body: "text-slate-200",
        gradientText:
          "bg-linear-to-r from-rose-300 via-orange-300 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-rose-400/25 via-transparent to-orange-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-rose-400/25",
        glowSecondary: "bg-amber-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-rose-400/30",
      },
      text: {
        section: "text-rose-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-rose-300/30",
        text: "text-rose-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-rose-900 to-amber-900 text-slate-100 border-rose-400/40",
        headerBorder: "border-rose-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400",
        sectionButton:
          "bg-slate-900/70 border border-rose-400/40 text-slate-400 hover:border-amber-300 hover:text-white",
        sectionTitle: "text-rose-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-rose-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-rose-300 hover:bg-rose-300/10",
        linkActive: "bg-rose-300/15 border-rose-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-rose-200",
        footerDot: "bg-rose-400 ring-2 ring-rose-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-rose-900 to-amber-900",
    card: {
      slug: "terracotta-warning",
      name: "炭丘預警",
      origin: "陶砂炙層",
      energy: "暮焰 / 警示",
      description: "暮焰 beam 滑過 CTA 與警示燈，營造 desert alert 信號。",
      gradient: "bg-linear-to-r from-rose-300 via-orange-400 to-amber-400",
      stats: [
        { label: "Mist", value: "28%" },
        { label: "Pulse", value: "37%" },
        { label: "Signal", value: "35%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-rose-500",
        "bg-orange-500",
        "bg-amber-400",
      ],
      accent: "text-rose-200",
    },
  },
];

const jadeVariants: TemplateVariantConfig[] = [
  {
    slug: "jade-shore",
    label: "瓷霧岸線",
    summary: "青瓷 x 水霧",
    accent: "text-teal-200",
    hero: {
      eyebrow: "青瓷霧嶺",
      title: "青瓷霧嶺 · 瓷霧岸線",
      subtitle: "青瓷霧層搭配湖藍 pulse，維持輕盈敘事。",
      chips: ["瓷霧鋪底", "湖線脈衝", "輕霧導引"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Glaze / Beam / Signal",
        },
        { label: "Deploy Time", value: "42s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "jade-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-teal-900 to-cyan-900",
        text: "text-slate-100",
        border: "border-teal-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-teal-200",
        body: "text-slate-200",
        gradientText:
          "bg-linear-to-r from-teal-200 via-cyan-300 to-emerald-300",
        gridOverlay:
          "bg-linear-to-br from-teal-400/25 via-transparent to-cyan-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-teal-300/30",
        glowSecondary: "bg-cyan-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-teal-400/30",
      },
      text: {
        section: "text-teal-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-teal-300/30",
        text: "text-teal-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-teal-300 via-cyan-400 to-emerald-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-teal-900 to-cyan-900 text-slate-100 border-teal-400/40",
        headerBorder: "border-teal-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-teal-200 via-cyan-300 to-emerald-300",
        sectionButton:
          "bg-slate-900/70 border border-teal-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-teal-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-teal-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-teal-300 hover:bg-teal-300/10",
        linkActive: "bg-teal-300/15 border-teal-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-teal-200",
        footerDot: "bg-teal-300 ring-2 ring-teal-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-teal-900 to-cyan-900",
    card: {
      slug: "jade-shore",
      name: "瓷霧岸線",
      origin: "青瓷霧嶺",
      energy: "瓷霧 / 水霧",
      description: "青瓷霧搭湖藍 beam，呈現清爽 CTA。",
      gradient: "bg-linear-to-r from-teal-300 via-cyan-400 to-emerald-400",
      stats: [
        { label: "Mist", value: "52%" },
        { label: "Pulse", value: "30%" },
        { label: "Signal", value: "18%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-teal-600",
        "bg-cyan-400",
        "bg-emerald-400",
      ],
      accent: "text-teal-200",
    },
  },
  {
    slug: "jade-ridge",
    label: "嶺脈雲帶",
    summary: "翠脈 x 霧階",
    accent: "text-emerald-200",
    hero: {
      eyebrow: "青瓷霧嶺",
      title: "青瓷霧嶺 · 嶺脈雲帶",
      subtitle: "嶺脈 beam 沿 HUD 行進，描繪高海拔資訊。",
      chips: ["嶺脈折射", "翠霧梯度", "穩定節奏"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Glaze / Beam / Signal",
        },
        { label: "Deploy Time", value: "38s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "jade-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-emerald-900 to-teal-900",
        text: "text-slate-100",
        border: "border-emerald-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-emerald-200",
        body: "text-slate-200",
        gradientText:
          "bg-linear-to-r from-emerald-200 via-teal-300 to-cyan-400",
        gridOverlay:
          "bg-linear-to-br from-emerald-300/25 via-transparent to-teal-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-emerald-300/25",
        glowSecondary: "bg-teal-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-emerald-400/30",
      },
      text: {
        section: "text-emerald-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-emerald-300/30",
        text: "text-emerald-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-emerald-300 via-teal-400 to-cyan-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-emerald-900 to-teal-900 text-slate-100 border-emerald-400/40",
        headerBorder: "border-emerald-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-emerald-200 via-teal-300 to-cyan-400",
        sectionButton:
          "bg-slate-900/70 border border-emerald-400/40 text-slate-400 hover:border-teal-300 hover:text-white",
        sectionTitle: "text-emerald-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-emerald-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-emerald-300 hover:bg-emerald-300/10",
        linkActive: "bg-emerald-300/15 border-emerald-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-emerald-200",
        footerDot: "bg-emerald-300 ring-2 ring-emerald-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-emerald-900 to-teal-900",
    card: {
      slug: "jade-ridge",
      name: "嶺脈雲帶",
      origin: "青瓷霧嶺",
      energy: "翠脈 / 雲帶",
      description: "翠綠 beam 穿越霧層，敘述多層山脈資料。",
      gradient: "bg-linear-to-r from-emerald-300 via-teal-400 to-cyan-400",
      stats: [
        { label: "Mist", value: "34%" },
        { label: "Pulse", value: "41%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-emerald-600",
        "bg-teal-400",
        "bg-cyan-400",
      ],
      accent: "text-emerald-200",
    },
  },
  {
    slug: "jade-signal",
    label: "澗聲警示",
    summary: "湖線 x 警示",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "青瓷霧嶺",
      title: "青瓷霧嶺 · 澗聲警示",
      subtitle: "cyan ray 聚焦 CTA 與警示燈，維持清澈對比。",
      chips: ["澗聲 beam", "清亮指示", "湖藍守恆"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Glaze / Beam / Signal",
        },
        { label: "Deploy Time", value: "35s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "jade-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-cyan-900 to-teal-900",
        text: "text-slate-100",
        border: "border-cyan-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-cyan-200",
        body: "text-slate-200",
        gradientText: "bg-linear-to-r from-cyan-200 via-sky-300 to-teal-400",
        gridOverlay:
          "bg-linear-to-br from-cyan-300/25 via-transparent to-teal-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-cyan-300/25",
        glowSecondary: "bg-teal-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-cyan-400/30",
      },
      text: {
        section: "text-cyan-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-cyan-300/30",
        text: "text-cyan-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-cyan-300 via-sky-400 to-teal-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-cyan-900 to-teal-900 text-slate-100 border-cyan-400/40",
        headerBorder: "border-cyan-400/40",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-cyan-200 via-sky-300 to-teal-400",
        sectionButton:
          "bg-slate-900/70 border border-cyan-400/40 text-slate-400 hover:border-teal-300 hover:text-white",
        sectionTitle: "text-cyan-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-cyan-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-cyan-300 hover:bg-cyan-300/10",
        linkActive: "bg-cyan-300/15 border-cyan-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-cyan-200",
        footerDot: "bg-cyan-300 ring-2 ring-cyan-200/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-cyan-900 to-teal-900",
    card: {
      slug: "jade-signal",
      name: "澗聲警示",
      origin: "青瓷霧嶺",
      energy: "湖線 / 警示",
      description: "湖線 signal 提醒異常，畫面仍保留輕盈空氣感。",
      gradient: "bg-linear-to-r from-cyan-300 via-sky-400 to-teal-400",
      stats: [
        { label: "Mist", value: "27%" },
        { label: "Pulse", value: "33%" },
        { label: "Signal", value: "40%" },
      ],
      swatches: ["bg-slate-950", "bg-cyan-500", "bg-sky-400", "bg-teal-400"],
      accent: "text-cyan-200",
    },
  },
];

const nocturneVariants: TemplateVariantConfig[] = [
  {
    slug: "nocturne-core",
    label: "夜譜炫核",
    summary: "鈦霧 x 霓核",
    accent: "text-fuchsia-200",
    hero: {
      eyebrow: "夜譜炫核",
      title: "夜譜炫核 · 夜譜炫核",
      subtitle: "鈦灰霧面搭配紫霓 core，打造深夜監控面。",
      chips: ["鈦霧鋪底", "霓核對比", "夜譜指標"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Night / Beam / Signal",
        },
        { label: "Deploy Time", value: "41s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "nocturne-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-zinc-900 to-purple-900",
        text: "text-slate-100",
        border: "border-fuchsia-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-fuchsia-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-fuchsia-200 via-purple-300 to-blue-400",
        gridOverlay:
          "bg-linear-to-br from-fuchsia-400/25 via-transparent to-blue-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-fuchsia-400/25",
        glowSecondary: "bg-blue-500/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-fuchsia-400/30",
      },
      text: {
        section: "text-fuchsia-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-fuchsia-300/30",
        text: "text-fuchsia-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-fuchsia-300 via-purple-400 to-blue-500 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-zinc-900 to-purple-900 text-slate-100 border-fuchsia-400/40",
        headerBorder: "border-fuchsia-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-fuchsia-200 via-purple-300 to-blue-400",
        sectionButton:
          "bg-slate-900/70 border border-fuchsia-400/40 text-slate-400 hover:border-purple-300 hover:text-white",
        sectionTitle: "text-fuchsia-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-fuchsia-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-fuchsia-300 hover:bg-fuchsia-300/10",
        linkActive: "bg-fuchsia-300/15 border-fuchsia-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-fuchsia-200",
        footerDot: "bg-fuchsia-400 ring-2 ring-fuchsia-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-zinc-900 to-purple-900",
    card: {
      slug: "nocturne-core",
      name: "夜譜炫核",
      origin: "夜譜炫核",
      energy: "鈦霧 / 霓核",
      description: "鈦灰霧層帶紫霓核心，維持夜間數據秩序。",
      gradient: "bg-linear-to-r from-fuchsia-300 via-purple-400 to-blue-500",
      stats: [
        { label: "Mist", value: "40%" },
        { label: "Pulse", value: "35%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: ["bg-slate-950", "bg-zinc-800", "bg-purple-500", "bg-blue-500"],
      accent: "text-fuchsia-200",
    },
  },
  {
    slug: "nocturne-rift",
    label: "裂隙脈衝",
    summary: "靛裂 x 霓訊",
    accent: "text-indigo-200",
    hero: {
      eyebrow: "夜譜炫核",
      title: "夜譜炫核 · 裂隙脈衝",
      subtitle: "靛裂 beam 沿 HUD 流動，模擬裂縫電弧。",
      chips: ["裂隙 beam", "靛色節奏", "冷霓訊號"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Night / Beam / Signal",
        },
        { label: "Deploy Time", value: "37s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "nocturne-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-indigo-900 to-zinc-900",
        text: "text-slate-100",
        border: "border-indigo-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-indigo-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-indigo-200 via-blue-300 to-fuchsia-400",
        gridOverlay:
          "bg-linear-to-br from-indigo-400/25 via-transparent to-blue-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-indigo-400/25",
        glowSecondary: "bg-blue-400/25",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-indigo-400/30",
      },
      text: {
        section: "text-indigo-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-indigo-300/30",
        text: "text-indigo-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-indigo-300 via-blue-400 to-fuchsia-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-indigo-900 to-zinc-900 text-slate-100 border-indigo-400/40",
        headerBorder: "border-indigo-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-indigo-200 via-blue-300 to-fuchsia-400",
        sectionButton:
          "bg-slate-900/70 border border-indigo-400/40 text-slate-400 hover:border-blue-300 hover:text-white",
        sectionTitle: "text-indigo-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-indigo-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-indigo-300 hover:bg-indigo-300/10",
        linkActive: "bg-indigo-300/15 border-indigo-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-indigo-200",
        footerDot: "bg-indigo-400 ring-2 ring-indigo-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-indigo-900 to-zinc-900",
    card: {
      slug: "nocturne-rift",
      name: "裂隙脈衝",
      origin: "夜譜炫核",
      energy: "靛裂 / 霓訊",
      description: "靛裂 beam 加霓訊節拍，凸顯 HUD 對比。",
      gradient: "bg-linear-to-r from-indigo-300 via-blue-400 to-fuchsia-400",
      stats: [
        { label: "Mist", value: "32%" },
        { label: "Pulse", value: "43%" },
        { label: "Signal", value: "25%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-indigo-600",
        "bg-blue-500",
        "bg-fuchsia-400",
      ],
      accent: "text-indigo-200",
    },
  },
  {
    slug: "nocturne-signal",
    label: "磁戒警示",
    summary: "磁環 x 警示",
    accent: "text-blue-200",
    hero: {
      eyebrow: "夜譜炫核",
      title: "夜譜炫核 · 磁戒警示",
      subtitle: "磁環 cyan ray 環繞 CTA，塑造科技警戒。",
      chips: ["磁戒 beam", "Cyan Alert", "夜極座標"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Mist · Pulse · Signal" },
        { label: "Storyboard", value: "03", detail: "CTA · HUD · Canvas" },
        {
          label: "Token Recipes",
          value: "03",
          detail: "Night / Beam / Signal",
        },
        { label: "Deploy Time", value: "34s", detail: "Replace Palette" },
      ],
    },
    theme: {
      slug: "nocturne-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-slate-950 via-blue-900 to-zinc-900",
        text: "text-slate-100",
        border: "border-blue-400/40",
      },
      hero: {
        surface: "bg-slate-950/85",
        label: "text-blue-200",
        body: "text-slate-300",
        gradientText:
          "bg-linear-to-r from-blue-200 via-cyan-300 to-fuchsia-300",
        gridOverlay:
          "bg-linear-to-br from-blue-400/25 via-transparent to-cyan-400/25 opacity-60 mix-blend-soft-light",
        glowPrimary: "bg-blue-400/25",
        glowSecondary: "bg-cyan-400/20",
      },
      surfaces: {
        panel: "bg-slate-950/70",
        softPanel: "bg-slate-950/60",
        border: "border-blue-400/30",
      },
      text: {
        section: "text-blue-200",
        muted: "text-slate-400",
      },
      badges: {
        base: "bg-slate-900/60",
        border: "border-blue-300/30",
        text: "text-blue-100",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-blue-300 via-cyan-400 to-fuchsia-400 text-slate-950 font-semibold rounded-full",
        secondary:
          "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
      },
      tokens: {
        chip: "bg-slate-900/60",
        chipBorder: "border border-white/10",
        chipText: "text-slate-100",
        statCard: "rounded-2xl border border-white/10 bg-slate-900/60",
        statValue: "text-white",
        statLabel: "text-slate-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-slate-950 via-blue-900 to-zinc-900 text-slate-100 border-blue-400/40",
        headerBorder: "border-blue-400/40",
        subtitle: "text-slate-400",
        titleGradient:
          "bg-linear-to-r from-blue-200 via-cyan-300 to-fuchsia-300",
        sectionButton:
          "bg-slate-900/70 border border-blue-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-blue-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-blue-400/30",
        linkIdle: "text-slate-300 border-white/10",
        linkHover:
          "hover:text-white hover:border-blue-300 hover:bg-blue-300/10",
        linkActive: "bg-blue-300/15 border-blue-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-blue-200",
        footerDot: "bg-blue-400 ring-2 ring-blue-300/40",
        footerText: "text-slate-400",
      },
    },
    stageBackground:
      "bg-gradient-to-br from-slate-950 via-blue-900 to-zinc-900",
    card: {
      slug: "nocturne-signal",
      name: "磁戒警示",
      origin: "夜譜炫核",
      energy: "磁環 / 警示",
      description: "磁環 cyan ray 緊貼 CTA，強化警戒。",
      gradient: "bg-linear-to-r from-blue-300 via-cyan-400 to-fuchsia-400",
      stats: [
        { label: "Mist", value: "25%" },
        { label: "Pulse", value: "30%" },
        { label: "Signal", value: "45%" },
      ],
      swatches: [
        "bg-slate-950",
        "bg-blue-600",
        "bg-cyan-400",
        "bg-fuchsia-400",
      ],
      accent: "text-blue-200",
    },
  },
];

const coralVariants: TemplateVariantConfig[] = [
  {
    slug: "coral-halo",
    label: "珊瑚明環",
    summary: "貝光 x 暖耀",
    accent: "text-rose-500",
    hero: {
      eyebrow: "珊瑚光譜",
      title: "珊瑚光譜 · 珊瑚明環",
      subtitle: "貝殼霧底搭配珊瑚 halo，呈現暖光反射。",
      chips: ["貝殼霧底", "珊瑚 halo", "暖色折射"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Shell · Halo · Bloom" },
        { label: "Storyboard", value: "03", detail: "Hero · CTA · Recipe" },
        { label: "Token Recipes", value: "03", detail: "Coral / Foam / Bloom" },
        { label: "Deploy Time", value: "29s", detail: "Palette Swap" },
      ],
    },
    theme: {
      slug: "coral-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50",
        text: "text-rose-900",
        border: "border-rose-200",
      },
      hero: {
        surface: "bg-white/80",
        label: "text-rose-500",
        body: "text-rose-700",
        gradientText:
          "bg-linear-to-r from-rose-500 via-orange-400 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-rose-200/50 via-transparent to-orange-200/50",
        glowPrimary: "bg-rose-200/60",
        glowSecondary: "bg-amber-200/50",
      },
      surfaces: {
        panel: "bg-white/85",
        softPanel: "bg-rose-50/80",
        border: "border-rose-200",
      },
      text: {
        section: "text-rose-500",
        muted: "text-rose-400",
      },
      badges: {
        base: "bg-rose-100/60",
        border: "border-rose-200",
        text: "text-rose-600",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-rose-500 via-orange-400 to-amber-300 text-white font-semibold rounded-full",
        secondary:
          "border border-rose-200 text-rose-600 rounded-full hover:bg-rose-50",
      },
      tokens: {
        chip: "bg-rose-50",
        chipBorder: "border border-rose-200",
        chipText: "text-rose-500",
        statCard: "rounded-2xl border border-rose-200 bg-white/85 shadow-sm",
        statValue: "text-rose-600",
        statLabel: "text-rose-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-rose-50 via-peach-50 to-orange-50 text-rose-800 border-rose-200",
        headerBorder: "border-rose-200",
        subtitle: "text-rose-400",
        titleGradient:
          "bg-linear-to-r from-rose-500 via-orange-400 to-amber-300",
        sectionButton:
          "bg-white/70 border border-rose-200 text-rose-500 hover:border-rose-400",
        sectionTitle: "text-rose-500",
        sectionSubtitle: "text-rose-400",
        listBorder: "border-rose-200",
        linkIdle: "text-rose-500 border-transparent",
        linkHover: "hover:text-rose-600 hover:border-rose-300",
        linkActive: "bg-rose-100/70 border-rose-400 text-rose-700",
        iconIdle: "text-rose-400",
        iconActive: "text-rose-600",
        footerDot: "bg-rose-400 ring-rose-200",
        footerText: "text-rose-400",
      },
    },
    stageBackground: "bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50",
    card: {
      slug: "coral-halo",
      name: "珊瑚明環",
      origin: "珊瑚光譜",
      energy: "貝光 / 暖耀",
      description: "貝殼霧底映出珊瑚 halo，製造柔亮 CTA。",
      gradient: "bg-linear-to-r from-rose-500 via-orange-400 to-amber-300",
      stats: [
        { label: "Shell", value: "45%" },
        { label: "Halo", value: "35%" },
        { label: "Bloom", value: "20%" },
      ],
      swatches: ["bg-rose-50", "bg-rose-200", "bg-orange-300", "bg-amber-200"],
      accent: "text-rose-500",
    },
  },
  {
    slug: "coral-lumen",
    label: "潮映珊暈",
    summary: "潮暈 x 珊彩",
    accent: "text-orange-500",
    hero: {
      eyebrow: "珊瑚光譜",
      title: "珊瑚光譜 · 潮映珊暈",
      subtitle: "潮色流動覆蓋 CTA，提煉暖色層次。",
      chips: ["潮映層", "珊彩隧道", "暖色 CTA"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Shell · Halo · Bloom" },
        { label: "Storyboard", value: "03", detail: "Hero · CTA · Recipe" },
        { label: "Token Recipes", value: "03", detail: "Coral / Foam / Bloom" },
        { label: "Deploy Time", value: "27s", detail: "Palette Swap" },
      ],
    },
    theme: {
      slug: "coral-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50",
        text: "text-orange-900",
        border: "border-orange-200",
      },
      hero: {
        surface: "bg-white/85",
        label: "text-orange-500",
        body: "text-orange-700",
        gradientText:
          "bg-linear-to-r from-orange-500 via-rose-400 to-amber-300",
        gridOverlay:
          "bg-linear-to-br from-orange-200/60 via-transparent to-rose-200/60",
        glowPrimary: "bg-orange-200/60",
        glowSecondary: "bg-rose-200/50",
      },
      surfaces: {
        panel: "bg-white/85",
        softPanel: "bg-orange-50/80",
        border: "border-orange-200",
      },
      text: {
        section: "text-orange-500",
        muted: "text-orange-400",
      },
      badges: {
        base: "bg-orange-100/60",
        border: "border-orange-200",
        text: "text-orange-600",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-orange-500 via-rose-400 to-amber-300 text-white font-semibold rounded-full",
        secondary:
          "border border-orange-200 text-orange-600 rounded-full hover:bg-orange-50",
      },
      tokens: {
        chip: "bg-orange-50",
        chipBorder: "border border-orange-200",
        chipText: "text-orange-500",
        statCard: "rounded-2xl border border-orange-200 bg-white/85 shadow-sm",
        statValue: "text-orange-600",
        statLabel: "text-orange-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-orange-50 via-rose-50 to-amber-50 text-orange-800 border-orange-200",
        headerBorder: "border-orange-200",
        subtitle: "text-orange-400",
        titleGradient:
          "bg-linear-to-r from-orange-500 via-rose-400 to-amber-300",
        sectionButton:
          "bg-white/70 border border-orange-200 text-orange-500 hover:border-orange-400",
        sectionTitle: "text-orange-500",
        sectionSubtitle: "text-orange-400",
        listBorder: "border-orange-200",
        linkIdle: "text-orange-500 border-transparent",
        linkHover: "hover:text-orange-600 hover:border-orange-300",
        linkActive: "bg-orange-100/70 border-orange-400 text-orange-700",
        iconIdle: "text-orange-400",
        iconActive: "text-orange-600",
        footerDot: "bg-orange-400 ring-orange-200",
        footerText: "text-orange-400",
      },
    },
    stageBackground: "bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50",
    card: {
      slug: "coral-lumen",
      name: "潮映珊暈",
      origin: "珊瑚光譜",
      energy: "潮暈 / 珊彩",
      description: "潮映層包覆 CTA，展示暖彩梯度。",
      gradient: "bg-linear-to-r from-orange-500 via-rose-400 to-amber-300",
      stats: [
        { label: "Shell", value: "35%" },
        { label: "Halo", value: "40%" },
        { label: "Bloom", value: "25%" },
      ],
      swatches: [
        "bg-orange-50",
        "bg-orange-200",
        "bg-rose-300",
        "bg-amber-200",
      ],
      accent: "text-orange-500",
    },
  },
  {
    slug: "coral-bloom",
    label: "暖潮軟景",
    summary: "暖潮 x 霧瓣",
    accent: "text-amber-500",
    hero: {
      eyebrow: "珊瑚光譜",
      title: "珊瑚光譜 · 暖潮軟景",
      subtitle: "暖潮霧瓣壓低明度，延伸至設計看板。",
      chips: ["暖潮霧", "霧瓣折射", "柔亮 CTA"],
      stats: [
        { label: "Theme Slots", value: "03", detail: "Shell · Halo · Bloom" },
        { label: "Storyboard", value: "03", detail: "Hero · CTA · Recipe" },
        { label: "Token Recipes", value: "03", detail: "Coral / Foam / Bloom" },
        { label: "Deploy Time", value: "26s", detail: "Palette Swap" },
      ],
    },
    theme: {
      slug: "coral-template",
      role: "artifact",
      layout: {
        shell: "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50",
        text: "text-amber-900",
        border: "border-amber-200",
      },
      hero: {
        surface: "bg-white/85",
        label: "text-amber-500",
        body: "text-amber-700",
        gradientText:
          "bg-linear-to-r from-amber-500 via-orange-400 to-rose-400",
        gridOverlay:
          "bg-linear-to-br from-amber-200/60 via-transparent to-rose-200/60",
        glowPrimary: "bg-amber-200/60",
        glowSecondary: "bg-rose-200/50",
      },
      surfaces: {
        panel: "bg-white/85",
        softPanel: "bg-amber-50/80",
        border: "border-amber-200",
      },
      text: {
        section: "text-amber-500",
        muted: "text-amber-400",
      },
      badges: {
        base: "bg-amber-100/60",
        border: "border-amber-200",
        text: "text-amber-600",
      },
      buttons: {
        primary:
          "bg-linear-to-r from-amber-500 via-orange-400 to-rose-400 text-white font-semibold rounded-full",
        secondary:
          "border border-amber-200 text-amber-600 rounded-full hover:bg-amber-50",
      },
      tokens: {
        chip: "bg-amber-50",
        chipBorder: "border border-amber-200",
        chipText: "text-amber-500",
        statCard: "rounded-2xl border border-amber-200 bg-white/85 shadow-sm",
        statValue: "text-amber-600",
        statLabel: "text-amber-400",
      },
      sidebar: {
        shell:
          "bg-gradient-to-b from-amber-50 via-rose-50 to-orange-50 text-amber-800 border-amber-200",
        headerBorder: "border-amber-200",
        subtitle: "text-amber-400",
        titleGradient:
          "bg-linear-to-r from-amber-500 via-orange-400 to-rose-400",
        sectionButton:
          "bg-white/70 border border-amber-200 text-amber-500 hover:border-amber-400",
        sectionTitle: "text-amber-500",
        sectionSubtitle: "text-amber-400",
        listBorder: "border-amber-200",
        linkIdle: "text-amber-500 border-transparent",
        linkHover: "hover:text-amber-600 hover:border-amber-300",
        linkActive: "bg-amber-100/70 border-amber-400 text-amber-700",
        iconIdle: "text-amber-400",
        iconActive: "text-amber-600",
        footerDot: "bg-amber-400 ring-amber-200",
        footerText: "text-amber-400",
      },
    },
    stageBackground: "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50",
    card: {
      slug: "coral-bloom",
      name: "暖潮軟景",
      origin: "珊瑚光譜",
      energy: "暖潮 / 霧瓣",
      description: "暖潮霧瓣延展至 layout，形成柔亮軟景。",
      gradient: "bg-linear-to-r from-amber-500 via-orange-400 to-rose-400",
      stats: [
        { label: "Shell", value: "30%" },
        { label: "Halo", value: "30%" },
        { label: "Bloom", value: "40%" },
      ],
      swatches: ["bg-amber-50", "bg-amber-200", "bg-orange-300", "bg-rose-300"],
      accent: "text-amber-500",
    },
  },
];

const ivoryTemplate: GenerateTemplateConfig = {
  slug: "ivory-series",
  name: "象牙霧境套件",
  navLabel: "象牙霧境模板",
  navIcon: "M12 2L2 12l10 10 10-10L12 2z",
  switcherTitle: "象牙光帶切換",
  switcherBody: "切換霧白 / 銀霜色帶即可同步更新 hero、背景與 sidebar。",
  boardTitle: "象牙流光色盤",
  boardSubtitle: "Veil Mist x Pewter Signal",
  boardDescription:
    "以 white / slate / silver 層次劃分霧層、光束與訊號亮區，維持極簡韻律。",
  storyboardsTitle: "霧白敘事節奏",
  storyboardsDescription:
    "拆解 Veil CTA、Slate HUD、Luna Canvas 三段 storyboard，保持純淨推進。",
  guidelinesTitle: "霧帶 / 銀束交叉表",
  guidelinesDescription:
    "列出霧白主題的 Mist／Pulse／Signal 比例，確保 CTA 與提示層不過曝。",
  tokensTitle: "象牙漸層庫",
  tokensDescription: "整理 Veil / Beam / Signal 三組漸層與操作建議。",
  applicationTitle: "霧白應用樣板",
  applicationDescription: "資料儀表、敘事卡、監控板皆維持象牙霧感的玻璃質地。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-white/40",
    text: "text-white",
    hover: "hover:bg-white/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-slate-300/50",
    text: "text-slate-100",
    hover: "hover:bg-white/5",
  },
  variants: ivoryVariants,
  storyboards: [
    {
      title: "Veil CTA",
      tone: "霧帶 CTA",
      focus: "CTA",
      badge: "text-white",
      description: "CTA 使用乳白玻璃描邊，中心鋪上淡銀漸層加強行動提示。",
      preview: "bg-linear-to-r from-white/25 via-slate-100/10 to-transparent",
      cues: ["描邊 1px 霧白", "hover scale 1.05", "陰影帶冷霧"],
    },
    {
      title: "Slate Orbit HUD",
      tone: "訊號層",
      focus: "HUD",
      badge: "text-slate-200",
      description: "HUD 線條以銀灰描邊並加入 12px 軌跡點，維持盤面秩序。",
      preview:
        "bg-linear-to-r from-slate-400/25 via-slate-300/10 to-transparent",
      cues: ["線寬 0.5px", "節點亮度 70%", "背景 grid 12px"],
    },
    {
      title: "Luna Canvas",
      tone: "霧層背景",
      focus: "Background",
      badge: "text-slate-300",
      description: "背景以 40% 深灰鋪底，角落配置月光暈以呼應象牙主題。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-800/40",
      cues: ["暗部 ≥40%", "亮斑置於角落", "粒子控制 2px 內"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "霧層階",
      mode: "Layer",
      palette: "Veil · Mist/Pulse",
      direction: "外圈霧白鋪底，內圈銀霜提升 CTA 對比",
      action: "Mist 維持 55%，Pulse 僅進入 CTA 與重點訊息。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-slate-600",
        "bg-slate-300",
        "bg-white",
      ],
      directionSwatches: [
        "bg-linear-to-r from-white/45 to-transparent",
        "bg-linear-to-r from-slate-200/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-slate-500/30 to-transparent",
      ],
    },
    {
      principle: "訊號權重",
      mode: "Contrast",
      palette: "Pewter · Pulse/Signal",
      direction: "亮度 40/35/25",
      action: "Pulse 負責主標，Signal 只給 icon 及 alert，餘下留給霧層。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-slate-700",
        "bg-slate-500",
        "bg-slate-200",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-slate-500 to-slate-400",
        "bg-linear-to-r from-slate-400 to-slate-200",
        "bg-slate-800",
      ],
    },
    {
      principle: "月暈節拍",
      mode: "Halo",
      palette: "Luna · Glow",
      direction: "雙層 halo + 銀束",
      action: "Halo 以霧白模糊，beam 用銀線，兩者距離 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-white",
        "bg-slate-200",
        "bg-slate-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-white/35 to-transparent",
        "bg-linear-to-r from-slate-200/35 to-transparent",
        "bg-linear-to-r from-slate-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Veil Sheet",
      usage: "背景",
      token: "token-veil",
      gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-800",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Pewter Edge",
      usage: "CTA / Tag",
      token: "token-pewter",
      gradient: "bg-linear-to-r from-white via-slate-200 to-slate-400",
      tips: ["描邊 1px", "hover 加冷光"],
    },
    {
      name: "Luna Signal",
      usage: "HUD 線條",
      token: "token-luna",
      gradient: "bg-linear-to-r from-slate-200 via-slate-300 to-slate-500",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "霧階控台",
      theme: "Veil HUD",
      channel: "Data",
      description: "HUD 走霧白描邊，結合淡銀粒子顯示重要數據。",
      preview: "bg-linear-to-br from-white/15 via-slate-900 to-slate-950",
      swatches: ["text-white", "text-slate-200", "text-slate-400"],
    },
    {
      label: "月暈敘事卡",
      theme: "Luna Story",
      channel: "Story",
      description: "敘事卡底部加入月光漸層並搭配透明細格，襯托圖像。",
      preview: "bg-linear-to-br from-slate-200/20 via-slate-900 to-slate-950",
      swatches: ["text-slate-200", "text-slate-100", "text-white"],
    },
    {
      label: "銀訊監控板",
      theme: "Pewter Monitor",
      channel: "Monitor",
      description: "監控面板以銀霜 signal 提醒異常，維持 60% 暗底。",
      preview: "bg-linear-to-br from-slate-300/20 via-slate-950 to-slate-950",
      swatches: ["text-slate-200", "text-slate-300", "text-slate-500"],
    },
  ],
  swatchLabelMap: {
    "text-white": "霧階",
    "text-slate-200": "訊號",
    "text-slate-300": "脈衝",
    "text-slate-400": "基底",
    "text-slate-500": "對比",
    "text-slate-100": "支援",
  },
  variantMap: buildVariantMap(ivoryVariants),
};

const sakuraTemplate: GenerateTemplateConfig = {
  slug: "sakura-series",
  name: "櫻霞霓序",
  navLabel: "櫻霞霓序模板",
  navIcon: "M12 2c0 5 4 9 9 9-5 0-9 4-9 9 0-5-4-9-9-9 5 0 9-4 9-9z",
  switcherTitle: "櫻霞色帶切換",
  switcherBody: "切換桃粉 / 玫瑰 / 紫霧色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "櫻霞炫彩色盤",
  boardSubtitle: "Bloom Mist x Neon Pulse",
  boardDescription:
    "以 pink / rose / fuchsia 推出花瓣霧層、霓虹脈衝與荊棘提示，維持高彩度節奏。",
  storyboardsTitle: "花域敘事節奏",
  storyboardsDescription:
    "拆解 Bloom CTA、Neon HUD、Petal Canvas 三段 storyboard，讓賽博花園更聚焦。",
  guidelinesTitle: "花霧 / 霓光交叉表",
  guidelinesDescription:
    "記錄 Mist／Pulse／Signal 比例與方向，避免粉色過曝或訊號偏暗。",
  tokensTitle: "櫻霞漸層庫",
  tokensDescription: "列出 Petal / Neon / Thorn 三組漸層與操作提示。",
  applicationTitle: "花域應用樣板",
  applicationDescription:
    "將櫻霞 palette 套用在 HUD、敘事卡、監控板的不同敘事節點。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-pink-300/60",
    text: "text-pink-100",
    hover: "hover:bg-pink-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-rose-300/60",
    text: "text-rose-100",
    hover: "hover:bg-rose-500/10",
  },
  variants: sakuraVariants,
  storyboards: [
    {
      title: "Bloom CTA",
      tone: "花瓣 CTA",
      focus: "CTA",
      badge: "text-pink-200",
      description: "CTA 以粉霧玻璃描邊並加上 4px 花瓣亮斑，營造柔亮觸感。",
      preview: "bg-linear-to-r from-pink-400/25 via-rose-400/10 to-transparent",
      cues: ["描邊 1px 霓白", "hover scale 1.05", "光暈偏粉"],
    },
    {
      title: "Neon HUD",
      tone: "霓虹訊號",
      focus: "HUD",
      badge: "text-rose-200",
      description: "HUD 線條採 rose→fuchsia 過渡並保持 10px grid，利於監測。",
      preview: "bg-linear-to-r from-rose-400/25 via-pink-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點加 pulse", "grid 10px"],
    },
    {
      title: "Petal Canvas",
      tone: "霧層背景",
      focus: "Background",
      badge: "text-fuchsia-200",
      description: "背景採 40% 以上深玫瑰底，再以粉霧噴灑出柔光雲。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-rose-950/60 to-rose-900/40",
      cues: ["暗部 ≥40%", "亮點留邊角", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "花霧分層",
      mode: "Layer",
      palette: "Bloom · Mist/Pulse",
      direction: "外圈粉霧鋪底，內圈玫瑰 pulse 推進 CTA",
      action: "Mist 50%，Pulse 進入 CTA 與重點訊息。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-rose-700",
        "bg-pink-500",
        "bg-fuchsia-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-pink-400/40 to-transparent",
        "bg-linear-to-r from-rose-300/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "霓光權重",
      mode: "Contrast",
      palette: "Neon · Pulse/Signal",
      direction: "亮度 45/35/20",
      action: "Pulse 掌管主標，Signal 僅留給 icon 與 alarm。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-pink-700",
        "bg-rose-500",
        "bg-fuchsia-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-pink-500 to-pink-400",
        "bg-linear-to-r from-rose-400 to-rose-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "花暈節拍",
      mode: "Halo",
      palette: "Petal · Glow",
      direction: "雙層 halo + 霓虹 beam",
      action: "Halo 以粉霧模糊，beam 用 fuchsia 線，距離 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-pink-400",
        "bg-rose-400",
        "bg-fuchsia-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-pink-400/35 to-transparent",
        "bg-linear-to-r from-rose-400/35 to-transparent",
        "bg-linear-to-r from-fuchsia-500/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Petal Sheet",
      usage: "背景",
      token: "token-petal",
      gradient: "bg-linear-to-b from-slate-950 via-rose-950 to-rose-900",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Neon Edge",
      usage: "CTA / Tag",
      token: "token-neon",
      gradient: "bg-linear-to-r from-pink-400 via-rose-400 to-fuchsia-500",
      tips: ["描邊 1px", "hover 加 glow"],
    },
    {
      name: "Thorn Signal",
      usage: "HUD 線條",
      token: "token-thorn",
      gradient: "bg-linear-to-r from-rose-300 via-pink-400 to-fuchsia-400",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "花域 HUD",
      theme: "Bloom Grid",
      channel: "Data",
      description: "HUD 採粉霧描邊並搭配玫瑰脈衝點，呼應花園式資料視覺。",
      preview: "bg-linear-to-br from-pink-400/20 via-slate-900 to-slate-950",
      swatches: ["text-pink-200", "text-rose-200", "text-slate-400"],
    },
    {
      label: "霓敘卡",
      theme: "Neon Story",
      channel: "Story",
      description: "敘事卡加入霓虹 halo 與半透明花瓣紋理，強化敘事情緒。",
      preview: "bg-linear-to-br from-rose-400/20 via-slate-900 to-slate-950",
      swatches: ["text-rose-200", "text-fuchsia-200", "text-white"],
    },
    {
      label: "荊棘警示板",
      theme: "Thorn Monitor",
      channel: "Monitor",
      description: "監控板透過 fuchsia signal 點亮異常，底部維持 60% 暗底。",
      preview: "bg-linear-to-br from-fuchsia-400/25 via-slate-950 to-slate-950",
      swatches: ["text-fuchsia-200", "text-rose-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-pink-200": "霞霧",
    "text-rose-200": "訊號",
    "text-fuchsia-200": "脈衝",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(sakuraVariants),
};

const amberTemplate: GenerateTemplateConfig = {
  slug: "amber-series",
  name: "琥珀晨耀",
  navLabel: "琥珀晨耀模板",
  navIcon: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
  switcherTitle: "琥珀色帶切換",
  switcherBody: "切換琥珀 / 金曜 / 橘暈色帶即可同步更新 hero、背景與 sidebar。",
  boardTitle: "琥珀焰序色盤",
  boardSubtitle: "Solar Mist x Flare Signal",
  boardDescription:
    "以 amber / yellow / orange 層次劃分晨霧、耀斑與警示 beam，維持暖色節奏。",
  storyboardsTitle: "晨耀敘事節奏",
  storyboardsDescription:
    "拆成 Solar CTA、Radiant HUD、Dawn Canvas 三段 storyboard，展現陽光韻律。",
  guidelinesTitle: "曙光 / 熱束交叉表",
  guidelinesDescription:
    "定義暖色 Mist／Pulse／Signal 的比例與方向，避免畫面過於熾烈。",
  tokensTitle: "琥珀漸層庫",
  tokensDescription: "列出 Mist / Beam / Signal 三組暖色漸層與 tips。",
  applicationTitle: "晨耀應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆以琥珀暖光渲染互動流。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-amber-300/60",
    text: "text-amber-100",
    hover: "hover:bg-amber-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-yellow-300/60",
    text: "text-yellow-100",
    hover: "hover:bg-yellow-500/10",
  },
  variants: amberVariants,
  storyboards: [
    {
      title: "Solar CTA",
      tone: "晨光 CTA",
      focus: "CTA",
      badge: "text-amber-200",
      description: "CTA 用琥珀玻璃描邊並加入 6px 日冕亮邊，強調互動能量。",
      preview:
        "bg-linear-to-r from-amber-400/25 via-yellow-300/10 to-transparent",
      cues: ["描邊 1px", "hover 加暖光", "陰影偏金"],
    },
    {
      title: "Radiant HUD",
      tone: "訊號層",
      focus: "HUD",
      badge: "text-yellow-200",
      description: "HUD 線條採 yellow→orange 射線，維持 12px 網格與亮度節拍。",
      preview:
        "bg-linear-to-r from-yellow-400/25 via-amber-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 80% 亮度", "grid 12px"],
    },
    {
      title: "Dawn Canvas",
      tone: "霧層背景",
      focus: "Background",
      badge: "text-orange-200",
      description: "背景鋪上深橘霧並在角落加晨曦光束，保留 40% 暗部。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-amber-950/60 to-amber-900/40",
      cues: ["暗部 ≥40%", "亮帶置邊", "噪點 3%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "晨霧分層",
      mode: "Layer",
      palette: "Solar · Mist/Pulse",
      direction: "外圈琥珀霧，內圈黃暉 pulse",
      action: "Mist 50%，Pulse 集中在 CTA 與高亮資訊。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-amber-700",
        "bg-yellow-500",
        "bg-orange-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-amber-400/40 to-transparent",
        "bg-linear-to-r from-yellow-300/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "耀斑權重",
      mode: "Contrast",
      palette: "Flare · Pulse/Signal",
      direction: "亮度 40/35/25",
      action: "Pulse 管主標，Signal 只給警示節點，其他讓霧層呼吸。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-amber-700",
        "bg-orange-500",
        "bg-yellow-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-amber-500 to-amber-400",
        "bg-linear-to-r from-orange-500 to-orange-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "曙光節拍",
      mode: "Halo",
      palette: "Dawn · Glow",
      direction: "雙層 halo + 熱束",
      action: "Halo 用 amber 模糊，beam 以 orange 線性並與 CTA 保持 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-amber-400",
        "bg-yellow-300",
        "bg-orange-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-amber-400/35 to-transparent",
        "bg-linear-to-r from-yellow-300/35 to-transparent",
        "bg-linear-to-r from-orange-500/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Solar Sheet",
      usage: "背景",
      token: "token-solar",
      gradient: "bg-linear-to-b from-slate-950 via-amber-950 to-amber-900",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Flare Edge",
      usage: "CTA / Tag",
      token: "token-flare",
      gradient: "bg-linear-to-r from-amber-400 via-yellow-400 to-orange-500",
      tips: ["描邊 1px", "hover 加暖光"],
    },
    {
      name: "Dawn Signal",
      usage: "HUD 線條",
      token: "token-dawn",
      gradient: "bg-linear-to-r from-yellow-300 via-amber-300 to-orange-400",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "晨耀 HUD",
      theme: "Solar Grid",
      channel: "Data",
      description: "HUD 以琥珀描邊搭配黃暉網格，呈現日照式監控。",
      preview: "bg-linear-to-br from-amber-400/20 via-slate-900 to-slate-950",
      swatches: ["text-amber-200", "text-yellow-200", "text-slate-400"],
    },
    {
      label: "日暈敘事卡",
      theme: "Radiant Story",
      channel: "Story",
      description: "敘事卡底部以橘暈 halo 承接圖像，呈現暖色敘事。",
      preview: "bg-linear-to-br from-yellow-400/20 via-slate-900 to-slate-950",
      swatches: ["text-yellow-200", "text-orange-200", "text-white"],
    },
    {
      label: "耀斑監控板",
      theme: "Flare Monitor",
      channel: "Monitor",
      description: "監控板用 orange signal 指示異常並保持 60% 暗底。",
      preview: "bg-linear-to-br from-orange-400/25 via-slate-950 to-slate-950",
      swatches: ["text-orange-200", "text-amber-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-amber-200": "晨霧",
    "text-yellow-200": "訊號",
    "text-orange-200": "脈衝",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(amberVariants),
};

const violetTemplate: GenerateTemplateConfig = {
  slug: "violet-series",
  name: "紫曜玄境",
  navLabel: "紫曜玄境模板",
  navIcon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  switcherTitle: "紫曜色帶切換",
  switcherBody: "切換紫霧 / 靛光 / 星霧色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "紫曜星霧色盤",
  boardSubtitle: "Void Mist x Nebula Signal",
  boardDescription:
    "以 violet / purple / indigo 層次劃分霧層、脈衝與星霧 alert，營造深邃節奏。",
  storyboardsTitle: "玄境敘事節奏",
  storyboardsDescription:
    "拆成 Void CTA、Nebula HUD、Orbit Canvas 三段 storyboard，突顯神秘張力。",
  guidelinesTitle: "幽霧 / 星束交叉表",
  guidelinesDescription:
    "列出霧紫主題的 Mist／Pulse／Signal 權重與自發光指引。",
  tokensTitle: "紫曜漸層庫",
  tokensDescription: "整理 Mist / Ray / Signal 三組紫系漸層與提示。",
  applicationTitle: "玄境應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆保留紫曜星霧的高貴質地。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-violet-300/60",
    text: "text-violet-100",
    hover: "hover:bg-violet-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-purple-300/60",
    text: "text-purple-100",
    hover: "hover:bg-purple-500/10",
  },
  variants: violetVariants,
  storyboards: [
    {
      title: "Void CTA",
      tone: "霧層 CTA",
      focus: "CTA",
      badge: "text-violet-200",
      description: "CTA 以紫霧玻璃勾勒，加入靛光描邊展現神秘互動。",
      preview:
        "bg-linear-to-r from-violet-400/25 via-purple-400/10 to-transparent",
      cues: ["描邊 1px", "hover 加星霧", "陰影偏冷"],
    },
    {
      title: "Nebula HUD",
      tone: "星雲訊號",
      focus: "HUD",
      badge: "text-purple-200",
      description: "HUD 線條以 purple→indigo 漸層延伸，輔以星雲節奏點。",
      preview:
        "bg-linear-to-r from-purple-400/25 via-indigo-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 pulse", "grid 12px"],
    },
    {
      title: "Orbit Canvas",
      tone: "霧層背景",
      focus: "Background",
      badge: "text-indigo-200",
      description: "背景鋪上深紫霧搭配靛色光弧，保留 40% 暗部與星點。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-violet-950/60 to-violet-900/40",
      cues: ["暗部 ≥40%", "亮弧置角", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "幽霧分層",
      mode: "Layer",
      palette: "Void · Mist/Pulse",
      direction: "外圈紫霧鋪底，內圈靛脈衝推進 CTA",
      action: "Mist 55%，Pulse 僅在 CTA 與重點段落。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-violet-700",
        "bg-purple-500",
        "bg-indigo-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-violet-400/40 to-transparent",
        "bg-linear-to-r from-purple-400/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "星霧權重",
      mode: "Contrast",
      palette: "Nebula · Pulse/Signal",
      direction: "亮度 40/35/25",
      action: "Pulse 控制主標，Signal 以靛光提醒 icon，其他交給霧層。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-violet-700",
        "bg-purple-500",
        "bg-indigo-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-violet-500 to-violet-400",
        "bg-linear-to-r from-purple-400 to-purple-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "星暈節拍",
      mode: "Halo",
      palette: "Orbit · Glow",
      direction: "雙層 halo + 星束",
      action: "Halo 用 violet blur，beam 以 indigo 線性並與 CTA 間隔 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-violet-400",
        "bg-purple-400",
        "bg-indigo-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-violet-400/35 to-transparent",
        "bg-linear-to-r from-purple-400/35 to-transparent",
        "bg-linear-to-r from-indigo-500/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Void Sheet",
      usage: "背景",
      token: "token-void",
      gradient: "bg-linear-to-b from-slate-950 via-violet-950 to-violet-900",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Nebula Edge",
      usage: "CTA / Tag",
      token: "token-nebula",
      gradient: "bg-linear-to-r from-violet-400 via-purple-400 to-indigo-500",
      tips: ["描邊 1px", "hover 加星霧"],
    },
    {
      name: "Orbit Signal",
      usage: "HUD 線條",
      token: "token-orbit",
      gradient: "bg-linear-to-r from-purple-300 via-violet-300 to-indigo-400",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "星霧 HUD",
      theme: "Nebula Grid",
      channel: "Data",
      description: "HUD 以紫霧描邊並加入星雲脈衝點，呈現冷冽數據。",
      preview: "bg-linear-to-br from-violet-400/20 via-slate-900 to-slate-950",
      swatches: ["text-violet-200", "text-purple-200", "text-slate-400"],
    },
    {
      label: "玄境敘事卡",
      theme: "Void Story",
      channel: "Story",
      description: "敘事卡底部佈置靛色光弧，帶出沉浸式故事氛圍。",
      preview: "bg-linear-to-br from-purple-400/20 via-slate-900 to-slate-950",
      swatches: ["text-purple-200", "text-indigo-200", "text-white"],
    },
    {
      label: "靛光監控板",
      theme: "Orbit Monitor",
      channel: "Monitor",
      description: "監控板用 indigo signal 提醒異常並維持 60% 暗底。",
      preview: "bg-linear-to-br from-indigo-400/25 via-slate-950 to-slate-950",
      swatches: ["text-indigo-200", "text-violet-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-violet-200": "霧層",
    "text-purple-200": "訊號",
    "text-indigo-200": "脈衝",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(violetVariants),
};

const limeTemplate: GenerateTemplateConfig = {
  slug: "lime-series",
  name: "萊姆電湧",
  navLabel: "萊姆電湧模板",
  navIcon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  switcherTitle: "萊姆色帶切換",
  switcherBody:
    "切換酸萊姆 / 翡翠 / 電光色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "酸霓網格色盤",
  boardSubtitle: "Acid Mist x Surge Signal",
  boardDescription:
    "以 lime / green / emerald 建構霧層、網格與訊號層級，帶出高能賽博氛圍。",
  storyboardsTitle: "電湧敘事節奏",
  storyboardsDescription:
    "拆成 Acid CTA、Circuit HUD、Pulse Canvas 三段 storyboard，維持高壓張力。",
  guidelinesTitle: "酸霧 / 網束交叉表",
  guidelinesDescription:
    "定義 Mist／Pulse／Signal 比例與方向，避免綠色訊號失控。",
  tokensTitle: "萊姆漸層庫",
  tokensDescription: "整理 Toxic / Grid / Beam 三組漸層與 tips。",
  applicationTitle: "電湧應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆保持酸霓網格的科技侵略性。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-lime-300/60",
    text: "text-lime-100",
    hover: "hover:bg-lime-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-emerald-300/60",
    text: "text-emerald-100",
    hover: "hover:bg-emerald-500/10",
  },
  variants: limeVariants,
  storyboards: [
    {
      title: "Acid CTA",
      tone: "酸霧 CTA",
      focus: "CTA",
      badge: "text-lime-200",
      description: "CTA 以酸綠玻璃描邊並加上電光噴霧，凸顯危險互動。",
      preview:
        "bg-linear-to-r from-lime-400/25 via-green-400/10 to-transparent",
      cues: ["描邊 1px", "hover scale 1.05", "陰影用萊姆"],
    },
    {
      title: "Circuit HUD",
      tone: "網格訊號",
      focus: "HUD",
      badge: "text-green-200",
      description: "HUD 線條採 emerald→lime 過渡並搭配 12px 網格節奏。",
      preview:
        "bg-linear-to-r from-green-400/25 via-emerald-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 pulse", "grid 12px"],
    },
    {
      title: "Pulse Canvas",
      tone: "霧層背景",
      focus: "Background",
      badge: "text-emerald-200",
      description: "背景以深綠霧鋪底，邊緣加入酸霓光束形成監控氣氛。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-lime-950/60 to-green-950/40",
      cues: ["暗部 ≥40%", "亮束置角", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "酸霧分層",
      mode: "Layer",
      palette: "Acid · Mist/Pulse",
      direction: "外圈酸霧壓暗，內圈翡翠 pulse 打亮 CTA",
      action: "Mist 50%，Pulse 只給主互動。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-lime-700",
        "bg-green-500",
        "bg-emerald-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-lime-400/40 to-transparent",
        "bg-linear-to-r from-green-400/30 to-transparent",
        "bg-linear-to-r from-slate-900 to-slate-900/80",
        "bg-linear-to-r from-white/10 to-transparent",
      ],
    },
    {
      principle: "網束權重",
      mode: "Contrast",
      palette: "Grid · Pulse/Signal",
      direction: "亮度 45/35/20",
      action: "Pulse 為主標，Signal 控制警示與 icon，其他交給霧層。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-green-700",
        "bg-emerald-500",
        "bg-lime-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-green-500 to-green-400",
        "bg-linear-to-r from-emerald-400 to-emerald-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "電暈節拍",
      mode: "Halo",
      palette: "Surge · Glow",
      direction: "雙層 halo + 線束",
      action: "Halo 用萊姆模糊，beam 以 emerald 線保持 32px 間距。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-lime-400",
        "bg-green-400",
        "bg-emerald-500",
      ],
      directionSwatches: [
        "bg-linear-to-r from-lime-400/35 to-transparent",
        "bg-linear-to-r from-green-400/35 to-transparent",
        "bg-linear-to-r from-emerald-500/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Toxic Sheet",
      usage: "背景",
      token: "token-toxic",
      gradient: "bg-linear-to-b from-slate-950 via-lime-950 to-green-950",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Grid Edge",
      usage: "CTA / Tag",
      token: "token-grid",
      gradient: "bg-linear-to-r from-lime-400 via-green-400 to-emerald-500",
      tips: ["描邊 1px", "hover 加電光"],
    },
    {
      name: "Surge Signal",
      usage: "HUD 線條",
      token: "token-surge",
      gradient: "bg-linear-to-r from-green-300 via-emerald-300 to-lime-300",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "電湧 HUD",
      theme: "Acid Grid",
      channel: "Data",
      description: "HUD 以酸萊姆描邊搭配網格粒子，呈現高壓監控。",
      preview: "bg-linear-to-br from-lime-400/20 via-slate-900 to-slate-950",
      swatches: ["text-lime-200", "text-green-200", "text-slate-400"],
    },
    {
      label: "霓電敘事卡",
      theme: "Surge Story",
      channel: "Story",
      description: "敘事卡在底部加入翡翠 beam，與圖像產生電波交錯。",
      preview: "bg-linear-to-br from-green-400/20 via-slate-900 to-slate-950",
      swatches: ["text-green-200", "text-emerald-200", "text-white"],
    },
    {
      label: "毒訊監控板",
      theme: "Toxic Monitor",
      channel: "Monitor",
      description: "監控板透過 emerald signal 提醒異常，暗底維持 60%。",
      preview: "bg-linear-to-br from-emerald-400/25 via-slate-950 to-slate-950",
      swatches: ["text-emerald-200", "text-lime-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-lime-200": "霧層",
    "text-green-200": "訊號",
    "text-emerald-200": "脈衝",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(limeVariants),
};

const cobaltTemplate: GenerateTemplateConfig = {
  slug: "cobalt-series",
  name: "鈷潮湛境",
  navLabel: "鈷潮湛境模板",
  navIcon: "M3 7l9-5 9 5v10l-9 5-9-5V7z",
  switcherTitle: "鈷潮色帶切換",
  switcherBody:
    "切換潮律鈷艦 / 冰棱鈷線 / 深渦鈷訊色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "鈷潮極冷色盤",
  boardSubtitle: "Tide Mist x Surge Signal",
  boardDescription:
    "以 cobalt / sky / cyan 層級架構霧層、beam 與警示訊號，維持低溫監控節奏。",
  storyboardsTitle: "鈷潮敘事節奏",
  storyboardsDescription:
    "拆成 Tide CTA、Ridge HUD、Trench Canvas 三段 storyboard，確保深海系統的冷靜輸出。",
  guidelinesTitle: "鈷霧 / 潮束交叉表",
  guidelinesDescription:
    "定義 Mist／Pulse／Signal 權重與 beam 流向，避免藍色訊號失衡。",
  tokensTitle: "鈷潮漸層庫",
  tokensDescription: "彙整 Tide / Ridge / Trench 三組漸層與操作建議。",
  applicationTitle: "湛境應用樣板",
  applicationDescription: "HUD、敘事卡、監控板同步保留鈷霧折射與冷潮粒子。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-sky-300/60",
    text: "text-sky-100",
    hover: "hover:bg-sky-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-cyan-300/60",
    text: "text-cyan-100",
    hover: "hover:bg-cyan-500/10",
  },
  variants: cobaltVariants,
  storyboards: [
    {
      title: "Tide CTA",
      tone: "潮霧 CTA",
      focus: "CTA",
      badge: "text-sky-200",
      description: "CTA 以鈷霧玻璃描邊並輔以 sky beam，呼應冷潮呼吸。",
      preview: "bg-linear-to-r from-sky-400/25 via-cyan-400/10 to-transparent",
      cues: ["描邊 1px 冷霧", "hover scale 1.04", "陰影偏藍"],
    },
    {
      title: "Ridge HUD",
      tone: "棱線訊號",
      focus: "HUD",
      badge: "text-blue-200",
      description: "HUD 以 indigo→blue beam 鋪設 12px 網格，呈現棱線節拍。",
      preview:
        "bg-linear-to-r from-blue-500/25 via-indigo-500/10 to-transparent",
      cues: ["線寬 0.5px", "節點亮度 70%", "grid 12px"],
    },
    {
      title: "Trench Canvas",
      tone: "深渦背景",
      focus: "Background",
      badge: "text-cyan-200",
      description: "背景以 45% 以上深藍鋪底，邊緣加入 cyan 渦光。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-blue-950/60 to-cyan-900/40",
      cues: ["暗部 ≥45%", "光束置角", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "鈷霧階",
      mode: "Layer",
      palette: "Tide · Mist/Pulse",
      direction: "霧層 55%、Pulse 30%、Signal 15%",
      action: "CTA 僅允許 sky beam，其餘保持鈷霧霧度。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-blue-900",
        "bg-sky-500",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-blue-500/35 to-transparent",
        "bg-linear-to-r from-sky-300/30 to-transparent",
        "bg-linear-to-r from-cyan-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
    {
      principle: "棱線權重",
      mode: "Contrast",
      palette: "Ridge · Pulse/Signal",
      direction: "Pulse 40 / Signal 25 / Mist 35",
      action: "HUD 棱線維持 40% 亮度，Signal 僅標記警示。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-indigo-700",
        "bg-blue-500",
        "bg-sky-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-indigo-500 to-indigo-400",
        "bg-linear-to-r from-blue-500 to-blue-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "渦束節拍",
      mode: "Halo",
      palette: "Trench · Glow",
      direction: "雙層 cyan halo + 鈷束",
      action: "halo blur 22px，鈷束線寬 1px 與 CTA 距離 32px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-cyan-400",
        "bg-blue-400",
        "bg-sky-300",
      ],
      directionSwatches: [
        "bg-linear-to-r from-cyan-400/35 to-transparent",
        "bg-linear-to-r from-blue-400/30 to-transparent",
        "bg-linear-to-r from-sky-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Tide Sheet",
      usage: "背景",
      token: "token-tide",
      gradient: "bg-linear-to-b from-slate-950 via-blue-950 to-indigo-900",
      tips: ["模糊 16px", "噪點 4%"],
    },
    {
      name: "Ridge Edge",
      usage: "CTA / Tag",
      token: "token-ridge",
      gradient: "bg-linear-to-r from-sky-400 via-cyan-400 to-blue-500",
      tips: ["描邊 1px", "hover 加冷光"],
    },
    {
      name: "Trench Signal",
      usage: "HUD 線條",
      token: "token-trench",
      gradient: "bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400",
      tips: ["線寬 0.75px", "附 14px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "深渦 HUD",
      theme: "Cobalt Grid",
      channel: "Data",
      description: "HUD 以鈷霧網格搭配 sky pulse，傳達冷靜監控。",
      preview: "bg-linear-to-br from-blue-400/20 via-slate-900 to-slate-950",
      swatches: ["text-sky-200", "text-blue-200", "text-slate-400"],
    },
    {
      label: "潮線敘事卡",
      theme: "Tide Story",
      channel: "Story",
      description: "敘事卡以 cyan halo 包覆圖像，保留深潮霧度。",
      preview: "bg-linear-to-br from-cyan-400/20 via-slate-900 to-slate-950",
      swatches: ["text-cyan-200", "text-sky-200", "text-white"],
    },
    {
      label: "鈷訊監控板",
      theme: "Trench Monitor",
      channel: "Monitor",
      description: "監控板以 cyan signal 指示異常並鎖定 60% 暗底。",
      preview: "bg-linear-to-br from-sky-400/25 via-slate-950 to-slate-950",
      swatches: ["text-cyan-200", "text-blue-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-sky-200": "霧層",
    "text-blue-200": "脈衝",
    "text-cyan-200": "訊號",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(cobaltVariants),
};

const terracottaTemplate: GenerateTemplateConfig = {
  slug: "terracotta-series",
  name: "陶砂炙層",
  navLabel: "陶砂炙層模板",
  navIcon: "M12 2l7 6v12H5V8l7-6z",
  switcherTitle: "陶砂色帶切換",
  switcherBody:
    "切換陶暈炙階 / 砂陣脈線 / 炭丘預警色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "陶砂炙層色盤",
  boardSubtitle: "Clay Mist x Ember Signal",
  boardDescription:
    "以 terracotta / amber / rose 建構霧層、beam 與砂丘警示，呈現暖域質感。",
  storyboardsTitle: "陶域敘事節奏",
  storyboardsDescription:
    "拆成 Clay CTA、Grid HUD、Ember Canvas 三段 storyboard，維持暖色卻清晰的資料節奏。",
  guidelinesTitle: "陶霧 / 炙束交叉表",
  guidelinesDescription:
    "量化 Mist／Pulse／Signal 權重，避免暖色過曝或警示喧賓奪主。",
  tokensTitle: "陶砂漸層庫",
  tokensDescription: "整理 Clay / Grid / Ember 三組漸層與操作提醒。",
  applicationTitle: "炙層應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆維持陶砂霧度與琥珀脈線。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-amber-300/60",
    text: "text-amber-100",
    hover: "hover:bg-amber-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-rose-300/60",
    text: "text-rose-100",
    hover: "hover:bg-rose-500/10",
  },
  variants: terracottaVariants,
  storyboards: [
    {
      title: "Clay CTA",
      tone: "陶霧 CTA",
      focus: "CTA",
      badge: "text-amber-200",
      description: "CTA 以陶砂霧層描邊並疊上 amber flare，維持柔亮互動。",
      preview:
        "bg-linear-to-r from-amber-400/25 via-rose-400/10 to-transparent",
      cues: ["描邊 1px", "hover glow 12%", "陰影偏暖"],
    },
    {
      title: "Grid HUD",
      tone: "砂紋訊號",
      focus: "HUD",
      badge: "text-orange-200",
      description: "HUD 採 stone grid 並以橘脈線巡航，呈現穩定節奏。",
      preview:
        "bg-linear-to-r from-orange-400/25 via-amber-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 80%", "grid 14px"],
    },
    {
      title: "Ember Canvas",
      tone: "暮焰背景",
      focus: "Background",
      badge: "text-rose-200",
      description: "背景以 40% 深色鋪底並在側邊加入暮焰警示束。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-stone-900/60 to-amber-900/40",
      cues: ["暗部 ≥40%", "亮束貼邊", "粒子 3%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "陶霧比例",
      mode: "Layer",
      palette: "Clay · Mist/Pulse",
      direction: "Mist 50 / Pulse 35 / Signal 15",
      action: "霧層掌控背景，Pulse 僅進入主互動。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-stone-800",
        "bg-amber-500",
        "bg-rose-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-amber-400/35 to-transparent",
        "bg-linear-to-r from-orange-400/30 to-transparent",
        "bg-linear-to-r from-rose-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
    {
      principle: "砂紋權重",
      mode: "Contrast",
      palette: "Grid · Pulse/Signal",
      direction: "Pulse 40 / Signal 25",
      action: "HUD 節奏控制在 40% 亮度，Signal 只留給 alert。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-amber-700",
        "bg-orange-500",
        "bg-rose-500",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-amber-500 to-amber-400",
        "bg-linear-to-r from-orange-500 to-orange-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "暮焰節拍",
      mode: "Halo",
      palette: "Ember · Glow",
      direction: "雙層暮焰 halo + 砂束",
      action: "halo blur 20px，砂束線寬 1px，與 CTA 保持 28px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-amber-400",
        "bg-orange-400",
        "bg-rose-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-amber-400/35 to-transparent",
        "bg-linear-to-r from-orange-400/30 to-transparent",
        "bg-linear-to-r from-rose-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Clay Sheet",
      usage: "背景",
      token: "token-clay",
      gradient: "bg-linear-to-b from-slate-950 via-stone-900 to-amber-900",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Grid Edge",
      usage: "CTA / Tag",
      token: "token-grid-terracotta",
      gradient: "bg-linear-to-r from-amber-400 via-orange-400 to-rose-400",
      tips: ["描邊 1px", "hover 加暖光"],
    },
    {
      name: "Ember Signal",
      usage: "HUD 線條",
      token: "token-ember",
      gradient: "bg-linear-to-r from-orange-300 via-amber-300 to-rose-300",
      tips: ["線寬 0.75px", "加入 14px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "陶霧控台",
      theme: "Clay Grid",
      channel: "Data",
      description: "控台保持陶砂霧玻璃與 amber 線條，突顯資料層級。",
      preview: "bg-linear-to-br from-amber-400/20 via-slate-900 to-slate-950",
      swatches: ["text-amber-200", "text-orange-200", "text-slate-400"],
    },
    {
      label: "炙層敘事卡",
      theme: "Ember Story",
      channel: "Story",
      description: "敘事卡以 rose halo 包住圖像，維持暖域節奏。",
      preview: "bg-linear-to-br from-rose-400/20 via-slate-900 to-slate-950",
      swatches: ["text-rose-200", "text-amber-200", "text-white"],
    },
    {
      label: "暮焰監控",
      theme: "Alert Monitor",
      channel: "Monitor",
      description: "監控板用 rose signal 標註異常並維持 60% 暗底。",
      preview: "bg-linear-to-br from-rose-400/25 via-slate-950 to-slate-950",
      swatches: ["text-rose-200", "text-orange-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-amber-200": "霧層",
    "text-orange-200": "脈衝",
    "text-rose-200": "訊號",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(terracottaVariants),
};

const jadeTemplate: GenerateTemplateConfig = {
  slug: "jade-series",
  name: "青瓷霧嶺",
  navLabel: "青瓷霧嶺模板",
  navIcon:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 6a4 4 0 1 1-4 4 4 4 0 0 1 4-4z",
  switcherTitle: "青瓷色帶切換",
  switcherBody:
    "切換瓷霧岸線 / 嶺脈雲帶 / 澗聲警示色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "青瓷輕霧色盤",
  boardSubtitle: "Glaze Mist x Lake Signal",
  boardDescription:
    "以 teal / emerald / cyan 區分霧層、脈衝與湖線警示，營造輕盈山嶺敘事。",
  storyboardsTitle: "霧嶺敘事節奏",
  storyboardsDescription:
    "拆成 Glaze CTA、Ridge HUD、Lake Canvas 三段 storyboard，保留山嶺流線。",
  guidelinesTitle: "瓷霧 / 湖線交叉表",
  guidelinesDescription:
    "定義 Mist／Pulse／Signal 權重與湖線 beam 流向，維持清透感。",
  tokensTitle: "青瓷漸層庫",
  tokensDescription: "彙整 Glaze / Ridge / Lake 三組漸層與 tips。",
  applicationTitle: "霧嶺應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆延續青瓷霧層與湖線訊號。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-teal-300/60",
    text: "text-teal-100",
    hover: "hover:bg-teal-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-emerald-300/60",
    text: "text-emerald-100",
    hover: "hover:bg-emerald-500/10",
  },
  variants: jadeVariants,
  storyboards: [
    {
      title: "Glaze CTA",
      tone: "瓷霧 CTA",
      focus: "CTA",
      badge: "text-teal-200",
      description: "CTA 以青瓷玻璃描邊並覆蓋湖藍 halo，呈現輕盈互動。",
      preview: "bg-linear-to-r from-teal-300/25 via-cyan-300/10 to-transparent",
      cues: ["描邊 1px", "hover 加霧光", "陰影偏 teal"],
    },
    {
      title: "Ridge HUD",
      tone: "翠嶺訊號",
      focus: "HUD",
      badge: "text-emerald-200",
      description: "HUD 採 emerald grid 並灌入 teal beam，描寫山脈輪廓。",
      preview:
        "bg-linear-to-r from-emerald-400/25 via-teal-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 70%", "grid 12px"],
    },
    {
      title: "Lake Canvas",
      tone: "湖線背景",
      focus: "Background",
      badge: "text-cyan-200",
      description: "背景鋪深湖色，邊緣以 cyan ray 作為警示與節奏點。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-teal-950/60 to-cyan-900/40",
      cues: ["暗部 ≥40%", "光束沿邊", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "瓷霧比例",
      mode: "Layer",
      palette: "Glaze · Mist/Pulse",
      direction: "Mist 55 / Pulse 30 / Signal 15",
      action: "霧層佔多數，pulse 集中在 CTA。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-teal-800",
        "bg-emerald-500",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-teal-400/35 to-transparent",
        "bg-linear-to-r from-emerald-400/30 to-transparent",
        "bg-linear-to-r from-cyan-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
    {
      principle: "嶺脈權重",
      mode: "Contrast",
      palette: "Ridge · Pulse/Signal",
      direction: "Pulse 38 / Signal 22",
      action: "嶺脈 beam 掌管主要指向，Signal 僅標示警示節點。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-emerald-700",
        "bg-teal-500",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-emerald-500 to-emerald-400",
        "bg-linear-to-r from-teal-400 to-teal-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "湖線節拍",
      mode: "Halo",
      palette: "Lake · Glow",
      direction: "Cyan halo 包裹 CTA，beam 緊貼湖線",
      action: "halo blur 18px，beam 線寬 0.75px，間距 28px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-cyan-400",
        "bg-sky-300",
        "bg-teal-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-cyan-400/35 to-transparent",
        "bg-linear-to-r from-sky-300/30 to-transparent",
        "bg-linear-to-r from-teal-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Glaze Sheet",
      usage: "背景",
      token: "token-glaze",
      gradient: "bg-linear-to-b from-slate-950 via-teal-950 to-cyan-900",
      tips: ["模糊 18px", "噪點 3%"],
    },
    {
      name: "Ridge Edge",
      usage: "CTA / Tag",
      token: "token-ridge-jade",
      gradient: "bg-linear-to-r from-teal-400 via-emerald-400 to-cyan-400",
      tips: ["描邊 1px", "hover 加湖光"],
    },
    {
      name: "Lake Signal",
      usage: "HUD 線條",
      token: "token-lake",
      gradient: "bg-linear-to-r from-cyan-300 via-sky-300 to-teal-400",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "霧嶺控台",
      theme: "Glaze Grid",
      channel: "Data",
      description: "控台以青瓷玻璃搭配湖線節點，呈現輕盈分析面。",
      preview: "bg-linear-to-br from-teal-400/20 via-slate-900 to-slate-950",
      swatches: ["text-teal-200", "text-emerald-200", "text-slate-400"],
    },
    {
      label: "湖線敘事卡",
      theme: "Lake Story",
      channel: "Story",
      description: "敘事卡以 cyan halo 包覆圖片，營造清澈敘事。",
      preview: "bg-linear-to-br from-cyan-400/20 via-slate-900 to-slate-950",
      swatches: ["text-cyan-200", "text-teal-200", "text-white"],
    },
    {
      label: "澗聲監控板",
      theme: "Signal Monitor",
      channel: "Monitor",
      description: "監控板用 cyan signal 標記異常並維持 60% 暗底。",
      preview: "bg-linear-to-br from-cyan-400/25 via-slate-950 to-slate-950",
      swatches: ["text-cyan-200", "text-emerald-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-teal-200": "霧層",
    "text-emerald-200": "脈衝",
    "text-cyan-200": "訊號",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(jadeVariants),
};

const nocturneTemplate: GenerateTemplateConfig = {
  slug: "nocturne-series",
  name: "夜譜炫核",
  navLabel: "夜譜炫核模板",
  navIcon: "M21 12a9 9 0 1 1-9-9 7 7 0 0 0 9 9z",
  switcherTitle: "夜譜色帶切換",
  switcherBody:
    "切換夜譜炫核 / 裂隙脈衝 / 磁戒警示色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "夜譜霓線色盤",
  boardSubtitle: "Titan Mist x Neon Signal",
  boardDescription:
    "以 slate / fuchsia / cyan 建構夜霧、霓光 beam 與警示訊息，維持高對比夜警節奏。",
  storyboardsTitle: "夜域敘事節奏",
  storyboardsDescription:
    "拆成 Core CTA、Rift HUD、Signal Canvas 三段 storyboard，鎖定夜間監控語彙。",
  guidelinesTitle: "鈦霧 / 裂束交叉表",
  guidelinesDescription:
    "量化 Mist／Pulse／Signal 權重與磁戒 beam 流程，避免過亮或過暗。",
  tokensTitle: "夜譜漸層庫",
  tokensDescription: "整理 Core / Rift / Signal 三組漸層與提示。",
  applicationTitle: "夜譜應用樣板",
  applicationDescription: "HUD、敘事卡、監控板皆維持鈦霧玻璃與霓光警戒的對比。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-fuchsia-300/60",
    text: "text-fuchsia-100",
    hover: "hover:bg-fuchsia-500/10",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-blue-300/60",
    text: "text-blue-100",
    hover: "hover:bg-blue-500/10",
  },
  variants: nocturneVariants,
  storyboards: [
    {
      title: "Core CTA",
      tone: "霓核 CTA",
      focus: "CTA",
      badge: "text-fuchsia-200",
      description: "CTA 以鈦霧玻璃包覆，外圈加 fuchsia beam 呈現霓核流。",
      preview:
        "bg-linear-to-r from-fuchsia-400/25 via-purple-400/10 to-transparent",
      cues: ["描邊 1px", "hover glow 14%", "陰影偏紫"],
    },
    {
      title: "Rift HUD",
      tone: "裂隙訊號",
      focus: "HUD",
      badge: "text-indigo-200",
      description: "HUD 線條沿 indigo→blue beam 延展，營造裂隙脈衝。",
      preview:
        "bg-linear-to-r from-indigo-400/25 via-blue-400/10 to-transparent",
      cues: ["線寬 0.5px", "節點 pulse", "grid 12px"],
    },
    {
      title: "Signal Canvas",
      tone: "磁戒背景",
      focus: "Background",
      badge: "text-blue-200",
      description: "背景以鈦霧鋪底並在角落投射 cyan signal，維持夜警對比。",
      preview:
        "bg-linear-to-r from-slate-950/90 via-zinc-900/60 to-blue-900/40",
      cues: ["暗部 ≥45%", "信號置角", "粒子 2px"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "鈦霧比例",
      mode: "Layer",
      palette: "Core · Mist/Pulse",
      direction: "Mist 50 / Pulse 30 / Signal 20",
      action: "夜霧確保背景佔比，Pulse 集中在 CTA。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-zinc-900",
        "bg-purple-500",
        "bg-fuchsia-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-fuchsia-400/35 to-transparent",
        "bg-linear-to-r from-purple-400/30 to-transparent",
        "bg-linear-to-r from-blue-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
    {
      principle: "裂束權重",
      mode: "Contrast",
      palette: "Rift · Pulse/Signal",
      direction: "Pulse 40 / Signal 35",
      action: "裂隙 beam 維持 40% 亮度，Signal 僅點亮警戒。",
      paletteSwatches: [
        "bg-slate-950",
        "bg-indigo-700",
        "bg-blue-500",
        "bg-cyan-400",
      ],
      directionSwatches: [
        "bg-slate-900",
        "bg-linear-to-r from-indigo-500 to-indigo-400",
        "bg-linear-to-r from-blue-500 to-blue-300",
        "bg-slate-800",
      ],
    },
    {
      principle: "磁戒節拍",
      mode: "Halo",
      palette: "Signal · Glow",
      direction: "雙層 cyan halo 包住 CTA 再疊 fuchsia signal",
      action: "halo blur 20px，signal 線寬 1px 與 CTA 距 30px。",
      paletteSwatches: [
        "bg-slate-900",
        "bg-cyan-400",
        "bg-blue-400",
        "bg-fuchsia-400",
      ],
      directionSwatches: [
        "bg-linear-to-r from-cyan-400/35 to-transparent",
        "bg-linear-to-r from-blue-400/30 to-transparent",
        "bg-linear-to-r from-fuchsia-400/25 to-transparent",
        "bg-linear-to-r from-slate-950 to-slate-900",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Core Sheet",
      usage: "背景",
      token: "token-core",
      gradient: "bg-linear-to-b from-slate-950 via-zinc-950 to-purple-900",
      tips: ["模糊 18px", "噪點 4%"],
    },
    {
      name: "Rift Beam",
      usage: "CTA / Tag",
      token: "token-rift",
      gradient: "bg-linear-to-r from-indigo-400 via-blue-400 to-fuchsia-400",
      tips: ["描邊 1px", "hover 加霓光"],
    },
    {
      name: "Signal Loop",
      usage: "HUD 線條",
      token: "token-signal-loop",
      gradient: "bg-linear-to-r from-blue-300 via-cyan-300 to-fuchsia-300",
      tips: ["線寬 0.75px", "加入 16px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "夜譜 HUD",
      theme: "Core Grid",
      channel: "Data",
      description: "HUD 走鈦霧底並以霓光節奏點亮關鍵指標。",
      preview: "bg-linear-to-br from-fuchsia-400/20 via-slate-900 to-slate-950",
      swatches: ["text-fuchsia-200", "text-indigo-200", "text-slate-400"],
    },
    {
      label: "裂隙敘事卡",
      theme: "Rift Story",
      channel: "Story",
      description: "敘事卡用 indigo beam 引導視線，保持冷霓張力。",
      preview: "bg-linear-to-br from-indigo-400/20 via-slate-900 to-slate-950",
      swatches: ["text-indigo-200", "text-blue-200", "text-white"],
    },
    {
      label: "磁戒監控板",
      theme: "Signal Monitor",
      channel: "Monitor",
      description: "監控板以 cyan signal 標出異常並維持 65% 暗底。",
      preview: "bg-linear-to-br from-blue-400/25 via-slate-950 to-slate-950",
      swatches: ["text-blue-200", "text-fuchsia-200", "text-slate-300"],
    },
  ],
  swatchLabelMap: {
    "text-fuchsia-200": "霓核",
    "text-indigo-200": "裂束",
    "text-blue-200": "警示",
    "text-slate-400": "基底",
    "text-white": "對比",
    "text-slate-300": "支援",
  },
  variantMap: buildVariantMap(nocturneVariants),
};

const coralTemplate: GenerateTemplateConfig = {
  slug: "coral-series",
  name: "珊瑚光譜",
  navLabel: "珊瑚光譜模板",
  navIcon: "M12 2c4 5 8 7 8 12a8 8 0 0 1-16 0c0-5 4-7 8-12z",
  switcherTitle: "珊瑚色帶切換",
  switcherBody:
    "切換珊瑚明環 / 潮映珊暈 / 暖潮軟景色帶即可同步刷新 hero、背景與 sidebar。",
  boardTitle: "珊瑚暖暈色盤",
  boardSubtitle: "Shell Mist x Bloom Signal",
  boardDescription:
    "以 rose / orange / amber 層次打造貝光霧層、潮暈 halo 與暖色提示，維持柔亮光暈。",
  storyboardsTitle: "珊瑚敘事節奏",
  storyboardsDescription:
    "拆成 Shell CTA、Tide HUD、Bloom Canvas 三段 storyboard，維持暖潮敘事律動。",
  guidelinesTitle: "貝光 / 潮暈交叉表",
  guidelinesDescription:
    "規範 Mist／Pulse／Signal 比例與 halo 操作，避免暖色失去層次。",
  tokensTitle: "珊瑚漸層庫",
  tokensDescription: "列出 Shell / Tide / Bloom 三組漸層與操作提示。",
  applicationTitle: "珊瑚應用樣板",
  applicationDescription:
    "HUD、敘事卡、監控板皆帶有珊瑚 halo、潮映折射與暖潮提示。",
  buttonLeft: {
    label: "輸出 JSON",
    border: "border-rose-300/60",
    text: "text-rose-500",
    hover: "hover:bg-rose-200/40",
  },
  buttonRight: {
    label: "更新色稿",
    border: "border-orange-300/60",
    text: "text-orange-500",
    hover: "hover:bg-orange-200/40",
  },
  variants: coralVariants,
  storyboards: [
    {
      title: "Shell CTA",
      tone: "貝光 CTA",
      focus: "CTA",
      badge: "text-rose-500",
      description: "CTA 以霧白貝光玻璃與珊瑚 halo 疊合，營造柔亮互動。",
      preview:
        "bg-linear-to-r from-rose-400/25 via-orange-300/10 to-transparent",
      cues: ["描邊 1px", "hover scale 1.03", "陰影偏暖"],
    },
    {
      title: "Tide HUD",
      tone: "潮映訊號",
      focus: "HUD",
      badge: "text-orange-500",
      description: "HUD 線條以 orange→amber 過渡，搭配 10px 潮映節奏。",
      preview:
        "bg-linear-to-r from-orange-400/25 via-amber-300/10 to-transparent",
      cues: ["線寬 0.5px", "節點 75%", "grid 10px"],
    },
    {
      title: "Bloom Canvas",
      tone: "暖潮背景",
      focus: "Background",
      badge: "text-amber-500",
      description: "背景以米白霧度鋪底，角落加入 amber bloom。",
      preview:
        "bg-linear-to-r from-rose-100/80 via-amber-50/60 to-orange-50/40",
      cues: ["亮部 ≥55%", "halo 貼角", "噪點 2%"],
    },
  ],
  guidelineMatrix: [
    {
      principle: "貝光層級",
      mode: "Layer",
      palette: "Shell · Mist/Pulse",
      direction: "Mist 60 / Pulse 25 / Signal 15",
      action: "大面積保持霧白，Pulse 僅進入 CTA 與焦點文案。",
      paletteSwatches: [
        "bg-rose-50",
        "bg-rose-200",
        "bg-orange-300",
        "bg-amber-300",
      ],
      directionSwatches: [
        "bg-linear-to-r from-rose-200/35 to-transparent",
        "bg-linear-to-r from-orange-300/30 to-transparent",
        "bg-linear-to-r from-amber-300/25 to-transparent",
        "bg-linear-to-r from-white to-amber-50",
      ],
    },
    {
      principle: "潮暈權重",
      mode: "Contrast",
      palette: "Tide · Pulse/Signal",
      direction: "Pulse 40 / Signal 20",
      action: "潮暈 beam 控制深度，Signal 只留給提醒節點。",
      paletteSwatches: [
        "bg-rose-100",
        "bg-orange-400",
        "bg-amber-400",
        "bg-rose-400",
      ],
      directionSwatches: [
        "bg-rose-100",
        "bg-linear-to-r from-orange-400 to-orange-300",
        "bg-linear-to-r from-amber-400 to-amber-200",
        "bg-rose-200",
      ],
    },
    {
      principle: "暖潮節拍",
      mode: "Halo",
      palette: "Bloom · Glow",
      direction: "雙層 halo + Bloom 線束",
      action: "外圈 halo blur 18px，內圈線束 0.75px 與 CTA 距 26px。",
      paletteSwatches: [
        "bg-rose-100",
        "bg-rose-300",
        "bg-orange-300",
        "bg-amber-300",
      ],
      directionSwatches: [
        "bg-linear-to-r from-rose-300/35 to-transparent",
        "bg-linear-to-r from-orange-300/30 to-transparent",
        "bg-linear-to-r from-amber-300/25 to-transparent",
        "bg-linear-to-r from-white to-rose-50",
      ],
    },
  ],
  gradientTokens: [
    {
      name: "Shell Sheet",
      usage: "背景",
      token: "token-shell",
      gradient: "bg-linear-to-b from-rose-50 via-orange-50 to-amber-50",
      tips: ["模糊 14px", "噪點 2%"],
    },
    {
      name: "Tide Edge",
      usage: "CTA / Tag",
      token: "token-tide-coral",
      gradient: "bg-linear-to-r from-rose-500 via-orange-400 to-amber-300",
      tips: ["描邊 1px", "hover 加暖光"],
    },
    {
      name: "Bloom Signal",
      usage: "HUD 線條",
      token: "token-bloom",
      gradient: "bg-linear-to-r from-orange-300 via-amber-300 to-rose-300",
      tips: ["線寬 0.75px", "加入 12px blur"],
    },
  ],
  applicationDeck: [
    {
      label: "暖暈 HUD",
      theme: "Shell Grid",
      channel: "Data",
      description: "HUD 保持米霧底並用珊瑚線段提示關鍵數據。",
      preview: "bg-linear-to-br from-rose-200/20 via-white to-amber-50",
      swatches: ["text-rose-500", "text-orange-500", "text-amber-500"],
    },
    {
      label: "潮映敘事卡",
      theme: "Tide Story",
      channel: "Story",
      description: "敘事卡底部鋪潮暈 halo，適合展示暖色攝影。",
      preview: "bg-linear-to-br from-orange-200/20 via-white to-rose-50",
      swatches: ["text-orange-500", "text-rose-500", "text-white"],
    },
    {
      label: "暖潮監控板",
      theme: "Bloom Monitor",
      channel: "Monitor",
      description: "監控板用 amber signal 指出狀態並維持柔霧背景。",
      preview: "bg-linear-to-br from-amber-200/30 via-white to-rose-50",
      swatches: ["text-amber-500", "text-orange-500", "text-rose-500"],
    },
  ],
  swatchLabelMap: {
    "text-rose-500": "霧層",
    "text-orange-500": "脈衝",
    "text-amber-500": "訊號",
    "text-white": "對比",
    "text-rose-400": "裝飾",
    "text-orange-400": "支援",
  },
  variantMap: buildVariantMap(coralVariants),
};

const generateTemplates: GenerateTemplateConfig[] = [
  auroraTemplate,
  forestTemplate,
  magmaTemplate,
  atmosphereTemplate,
  techTemplate,
  cobaltTemplate,
  terracottaTemplate,
  jadeTemplate,
  nocturneTemplate,
  coralTemplate,
  ivoryTemplate,
  sakuraTemplate,
  amberTemplate,
  violetTemplate,
  limeTemplate,
];

export const generateTemplateMap: Record<string, GenerateTemplateConfig> =
  generateTemplates.reduce((acc, template) => {
    acc[template.slug] = template;
    return acc;
  }, {} as Record<string, GenerateTemplateConfig>);

export const listGenerateTemplates = (): GenerateTemplateConfig[] =>
  generateTemplates;

export const getGenerateTemplate = (slug: string): GenerateTemplateConfig =>
  generateTemplateMap[slug] ?? generateTemplates[0]!;

export const getGenerateSidebarPalette = (
  templateSlug: string,
  variantSlug?: string
): SidebarPalette | undefined => {
  const template = generateTemplateMap[templateSlug];
  if (!template) {
    return undefined;
  }
  if (variantSlug && template.variantMap[variantSlug]) {
    return template.variantMap[variantSlug].theme.sidebar;
  }
  return template.variants[0]?.theme.sidebar;
};

export type TemplateSlug = (typeof generateTemplates)[number]["slug"];
