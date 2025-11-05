<template>
  <Card>
    <CardHeader>
      <CardTitle>Workflow</CardTitle>
      <CardDescription>
        Eine Auflistung von Schritten, um ein (neues) Feature zu implementieren.
        Von der Aufgabenerfassung bis zum Live Deployment.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <Accordion type="multiple" class="w-full" collapsible>
        <AccordionItem value="workflow-step-1">
          <AccordionTrigger>1. Ticket einsehen oder erstellen</AccordionTrigger>
          <AccordionContent class="grid gap-4">
            <p>
              Sind alle Fragen zur Umsetzung des Tickets beantwortet? Sind alle
              <TextTooltip
                label="Seltene Fälle, die man nicht direkt vor Augen hat"
              >
                Edge Cases
              </TextTooltip>
              behandelt? Wenn das nicht der Fall ist, sollten vor der Umsetzung
              diese beantwortet werden.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workflow-step-2">
          <AccordionTrigger>2. Feature Branch erstellen</AccordionTrigger>
          <AccordionContent class="grid gap-4">
            <p>
              Um ein neues Feature gesondert zum Rest des Projektes zu
              implementieren, sollte eine neue Feature Branch erstellt werden.
            </p>
            <Alert variant="info">
              <AlertDescription>
                <div class="flex flex-wrap items-center gap-2">
                  <b>Benennung des Branches:</b>
                  <InlineCode>feature/&lt;Ticket-ID&gt;</InlineCode>
                </div>
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workflow-step-3">
          <AccordionTrigger>3. Umsetzung</AccordionTrigger>
          <AccordionContent class="grid gap-4">
            <p>
              Sollten Fragen beim Programmieren auftreten, sollten diese direkt
              mit einem Entwickler oder dem Kunden abgeklärt werden. Deine
              Anpassungen sollten in (mehreren)
              <InlineLink to="/general#git-message">Commits</InlineLink>
              gut dokumentiert werden.
            </p>
            <p>
              Diese Commits werden dann während des Merge Requests
              <TextTooltip
                label="Eine Reihe an Commits werden zu einem einzigen Commit zusammengefasst"
                >gesquasht
              </TextTooltip>
              .
            </p>
            <p>
              Im Anschluss taucht nur dieser eine gesquashte Commit in der
              Versionierung auf. Dadurch ist die Git Historie wesentlich
              übersichtlicher.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workflow-step-4">
          <AccordionTrigger>4. Merge Request erstellen</AccordionTrigger>
          <AccordionContent class="grid gap-4">
            <p>
              Hier wird dein Code von einem anderen Entwickler überprüft. Wenn
              der Merge Request approved ist, wird der Code in den Main Branch
              gemerged. Wenn der Code noch Fehler enthält, muss der Code
              überarbeitet werden.
            </p>
            <p>
              Weitere Informationen zum Merge Request findest du
              <InlineLink to="#merge-request">hier</InlineLink>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workflow-step-5">
          <AccordionTrigger>5. Deploy auf die Testumgebung</AccordionTrigger>
          <AccordionContent class="grid gap-4">
            <p>
              Der Main Branch mit den neuen Anpassungen sollte regelmäßig auf
              die Testumgebung deployt werden. Somit kann der Kunden die neuen
              Anpassungen testen und abnehmen. Fehler sollten gesammelt unter
              einem Bugfix Branch abgearbeitet werden.
            </p>
            <Alert variant="info">
              <AlertDescription>
                <div class="flex flex-wrap items-center gap-2">
                  <b>Benennung des Bugfix Branches:</b>
                  <InlineCode>bugfix/&lt;Ticket-ID&gt;</InlineCode>
                </div>
              </AlertDescription>
            </Alert>
            <p>
              Falls noch Änderungen gewünscht sind, werden diese unter
              <b>zusätzlichen Aufwand</b> bearbeitet, wenn diese so nicht im
              Ticket besprochen wurden.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="workflow-step-6">
          <AccordionTrigger
            >6. Deploy auf die Produktionsumgebung</AccordionTrigger
          >
          <AccordionContent class="grid gap-4">
            <p>
              Im besten Fall sind nun alle Features, welche im Main Branch sind,
              bereit für die Produktion. Nun erstellt man vom aktuellsten Main
              Branch einen Tag mit einer Versionsnummer. Dieser Commit wird dann
              mit der Versionsnummer auf die Produktionsumgebung deployt.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
</template>
<script setup lang="ts"></script>
