<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="underline decoration-dotted cursor-help">
        <slot />
      </TooltipTrigger>
      <TooltipContent class="shadow-lg">
        <p class="font-bold">{{ label }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
