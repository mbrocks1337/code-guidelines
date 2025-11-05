<template>
  <Card>
    <CardHeader>
      <CardTitle>Gerade Zahlen</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4">
      Erstelle eine Funktion, welche:
      <ol class="list-inside list-[lower-alpha]">
        <li>Alle geraden Zahlen ausgibt</li>
        <li>Nur Zahlen unter einem bestimmten Wert ausgibt</li>
      </ol>
      <CodeSnippet
        language="javascript"
        code="const numbers = [1, 3, 4, 6, 10, 11, 12];

function getEvenNumbers(maximumNumber) {
  // Implement this function
}

const maximumNumber = 10;
console.log(getEvenNumbers(maximumNumber))"
        copy
      />
    </CardContent>
    <CardFooter>
      <LinkList
        :links="[
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder',
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
        ]"
      />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
