<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">Frontend</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a href="#vue">Vue</a>
        <a href="#nuxt">Nuxt</a>
        <a href="#typescript">TypeScript</a>
        <a href="#eslint">Prettier</a>
        <a href="#prettier">ESLint</a>
      </nav>
      <div class="grid gap-6">
        <SectionVue id="vue" />
        <SectionNuxt id="nuxt" />
        <SectionTypeScript id="typescript" />
        <SectionESLint id="eslint" />
        <SectionPrettier id="prettier" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
