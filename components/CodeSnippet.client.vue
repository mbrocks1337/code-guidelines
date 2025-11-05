<script setup lang="ts">
import { Frown, Meh, Smile, ClipboardCopy } from "lucide-vue-next";
import { toast } from "vue-sonner";

const {
  language = "typescript",
  type,
  code,
} = defineProps<{
  language?: string;
  code?: string;
  type?: "do" | "dont" | "good";
  copy?: boolean;
}>();

const classObject = reactive({
  "text-green-500": type === "do",
  "text-red-600": type === "dont",
  "text-yellow-500": type === "good",
});

async function onClick(code: string) {
  try {
    await navigator.clipboard.writeText(code);
    toast.success("Code kopiert!");
  } catch (error) {
    toast.error("Fehler beim Kopieren des Codes");
  }
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
        <Button
          v-if="copy && code"
          size="icon"
          variant="ghost"
          aria-label="Code kopieren"
          @click="onClick(code)"
        >
          <ClipboardCopy />
        </Button>
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
