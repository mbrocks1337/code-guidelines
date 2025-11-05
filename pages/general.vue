<template>
  <AppLayout :layout title="Allgemein" />
</template>
<script setup lang="ts">
import {
  SectionGitCommitMessages,
  SectionRefactoring,
  SectionCodeNesting,
  SectionComments,
  SectionNaming,
  SectionDRY,
  SectionSideEffects,
} from "#components";
import type { LayoutItem } from "~/components/App/AppLayout.vue";

const layout: LayoutItem[] = [
  {
    component: SectionGitCommitMessages,
    label: "Git Commit Messages",
  },
  {
    component: SectionRefactoring,
    label: "Refactoring",
  },
  {
    component: SectionCodeNesting,
    label: "Code Nesting",
  },
  {
    component: SectionComments,
    label: "Comments",
  },
  {
    component: SectionNaming,
    label: "Benennung",
  },
  {
    component: SectionDRY,
    label: "DRY",
  },
  {
    component: SectionSideEffects,
    label: "Side Effects",
  },
];
</script>
