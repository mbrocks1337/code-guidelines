<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();

function changeColorMode() {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}
</script>

<template>
  <Button
    variant="secondary"
    size="icon"
    class="rounded-full"
    @click="changeColorMode"
  >
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Theme ändern</span>
  </Button>
</template>
