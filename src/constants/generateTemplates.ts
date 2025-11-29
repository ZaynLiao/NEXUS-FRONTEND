import type { NexusTheme, SidebarPalette } from "./nexusThemes";
import type { NexusHeroContent } from "../types/nexusHero";

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

export type TemplateVariantConfig = {
  slug: string;
  label: string;
  summary: string;
  accent: string;
  hero: NexusHeroContent;
  theme: NexusTheme;
  stageBackground: string;
  card: TemplateVariantCard;
};

export type TemplateStoryboard = {
  title: string;
  tone: string;
  focus: string;
  badge: string;
  description: string;
  preview: string;
  cues: string[];
};

export type TemplateGuideline = {
  principle: string;
  mode: string;
  palette: string;
  direction: string;
  action: string;
  paletteSwatches: string[];
  directionSwatches: string[];
};

export type TemplateGradientToken = {
  name: string;
  usage: string;
  token: string;
  gradient: string;
  tips: string[];
};

export type TemplateApplicationCard = {
  label: string;
  theme: string;
  channel: string;
  description: string;
  preview: string;
  swatches: string[];
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
  buttonLeft: { label: string; border: string; text: string; hover: string };
  buttonRight: { label: string; border: string; text: string; hover: string };
  variants: TemplateVariantConfig[];
  storyboards: TemplateStoryboard[];
  guidelineMatrix: TemplateGuideline[];
  gradientTokens: TemplateGradientToken[];
  applicationDeck: TemplateApplicationCard[];
  swatchLabelMap: Record<string, string>;
  variantMap: Record<string, TemplateVariantConfig>;
};

const buildVariantMap = (variants: TemplateVariantConfig[]) =>
  variants.reduce((acc, variant) => {
    acc[variant.slug] = variant;
    return acc;
  }, {} as Record<string, TemplateVariantConfig>);

const auroraVariants: TemplateVariantConfig[] = [
  {
    slug: "tide-prism",
    label: "Tide Prism",
    summary: "sky 霧層 x cyan pulse",
    accent: "text-sky-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Aurora Flux Deck · Tide Prism",
      subtitle:
        "冷霧 sky 霧層搭配 cyan pulse 比例，維持 Mist/Pulse 的沉靜節奏。",
      chips: ["Polar Ready", "Mist Balance", "Signal Safe"],
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
      name: "Tide Prism",
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
    label: "Glacier Line",
    summary: "indigo beam x deep ice",
    accent: "text-blue-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Aurora Flux Deck · Glacier Line",
      subtitle: "深冰 indigo beam 拉出 HUD 軌跡，提升資料層的冷冽亮度。",
      chips: ["Signal Trace", "Beam Ready", "Indigo Grid"],
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
      name: "Glacier Line",
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
    label: "Polar Signal",
    summary: "cyan ray x ice burst",
    accent: "text-cyan-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Aurora Flux Deck · Polar Signal",
      subtitle: "高亮 cyan ray 聚焦警示層，讓 CTA 與指示燈同步閃耀。",
      chips: ["Signal Beam", "Alert Safe", "Ice Orbit"],
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
      name: "Polar Signal",
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
    label: "Moss Weave",
    summary: "emerald mist x grid",
    accent: "text-emerald-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Canopy Forge · Moss Weave",
      subtitle: "以 emerald 霧層鋪底，搭配 lime grid 組成連續的森林敘事。",
      chips: ["Canopy Ready", "Mist Cushion", "Eco Grid"],
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
      name: "Moss Weave",
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
    label: "Canopy Signal",
    summary: "teal pulse x canopy beam",
    accent: "text-teal-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Canopy Forge · Canopy Signal",
      subtitle: "teal pulse 線條沿樹冠延伸，HUD 指示維持自然節奏。",
      chips: ["Signal Teal", "Vine Grid", "Calm Alert"],
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
      name: "Canopy Signal",
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
    label: "Grove Flare",
    summary: "lime glow x alert",
    accent: "text-lime-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Canopy Forge · Grove Flare",
      subtitle: "lime glow 提醒互動節點，適合加入 eco 儀表板。",
      chips: ["Glow Signal", "Alert Leaf", "Lime Orbit"],
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
      name: "Grove Flare",
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
    label: "Ember Vein",
    summary: "crimson mist x glow",
    accent: "text-rose-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Magma Array · Ember Vein",
      subtitle: "rose mist 與 amber glow 疊帶，打造岩漿式 CTA 敘事。",
      chips: ["Alert Ready", "Glow Stack", "Heat Ridge"],
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
      name: "Ember Vein",
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
    label: "Ash Core",
    summary: "crimson core x basalt",
    accent: "text-orange-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Magma Array · Ash Core",
      subtitle: "暗岩底色襯托 orange core，適合監測儀表板。",
      chips: ["Core Stable", "Basalt Grid", "Pulse Heat"],
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
      name: "Ash Core",
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
    label: "Lava Signal",
    summary: "amber beam x alert",
    accent: "text-amber-200",
    hero: {
      eyebrow: "Generative Template",
      title: "Magma Array · Lava Signal",
      subtitle: "amber beam 滑過 CTA 與 HUD，維持高對比警示流。",
      chips: ["Signal Beam", "CTA Glow", "Alert Chain"],
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
      name: "Lava Signal",
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

const auroraTemplate: GenerateTemplateConfig = {
  slug: "aurora",
  name: "Aurora Flux Deck",
  navLabel: "極光生成模板",
  navIcon: "M12 3v18m0 0l4-4m-4 4l-4-4M3 12h18m0 0l-4-4m4 4l-4 4",
  switcherTitle: "Aurora Palette Switch",
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
  name: "Canopy Forge",
  navLabel: "森林生成模板",
  navIcon: "M4 17l4-6 4 6 4-6 4 6",
  switcherTitle: "Canopy Palette Switch",
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
  name: "Magma Array",
  navLabel: "岩漿生成模板",
  navIcon: "M5 3l7 7 7-7M5 21l7-7 7 7",
  switcherTitle: "Magma Palette Switch",
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

const generateTemplates: GenerateTemplateConfig[] = [
  auroraTemplate,
  forestTemplate,
  magmaTemplate,
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
