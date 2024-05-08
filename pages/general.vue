<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10 md:pb-32"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">Allgemein</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a v-for="item in layout" :key="item.id" :href="`#${item.id}`">
          {{ item.label }}
        </a>
      </nav>
      <div class="grid gap-6">
        <component
          :is="item.component"
          v-for="item in layout"
          :id="item.id"
          :key="item.id"
          class="scroll-mt-[calc(1.5rem_+_theme(spacing.16))]"
          data-aos="fade-in"
        />
      </div>
    </div>
  </main>
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
import type { LayoutItem } from "~/types/global";

const layout: LayoutItem[] = [
  {
    component: SectionGitCommitMessages,
    id: "git-message",
    label: "Git Commit Messages",
  },
  {
    component: SectionRefactoring,
    id: "refactoring",
    label: "Refactoring",
  },
  {
    component: SectionCodeNesting,
    id: "code-nesting",
    label: "Code Nesting",
  },
  {
    component: SectionComments,
    id: "comments",
    label: "Comments",
  },
  {
    component: SectionNaming,
    id: "naming",
    label: "Benennung",
  },
  {
    component: SectionDRY,
    id: "dry",
    label: "DRY",
  },
  {
    component: SectionSideEffects,
    id: "side-effects",
    label: "Side Effects",
  },
];
</script>
