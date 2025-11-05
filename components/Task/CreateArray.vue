<template>
  <Card>
    <CardHeader>
      <CardTitle>Array erstellen</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4">
      <ol class="list-inside list-decimal">
        <li>Schreibe eine Funktion, die einen String entgegennimmt</li>
        <li>
          Normalisiere den String (z.&nbsp;B. auf Kleinbuchstaben, optional ohne
          Sonderzeichen)
        </li>
        <li>
          Vergleiche den ursprünglichen und den umgekehrten String, um
          Palindrome zu erkennen
        </li>
        <li>
          Gib das Ergebnis mit <InlineCode>console.log</InlineCode> aus oder
          ergänze optional Input- und Button-Elemente
        </li>
      </ol>
      <CodeSnippet
        language="javascript"
        code="function addTodo(value) {
  // Implement this function
}"
        copy
      />
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://www.w3schools.com/js/js_arrays.asp']" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
