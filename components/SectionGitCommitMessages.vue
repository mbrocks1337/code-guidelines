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
        History dargestellt. Sie wird mit einem Präfix versehen, um zu
        verstehen, was der Commit thematisiert. Die Headline und die
        verschiedenen Sektionen mit einem Leerzeile trennen.
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
        l
        language="plaintext"
        code="fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

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
