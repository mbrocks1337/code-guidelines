<template>
  <Card>
    <CardHeader>
      <CardTitle>Comments</CardTitle>
      <CardDescription>
        Es sollte beschrieben werden, wie man den Code verwendet, nicht wie er
        funktioniert.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Code sollte man nur in den äußersten Notfällen kommentieren. Code sollte
        <b>dokumentiert</b> werden. Im Normalfall sollte der Code sich selbst
        erklären. Dies erfolgt durch gute Strukturierung und durch die Benennung
        und Typisierung von Variablen.
      </p>
      <p>
        Bei Änderungen im Code werden meistens die Kommentare nicht mit
        abgeändert. Dadurch erfolgt unvorhergesehenes Verhalten und Irritation.
      </p>
      <CodeSnippet
        type="dont"
        code="// get vehicles by id which is a number
function getVehicles(id: number) {
  // ...
}"
      />
      <CodeSnippet
        type="dont"
        code="// a status of 5 signals message sent
if (status === 5) {
  message.markSent();
}"
      />
      <CodeSnippet
        type="do"
        code="const MESSAGE_SENT = 5;
if (status === MESSAGE_SENT) {
  message.markSent();
}"
      />
      <p>
        Durch das Einführen einer Konstante kann der Code wie ein Fließtext
        gelesen werden.
        <TextTooltip label="(unnötige) Doppelung von Code"
          >Redundanz
        </TextTooltip>
        wird vermieden.
      </p>
    </CardContent>
    <CardFooter>
      <LinkList :links="['https://www.youtube.com/watch?v=Bf7vDBBOBUA']" />
    </CardFooter>
  </Card>
</template>
