import type { ArtNexusPalette } from "./artNexusLayout";

export type SidebarPalette = {
  shell: string;
  headerBorder: string;
  subtitle: string;
  titleGradient: string;
  sectionButton: string;
  sectionTitle: string;
  sectionSubtitle: string;
  listBorder: string;
  linkIdle: string;
  linkHover: string;
  linkActive: string;
  iconIdle: string;
  iconActive: string;
  footerDot: string;
  footerText: string;
};

export type NexusThemeRole = "reference" | "artifact";

export type NexusTheme = {
  slug: string;
  role: NexusThemeRole;
  layout: ArtNexusPalette;
  hero: {
    surface: string;
    label: string;
    body: string;
    gradientText: string;
    gridOverlay: string;
    glowPrimary: string;
    glowSecondary: string;
  };
  surfaces: {
    panel: string;
    softPanel: string;
    border: string;
  };
  text: {
    section: string;
    muted: string;
  };
  badges: {
    base: string;
    border: string;
    text: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
  tokens: {
    chip: string;
    chipBorder: string;
    chipText: string;
    statCard: string;
    statValue: string;
    statLabel: string;
  };
  sidebar: SidebarPalette;
};

const colorDemoSidebar: SidebarPalette = {
  shell: "bg-slate-950 text-slate-100 border-slate-900",
  headerBorder: "border-slate-800",
  subtitle: "text-slate-400",
  titleGradient: "bg-linear-to-r from-indigo-300 via-indigo-400 to-indigo-500",
  sectionButton:
    "bg-slate-900/70 border border-slate-800 text-slate-400 hover:border-indigo-400 hover:text-white",
  sectionTitle: "text-indigo-200",
  sectionSubtitle: "text-slate-500",
  listBorder: "border-indigo-900/40",
  linkIdle: "text-slate-300 border-slate-800",
  linkHover: "hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10",
  linkActive: "bg-indigo-500/20 border-indigo-400 text-white",
  iconIdle: "text-slate-500",
  iconActive: "text-indigo-300",
  footerDot: "bg-indigo-400 ring-2 ring-indigo-300/40",
  footerText: "text-slate-400",
};

const artDirectionSidebar: SidebarPalette = {
  shell: "bg-slate-950 text-slate-100 border-slate-900",
  headerBorder: "border-slate-800",
  subtitle: "text-slate-400",
  titleGradient:
    "bg-linear-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-600",
  sectionButton:
    "bg-slate-900/70 border border-slate-800 text-slate-400 hover:border-fuchsia-400 hover:text-white",
  sectionTitle: "text-fuchsia-200",
  sectionSubtitle: "text-slate-500",
  listBorder: "border-fuchsia-900/40",
  linkIdle: "text-slate-300 border-slate-800",
  linkHover:
    "hover:text-white hover:border-fuchsia-400 hover:bg-fuchsia-500/10",
  linkActive: "bg-fuchsia-500/20 border-fuchsia-400 text-white",
  iconIdle: "text-slate-500",
  iconActive: "text-fuchsia-300",
  footerDot: "bg-fuchsia-400 ring-2 ring-fuchsia-300/40",
  footerText: "text-slate-400",
};

const generateSidebar: SidebarPalette = {
  shell: "bg-slate-950 text-slate-100 border-emerald-400/30",
  headerBorder: "border-emerald-400/30",
  subtitle: "text-slate-400",
  titleGradient: "bg-linear-to-r from-lime-200 via-emerald-300 to-cyan-300",
  sectionButton:
    "bg-slate-900/70 border border-emerald-400/40 text-slate-400 hover:border-cyan-300 hover:text-white",
  sectionTitle: "text-emerald-200",
  sectionSubtitle: "text-slate-500",
  listBorder: "border-emerald-500/30",
  linkIdle: "text-slate-300 border-emerald-400/20",
  linkHover:
    "hover:text-white hover:border-emerald-300 hover:bg-emerald-300/10",
  linkActive: "bg-emerald-300/15 border-emerald-200 text-white",
  iconIdle: "text-slate-500",
  iconActive: "text-emerald-300",
  footerDot: "bg-emerald-300 ring-2 ring-emerald-200/40",
  footerText: "text-slate-400",
};

const THEME_SLUGS = ["color-demo", "art-direction", "generate"] as const;

export type NexusThemeSlug = (typeof THEME_SLUGS)[number];

const themeRegistry: Record<NexusThemeSlug, NexusTheme> = {
  "color-demo": {
    slug: "color-demo",
    role: "reference",
    layout: {
      shell: "bg-slate-950",
      text: "text-slate-100",
      border: "border-slate-800",
    },
    hero: {
      surface: "bg-slate-900",
      label: "text-slate-400",
      body: "text-slate-400",
      gradientText:
        "bg-linear-to-r from-indigo-300 via-indigo-400 to-indigo-600",
      gridOverlay:
        "bg-linear-to-br from-indigo-200/20 via-transparent to-indigo-500/20 opacity-40 mix-blend-soft-light",
      glowPrimary: "bg-indigo-500/40",
      glowSecondary: "bg-sky-400/30",
    },
    surfaces: {
      panel: "bg-slate-900/80",
      softPanel: "bg-slate-950/80",
      border: "border-slate-800",
    },
    text: {
      section: "text-indigo-300",
      muted: "text-slate-400",
    },
    badges: {
      base: "bg-slate-900/70",
      border: "border-slate-800",
      text: "text-slate-300",
    },
    buttons: {
      primary:
        "bg-linear-to-r from-indigo-400 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform",
      secondary:
        "bg-slate-900/70 text-indigo-100 font-medium rounded-full border border-indigo-500/40 hover:bg-slate-900",
    },
    tokens: {
      chip: "bg-slate-900/70",
      chipBorder: "border border-slate-800",
      chipText: "text-slate-200",
      statCard: "rounded-2xl border border-slate-800 bg-slate-900/70",
      statValue: "text-white",
      statLabel: "text-slate-400",
    },
    sidebar: colorDemoSidebar,
  },
  "art-direction": {
    slug: "art-direction",
    role: "reference",
    layout: {
      shell: "bg-slate-950",
      text: "text-slate-100",
      border: "border-slate-900",
    },
    hero: {
      surface: "bg-slate-900/80",
      label: "text-slate-500",
      body: "text-slate-400",
      gradientText:
        "bg-linear-to-r from-fuchsia-200 via-fuchsia-400 to-fuchsia-600",
      gridOverlay:
        "bg-linear-to-br from-fuchsia-200/25 via-transparent to-fuchsia-500/25 opacity-40 mix-blend-soft-light",
      glowPrimary: "bg-fuchsia-500/35",
      glowSecondary: "bg-violet-500/25",
    },
    surfaces: {
      panel: "bg-slate-900/60",
      softPanel: "bg-slate-900/70",
      border: "border-slate-900",
    },
    text: {
      section: "text-fuchsia-300",
      muted: "text-slate-400",
    },
    badges: {
      base: "bg-slate-900/60",
      border: "border-fuchsia-500/40",
      text: "text-slate-300",
    },
    buttons: {
      primary:
        "border border-fuchsia-400/60 text-fuchsia-200 hover:bg-fuchsia-400/10",
      secondary:
        "border border-slate-800 text-slate-300 hover:text-fuchsia-300 hover:border-fuchsia-300",
    },
    tokens: {
      chip: "bg-slate-900/60",
      chipBorder: "border border-fuchsia-500/30",
      chipText: "text-fuchsia-100",
      statCard:
        "rounded-2xl border border-fuchsia-500/30 bg-slate-900/60 shadow-2xl ring-1 ring-fuchsia-500/20",
      statValue: "text-white",
      statLabel: "text-slate-400",
    },
    sidebar: artDirectionSidebar,
  },
  generate: {
    slug: "generate",
    role: "reference",
    layout: {
      shell: "bg-slate-950",
      text: "text-slate-100",
      border: "border-emerald-400/40",
    },
    hero: {
      surface: "bg-slate-950/80",
      label: "text-emerald-200",
      body: "text-slate-300",
      gradientText: "bg-linear-to-r from-lime-200 via-emerald-300 to-cyan-300",
      gridOverlay:
        "bg-linear-to-br from-emerald-200/25 via-transparent to-cyan-300/25 opacity-50 mix-blend-soft-light",
      glowPrimary: "bg-emerald-400/30",
      glowSecondary: "bg-cyan-400/25",
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
      border: "border-emerald-400/30",
      text: "text-emerald-100",
    },
    buttons: {
      primary:
        "bg-linear-to-r from-emerald-300 to-cyan-300 text-slate-950 font-semibold rounded-full hover:shadow-2xl",
      secondary:
        "border border-emerald-400/40 text-emerald-100 rounded-full hover:bg-emerald-300/10",
    },
    tokens: {
      chip: "bg-slate-900/60",
      chipBorder: "border border-emerald-400/30",
      chipText: "text-emerald-100",
      statCard: "rounded-2xl border border-emerald-400/30 bg-slate-950/60",
      statValue: "text-white",
      statLabel: "text-slate-400",
    },
    sidebar: generateSidebar,
  },
};

export const getNexusTheme = (slug: string): NexusTheme =>
  themeRegistry[slug as NexusThemeSlug] ?? themeRegistry["color-demo"];

export const getSidebarPalette = (slug: string): SidebarPalette =>
  getNexusTheme(slug).sidebar;

export const listThemes = (): NexusTheme[] => Object.values(themeRegistry);

export const referenceThemeSlugs = THEME_SLUGS.filter(
  (key) => themeRegistry[key].role === "reference"
);
