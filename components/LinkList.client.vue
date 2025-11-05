<script setup lang="ts">
const isOpen = ref(false);

defineProps<{
  links: string[];
}>();
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger class="text-xs text-muted-foreground underline">
      Quellen...
    </CollapsibleTrigger>
    <CollapsibleContent>
      <ul class="my-3 grid list-disc gap-1">
        <li v-for="link in links" :key="link">
          <InlineLink :to="link" external />
        </li>
      </ul>
    </CollapsibleContent>
  </Collapsible>
</template>
