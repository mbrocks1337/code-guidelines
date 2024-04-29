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
    class="rounded-lg border text-xl bg-card text-muted-foreground shadow-sm grid place-items-center p-[4rem] hover:border-primary hover:text-primary transition-all gap-6"
  >
    <slot />
    {{ label }}
  </NuxtLink>
</template>
