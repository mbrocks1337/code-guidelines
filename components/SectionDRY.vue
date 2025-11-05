<template>
  <Card>
    <CardHeader>
      <CardTitle>DRY (Don't Repeat Yourself)</CardTitle>
      <CardDescription>
        Wenn man beim schreiben merkt, dass man sich langsam wiederholt...
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        In vielen Fällen ist es kein Problem, wenn man ähnliches Verhalten
        zweimal schreibt. Beim dritten Mal sollte man jedoch überlegen, den Code
        umzustrukturieren, um Wiederholungen zu vermeiden.
      </p>
      <p>
        Im folgenden Beispiel werden zwei Funktionen mit ähnlicher
        Funktionalität <b>generalisiert und zusammengefügt</b>. Dadurch lässt
        sich der Code im späteren Verlauf einfacher anpassen und erweitern.
      </p>
      <CodeSnippet
        type="dont"
        code="const CUSTOMER_ROLE = 1;
const ADMIN_ROLE = 2;

function setCustomerRoles(users: User[]) {
  for (const user in users) {
    user.role = CUSTOMER_ROLE;
  }
}

function setAdminRoles(users: User[]) {
  for (const user in users) {
    user.role = ADMIN_ROLE;
  }
}

setCustomerRoles(users);
// oder
setAdminRoles(users);"
      />
      <CodeSnippet
        type="do"
        code="const CUSTOMER_ROLE = 1;
const ADMIN_ROLE = 2;

function setRoles(users: User[], role: number) {
  for (const user in users) {
    user.role = role;
  }
}

setRoles(users, CUSTOMER_ROLE);
// oder
setRoles(users, ADMIN_ROLE);"
      />
    </CardContent>
  </Card>
</template>
