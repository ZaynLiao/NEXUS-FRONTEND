<template>
    <div :class="layout.shell">
        <NexusHeroSection :theme="templateTheme" :layout="layout" :content="heroContent" />

        <main :class="layout.main">
            <div :class="[layout.content, 'space-y-10']">
                <!-- color theme board -->
                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                Color Demo x Art Direction
                            </p>
                            <h2 class="text-2xl font-semibold">多重色稿面板</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                依照配色範例的 Flux/Prism 層次加上美術指引的光暈節奏，建立可即刻套版的色彩骨架。
                            </p>
                        </div>
                        <span class="text-xs text-slate-400">Theme Slots · {{ colorThemes.length }}</span>
                    </div>
                    <div class="grid gap-4 md:grid-cols-3">
                        <article v-for="theme in colorThemes" :key="theme.name"
                            :class="[softPanelClass, 'p-4 rounded-2xl space-y-4 border border-white/10']">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] uppercase tracking-[0.35em]"
                                        :class="templateTheme.hero.label">
                                        {{ theme.origin }}
                                    </p>
                                    <h3 class="text-lg font-semibold">{{ theme.name }}</h3>
                                </div>
                                <span class="text-[11px] px-2 py-1 rounded-full border border-white/10">
                                    {{ theme.energy }}
                                </span>
                            </div>
                            <p class="text-sm" :class="templateTheme.hero.body">{{ theme.description }}</p>
                            <div :class="['h-16 rounded-2xl border', templateTheme.surfaces.border, theme.gradient]">
                            </div>
                            <div class="flex items-center justify-between text-[11px] text-slate-400">
                                <span v-for="stat in theme.stats" :key="stat.label">
                                    {{ stat.label }} · {{ stat.value }}
                                </span>
                            </div>
                            <div class="grid grid-cols-4 gap-2">
                                <div v-for="tone in theme.swatches" :key="tone"
                                    class="h-10 w-full rounded-xl border border-white/10" :class="tone">
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <!-- storyboard variations -->
                <section :class="[basePanelClass, 'p-6 space-y-5']">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">Art
                                Direction Beats</p>
                            <h2 class="text-2xl font-semibold">情境指引與驚喜</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                將光暈、霧層、粒子依據指引拆成三段 storyboard，方便替換不同色票仍維持敘事節奏。
                            </p>
                        </div>
                        <span class="text-xs text-slate-400">Storyboard {{ storyboards.length }} 套</span>
                    </div>
                    <div class="grid gap-4 lg:grid-cols-3">
                        <article v-for="scene in storyboards" :key="scene.title"
                            :class="[softPanelClass, 'p-4 rounded-2xl space-y-3 border border-white/10']">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] uppercase tracking-[0.25em]"
                                        :class="templateTheme.hero.label">
                                        {{ scene.tone }}
                                    </p>
                                    <h3 class="text-lg font-semibold">{{ scene.title }}</h3>
                                </div>
                                <span
                                    :class="['text-[11px] px-2 py-1 rounded-full border border-white/10', scene.badge]">
                                    {{ scene.focus }}
                                </span>
                            </div>
                            <p class="text-sm" :class="templateTheme.hero.body">{{ scene.description }}</p>
                            <div :class="['h-24 rounded-2xl border border-white/10', scene.preview]"></div>
                            <ul class="text-xs text-slate-400 space-y-1">
                                <li v-for="cue in scene.cues" :key="cue">• {{ cue }}</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <!-- guidelines + tokens -->
                <section class="grid gap-6 lg:grid-cols-2">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">Guideline
                                Matrix</p>
                            <h2 class="text-2xl font-semibold">配色 / 美術交叉表</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                針對 Color Demo 的層次與 Art Direction 的視覺建議，列出即插即用的應用守則。
                            </p>
                        </div>
                        <div class="space-y-3 text-sm">
                            <article v-for="guide in guidelineMatrix" :key="guide.principle"
                                :class="[softPanelClass, 'p-4 rounded-2xl border border-white/10 space-y-2']">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-base font-semibold">{{ guide.principle }}</h3>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-slate-400">{{ guide.mode
                                        }}</span>
                                </div>
                                <p class="text-[13px]" :class="templateTheme.hero.body">Color Demo · {{ guide.palette }}
                                </p>
                                <div class="space-y-1">
                                    <p class="text-[10px] uppercase text-slate-500">Palette Blocks</p>
                                    <div class="grid grid-cols-4 gap-2">
                                        <div v-for="swatch in guide.paletteSwatches" :key="swatch"
                                            :class="['h-8 rounded-lg border border-white/10', swatch]"></div>
                                    </div>
                                </div>
                                <p class="text-[13px] text-slate-400">Art Direction · {{ guide.direction }}</p>
                                <div class="space-y-1">
                                    <p class="text-[10px] uppercase text-slate-500">Direction Blocks</p>
                                    <div class="grid grid-cols-4 gap-2">
                                        <div v-for="swatch in guide.directionSwatches" :key="swatch"
                                            :class="['h-8 rounded-lg border border-white/10', swatch]"></div>
                                    </div>
                                </div>
                                <div class="text-xs text-slate-400">→ {{ guide.action }}</div>
                            </article>
                        </div>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                    Token Recipes</p>
                                <h2 class="text-2xl font-semibold">漸層 / 線條庫</h2>
                            </div>
                            <button
                                class="px-4 py-2 text-xs rounded-full border border-white/20 text-white/80 hover:bg-white/5">
                                複製配置
                            </button>
                        </div>
                        <div class="space-y-3">
                            <article v-for="token in gradientTokens" :key="token.name"
                                :class="[softPanelClass, 'p-4 rounded-2xl border border-white/10 space-y-3']">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-xs text-slate-400">{{ token.usage }}</p>
                                        <h3 class="text-base font-semibold">{{ token.name }}</h3>
                                    </div>
                                    <span class="text-[11px] uppercase tracking-[0.3em] text-slate-400">{{ token.token
                                        }}</span>
                                </div>
                                <div :class="['h-10 rounded-xl border border-white/10', token.gradient]"></div>
                                <ul class="text-xs text-slate-400 space-y-1">
                                    <li v-for="tip in token.tips" :key="tip">• {{ tip }}</li>
                                </ul>
                            </article>
                        </div>
                    </article>
                </section>

                <!-- application deck -->
                <section :class="[basePanelClass, 'p-6 space-y-4']">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">Application
                                Deck</p>
                            <h2 class="text-2xl font-semibold">色彩變奏樣板</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                透過 HUD、敘事卡、儀表板三種場景展示每一組主題，複製這些排列即可迅速產生驚喜感。
                            </p>
                        </div>
                        <div class="flex gap-2 text-xs">
                            <button
                                class="rounded-full border border-amber-300/60 px-4 py-2 text-amber-100 hover:bg-amber-300/10 transition">
                                輸出 JSON
                            </button>
                            <button
                                class="rounded-full border border-cyan-300/60 px-4 py-2 text-cyan-100 hover:bg-cyan-300/10 transition">
                                更新色稿
                            </button>
                        </div>
                    </div>
                    <div class="grid gap-4 lg:grid-cols-3">
                        <article v-for="card in applicationDeck" :key="card.label"
                            :class="[softPanelClass, 'p-4 rounded-2xl border border-white/10 space-y-3']">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] uppercase tracking-[0.35em]"
                                        :class="templateTheme.hero.label">
                                        {{ card.theme }}
                                    </p>
                                    <h3 class="text-lg font-semibold">{{ card.label }}</h3>
                                </div>
                                <span class="text-xs text-slate-400">{{ card.channel }}</span>
                            </div>
                            <div :class="['h-24 rounded-2xl border border-white/10', card.preview]"></div>
                            <p class="text-sm" :class="templateTheme.hero.body">{{ card.description }}</p>
                            <div class="flex flex-wrap gap-2 text-[11px] text-slate-400">
                                <span v-for="swatch in card.swatches" :key="swatch"
                                    :class="['px-3 py-1 rounded-full border border-white/10 bg-slate-900/60', swatch]">
                                    {{ swatchLabelMap[swatch] || 'tone' }}
                                </span>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
    import { createArtNexusLayout } from "../../constants/artNexusLayout";
    import type { NexusTheme } from "../../constants/nexusThemes";
    import type { NexusHeroContent } from "../../types/nexusHero";
    import NexusHeroSection from "../../components/Nexus/NexusHeroSection.vue";

    const templateTheme: NexusTheme = {
        slug: "prism-template",
        role: "artifact",
        layout: {
            shell: "bg-slate-950",
            text: "text-slate-100",
            border: "border-white/10",
        },
        hero: {
            surface: "bg-slate-950/80",
            label: "text-lime-200",
            body: "text-slate-300",
            gradientText: "bg-linear-to-r from-lime-200 via-amber-300 to-cyan-300",
            gridOverlay:
                "bg-linear-to-br from-lime-200/25 via-transparent to-cyan-300/25 opacity-50 mix-blend-soft-light",
            glowPrimary: "bg-amber-300/30",
            glowSecondary: "bg-cyan-400/25",
        },
        surfaces: {
            panel: "bg-slate-950/70",
            softPanel: "bg-slate-950/60",
            border: "border-white/10",
        },
        text: {
            section: "text-lime-200",
            muted: "text-slate-400",
        },
        badges: {
            base: "bg-slate-900/60",
            border: "border-amber-200/40",
            text: "text-amber-100",
        },
        buttons: {
            primary: "bg-linear-to-r from-amber-300 to-cyan-300 text-slate-950 font-semibold rounded-full",
            secondary: "border border-white/30 text-slate-100 rounded-full hover:bg-white/5",
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
            shell: "bg-slate-950 text-slate-100 border-white/10",
            headerBorder: "border-white/10",
            subtitle: "text-slate-400",
            titleGradient: "bg-linear-to-r from-lime-200 via-amber-300 to-cyan-300",
            sectionButton: "bg-slate-900/70 border border-white/10 text-slate-400 hover:border-lime-300 hover:text-white",
            sectionTitle: "text-lime-200",
            sectionSubtitle: "text-slate-500",
            listBorder: "border-lime-300/30",
            linkIdle: "text-slate-300 border-white/10",
            linkHover: "hover:text-white hover:border-amber-300 hover:bg-amber-300/10",
            linkActive: "bg-amber-300/15 border-amber-200 text-white",
            iconIdle: "text-slate-500",
            iconActive: "text-lime-200",
            footerDot: "bg-amber-300 ring-2 ring-amber-200/40",
            footerText: "text-slate-400",
        },
    };

    const layout = createArtNexusLayout({
        shell: templateTheme.layout.shell,
        text: templateTheme.layout.text,
        border: templateTheme.layout.border,
    });

    const heroContent: NexusHeroContent = {
        eyebrow: "Generative Template",
        title: "Prism Spectrum Deck",
        subtitle:
            "依照配色範例的 Mist/Pulse/Signal 層次與美術指引的光暈、噪點節奏打造，可瞬間替換任意色票並保持敘事驚喜。",
        chips: ["Color Demo Ready", "Art Direction Safe", "Instant Recolor"],
        stats: [
            { label: "Theme Slots", value: "03", detail: "Flux · Obsidian · Solar" },
            { label: "Storyboard", value: "03", detail: "CTA · HUD · Mist" },
            { label: "Token Recipes", value: "03", detail: "Mist / Pulse / Signal" },
            { label: "Deploy Time", value: "<1m", detail: "替換色票" },
        ],
    };

    const colorThemes = [
        {
            name: "Flux Bloom",
            origin: "Color Demo",
            energy: "Mist / Pulse",
            description: "Flux 霧層與暖脈衝交錯，搭配 Art Direction 建議的雙層光暈。",
            gradient: "bg-linear-to-r from-cyan-300 via-emerald-300 to-amber-200",
            stats: [
                { label: "Mist", value: "30%" },
                { label: "Pulse", value: "40%" },
                { label: "Signal", value: "30%" },
            ],
            swatches: ["bg-slate-950", "bg-emerald-500", "bg-cyan-300", "bg-amber-200"],
        },
        {
            name: "Obsidian Bloom",
            origin: "Color Demo",
            energy: "Pulse / Signal",
            description: "以 Prism preset 的高對比規則為主體，透過紫黑基底烘托亮色訊號。",
            gradient: "bg-linear-to-r from-indigo-500 via-violet-400 to-rose-400",
            stats: [
                { label: "Mist", value: "20%" },
                { label: "Pulse", value: "35%" },
                { label: "Signal", value: "45%" },
            ],
            swatches: ["bg-slate-950", "bg-indigo-700", "bg-violet-400", "bg-rose-400"],
        },
        {
            name: "Solar Mesh",
            origin: "Art Direction",
            energy: "Glow / Signal",
            description: "遵循美術指引的 halo + grid 結構，加入砂質雜訊與橘色指示。",
            gradient: "bg-linear-to-r from-amber-300 via-orange-400 to-lime-200",
            stats: [
                { label: "Mist", value: "25%" },
                { label: "Pulse", value: "25%" },
                { label: "Signal", value: "50%" },
            ],
            swatches: ["bg-slate-900", "bg-amber-300", "bg-orange-400", "bg-lime-200"],
        },
    ];

    const storyboards = [
        {
            title: "Halo Lab",
            tone: "Warm Narrative",
            focus: "CTA",
            badge: "text-amber-200",
            description: "雙層光暈讓 CTA 卡片像實驗室儀器，適合套用 Pulse 飽和色。",
            preview: "bg-linear-to-r from-amber-300/20 via-rose-300/10 to-transparent",
            cues: ["CTA 使用透明描邊", "霧層噪點 < 10%", "字體維持 12px grid"],
        },
        {
            title: "Signal Stack",
            tone: "Cool Relay",
            focus: "HUD",
            badge: "text-cyan-200",
            description: "冷色訊號線條搭配 0.5px 線框，對齊 Color Demo 的 Signal 節拍。",
            preview: "bg-linear-to-r from-cyan-400/20 via-sky-400/10 to-transparent",
            cues: ["描邊透明度 40%", "指示燈採用 pulse 動畫", "色塊遵循 8px 間距"],
        },
        {
            title: "Prism Drift",
            tone: "Neutral Mist",
            focus: "Background",
            badge: "text-lime-200",
            description: "霧層 + 垂直束光，保留中性底色好套任何色主題。",
            preview: "bg-linear-to-r from-slate-900/90 via-slate-900/60 to-slate-900/40",
            cues: ["保留 60% 以上深色", "柔化粒子", "亮色集中在角落"],
        },
    ];

    const guidelineMatrix = [
        {
            principle: "雙軸漸層",
            mode: "Layer",
            palette: "Flux · Mist/Pulse",
            direction: "Hero 使用 2 條 45° 漸層 + 1 條 radial",
            action: "背景霧層使用 Mist，文字與 CTA 用 Pulse 線性漸層。",
            paletteSwatches: ["bg-slate-950", "bg-emerald-500", "bg-emerald-300", "bg-amber-300"],
            directionSwatches: [
                "bg-linear-to-r from-emerald-300 to-transparent",
                "bg-linear-to-r from-amber-200 to-transparent",
                "bg-linear-to-r from-cyan-200 to-transparent",
                "bg-linear-to-r from-slate-900 via-slate-900/70 to-transparent",
            ],
        },
        {
            principle: "對比節奏",
            mode: "Contrast",
            palette: "Prism · Pulse/Signal",
            direction: "Art Direction 建議 60/30/10 比例",
            action: "面板 60%, CTA 30%, Icon/Chip 10% 亮色，確保驚喜。",
            paletteSwatches: ["bg-slate-950", "bg-slate-900", "bg-rose-400", "bg-cyan-300"],
            directionSwatches: [
                "bg-slate-900",
                "bg-linear-to-r from-rose-400 to-rose-300",
                "bg-linear-to-r from-cyan-300 to-cyan-200",
                "bg-slate-800",
            ],
        },
        {
            principle: "光暈疊帶",
            mode: "Halo",
            palette: "Flux · Mist",
            direction: "外圈軟光, 內圈 Hard Light",
            action: "光暈半徑差異 40px, 中心對準 hero 圖層。",
            paletteSwatches: ["bg-slate-950", "bg-slate-900", "bg-cyan-200", "bg-white/10"],
            directionSwatches: [
                "bg-linear-to-r from-cyan-300/40 to-transparent",
                "bg-linear-to-r from-white/40 to-transparent",
                "bg-linear-to-r from-emerald-300/30 to-transparent",
                "bg-linear-to-r from-slate-900 to-slate-950",
            ],
        },
    ];

    const gradientTokens = [
        {
            name: "Mist Base",
            usage: "背景",
            token: "token-mist",
            gradient: "bg-linear-to-b from-slate-950 via-slate-900 to-slate-900",
            tips: ["套入 45% 不透明度", "允許加入 4% noise"],
        },
        {
            name: "Pulse Ribbon",
            usage: "CTA / Tag",
            token: "token-pulse",
            gradient: "bg-linear-to-r from-amber-300 via-rose-400 to-orange-400",
            tips: ["適合描邊 1px 白", "hover 時加入 scale 1.02"],
        },
        {
            name: "Signal Beam",
            usage: "HUD 線條",
            token: "token-signal",
            gradient: "bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400",
            tips: ["保留 0.5px 線條", "加上 16px blur"],
        },
    ];

    const applicationDeck = [
        {
            label: "Workspace HUD",
            theme: "Flux Bloom",
            channel: "Data",
            description: "HUD 依層級帶入 Mist/Pulse 比例，快速重現 Flux 彩度。",
            preview: "bg-linear-to-br from-cyan-400/20 via-slate-900 to-slate-950",
            swatches: ["text-cyan-200", "text-emerald-200", "text-slate-400"],
        },
        {
            label: "Narrative Card",
            theme: "Solar Mesh",
            channel: "Story",
            description: "敘事卡以 halo + grid 顯示 Art Direction 建議的驚喜亮點。",
            preview: "bg-linear-to-br from-amber-300/30 via-slate-900 to-slate-950",
            swatches: ["text-amber-200", "text-lime-200", "text-white"],
        },
        {
            label: "Signal Dashboard",
            theme: "Obsidian Bloom",
            channel: "Monitor",
            description: "高對比黑底儀表板，凸顯色彩主題的變奏幅度。",
            preview: "bg-linear-to-br from-indigo-700/60 via-slate-950 to-slate-950",
            swatches: ["text-indigo-300", "text-rose-300", "text-slate-300"],
        },
    ];

    const swatchLabelMap: Record<string, string> = {
        "text-cyan-200": "Signal",
        "text-emerald-200": "Mist",
        "text-slate-400": "Base",
        "text-amber-200": "Pulse",
        "text-lime-200": "Glow",
        "text-white": "Contrast",
        "text-indigo-300": "Depth",
        "text-rose-300": "Accent",
        "text-slate-300": "Support",
    };

    const basePanelClass = `rounded-3xl border ${templateTheme.surfaces.border} ${templateTheme.surfaces.panel}`;
    const softPanelClass = `rounded-2xl ${templateTheme.surfaces.border} ${templateTheme.surfaces.softPanel}`;
</script>
