<template>
    <section :class="['h-screen border-r flex flex-col transition-colors duration-300', currentTheme.shell]">
        <!-- Header -->
        <div class="p-6 border-b" :class="currentTheme.headerBorder">
            <router-link to="/nexus" class="group inline-block focus-visible:outline-none">
                <h2 class="bg-clip-text text-transparent text-3xl font-extrabold drop-shadow-lg mb-2 transition-transform duration-200 group-hover:scale-105"
                    :class="currentTheme.titleGradient">
                    NEXUS DESIGN
                </h2>
            </router-link>
            <p class="text-xs font-medium tracking-wide uppercase" :class="currentTheme.subtitle">
                調色盤與元件參考
            </p>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-4 space-y-4">
            <div v-for="section in sections" :key="section.id" class="space-y-2">
                <button type="button"
                    class="w-full flex items-center justify-between px-4 py-2 rounded-lg text-left text-xs tracking-[0.35em] uppercase transition-colors duration-150"
                    :class="currentTheme.sectionButton" @click="toggleSection(section.id)">
                    <div class="flex items-center gap-3">
                        <span class="text-[11px] font-semibold" :class="currentTheme.sectionTitle">{{ section.title
                        }}</span>
                        <span class="text-[10px] tracking-[0.2em]" :class="currentTheme.sectionSubtitle">{{
                            section.subtitle }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-[10px]" :class="currentTheme.sectionSubtitle">
                        <span>{{ section.links.length }} 頁</span>
                        <svg class="w-3.5 h-3.5 transition-transform duration-150"
                            :class="openSections[section.id] ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path d="M6 8l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </button>
                <transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150"
                    leave-from-class="opacity-100" leave-to-class="opacity-0 -translate-y-2">
                    <ul v-show="openSections[section.id]" :class="['space-y-1 pl-2 border-l', currentTheme.listBorder]">
                        <li v-for="link in section.links" :key="link.to">
                            <router-link :to="link.to" :class="[
                                'flex items-center gap-3 px-4 py-2 rounded-xl border text-sm transition-colors duration-150',
                                currentTheme.linkIdle,
                                currentTheme.linkHover,
                                isActive(link.to) ? currentTheme.linkActive : ''
                            ]">
                                <svg class="w-5 h-5 transition-colors duration-150"
                                    :class="isActive(link.to) ? currentTheme.iconActive : currentTheme.iconIdle"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path :d="link.icon" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="font-medium">{{ link.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </transition>
            </div>
        </nav>

        <!-- Footer -->
        <div class="p-4 border-t flex items-center gap-2 text-xs"
            :class="[currentTheme.headerBorder, currentTheme.footerText]">
            <div class="w-1.5 h-1.5 rounded-full" :class="currentTheme.footerDot"></div>
            <span>&copy; 2025 NEXUS</span>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, reactive } from "vue";
    import { useRoute } from "vue-router";
    import type { SidebarPalette } from "../../constants/nexusThemes";
    import { getSidebarPalette } from "../../constants/nexusThemes";
    import { getGenerateSidebarPalette, listGenerateTemplates } from "../../constants/generateTemplates";

    type NavLink = {
        label: string;
        to: string;
        icon: string;
    };

    type NavSection = {
        id: string;
        title: string;
        subtitle: string;
        links: NavLink[];
        defaultOpen?: boolean;
    };

    const route = useRoute();

    const baseFlux: SidebarPalette = {
        shell: "bg-slate-950 text-slate-100 border-emerald-400/30",
        headerBorder: "border-emerald-400/30",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-cyan-200 via-emerald-200 to-amber-200",
        sectionButton: "bg-slate-900/70 border border-emerald-400/30 text-slate-400 hover:border-cyan-300 hover:text-white",
        sectionTitle: "text-emerald-200",
        sectionSubtitle: "text-slate-500",
        listBorder: "border-emerald-500/30",
        linkIdle: "text-slate-300 border-emerald-400/20",
        linkHover: "hover:text-white hover:border-emerald-300 hover:bg-emerald-300/10",
        linkActive: "bg-emerald-300/15 border-emerald-200 text-white",
        iconIdle: "text-slate-500",
        iconActive: "text-emerald-200",
        footerDot: "bg-emerald-300 ring-2 ring-emerald-200/40",
        footerText: "text-slate-400",
    };

    const prismSidebar: SidebarPalette = {
        shell: "bg-slate-950 text-slate-100 border-white/10",
        headerBorder: "border-white/10",
        subtitle: "text-slate-400",
        titleGradient: "bg-linear-to-r from-lime-200 via-amber-300 to-cyan-300",
        sectionButton: "bg-slate-900/70 border border-white/10 text-slate-500 hover:border-lime-400 hover:text-white",
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
    };

    const sidebarThemes: Record<string, SidebarPalette | undefined> = {
        default: baseFlux,
        nexus: baseFlux,
        "color-demo": getSidebarPalette("color-demo"),
        "art-direction": getSidebarPalette("art-direction"),
        "prism-template": prismSidebar,
        generate: getSidebarPalette("generate"),
    };

    const generateTemplates = listGenerateTemplates();
    const generateSlugSet = new Set(generateTemplates.map((template) => template.slug));

    const generateLinks = generateTemplates.map((template) => ({
        label: template.navLabel,
        to: `/nexus/generate/${template.slug}`,
        icon: template.navIcon,
    }));

    const sections: NavSection[] = [
        {
            id: "guides",
            title: "GUIDES",
            subtitle: "參考",
            defaultOpen: true,
            links: [
                {
                    label: "配色範例",
                    to: "/nexus/color-demo",
                    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                },
                {
                    label: "美術指引",
                    to: "/nexus/art-direction",
                    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m2-2l2-2m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                },
                {
                    label: "生成模板",
                    to: "/nexus/prism-template",
                    icon: "M12 4v16m0 0l4-4m-4 4l-4-4M4 12h16m0 0l-4-4m4 4l-4 4",
                },
            ],
        },
        {
            id: "generate",
            title: "GENERATE",
            subtitle: "自動化",
            defaultOpen: true,
            links: generateLinks,
        },
    ];

    const openSections = reactive<Record<string, boolean>>({});
    sections.forEach((section) => {
        openSections[section.id] = section.defaultOpen ?? false;
    });

    const activeSlug = computed(() => {
        const segments = route.path.split("/").filter(Boolean);
        return segments[segments.length - 1] ?? "default";
    });

    const currentTheme = computed<SidebarPalette>(() => {
        if (generateSlugSet.has(activeSlug.value)) {
            const variantSlug = typeof route.query.theme === "string" ? route.query.theme : undefined;
            return getGenerateSidebarPalette(activeSlug.value, variantSlug) ?? baseFlux;
        }
        return sidebarThemes[activeSlug.value] ?? baseFlux;
    });

    const toggleSection = (id: string) => {
        openSections[id] = !openSections[id];
    };

    const isActive = (path: string) => route.path === path;
</script>
