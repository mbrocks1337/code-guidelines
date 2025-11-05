<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
  <ClientOnly>
    <Toaster rich-colors position="top-right" />
  </ClientOnly>
  <ScrollToTop />
</template>

<script setup lang="ts"></script>
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
