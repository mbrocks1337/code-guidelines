<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>Vue</CardTitle>
        <CardDescription>
          Vue ist die erste Wahl für eine Frontend-Anwendung. Diese sollte mit
          dem Metaframework Nuxt erweitert werden, wenn es ein größeres Projekt
          ist.
        </CardDescription>
      </div>
      <img src="/assets/images/vue.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Vue verfügt über eine umfangreiche
        <InlineLink to="https://vuejs.org/guide/introduction.html" external>
          Dokumentation
        </InlineLink>
        und einen eigenen
        <InlineLink to="https://vuejs.org/style-guide/" external>
          Style Guide
        </InlineLink>
        .
      </p>
      <hr />
      <b>Composition vs. Options API</b>
      <p>
        Mit beiden API Styles lassen sich alle gewöhnlichen Anwendungsfälle
        umsetzen. Die Options API basiert sogar auf der Composition API. Die
        Options API basiert auf einem klassenbasiertes Model. Die Composition
        API basiert auf reaktiven Variablen.
      </p>
      <Alert variant="info">
        <AlertDescription>
          <b
            >Nuxt 3 hat sich auf die
            <TextTooltip label="Developer Experience">DX</TextTooltip>
            für die Composition API spezialisiert.</b
          >
          Darum wird diese empfohlen, um die Entwicklung zu erleichtern. Die
          Options API kann trotzdem für kleinere Projekte verwendet werden.
        </AlertDescription>
      </Alert>
      <section class="grid gap-2">
        <b>Options API</b>
        <CodeSnippet
          type="good"
          code="export default {
  // Deklarierte Variablen in data() werden reaktiv
  // und können über `this` verwendet werden.
  data() {
    return {
      count: 0
    }
  },

  // Methoden (methods) sind Funktionen, die den Zustand
  // von deklarierte Variablen verändern und Aktualisierungen auslösen.
  // Sie können als Event-Handler im <template> eingebunden werden.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle-Hooks werden zu verschiedenen Zeitpunkten
  // des Lifecycles einer Komponente aufgerufen.
  //
  // Diese Funktion wird aufgerufen, wenn die Komponente im DOM auftaucht.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}"
        />
      </section>
      <section class="grid gap-2">
        <b>Composition API</b>
        <CodeSnippet
          type="do"
          code='// In Nuxt ist das importieren nicht nötig
import { ref, onMounted } from "vue"

// Reaktive Variable
const count = ref(0)

// Funktionen, die den Zustand von deklarierte Variablen
// verändern und Aktualisierungen auslösen.
function increment() {
  count.value++
}

// Lifecycle-Hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})'
        />
      </section>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://vuejs.org/']" />
    </CardFooter>
  </Card>
</template>

<script>
const arr = ["test", "test"];
</script>
