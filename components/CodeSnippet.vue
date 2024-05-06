<script setup lang="ts">
import { Check, X } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    language?: string;
    code?: string;
    type?: "do" | "dont" | undefined;
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
});
</script>

<template>
  <div>
    <div v-if="type" class="py-2" :class="classObject">
      <span v-if="type === 'do'" class="flex gap-2"><Check />Do:</span>
      <span v-if="type === 'dont'" class="flex gap-2"> <X />Don't:</span>
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
