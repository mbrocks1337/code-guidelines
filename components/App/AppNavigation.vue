<script setup lang="ts">
import type { RouteNamedMap } from "vue-router/auto/routes";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

export interface RouteEntry {
  label: string;
  name: keyof RouteNamedMap;
}

const SEPARATOR_KEY = "separator";
type SeparatorType = Record<typeof SEPARATOR_KEY, true>;

const routes: (RouteEntry | SeparatorType)[] = [
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
  {
    separator: true,
  },
  {
    label: "Übungsaufgaben",
    name: "tasks",
  },
];

const emit = defineEmits<{
  navigate: [event: PointerEvent];
}>();

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = breakpoints.smaller("md");
const separatorOrientation = computed(() =>
  smallerThanMd.value ? "horizontal" : "vertical",
);
</script>
<template>
  <nav
    aria-label="Navigation"
    :class="
      cn('flex flex-col gap-6 font-medium text-muted-foreground', props.class)
    "
  >
    <template v-for="(route, index) in routes" :key="index">
      <NuxtLink
        v-if="!(SEPARATOR_KEY in route)"
        :to="{ name: route.name }"
        active-class="text-primary"
        class="text-nowrap transition-colors hover:text-foreground"
        @click="emit('navigate', $event)"
      >
        {{ route.label }}
      </NuxtLink>
      <Separator v-else :orientation="separatorOrientation" />
    </template>
  </nav>
</template>
