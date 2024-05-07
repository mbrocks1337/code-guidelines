<script setup lang="ts">
import { Frown, Meh, Smile } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    language?: string;
    code?: string;
    type?: "do" | "dont" | "good" | undefined;
  }>(),
  {
    language: "typescript",
    code: "",
    type: undefined,
  },
);

const classObject = reactive({
  "text-green-600": props.type === "do",
  "text-red-600": props.type === "dont",
  "text-yellow-600": props.type === "good",
});
</script>

<template>
  <div>
    <div v-if="type" class="py-2" :class="classObject">
      <span v-if="type === 'do'" class="flex gap-2"><Smile />Gut:</span>
      <span v-if="type === 'dont'" class="flex gap-2"> <Frown />Schlecht:</span>
      <span v-if="type === 'good'" class="flex gap-2"> <Meh />Okay:</span>
    </div>
    <div class="rounded-md overflow-hidden bg-muted text-muted-foreground">
      <div class="p-2 uppercase text-xs font-bold">
        {{ language }}
      </div>
      <highlightjs
        :language="language"
        :code="code"
        :autodetect="false"
        class="grid"
      />
    </div>
  </div>
</template>
