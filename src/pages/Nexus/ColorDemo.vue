<template>
    <div :class="layout.shell">
        <NexusHeroSection :theme="theme" :layout="layout" :content="heroContent" />

        <main :class="layout.main">
            <div :class="[layout.content, 'space-y-10']">
                <!-- Spectrum Index -->
                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Spectrum Index</p>
                            <h2 class="text-2xl font-semibold">霓虹色彩矩陣</h2>
                            <p class="text-sm mt-2" :class="theme.text.muted">核心漸層維持冷暖交錯，搭配中性色 Mist 做支撐，並將功能色標示在 Utility
                                層。</p>
                        </div>
                        <button
                            class="px-4 py-2 text-xs rounded-full border border-indigo-500/40 text-indigo-200 hover:bg-indigo-500/10 transition">
                            匯出 Token
                        </button>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2">
                        <article v-for="group in paletteGroups" :key="group.id"
                            :class="[softPanelClass, 'p-4 space-y-4']">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] uppercase tracking-[0.3em] text-slate-400">{{ group.subtitle
                                        }}</p>
                                    <h3 class="text-lg font-semibold">{{ group.title }}</h3>
                                    <p class="text-xs mt-1" :class="theme.text.muted">{{ group.body }}</p>
                                </div>
                                <span
                                    :class="['w-16 h-16 rounded-2xl border', theme.surfaces.border, group.gradient]"></span>
                            </div>
                            <div class="grid grid-cols-4 gap-2 text-[11px] text-slate-400">
                                <div v-for="tone in group.swatches" :key="tone.label" class="text-center">
                                    <div :class="['h-12 rounded-xl border', theme.surfaces.border, tone.bg]"></div>
                                    <p class="mt-1 font-semibold text-slate-200">{{ tone.label }}</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="token in group.tokens" :key="token"
                                    :class="[chipClass, 'px-3 py-1 text-[10px] tracking-[0.25em] uppercase']">{{ token
                                    }}</span>
                            </div>
                        </article>
                    </div>
                </section>

                <!-- Application Rules -->
                <section class="grid gap-6 lg:grid-cols-2">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Application Rules
                            </p>
                            <h2 class="text-2xl font-semibold">應用節奏</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">遵循美術指引的三段式敘事：霧化背景、霓虹焦點、細線結構。</p>
                        </div>
                        <ul class="space-y-3">
                            <li v-for="rule in foundationRules" :key="rule.title"
                                :class="[softPanelClass, 'p-4 flex items-start gap-3']">
                                <span
                                    class="px-2 py-1 text-[10px] uppercase tracking-[0.3em] rounded-full border border-indigo-500/40 text-indigo-200">{{
                                        rule.badge }}</span>
                                <div>
                                    <p class="text-sm font-semibold">{{ rule.title }}</p>
                                    <p class="text-xs" :class="theme.text.muted">{{ rule.detail }}</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Neutral Ladder</p>
                            <h2 class="text-2xl font-semibold">對比層級</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">深色 Mist 作為基底，白色文字僅用於主標，其他層級採 60-20-20
                                對比分配。</p>
                        </div>
                        <div class="space-y-3">
                            <div v-for="step in contrastStack" :key="step.name" class="space-y-1">
                                <div class="flex items-center justify-between text-xs">
                                    <span>{{ step.name }}</span>
                                    <span class="text-slate-400">{{ step.value }}</span>
                                </div>
                                <div class="h-2 rounded-full bg-slate-900">
                                    <div :class="['h-full rounded-full transition-all', step.bar]"></div>
                                </div>
                            </div>
                        </div>
                        <pre
                            :class="[softPanelClass, 'p-4 text-xs font-mono leading-relaxed whitespace-pre-wrap text-slate-200']">{{ tokenSnippet }}</pre>
                        <ul class="text-xs text-slate-400 space-y-1">
                            <li v-for="beat in applicationBeats" :key="beat">• {{ beat }}</li>
                        </ul>
                    </article>
                </section>

                <!-- Component Lab -->
                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Component Lab</p>
                            <h2 class="text-2xl font-semibold">元件實驗室</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">以按鈕、警示、卡片為核心模組，示範霓虹描邊與霧化面板的搭配方式。</p>
                        </div>
                        <span class="text-xs text-slate-400">更新：2025.11</span>
                    </div>
                    <div class="grid gap-4 lg:grid-cols-2">
                        <article :class="[softPanelClass, 'p-4 space-y-3']">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">按鈕族群</h3>
                                <span class="text-[11px] uppercase tracking-[0.3em] text-slate-500">Buttons</span>
                            </div>
                            <p class="text-xs" :class="theme.text.muted">主行動維持天空到靛藍漸層，次要按鈕使用霧化描邊，保持一致陰影。</p>
                            <div class="flex flex-wrap gap-2">
                                <button v-for="variant in buttonVariants" :key="variant.label" :class="variant.class">
                                    <span v-if="variant.label === 'Live'"
                                        class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
                                    {{ variant.label }}
                                </button>
                            </div>
                        </article>
                        <article :class="[softPanelClass, 'p-4 space-y-3']">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">警示語彙</h3>
                                <span class="text-[11px] uppercase tracking-[0.3em] text-slate-500">Alerts</span>
                            </div>
                            <p class="text-xs" :class="theme.text.muted">警示保持柔光背景並以功能色描邊，確保視覺重量一致。</p>
                            <div class="space-y-2">
                                <div v-for="alert in alertPresets" :key="alert.title"
                                    :class="['flex items-start gap-3 rounded-2xl p-3 border', alert.border, alert.bg]">
                                    <svg class="w-5 h-5" :class="alert.accent" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" stroke-width="2">
                                        <path :d="alert.icon" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div>
                                        <p class="text-sm font-semibold" :class="alert.accent">{{ alert.title }}</p>
                                        <p class="text-xs" :class="theme.text.muted">{{ alert.body }}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="grid gap-4 lg:grid-cols-2">
                        <article :class="[softPanelClass, 'p-4 space-y-3']">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">卡片模組</h3>
                                <span class="text-[11px] uppercase tracking-[0.3em] text-slate-500">Cards</span>
                            </div>
                            <p class="text-xs" :class="theme.text.muted">卡片遵循 20px 內距與 0.5px 描邊，加入漸層光暈即可呼應美術指引。</p>
                            <div class="grid sm:grid-cols-3 gap-3">
                                <article v-for="card in cardStudies" :key="card.title"
                                    :class="[card.border, 'rounded-2xl p-3 space-y-2 bg-slate-900/70 relative']">
                                    <div
                                        :class="['w-10 h-10 rounded-xl flex items-center justify-center text-lg', card.iconBg]">
                                    </div>
                                    <h4 class="text-sm font-semibold">{{ card.title }}</h4>
                                    <p class="text-xs" :class="theme.text.muted">{{ card.body }}</p>
                                </article>
                            </div>
                        </article>
                        <article :class="[softPanelClass, 'p-4 space-y-4']">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-semibold">狀態節奏</h3>
                                <span class="text-[11px] uppercase tracking-[0.3em] text-slate-500">Status</span>
                            </div>
                            <div class="space-y-3">
                                <div v-for="signal in statusSignals" :key="signal.label"
                                    class="flex items-center gap-3">
                                    <span :class="['w-2 h-2 rounded-full shadow', signal.dot]"></span>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium">{{ signal.label }}</p>
                                        <p class="text-xs" :class="theme.text.muted">{{ signal.detail }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div v-for="bar in progressBars" :key="bar.label">
                                    <div class="flex justify-between text-xs mb-1">
                                        <span>{{ bar.label }}</span>
                                        <span class="text-slate-500">{{ bar.value }}</span>
                                    </div>
                                    <div class="h-2 rounded-full bg-slate-900">
                                        <div :class="['h-full rounded-full', bar.bar]"></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <!-- Glow Recipes -->
                <section class="grid gap-6 lg:grid-cols-2">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Glow Recipes</p>
                            <h2 class="text-2xl font-semibold">漸層配方</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">從 Hero 到 CTA 的漸層彼此共用顏色節點，避免隨意新增新色。</p>
                        </div>
                        <div class="space-y-3">
                            <article v-for="recipe in gradientRecipes" :key="recipe.name"
                                :class="[softPanelClass, 'p-4 flex flex-col gap-3 md:flex-row md:items-center']">
                                <span
                                    :class="['w-20 h-20 rounded-2xl border', theme.surfaces.border, recipe.preview]"></span>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold">{{ recipe.name }}</p>
                                    <p class="text-xs" :class="theme.text.muted">{{ recipe.usage }}</p>
                                    <p class="text-[11px] text-slate-500">{{ recipe.stops }}</p>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Shadow Tokens</p>
                            <h2 class="text-2xl font-semibold">陰影語彙</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">統一定義陰影值，讓霧化層與霓虹描邊的對比更加克制。</p>
                        </div>
                        <div class="space-y-3">
                            <div v-for="token in shadowTokens" :key="token.label"
                                :class="[softPanelClass, 'p-4 space-y-1']">
                                <p class="text-sm font-semibold">{{ token.label }}</p>
                                <p class="font-mono text-xs text-slate-400">{{ token.value }}</p>
                                <p class="text-xs" :class="theme.text.muted">{{ token.detail }}</p>
                            </div>
                        </div>
                    </article>
                </section>

                <!-- Interface Blocks -->
                <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Forms</p>
                            <h2 class="text-2xl font-semibold">介面輸入</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">表單控制使用 Mist 背景 + 細線描邊，焦點狀態改以天空與靛藍漸層描邊。</p>
                        </div>
                        <div class="space-y-3">
                            <div v-for="field in formFields" :key="field.label">
                                <label class="block text-xs font-semibold tracking-wide mb-1">{{ field.label }}</label>
                                <template v-if="field.type === 'textarea'">
                                    <textarea :rows="field.rows" :placeholder="field.placeholder"
                                        class="w-full px-3 py-2 text-sm rounded-xl border bg-slate-900 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 transition"></textarea>
                                </template>
                                <template v-else-if="field.type === 'select'">
                                    <select
                                        class="w-full px-3 py-2 text-sm rounded-xl border bg-slate-900 text-slate-100 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition">
                                        <option v-for="option in field.options" :key="option">{{ option }}</option>
                                    </select>
                                </template>
                                <template v-else>
                                    <input :type="field.type" :placeholder="field.placeholder"
                                        class="w-full px-3 py-2 text-sm rounded-xl border bg-slate-900 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 transition" />
                                </template>
                                <p v-if="field.helper" class="text-[11px] mt-1" :class="theme.text.muted">{{
                                    field.helper }}</p>
                            </div>
                        </div>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Lists</p>
                            <h2 class="text-2xl font-semibold">名單與徽章</h2>
                            <p class="text-sm mt-1" :class="theme.text.muted">列表採半透明列，搭配信號徽章呈現狀態。</p>
                        </div>
                        <div class="space-y-2">
                            <div v-for="entry in listEntries" :key="entry.email"
                                class="flex items-center gap-3 p-3 rounded-2xl border border-slate-800 bg-slate-900/60">
                                <div
                                    :class="['w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold', entry.accent]">
                                    {{ entry.initials }}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium truncate">{{ entry.name }}</p>
                                    <p class="text-xs text-slate-500 truncate">{{ entry.email }}</p>
                                </div>
                                <span
                                    :class="[chipClass, 'px-3 py-1 text-[11px] tracking-[0.3em] uppercase']">Active</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 text-xs text-slate-400">
                            <span class="px-3 py-1 rounded-full border border-sky-400/40 text-sky-100">Primary</span>
                            <span
                                class="px-3 py-1 rounded-full border border-indigo-400/40 text-indigo-100">Secondary</span>
                            <span
                                class="px-3 py-1 rounded-full border border-pink-400/40 text-pink-100">Highlight</span>
                            <span
                                class="px-3 py-1 rounded-full border border-emerald-400/40 text-emerald-100">Success</span>
                        </div>
                    </article>
                </section>

                <!-- Typography -->
                <section :class="[basePanelClass, 'p-6 space-y-4']">
                    <div>
                        <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Typography</p>
                        <h2 class="text-2xl font-semibold">排版階層</h2>
                        <p class="text-sm mt-1" :class="theme.text.muted">遵循 8pt baseline，字距與大小與 Art Direction Nexus
                            相互對應。</p>
                    </div>
                    <div class="space-y-4">
                        <article v-for="row in typographyScale" :key="row.label"
                            :class="[softPanelClass, 'p-4 rounded-2xl flex flex-wrap items-center gap-4']">
                            <div class="flex-1 min-w-[200px]">
                                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">{{ row.label }}</p>
                                <p class="text-2xl font-semibold">{{ row.sample }}</p>
                            </div>
                            <div class="text-sm" :class="theme.text.muted">
                                <p>{{ row.detail }}</p>
                                <p class="text-xs text-slate-500">{{ row.meta }}</p>
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
    import { getNexusTheme } from "../../constants/nexusThemes";
    import NexusHeroSection from "../../components/Nexus/NexusHeroSection.vue";
    import {
        colorDemoAlertPresets,
        colorDemoApplicationBeats,
        colorDemoButtonVariants,
        colorDemoCardStudies,
        colorDemoContrastStack,
        colorDemoHeroContent,
        colorDemoFormFields,
        colorDemoListEntries,
        colorDemoPaletteGroups,
        colorDemoProgressBars,
        colorDemoGradientRecipes,
        colorDemoShadowTokens,
        colorDemoStatusSignals,
        colorDemoTokenSnippet,
        colorDemoTypographyScale,
        colorDemoFoundationRules,
    } from "../../constants/referenceColorDemo";

    const theme = getNexusTheme("color-demo");
    const layout = createArtNexusLayout(theme.layout);

    const basePanelClass = `rounded-3xl border ${theme.surfaces.border} ${theme.surfaces.panel}`;
    const softPanelClass = `rounded-2xl border ${theme.surfaces.border} ${theme.surfaces.softPanel}`;
    const chipClass = `${theme.tokens.chip} ${theme.tokens.chipBorder} ${theme.tokens.chipText}`;
    const heroContent = colorDemoHeroContent;
    const paletteGroups = colorDemoPaletteGroups;
    const foundationRules = colorDemoFoundationRules;
    const applicationBeats = colorDemoApplicationBeats;
    const contrastStack = colorDemoContrastStack;
    const tokenSnippet = colorDemoTokenSnippet;
    const buttonVariants = colorDemoButtonVariants;
    const alertPresets = colorDemoAlertPresets;
    const cardStudies = colorDemoCardStudies;
    const statusSignals = colorDemoStatusSignals;
    const progressBars = colorDemoProgressBars;
    const gradientRecipes = colorDemoGradientRecipes;
    const shadowTokens = colorDemoShadowTokens;
    const formFields = colorDemoFormFields;
    const listEntries = colorDemoListEntries;
    const typographyScale = colorDemoTypographyScale;
</script>
