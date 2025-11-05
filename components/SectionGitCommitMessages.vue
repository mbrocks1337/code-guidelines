<template>
  <Card>
    <CardHeader>
      <CardTitle>Git Commit Messages</CardTitle>
      <CardDescription>
        Commit Messages sollten ein einheitliches Format haben, um so die Git
        History im GitLab und im
        <TextTooltip
          label="Code-Editor wie z.B. Visual Studio Code oder PHPStorm"
          >IDE
        </TextTooltip>
        übersichtlicher zu gestalten.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Die erste Zeile beschreibt den Commit und diese wird auch in der Git
        History dargestellt.
      </p>
      <ul class="list-inside list-disc">
        <li>
          <b>Ticketnummer</b> aus dem JIRA-Projekt
          <small>(wenn es kein Ticket gibt, dann eins erstellen)</small>
        </li>
        <li><b>Commit-Typ</b> (fix, feat, refactor, etc.)</li>
        <li><b>Spezifikation</b> des Commits (z.B. header, auth, database)</li>
        <li><b>Kurze Beschreibung</b> des Commits</li>
      </ul>
      <p>
        Die Headline und die verschiedenen Sektionen mit einem Leerzeile
        trennen.
        <TextTooltip
          label="Eine Änderung, welche eine bestehende Funktionalität beeinträchtigt oder unbrauchbar macht."
          >BREAKING CHANGES
        </TextTooltip>
        sollten als solche zu erkennen sein.
      </p>
      <CodeSnippet
        type="dont"
        language="plaintext"
        code="fix bugs and improve code"
      />
      <CodeSnippet
        type="do"
        language="plaintext"
        code="TCKNR-69 fix(header): fix foo to enable bar

This fixes the broken behavior of the header by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>"
      />
      <CommitMessages />
    </CardContent>
    <CardFooter>
      <LinkList
        :links="[
          'https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/',
        ]"
      />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
