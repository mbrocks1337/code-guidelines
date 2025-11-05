<template>
  <Card>
    <CardHeader>
      <CardTitle>Palindrom</CardTitle>
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
        code="function isPalindrome(str) {
  // Implement this function
}

console.log(isPalindrome('racecar'));"
        copy
      />
    </CardContent>
    <CardFooter>
      <LinkList
        :links="[
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
        ]"
      />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
