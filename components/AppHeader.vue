<script setup lang="ts">
import type { RouteNamedMap } from "vue-router/auto/routes";
import { MenuIcon } from "lucide-vue-next";

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
  {
    label: "Versionierung & Git",
    name: "versioning-and-git",
  },
];

const isSidebarOpen = ref(false);
</script>
<template>
  <header
    class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <NuxtLink :to="{ name: 'index' }">
      <img
        class="block"
        src="/assets/images/logo-mediahaus.svg"
        alt="MEDIAHAUS Logo"
        width="200"
      />
    </NuxtLink>
    <nav
      aria-label="Navigation"
      class="hidden max-w-full flex-row items-center gap-5 overflow-x-auto text-sm font-medium text-muted-foreground md:flex lg:gap-6"
    >
      <NuxtLink
        v-for="(route, index) in routes"
        :key="index"
        :to="{ name: route.name }"
        active-class="text-foreground"
        class="text-nowrap transition-colors hover:text-foreground"
      >
        {{ route.label }}
      </NuxtLink>
    </nav>
    <div class="ml-auto">
      <ColorSwitcher />
    </div>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose as-child>
          <nav
            aria-label="Navigation"
            class="flex flex-col gap-6 font-medium text-muted-foreground"
          >
            <NuxtLink
              v-for="(route, index) in routes"
              :key="index"
              :to="{ name: route.name }"
              active-class="text-foreground"
              class="text-nowrap transition-colors hover:text-foreground"
              @click="isSidebarOpen = false"
            >
              {{ route.label }}
            </NuxtLink>
          </nav>
        </SheetClose>
      </SheetContent>
    </Sheet>
  </header>
</template>
