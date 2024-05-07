<template>
  <Card>
    <CardHeader>
      <CardTitle>Side Effects</CardTitle>
      <CardDescription>
        Funktionen sollten eine Aufgabe haben und frei von Side Effects sein.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Side Effects treten auf, wenn eine Funktion mehrere Dinge übernimmt und
        diese nicht direkt ersichtlich sind. Dies kann man vermeiden, in dem man
        alle benötigten Variablen durch die Parameter mitgibt.
      </p>
      <p>
        Außerdem kann man mit dem
        <InlineCode>return</InlineCode>
        modifizierten Code zurückgeben. Dadurch sind diese Funktionen auch in
        sich geschlossen.
      </p>
      <Alert variant="info">
        <AlertDescription>
          Geschlossene Funktionen lassen sich leichter durch Unit-Tests testen.
        </AlertDescription>
      </Alert>
      <CodeSnippet
        type="dont"
        code="function handleRequest(request: Request) {
  if (!request.body) return;

  function formatUserEmail(): string {
    // Innerhalb dieser Funktion werden Variablen von außerhalb verwendet
    if (!request.body) return '';
    return request.body.email.toLowerCase();
  }

  return formatUserEmail();
}"
      />
      <CodeSnippet
        type="do"
        code="function formatUserEmail(email: string): string {
  return email.toLowerCase();
}

function handleRequest(request: Request) {
  if (!request.body) return;

  const formattedEmail = formatUserEmail(request.body.email);
  return formattedEmail;
}"
      />
    </CardContent>
  </Card>
</template>
