<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import type { RouteNamedMap } from "vue-router/auto/routes";

export interface RouteEntry {
  label: string;
  name: keyof RouteNamedMap;
}

const routes: RouteEntry[] = [
  {
    label: "Allgemein",
    name: "general",
  },
  {
    label: "Frontend",
    name: "frontend",
  },
  {
    label: "Backend",
    name: "backend",
  },
];
</script>
<template>
  <header
    class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <nav
      class="text-muted-foreground font-medium flex flex-row items-center gap-5 text-sm lg:gap-6"
    >
      <NuxtLink :to="{ name: 'index' }" class="hidden sm:block">
        <img
          src="/assets/images/logo-mediahaus.svg"
          alt="MEDIAHAUS Logo"
          width="200"
        />
      </NuxtLink>
      <NuxtLink
        v-for="(route, index) in routes"
        :key="index"
        :to="{ name: route.name }"
        active-class="text-foreground"
        class="transition-colors hover:text-foreground"
      >
        {{ route.label }}
      </NuxtLink>
    </nav>
    <div class="ml-auto">
      <ColorSwitcher />
    </div>
  </header>
</template>
