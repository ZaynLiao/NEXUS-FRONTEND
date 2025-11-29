<template>
    <section class="flex">
        <!-- Sidebar -->
        <aside class="w-2xs">
            <NexusSidebar />
        </aside>

        <!-- Main Content Area -->
        <main class="relative flex-1 h-screen overflow-auto">
            <div class="relative min-h-full w-full">
                <router-view />
            </div>
        </main>
    </section>
</template>

<script setup lang="ts" name="NexusViews">
    import NexusSidebar from "../components/Nexus/NexusSidebar.vue";
</script>

<style scoped></style>
