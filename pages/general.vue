<template>
  <main
    class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 pb-32 md:gap-8 md:p-10 md:pb-32"
  >
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">Allgemein</h1>
    </div>
    <div
      class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
    >
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a href="#git-message">Git Commit Messages</a>
        <a href="#refactoring">Refactoring</a>
        <a href="#code-nesting">Code Nesting</a>
        <a href="#comments">Comments</a>
        <a href="#naming">Benennung</a>
        <a href="#dry">DRY</a>
        <a href="#side-effects">Side Effects</a>
      </nav>
      <div class="grid gap-6">
        <SectionGitCommitMessages id="git-message" />
        <SectionRefactoring id="refactoring" />
        <SectionCodeNesting id="code-nesting" />
        <SectionComments id="comments" />
        <SectionNaming id="naming" />
        <SectionDRY id="dry" />
        <SectionSideEffects id="side-effects" />
      </div>
    </div>
  </main>
</template>
