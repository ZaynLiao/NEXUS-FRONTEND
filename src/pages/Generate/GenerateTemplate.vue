<template>
    <div :class="[layout.shell, 'transition-colors duration-500']">
        <NexusHeroSection :theme="templateTheme" :layout="layout" :content="heroContent" />

        <main :class="[layout.main, 'overflow-hidden transition-colors duration-500']">
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-70"
                :class="[activeVariant.stageBackground, 'transition-colors duration-500']"></div>
            <div :class="[layout.content, 'space-y-10 relative z-10']">
                <!-- palette switcher -->
                <section :class="[basePanelClass, 'p-5 flex flex-wrap items-center justify-between gap-4']">
                    <div>
                        <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                            {{ currentTemplate.switcherTitle }}
                        </p>
                        <h2 class="text-xl font-semibold">{{ currentTemplate.name }}</h2>
                        <p class="text-sm mt-1" :class="templateTheme.hero.body">
                            {{ currentTemplate.switcherBody }}
                        </p>
                        <p class="text-xs mt-1" :class="templateTheme.hero.body">
                            當前主題 · {{ activeVariant.label }} ｜ {{ activeVariant.summary }}
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="variant in colorThemes" :key="variant.slug" type="button"
                            @click="setActiveVariant(variant.slug)" :aria-pressed="isActiveVariant(variant.slug)"
                            class="px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                            :class="isActiveVariant(variant.slug)
                                ? 'bg-white text-slate-900 border-white shadow-lg shadow-white/30'
                                : 'border-white/20 text-white/80 hover:text-white hover:border-white/40'">
                            {{ variant.name }}
                        </button>
                    </div>
                </section>

                <!-- color theme board -->
                <section :class="[basePanelClass, 'p-6 space-y-6']">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                {{ currentTemplate.boardSubtitle }}
                            </p>
                            <h2 class="text-2xl font-semibold">{{ currentTemplate.boardTitle }}</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                {{ currentTemplate.boardDescription }}
                            </p>
                        </div>
                        <span class="text-xs text-slate-400">Theme Slots · {{ colorThemes.length }}</span>
                    </div>
                    <div class="grid gap-4 md:grid-cols-3">
                        <article v-for="theme in colorThemes" :key="theme.slug" @click="setActiveVariant(theme.slug)"
                            tabindex="0" @keyup.enter="setActiveVariant(theme.slug)" :class="[
                                softPanelClass,
                                'p-4 rounded-2xl space-y-4 border border-white/10 cursor-pointer transition-all duration-300 outline-none',
                                isActiveVariant(theme.slug) ? 'ring-2 ring-white/70 shadow-2xl scale-[1.01]' : 'hover:ring-1 hover:ring-white/30'
                            ]">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] uppercase tracking-[0.35em]"
                                        :class="isActiveVariant(theme.slug) ? theme.accent : templateTheme.hero.label">
                                        {{ theme.origin }}
                                    </p>
                                    <h3 class="text-lg font-semibold">{{ theme.name }}</h3>
                                </div>
                                <span class="text-[11px] px-2 py-1 rounded-full border border-white/10"
                                    :class="isActiveVariant(theme.slug) ? theme.accent : 'text-slate-300'">
                                    {{ isActiveVariant(theme.slug) ? 'ACTIVE' : theme.energy }}
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
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                {{ currentTemplate.name }} Storyboards
                            </p>
                            <h2 class="text-2xl font-semibold">{{ currentTemplate.storyboardsTitle }}</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                {{ currentTemplate.storyboardsDescription }}
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
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                {{ currentTemplate.name }} Guidelines
                            </p>
                            <h2 class="text-2xl font-semibold">{{ currentTemplate.guidelinesTitle }}</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                {{ currentTemplate.guidelinesDescription }}
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
                                    {{ currentTemplate.name }} Token Recipes
                                </p>
                                <h2 class="text-2xl font-semibold">{{ currentTemplate.tokensTitle }}</h2>
                                <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                    {{ currentTemplate.tokensDescription }}
                                </p>
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
                            <p class="text-xs uppercase tracking-[0.35em]" :class="templateTheme.hero.label">
                                {{ currentTemplate.name }} Application Deck
                            </p>
                            <h2 class="text-2xl font-semibold">{{ currentTemplate.applicationTitle }}</h2>
                            <p class="text-sm mt-1" :class="templateTheme.hero.body">
                                {{ currentTemplate.applicationDescription }}
                            </p>
                        </div>
                        <div class="flex gap-2 text-xs">
                            <button class="rounded-full px-4 py-2 transition"
                                :class="[currentTemplate.buttonLeft.border, currentTemplate.buttonLeft.text, currentTemplate.buttonLeft.hover]">
                                {{ currentTemplate.buttonLeft.label }}
                            </button>
                            <button class="rounded-full px-4 py-2 transition"
                                :class="[currentTemplate.buttonRight.border, currentTemplate.buttonRight.text, currentTemplate.buttonRight.hover]">
                                {{ currentTemplate.buttonRight.label }}
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
    import { computed, ref, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import { createArtNexusLayout } from "../../constants/artNexusLayout";
    import type { NexusHeroContent } from "../../types/nexusHero";
    import NexusHeroSection from "../../components/Nexus/NexusHeroSection.vue";
    import {
        generateTemplateMap,
        listGenerateTemplates,
        type TemplateSlug,
    } from "../../constants/generateTemplates";

    const route = useRoute();
    const router = useRouter();

    const templates = listGenerateTemplates();
    const fallbackTemplateSlug = templates[0]?.slug ?? "aurora";
    const templateSlugSet = new Set(templates.map((template) => template.slug));

    const resolveTemplateSlug = (value: unknown): TemplateSlug =>
        typeof value === "string" && templateSlugSet.has(value)
            ? (value as TemplateSlug)
            : fallbackTemplateSlug;

    const templateSlug = ref<TemplateSlug>(resolveTemplateSlug(route.params.templateSlug));

    if (route.params.templateSlug !== templateSlug.value) {
        router.replace({
            name: "generate-template",
            params: { templateSlug: templateSlug.value },
            query: route.query,
        });
    }

    watch(
        () => route.params.templateSlug,
        (value) => {
            const nextSlug = resolveTemplateSlug(value);
            if (value !== nextSlug) {
                router.replace({
                    name: "generate-template",
                    params: { templateSlug: nextSlug },
                    query: route.query,
                });
            }
            if (templateSlug.value !== nextSlug) {
                templateSlug.value = nextSlug;
            }
        }
    );

    const currentTemplate = computed(() => generateTemplateMap[templateSlug.value]!);

    const resolveVariantSlug = (value: unknown): string => {
        if (typeof value === "string" && currentTemplate.value.variantMap[value]) {
            return value;
        }
        return currentTemplate.value.variants[0]?.slug ?? "";
    };

    const activeVariantSlug = ref(resolveVariantSlug(route.query.theme));

    watch(
        () => [route.query.theme, templateSlug.value],
        () => {
            const nextSlug = resolveVariantSlug(route.query.theme);
            if (nextSlug && nextSlug !== activeVariantSlug.value) {
                activeVariantSlug.value = nextSlug;
            }
        }
    );

    watch(
        activeVariantSlug,
        (slug) => {
            if (!slug) {
                return;
            }
            if (route.query.theme !== slug) {
                router.replace({
                    query: { ...route.query, theme: slug },
                });
            }
        }
    );

    const activeVariant = computed(
        () => currentTemplate.value.variantMap[activeVariantSlug.value] ?? currentTemplate.value.variants[0]!
    );

    const templateTheme = computed(() => activeVariant.value.theme);

    const layout = computed(() =>
        createArtNexusLayout({
            shell: templateTheme.value.layout.shell,
            text: templateTheme.value.layout.text,
            border: templateTheme.value.layout.border,
        })
    );

    const basePanelClass = computed(
        () => `rounded-3xl border ${templateTheme.value.surfaces.border} ${templateTheme.value.surfaces.panel}`
    );
    const softPanelClass = computed(
        () => `rounded-2xl ${templateTheme.value.surfaces.border} ${templateTheme.value.surfaces.softPanel}`
    );

    const heroContent = computed<NexusHeroContent>(() => activeVariant.value.hero);

    const colorThemes = computed(() => currentTemplate.value.variants.map((variant) => variant.card));
    const storyboards = computed(() => currentTemplate.value.storyboards);
    const guidelineMatrix = computed(() => currentTemplate.value.guidelineMatrix);
    const gradientTokens = computed(() => currentTemplate.value.gradientTokens);
    const applicationDeck = computed(() => currentTemplate.value.applicationDeck);
    const swatchLabelMap = computed(() => currentTemplate.value.swatchLabelMap);

    const setActiveVariant = (slug: string) => {
        if (currentTemplate.value.variantMap[slug]) {
            activeVariantSlug.value = slug;
        }
    };

    const isActiveVariant = (slug: string) => activeVariantSlug.value === slug;
</script>
