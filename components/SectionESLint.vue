<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>ESLint</CardTitle>
        <CardDescription>
          ESLint analysiert statisch deinen JavaScript-/TypeScript-Code.
          Verbesserungsvorschläge werden direkt im
          <TextTooltip
            label="Code-Editor wie z.B. Visual Studio Code oder PHPStorm"
            >IDE
          </TextTooltip>
          dargestellt.
        </CardDescription>
      </div>
      <img src="/assets/images/eslint.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Einstellung zu ESLint findet man in PHPStorm unter
        <InlineCode
          >File > Settings > Languages & Frameworks > JavaScript > Code Quality
          Tools > ESLint
        </InlineCode>
        .
      </p>
      <p>
        Nuxt bietet ein eigenes Plugin für ESLint an, welches in Verbindung mit
        dem Prettier-Plugin verwendet werden kann. Die neuste Version 9
        funktioniert aktuell mit PHPStorm noch nicht. Einen Installationsguide
        für die Legacy Version gibts
        <InlineLink
          to="https://eslint.nuxt.com/packages/config#legacy-config-format"
          external
          >hier
        </InlineLink>
        .
      </p>
      <p>ESLint sollte aktuell maximal die <b>Version 8.57.0</b> haben.</p>
      <section>
        <CodeSnippet
          code='module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
};
'
        />
      </section>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://eslint.org/']" />
    </CardFooter>
  </Card>
</template>
