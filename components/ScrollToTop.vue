<script lang="ts" setup>
import { ArrowUpToLine } from "lucide-vue-next";

const THRESHOLD_IN_PX = 200;
const showScrollButton = ref(false);

function handleClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollButton.value = window.scrollY > THRESHOLD_IN_PX;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <Transition>
    <Button
      v-if="showScrollButton"
      class="fixed bottom-16 right-16"
      variant="outline"
      size="icon"
      @click="handleClick"
    >
      <ArrowUpToLine class="w-4 h-4" />
    </Button>
  </Transition>
</template>
