<script setup lang="ts">
import type { LayoutItem } from "~/components/App/AppLayout.vue";
import { TaskCreateArray, TaskEvenNumbers, TaskPalindrome } from "#components";

const layout: LayoutItem[] = [
  {
    label: "Array erstellen",
    component: TaskCreateArray,
  },
  {
    label: "Gerade Zahlen",
    component: TaskEvenNumbers,
  },
  {
    label: "Palindrom",
    component: TaskPalindrome,
  },
];
</script>
<template>
  <AppLayout title="Übungsaufgaben (Leicht)" :layout />
</template>
