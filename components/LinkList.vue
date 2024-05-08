<script setup lang="ts">
const isOpen = ref(false);

defineProps<{
  links: string[];
}>();
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger class="text-muted-foreground underline text-xs">
      Quellen...
    </CollapsibleTrigger>
    <CollapsibleContent>
      <ul class="list-disc grid gap-1 my-3">
        <li v-for="link in links" :key="link">
          <InlineLink :to="link" external />
        </li>
      </ul>
    </CollapsibleContent>
  </Collapsible>
</template>
