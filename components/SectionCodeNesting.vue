<template>
  <Card>
    <CardHeader>
      <CardTitle>Code Nesting</CardTitle>
      <CardDescription>
        Um den Code übersichtlich zu strukturieren, sollte eine zu starke
        Schachtelung vermieden werden. Extrahierung und Inversion wirken
        dagegen.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <section>
        <h4 class="font-bold">Extrahierung</h4>
        <p>
          Eine Funktion sollte nur eine Aufgabe erfüllen. In den meisten Fällen
          kann so eine Funktion mit vielen Aufgaben unterteilt werden. Dies
          sorgt für einen strukturierten Code, welchen man besser folgen kann.
        </p>
      </section>
      <section>
        <h4 class="font-bold">Inversion</h4>
        <p>
          Bei
          <InlineCode>if</InlineCode>
          - und
          <InlineCode>else</InlineCode>
          -Schleifen sollte bedacht werden, welche Funktionalität man zuerst
          schreibt. Im besten Fall wird die Funktion direkt beendet. (somit
          spart man sich meist die komplette
          <InlineCode>else</InlineCode>
          -Schleife)
        </p>
      </section>
      <CodeSnippet
        type="dont"
        code="function calculate(bottom: number, top: number) {
  if (top > bottom) {
    let sum = 0;
    for (let number = bottom; number <= top; number++) {
      if (number % 2 === 0) {
        sum += number;
      }
    }
    return sum;
  } else {
    return 0;
  }
}"
      />
      <p>
        Die erste Bedingung kann man invertieren, um so die
        <InlineCode>else</InlineCode>
        -Schleife zu vermeiden. Die Filterung kann man in eine separate Funktion
        <InlineCode>filterNumber</InlineCode>
        extrahieren.
      </p>
      <CodeSnippet
        type="do"
        code="function filterNumber(value: number) {
  if (value % 2 === 0) {
    return value;
  }

  return 0;
}

function calculate(bottom: number, top: number) {
  if (top < bottom) {
    return 0;
  }

  let sum = 0;
  for (let value = bottom; value <= top; value++) {
    sum += filterNumber(value);
  }
  return sum;
}"
      />
      <p>
        Beide Codeschnipsel erfüllen die gleiche Aufgabe. Obwohl der
        überarbeitete Code mehr Zeilen beansprucht, ist er dennoch
        übersichtlicher und verständlicher. Außerdem wird so eine mehrfache
        Verschachtelung vermieden.
      </p>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://www.youtube.com/watch?v=CFRhGnuXG-4']" />
    </CardFooter>
  </Card>
</template>
