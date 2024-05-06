<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">Frontend</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a href="#">Vue</a>
        <a href="#">TypeScript</a>
        <a href="#">Prettier</a>
        <a href="#">ESLint</a>
      </nav>
      <div class="grid gap-6">
        <Alert variant="info">
          <AlertTitle>To Be Done</AlertTitle>
          <AlertDescription>
            This page is currently under construction.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  </main>
</template>
