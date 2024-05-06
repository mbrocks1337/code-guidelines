<script setup lang="ts">
useHead({
  title: "Coding Guidelines",
  link: [{ rel: "icon", href: "/code-guidelines/favicon.ico" }],
  meta: [{ name: "robots", content: "noindex" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ScrollToTop />
</template>

<style>
.v-enter-active,
.v-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
