<template>
  <AppLayout :layout title="Versionierung & Git" />
</template>
<script setup lang="ts">
import { SectionMergeRequest, SectionWorkflow } from "#components";
import type { LayoutItem } from "~/components/App/AppLayout.vue";

const layout: LayoutItem[] = [
  {
    component: SectionMergeRequest,
    label: "Merge Request",
  },
  {
    component: SectionWorkflow,
    label: "Workflow",
  },
];
</script>
