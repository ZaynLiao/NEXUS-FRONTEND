<template>
    <section :class="[layout.hero, theme.hero.surface, 'relative overflow-hidden']">
        <div :class="['absolute inset-0 pointer-events-none z-0', theme.hero.gridOverlay]"></div>
        <div
            :class="['absolute -top-24 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none z-0', theme.hero.glowPrimary]">
        </div>
        <div
            :class="['absolute -bottom-16 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none z-0', theme.hero.glowSecondary]">
        </div>
        <div :class="[layout.heroInner, 'text-center space-y-6 relative z-10']">
            <p class="text-xs tracking-[0.35em] uppercase" :class="theme.hero.label">{{ content.eyebrow }}</p>
            <h1 class="text-4xl font-bold">
                <span
                    :class="[theme.hero.gradientText, 'bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]']">
                    {{ content.title }}
                </span>
            </h1>
            <p class="text-sm max-w-4xl mx-auto" :class="theme.hero.body">
                {{ content.subtitle }}
            </p>
            <div v-if="content.chips?.length"
                class="flex flex-wrap justify-center gap-3 text-[11px] tracking-[0.3em] uppercase">
                <span v-for="chip in content.chips" :key="chip" :class="[chipClass, 'px-3 py-1 rounded-full']">{{
                    chip }}</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <article v-for="stat in content.stats" :key="stat.label"
                    :class="[statCardClass, 'p-4 text-left space-y-1 relative z-10']">
                    <p :class="['text-2xl font-semibold', theme.tokens.statValue]">{{ stat.value }}</p>
                    <p :class="['text-xs uppercase tracking-[0.3em]', theme.tokens.statLabel]">{{ stat.label }}</p>
                    <p class="text-[11px]" :class="theme.hero.body">{{ stat.detail }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import type { ArtNexusLayout } from "../../constants/artNexusLayout";
    import type { NexusTheme } from "../../constants/nexusThemes";
    import type { NexusHeroContent } from "../../types/nexusHero";

    const props = defineProps<{ theme: NexusTheme; layout: ArtNexusLayout; content: NexusHeroContent }>();

    const statCardClass = computed(() => props.theme.tokens.statCard);
    const chipClass = computed(
        () => `${props.theme.tokens.chip} ${props.theme.tokens.chipBorder} ${props.theme.tokens.chipText}`.trim()
    );
</script>
