<template>
  <Card>
    <CardHeader>
      <CardTitle>Array erstellen</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4">
      <ol class="list-inside list-decimal">
        <li>Leeres Array erstellen</li>
        <li>Funktion hinzufügen um einen Todo hinzuzufügen</li>
        <li>Liste ausgeben mit <InlineCode>console.log</InlineCode></li>
        <li>(optional) Input- und Button-Element hinzufügen</li>
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
