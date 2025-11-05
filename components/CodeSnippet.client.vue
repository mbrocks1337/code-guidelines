<script setup lang="ts">
import { Frown, Meh, Smile, ClipboardCopy } from "lucide-vue-next";
import { toast } from "vue-sonner";

const props = withDefaults(
  defineProps<{
    language?: string;
    code?: string;
    type?: "do" | "dont" | "good";
    copy?: boolean;
  }>(),
  {
    language: "typescript",
    code: "",
    type: undefined,
  },
);

const classObject = reactive({
  "text-green-500": props.type === "do",
  "text-red-600": props.type === "dont",
  "text-yellow-500": props.type === "good",
});

function onClick(code: string) {
  toast.success("Code kopiert!");
  navigator.clipboard.writeText(code);
}
</script>

<template>
  <div>
    <div v-if="type" class="py-2" :class="classObject">
      <span v-if="type === 'do'" class="flex gap-2"><Smile />Gut:</span>
      <span v-if="type === 'good'" class="flex gap-2"> <Meh />Okay:</span>
      <span v-if="type === 'dont'" class="flex gap-2"> <Frown />Schlecht:</span>
    </div>
    <div class="overflow-hidden rounded-md bg-muted text-muted-foreground">
      <div class="flex items-center justify-between">
        <div class="p-2 text-xs font-bold uppercase">
          {{ language }}
        </div>
        <Button v-if="copy" size="sm" variant="ghost" @click="onClick(code)"
          ><ClipboardCopy
        /></Button>
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
