<template>
  <AppLayout :layout title="Frontend" />
</template>
<script setup lang="ts">
import {
  SectionVue,
  SectionNuxt,
  SectionTypeScript,
  SectionESLint,
  SectionPrettier,
} from "#components";
import type { LayoutItem } from "~/components/App/AppLayout.vue";

const layout: LayoutItem[] = [
  {
    component: SectionVue,
    label: "Vue",
  },
  {
    component: SectionNuxt,
    label: "Nuxt",
  },
  {
    component: SectionTypeScript,
    label: "TypeScript",
  },
  {
    component: SectionESLint,
    label: "ESLint",
  },
  {
    component: SectionPrettier,
    label: "Prettier",
  },
];
</script>
