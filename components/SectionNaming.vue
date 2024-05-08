<template>
  <Card>
    <CardHeader>
      <CardTitle>Benennung von Variablen</CardTitle>
      <CardDescription>
        Variablennamen sollten selbsterklärend sein. Es gibt jedoch nicht die
        eine Lösung.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Man sollte selbst überlegte Variablennamen <b>nicht abkürzen</b>. Dein
        <TextTooltip
          label="Code-Editor wie z.B. Visual Studio Code oder PHPStorm"
          >IDE
        </TextTooltip>
        vervollständigt Variablen mit IntelliSense. Somit muss man nicht alle
        Variablen von Hand schreiben.
      </p>
      <img src="/assets/images/intelliSense.png" alt="IntelliSense Beispiel" />
      <Alert variant="info">
        <AlertDescription>
          Man ließt Code öfter als man schreibt. Inzwischen verwendet man große
          4K Bildschirme. Somit hat man keine Vorteile mit verkürzten
          Variablennamen.
        </AlertDescription>
      </Alert>
      <hr />
      <CodeSnippet
        type="dont"
        code="function relScore(m1: Mov, m2: Mov): number {
  const GW = 0.4;
  const YW = 0.1;
  const DW = 0.2;
  const WW = 0.3;

  let s = 0;
  if (m1.gen === m2.gen) {
    s += GW;
  }
  if (m1.yr === m2.yr) {
    s += YW;
  }
  if (m1.dir === m2.dir) {
    s += DW;
  }

  for (const w in m1.writers) {
    if (m2.writers.indexOf(w) !== -1) {
      s += WW;
      break;
    }
  }
  return s;
}

function movOnPg(m: Mov[], pg: number): Mov[] {
  const pp = 12;
  const s = (pg - 1) * pp;
  return m.slice(s, s + pg);
}"
      />
      <CodeSnippet
        type="do"
        code="function movieRelationScore(movie1: Movie, movie2: Movie): number {
  const GENRE_WEIGHT = 0.4;
  const YEAR_WEIGHT = 0.1;
  const DIRECTOR_WEIGHT = 0.2;
  const WRITER_WEIGHT = 0.3;

  let score = 0;
  if (movie1.genre === movie2.genre) {
    score += GENRE_WEIGHT;
  }
  if (movie1.year === movie2.year) {
    score += YEAR_WEIGHT;
  }
  if (movie1.director === movie2.director) {
    score += DIRECTOR_WEIGHT;
  }

  for (const writer in movie1.writers) {
    if (movie2.writers.indexOf(writer) !== -1) {
      score += WRITER_WEIGHT;
      break;
    }
  }
  return score;
}

function moviesOnPage(movies: Movie[], page: number): Movie[] {
  const amountPerPage = 12;
  const start = (page - 1) * amountPerPage;
  return movies.slice(start, start + page);
}"
      />
      <hr />
      <p>
        Variablen sollten nicht mit einem Typen-Prefix beginnen. Sie sollten
        jedoch Einheiten beinhalten.
      </p>
      <CodeSnippet type="dont" code="const iDelay = 10;" />
      <CodeSnippet type="do" code="const delayInSeconds = 10;" />
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://www.youtube.com/watch?v=-J3wNP6u5YU']" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
