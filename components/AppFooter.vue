<script setup lang="ts">
import { Github, Copyright } from "lucide-vue-next";
</script>
<template>
  <footer
    class="mt-auto border-t bg-background text-muted-foreground px-4 md:px-6 py-4 flex items-center justify-between flex-wrap gap-3 text-sm"
  >
    <InlineLink to="https://github.com/mbrocks1337/code-guidelines" external>
      <Github />
      Source Code
    </InlineLink>
    <div class="inline-flex items-center gap-1">
      <Copyright class="size-4" />
      {{ new Date().getFullYear() }} by Marc Brocks
    </div>
  </footer>
</template>
