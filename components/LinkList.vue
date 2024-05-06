<script setup lang="ts">
const isOpen = ref(false);

defineProps<{
  links: string[];
}>();
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger class="font-bold underline">
      Quellen...
    </CollapsibleTrigger>
    <CollapsibleContent>
      <ul class="list-disc grid gap-1 my-3">
        <li v-for="link in links" :key="link">
          <NuxtLink external target="_blank" :href="link" class="text-blue-600">
            {{ link }}
          </NuxtLink>
        </li>
      </ul>
    </CollapsibleContent>
  </Collapsible>
</template>
