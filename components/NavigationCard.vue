<script setup lang="ts">
import type { RouteNamedMap } from "vue-router/auto/routes";

const props = defineProps<{
  link: keyof RouteNamedMap;
  label: string;
}>();
</script>

<template>
  <NuxtLink
    :to="{ name: props.link }"
    class="grid place-items-center gap-6 rounded-lg border bg-card p-[4rem] text-xl text-muted-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
  >
    <slot />
    {{ label }}
  </NuxtLink>
</template>
