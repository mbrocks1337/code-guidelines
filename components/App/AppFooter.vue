<script setup lang="ts">
import { Github, Copyright } from "lucide-vue-next";
</script>
<template>
  <footer
    class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t bg-background px-4 py-4 text-sm text-muted-foreground md:px-6"
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
