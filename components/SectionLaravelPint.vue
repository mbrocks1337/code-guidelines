<template>
  <Card>
    <CardHeader>
      <CardTitle>Laravel Pint</CardTitle>
      <CardDescription>
        Laravel Pint gibt die generelle Formatierung deines Codes vor. So bleibt
        der Code im Styling für deine gesamte Anwendung einheitlich.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Einstellung zu Laravel Pint findet man in PHPStorm unter
        <InlineCode
          >File > Settings > PHP > Quality Tools > Laravel Pint
        </InlineCode>
        .
      </p>
      <p>
        Falls man mit Laravel Sail (Docker) arbeitet, muss man zusätzlich noch
        den PHP Interpreter in PHPStorm einstellen. Wie das funktioniert,
        findest du auf der
        <InlineLink
          to="https://www.jetbrains.com/help/phpstorm/using-laravel-pint.html#configure-tool-options"
          external
        >
          JetBrains Seite
        </InlineLink>
        .
      </p>
      <hr />
      <CodeSnippet language="bash" code="composer require laravel/pint --dev" />
      <p>
        Nach der Installation sollte beim Code Cleanup Laravel Pint den Code
        formatieren.
      </p>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://laravel.com/docs/11.x/pint']" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
