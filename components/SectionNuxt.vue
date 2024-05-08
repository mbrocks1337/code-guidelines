<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>Nuxt</CardTitle>
        <CardDescription>
          Nuxt ist ein Metaframework von Vue. Eine erweiterte Anwendung ist
          damit einfacher umzusetzen.
        </CardDescription>
      </div>
      <img src="/assets/images/nuxt.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Eine eigene
        <InlineLink to="https://nuxt.com/docs/guide" external
          >Dokumentation
        </InlineLink>
        von Nuxt steht zur verfügung. Best Practises von Vue werden hier auch
        angewandt. Am effektivsten ist Nuxt in Verbindung mit
        <InlineLink to="#typescript">TypeScript</InlineLink>
        ,
        <InlineLink to="#eslint">ESLint</InlineLink>
        und
        <InlineLink to="#prettier">Prettier</InlineLink>
        .
      </p>
      <hr />
      <section class="grid gap-2">
        <b>Auto Imports</b>
        <p>
          Jegliche Vue Komponenten, Composables und Funktionen können ohne
          <InlineCode>import</InlineCode>
          verwendet werden.
        </p>
        <CodeSnippet
          language="typescript"
          class="mt-3"
          type="dont"
          code='import { ref, computed } from "vue";

const count = ref(1);
const double = computed(() => count.value * 2);'
        />
        <CodeSnippet
          language="typescript"
          class="mt-3"
          type="do"
          code="/* ref(), computed() usw. werden automatisch importiert */
const count = ref(1);
const double = computed(() => count.value * 2);"
        />
      </section>
      <hr />
      <section class="grid gap-2">
        <b>Vordefinierte Projektstruktur</b>
        <p>
          Nuxt gibt eine feste Projektstruktur vor, welche man befolgen sollte.
          Somit ist ein neues Projekt direkt vertraut und man weiß wo man suchen
          muss.
        </p>
        <p>
          Eine
          <InlineLink
            to="https://nuxt.com/docs/guide/directory-structure/app"
            external
            >Dokumentation
          </InlineLink>
          zu den verschiedenen Ordnern stellt Nuxt bereit.
        </p>
      </section>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://nuxt.com/']" />
    </CardFooter>
  </Card>
</template>
