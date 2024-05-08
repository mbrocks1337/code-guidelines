<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultValue = ["commit-message-1"];
</script>

<template>
  <Accordion
    type="multiple"
    class="w-full"
    collapsible
    :default-value="defaultValue"
  >
    <AccordionItem value="commit-message-1">
      <AccordionTrigger>feat:</AccordionTrigger>
      <AccordionContent>Eine Neuerung wird implementiert.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="commit-message-2">
      <AccordionTrigger>fix:</AccordionTrigger>
      <AccordionContent>Ein Fehler wird behoben.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="commit-message-3">
      <AccordionTrigger>chore:</AccordionTrigger>
      <AccordionContent>
        <InlineCode>package.json</InlineCode>
        ,
        <InlineCode>composer.json</InlineCode> oder ähnliches müssen upgedated
        werden.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="commit-message-4">
      <AccordionTrigger>other:</AccordionTrigger>
      <AccordionContent
        >Anpassungen, welche keiner Kategorie zugeordnet werden können.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="commit-message-5">
      <AccordionTrigger>revert:</AccordionTrigger>
      <AccordionContent
        >Vorheriger Commit wird zurückgesetzt.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
