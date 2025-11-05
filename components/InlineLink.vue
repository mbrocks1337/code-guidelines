<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";
import type { RouteLocationRaw } from "vue-router/auto";

defineProps<{
  external?: boolean;
  to: RouteLocationRaw;
}>();
</script>
<template>
  <NuxtLink
    :external="external"
    :target="external ? '_blank' : undefined"
    :to
    class="inline-flex items-center gap-1 text-ellipsis break-all text-info hover:underline"
  >
    <slot>{{ to }}</slot>
    <ExternalLink v-if="external" class="h-4 min-h-4 w-4 min-w-4" />
  </NuxtLink>
</template>
