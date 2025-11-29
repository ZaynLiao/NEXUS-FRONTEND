<template>
    <div :class="layout.shell">
        <NexusHeroSection :theme="theme" :layout="layout" :content="heroContent" />

        <main :class="layout.main">
            <div :class="[layout.content, 'space-y-10']">
                <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
                    <article :class="[basePanelClass, 'p-6 space-y-6']">
                        <div class="flex items-center justify-between gap-4 flex-wrap">
                            <div>
                                <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Palette
                                    Narrative</p>
                                <h2 class="text-2xl font-semibold">層次光譜</h2>
                            </div>
                            <span class="px-3 py-1 text-xs font-semibold rounded-full border"
                                :class="theme.surfaces.border">v.2025-11</span>
                        </div>
                        <div class="grid gap-4 md:grid-cols-2">
                            <article v-for="stack in colorStacks" :key="stack.label"
                                :class="[softPanelClass, 'p-4 space-y-4']">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-xs uppercase tracking-[0.25em]" :class="theme.hero.label">{{
                                            stack.label }}</p>
                                        <p class="text-sm" :class="theme.text.muted">{{ stack.description }}</p>
                                    </div>
                                    <span
                                        :class="['w-12 h-12 rounded-xl border', theme.surfaces.border, stack.preview]"></span>
                                </div>
                                <div class="grid grid-cols-4 gap-2 text-[11px]">
                                    <div v-for="tone in stack.swatches" :key="tone.name" class="text-center">
                                        <div :class="['h-10 rounded-xl border', theme.surfaces.border, tone.bg]"></div>
                                        <p class="mt-1 text-slate-400">{{ tone.name }}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <aside :class="[basePanelClass, 'p-6 space-y-4']">
                        <p class="text-xs uppercase tracking-[0.35em]" :class="theme.hero.label">Narrative Beat</p>
                        <h3 class="text-xl font-semibold">光霧指引</h3>
                        <p class="text-sm" :class="theme.text.muted">背景保持灰藍霧面，讓霓虹色只用於焦點，並透過柔光陰影維持沉浸層次。</p>
                        <div class="space-y-2 text-xs text-slate-400">
                            <div class="flex items-center gap-2">
                                <span
                                    class="w-2 h-2 rounded-full bg-fuchsia-300 shadow-lg ring-1 ring-fuchsia-400/60"></span>
                                <p>主要焦點：Fuchsia Pulse 漸層</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span
                                    class="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg ring-1 ring-fuchsia-400/60"></span>
                                <p>互動提示：脈衝霓虹加動態光暈</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-slate-500"></span>
                                <p>文字層級：淺灰到石墨色共四層</p>
                            </div>
                        </div>
                    </aside>
                </div>

                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Mood Board</p>
                            <h2 class="text-2xl font-semibold">霓虹場景拼貼</h2>
                        </div>
                        <button :class="[theme.buttons.secondary, 'px-4 py-2 text-xs rounded-full transition-all']">
                            匯出參考</button>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        <article v-for="panel in moodPanels" :key="panel.title"
                            :class="[softPanelClass, 'overflow-hidden']">
                            <div :class="['h-32', panel.hero]"></div>
                            <div class="p-4 space-y-2">
                                <p class="text-xs uppercase tracking-[0.25em]" :class="theme.hero.label">{{
                                    panel.subtitle }}</p>
                                <h3 class="text-lg font-semibold">{{ panel.title }}</h3>
                                <p class="text-sm" :class="theme.text.muted">{{ panel.body }}</p>
                                <div class="flex flex-wrap gap-2 text-[11px] text-slate-400">
                                    <span v-for="tag in panel.tags" :key="tag"
                                        class="px-2 py-1 rounded-full border border-slate-800 bg-slate-900/70">{{ tag
                                        }}</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section class="grid gap-6 lg:grid-cols-2">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Narrative System</p>
                        <h2 class="text-2xl font-semibold">節奏原則</h2>
                        <ul class="space-y-3">
                            <li v-for="cue in narrativeCues" :key="cue.title"
                                :class="[softPanelClass, 'p-4 flex items-start gap-3']">
                                <span class="px-2 py-1 text-[10px] uppercase tracking-[0.3em] rounded-full"
                                    :class="['border', theme.badges.border]">{{ cue.badge }}</span>
                                <div>
                                    <p class="text-sm font-semibold">{{ cue.title }}</p>
                                    <p class="text-xs" :class="theme.text.muted">{{ cue.detail }}</p>
                                </div>
                            </li>
                        </ul>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Grid Specs</p>
                        <h2 class="text-2xl font-semibold">網格設定</h2>
                        <div class="grid gap-3">
                            <article v-for="spec in gridSpecs" :key="spec.title"
                                :class="[softPanelClass, 'p-4 space-y-1']">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm font-semibold">{{ spec.title }}</p>
                                    <span class="text-xs text-slate-400">{{ spec.value }}</span>
                                </div>
                                <p class="text-xs" :class="theme.text.muted">{{ spec.detail }}</p>
                            </article>
                        </div>
                    </article>
                </section>

                <section class="grid gap-6 lg:grid-cols-2">
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Layout Moves</p>
                        <h2 class="text-2xl font-semibold">版面節奏</h2>
                        <div class="space-y-4">
                            <article v-for="move in layoutMoves" :key="move.title"
                                :class="[softPanelClass, 'p-4 flex gap-4 items-center']">
                                <div
                                    :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold', move.iconBg]">
                                    {{ move.icon }}
                                </div>
                                <div>
                                    <p class="text-sm font-semibold">{{ move.title }}</p>
                                    <p class="text-xs" :class="theme.text.muted">{{ move.detail }}</p>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article :class="[basePanelClass, 'p-6 space-y-4']">
                        <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Light & Texture</p>
                        <h2 class="text-2xl font-semibold">光感疊加</h2>
                        <div class="space-y-4">
                            <article v-for="texture in textureGuides" :key="texture.title"
                                :class="[softPanelClass, 'p-4 space-y-3']">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-sm font-semibold">{{ texture.title }}</p>
                                        <p class="text-xs" :class="theme.text.muted">{{ texture.tip }}</p>
                                    </div>
                                    <span
                                        :class="['w-16 h-16 rounded-2xl border', theme.surfaces.border, texture.preview]"></span>
                                </div>
                                <p class="text-xs text-slate-500">{{ texture.insight }}</p>
                            </article>
                        </div>
                        <div class="space-y-3">
                            <div v-for="layer in lightingLayers" :key="layer.label"
                                :class="[softPanelClass, 'p-4 space-y-1']">
                                <p class="text-sm font-semibold">{{ layer.label }}</p>
                                <p class="text-xs text-slate-400">{{ layer.mix }}</p>
                                <p class="text-xs" :class="theme.text.muted">{{ layer.detail }}</p>
                            </div>
                        </div>
                    </article>
                </section>

                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Story Beats</p>
                            <h2 class="text-2xl font-semibold">互動敘事分鏡</h2>
                        </div>
                        <span class="text-xs text-slate-500">審核節點：每周設計例會</span>
                    </div>
                    <div class="grid gap-4 md:grid-cols-3">
                        <article v-for="beat in storyBeats" :key="beat.stage"
                            :class="[softPanelClass, 'p-4 space-y-3 bg-slate-900/70']">
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">{{ beat.stage
                                }}</p>
                            <h3 class="text-lg font-semibold">{{ beat.title }}</h3>
                            <p class="text-sm" :class="theme.text.muted">{{ beat.copy }}</p>
                            <ul class="text-xs text-slate-500 space-y-1 list-disc list-inside marker:text-fuchsia-400">
                                <li v-for="point in beat.directives" :key="point">{{ point }}</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section
                    :class="[basePanelClass, 'p-8 relative overflow-hidden bg-linear-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90']">
                    <div class="absolute inset-0 bg-linear-to-br from-fuchsia-500/20 via-transparent to-transparent">
                    </div>
                    <div class="relative flex flex-wrap items-center gap-6">
                        <div class="flex-1 min-w-[250px] space-y-2">
                            <p class="text-xs uppercase tracking-[0.3em]" :class="theme.hero.label">Design Cue</p>
                            <h2 class="text-2xl font-semibold">建立「沉浸式科研場景」</h2>
                            <p class="text-sm" :class="theme.text.muted">延續 Color Demo 的霓虹光譜，但允許更多霧化材質與玻璃折射，打造敘事感更強的
                                Nexus 體驗。
                            </p>
                        </div>
                        <div class="flex gap-4 text-xs">
                            <button :class="[theme.buttons.primary, 'px-5 py-2']">加入導引</button>
                            <button :class="[theme.buttons.secondary, 'px-5 py-2 rounded-full']">回顧實驗</button>
                        </div>
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
        artDirectionColorStacks,
        artDirectionGridSpecs,
        artDirectionHeroContent,
        artDirectionLayoutMoves,
        artDirectionLightingLayers,
        artDirectionMoodPanels,
        artDirectionNarrativeCues,
        artDirectionStoryBeats,
        artDirectionTextureGuides,
    } from "../../constants/referenceArtDirection";

    const theme = getNexusTheme("art-direction");
    const layout = createArtNexusLayout(theme.layout);

    const basePanelClass = `rounded-3xl border ${theme.surfaces.border} ${theme.surfaces.panel}`;
    const softPanelClass = `rounded-2xl border ${theme.surfaces.border} ${theme.surfaces.softPanel}`;
    const heroContent = artDirectionHeroContent;
    const colorStacks = artDirectionColorStacks;
    const moodPanels = artDirectionMoodPanels;
    const narrativeCues = artDirectionNarrativeCues;
    const gridSpecs = artDirectionGridSpecs;
    const layoutMoves = artDirectionLayoutMoves;
    const textureGuides = artDirectionTextureGuides;
    const lightingLayers = artDirectionLightingLayers;
    const storyBeats = artDirectionStoryBeats;
</script>
