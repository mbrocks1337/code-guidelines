<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>Prettier</CardTitle>
        <CardDescription>
          Prettier gibt die Formatierung deines Codes komplett vor. So bleibt
          der Code im Styling für deine gesamte Anwendung einheitlich.
        </CardDescription>
      </div>
      <img src="/assets/images/prettier.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Einstellung zu Prettier findet man in PHPStorm unter
        <InlineCode
          >File > Settings > Languages & Frameworks > JavaScript > Prettier
        </InlineCode>
        .
      </p>
      <p>
        Um Prettier mit Nuxt und ESLint verwenden zu können und deren Regeln
        nicht kollidieren, gibt es ein Prettier Plugin für ESLint (
        <InlineCode>eslint-plugin-prettier</InlineCode>
        ) und Prettier Einstellungen für ESLint (
        <InlineCode>eslint-config-prettier</InlineCode>
        ).
      </p>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://prettier.io/']" />
    </CardFooter>
  </Card>
</template>
