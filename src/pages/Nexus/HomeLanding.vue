<template>
    <section class="relative min-h-screen overflow-hidden bg-slate-950">

        <div
            class="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-transparent to-transparent opacity-60 mix-blend-screen">
        </div>
        <div
            class="absolute inset-0 bg-linear-to-tr from-amber-400/20 via-transparent to-transparent opacity-40 mix-blend-screen">
        </div>

        <div class="absolute inset-0 opacity-30">
            <div
                class="absolute left-10 top-0 h-full w-px bg-linear-to-b from-cyan-200 via-transparent to-transparent blur-sm">
            </div>
            <div
                class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-white/40 via-transparent to-transparent blur-sm">
            </div>
        </div>
        <div class="absolute inset-0 pointer-events-none mix-blend-screen">
            <div class="absolute left-1/3 top-1/4 h-28 w-28 rounded-full bg-cyan-300/30 blur-2xl animate-pulse"></div>
            <div class="absolute left-1/6 bottom-1/5 h-20 w-20 rounded-full bg-emerald-300/30 blur-3xl animate-pulse">
            </div>
            <div class="absolute inset-x-24 top-24 h-32 rounded-full bg-cyan-100/30 blur-3xl opacity-60 animate-pulse">
            </div>
            <div class="absolute right-1/12 bottom-1/4 h-24 w-24 rounded-full bg-cyan-200/30 blur-3xl animate-pulse">
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div
                    class="w-4/5 max-w-4xl aspect-square rounded-full border border-emerald-200/30 blur-3xl animate-pulse">
                </div>
            </div>
        </div>

        <div class="relative flex min-h-screen flex-col items-center justify-center px-6 py-14 text-center lg:px-12">
            <div class="space-y-8">
                <div class="space-y-4">
                    <p class="text-xl uppercase tracking-widest text-emerald-200">Nexus Portal</p>
                    <h1
                        class="text-4xl font-black leading-tight text-transparent bg-linear-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text sm:text-5xl">
                        一個視窗掌握配色、敘事與生成模板
                    </h1>
                    <p class="text-base text-slate-300 sm:text-lg">新的 Flux 調色盤結合 Color Demo 的色譜、Art Direction 的節奏，並直接串接
                        Prism 生成模板。
                    </p>
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                    <button
                        class="group relative rounded-full bg-linear-to-r from-cyan-200 via-emerald-200 to-amber-200 p-px shadow-2xl transition hover:scale-105">
                        <span
                            class="flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition group-hover:bg-slate-900">
                            <span
                                class="bg-linear-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                                進入工作區
                            </span>
                        </span>
                    </button>
                    <button
                        class="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 hover:text-white">
                        快速導覽
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
