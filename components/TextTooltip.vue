<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="cursor-help underline decoration-dotted">
        <slot />
      </TooltipTrigger>
      <TooltipContent class="shadow-lg">
        <p class="font-bold">{{ label }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
