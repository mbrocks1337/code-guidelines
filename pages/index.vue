<script setup lang="ts">
import { Server, StickyNote, Settings2 } from "lucide-vue-next";
</script>
<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10"
  >
    <div
      class="mx-auto max-w-xl grid w-full gap-6 text-center"
      data-aos="fade-in"
    >
      <h1 class="text-4xl font-semibold">Coding Guidelines</h1>
      <p class="text-sm text-muted-foreground">
        Hier findest du eine umfassende Sammlung von Best Practices,
        Konventionen und Regeln für die Entwicklung.
      </p>
      <p class="text-sm text-muted-foreground">
        Unsere Richtlinien helfen Entwicklern dabei, sauberen, effizienten und
        gut dokumentierten Code zu schreiben, der leicht wartbar und skalierbar
        ist.
      </p>
    </div>
    <QuoteCarousel data-aos="fade-in" data-aos-delay="300" />
    <div class="mx-auto grid w-full max-w-6xl items-start gap-6">
      <div class="grid grid-cols-2 gap-6">
        <NavigationCard
          link="general"
          label="Allgemein"
          class="col-span-2"
          data-aos="zoom-in"
        >
          <Settings2 :size="48" />
        </NavigationCard>
        <NavigationCard
          link="frontend"
          label="Frontend"
          class="col-span-2 md:col-span-1"
          data-aos="zoom-in"
        >
          <StickyNote :size="48" />
        </NavigationCard>
        <NavigationCard
          link="backend"
          label="Backend"
          class="col-span-2 md:col-span-1"
          data-aos="zoom-in"
        >
          <Server :size="48" />
        </NavigationCard>
      </div>
    </div>
  </main>
</template>
