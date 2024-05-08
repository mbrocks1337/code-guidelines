<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";

defineProps<{
  external?: boolean;
  to: string;
}>();
</script>
<template>
  <NuxtLink
    :external="external"
    :target="external ? '_blank' : undefined"
    :to="to"
    class="text-info hover:underline inline-flex items-center gap-1"
  >
    <slot>{{ to }}</slot>
    <ExternalLink v-if="external" class="h-4 w-4" />
  </NuxtLink>
</template>
