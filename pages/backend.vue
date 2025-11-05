<template>
  <AppLayout :layout title="Backend" />
</template>
<script setup lang="ts">
import { SectionLaravel, SectionLaravelPint } from "#components";
import type { LayoutItem } from "~/components/App/AppLayout.vue";

const layout: LayoutItem[] = [
  {
    component: SectionLaravel,
    label: "Laravel",
  },
  {
    component: SectionLaravelPint,
    label: "Laravel Pint",
  },
];
</script>
