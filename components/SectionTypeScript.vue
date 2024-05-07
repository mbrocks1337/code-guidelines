<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-2">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>TypeScript</CardTitle>
        <CardDescription>
          TypeScript ist ein Superset von JavaScript. Alles in JavaScript ist
          valides TypeScript. Durch statische Typisierung fallen Fehler
          frühzeitig auf.
        </CardDescription>
      </div>
      <img src="/assets/images/typescript.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        TypeScript ist vollständig kompatibel mit Vue und Nuxt. Fehler werden
        beim kompilieren des TypeScripts in JavaScript erkannt und nicht erst
        innerhalb der Runtime.
      </p>
      <p>
        Um in
        <InlineCode>.vue</InlineCode>
        -Dateien TypeScript zu verwenden, nutze dafür
        <InlineCode>lang="ts"</InlineCode>
        im
        <InlineCode>script</InlineCode>
        -Tag.
      </p>
      <p>
        Zusätzlich kann in der
        <InlineCode>nuxt.config.ts</InlineCode>

        TypeScript strikter gestellt und mit einem
        <TextTooltip
          label="Mit einem Watcher bekommst du Live Kompilierungsfehler direkt angezeigt."
          >Watcher
        </TextTooltip>
        versehen werden.
      </p>
      <CodeSnippet
        type="do"
        code="export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
});"
      />
      <Alert variant="info">
        <AlertDescription>
          <b>
            TypeScript ist sehr umfangreich und im vollen Umfang sehr mächtig.
          </b>
          Besser frühzeitig oft kleine Fehler beheben, als diese später auf Prod
          zu finden.
        </AlertDescription>
      </Alert>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://www.typescriptlang.org/']" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
