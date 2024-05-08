<template>
  <Card>
    <CardHeader class="flex flex-row justify-between gap-4">
      <div class="flex flex-col gap-y-1.5">
        <CardTitle>Laravel</CardTitle>
        <CardDescription>
          Laravel ist die erste Wahl für eine Backend-Anwendung.
        </CardDescription>
      </div>
      <img src="/assets/images/laravel.svg" alt="Vue Logo" width="100" />
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Laravel besitzt einen eigenen PHP Code Style Fixer namens Laravel Pint.
        Direkte Guidelines für die Nutzung von Laravel gibt es von Laravel
        selbst nicht. Im folgenden GitHub-Repository werden Best Practises für
        Laravel von unabhängigen Entwicklern aufgezeigt.
      </p>
      <p>
        <InlineLink
          to="https://github.com/alexeymezenin/laravel-best-practices/blob/master/german.md#inhaltsverzeichnis"
          external
        />
      </p>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://laravel.com/']" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts"></script>
