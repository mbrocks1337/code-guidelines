<template>
  <Card>
    <CardHeader>
      <CardTitle>Refactoring</CardTitle>
      <CardDescription>
        Refactoring beschreibt das Ändern von bestehendem Code.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Das Refactoring sollte nicht separiert von einer Aufgabe geschehen. Es
        sollte immer inhaltlich zur Aufgabe passen, damit beim Commit nur die
        angepassten Dateien auftauchen.
      </p>
      <p>
        <b>Leserlichkeit</b> und <b>Performance</b> stehen im Vordergrund.
        Subjektive Änderungen sollten vermieden werden.
      </p>
      <CodeSnippet
        type="dont"
        code="// Vorher
const userScore = 0;
// Nachher
const scoreOfUser = 0;"
      />
      <CodeSnippet
        type="do"
        code="// Vorher (z.B. falls Variable eine Zeitangabe für das Speichern von Cookies ist)
var h = 6;
// Nachher
const cookieDurationInHours = 6;"
      />
    </CardContent>
  </Card>
</template>
<script setup lang="ts"></script>
