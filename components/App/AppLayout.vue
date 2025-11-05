<script lang="ts" setup>
import type { Component } from "vue";

export interface LayoutItem {
  component: Component;
  label: string;
}

const { title } = defineProps<{
  title: string;
  layout: LayoutItem[];
}>();
</script>
<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10 md:pb-32"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">{{ title }}</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a
          v-for="item in layout"
          :key="slugify(item.label)"
          :href="`#${slugify(item.label)}`"
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="grid gap-6">
        <component
          :is="item.component"
          v-for="item in layout"
          :id="slugify(item.label)"
          :key="slugify(item.label)"
          class="scroll-mt-[calc(1.5rem_+_theme(spacing.16))]"
          data-aos="fade-in"
        />
      </div>
    </div>
  </main>
</template>
