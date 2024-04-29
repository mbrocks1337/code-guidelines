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
      class="hidden flex-col gap-6 text-muted-foreground text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <NuxtLink :to="{ name: 'index' }">
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
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg text-muted-foreground font-medium">
          <img src="/assets/images/logo-mediahaus.svg" alt="MEDIAHAUS Logo" />
          <NuxtLink
            v-for="(route, index) in routes"
            :key="index"
            :to="route.name"
            active-class="text-foreground"
            class="transition-colors hover:text-foreground"
          >
            {{ route.label }}
          </NuxtLink>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="ml-auto">
      <ColorSwitcher />
    </div>
  </header>
</template>
