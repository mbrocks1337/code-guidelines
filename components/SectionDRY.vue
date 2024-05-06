<template>
  <Card>
    <CardHeader>
      <CardTitle>DRY (Don't Repeat Yourself)</CardTitle>
      <CardDescription>
        Code sollte in den meisten Fällen nicht doppelt geschrieben werden.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <p>
        Im folgendem Beispiel werden zwei Funktionen mit ähnlicher
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
}"
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

[CUSTOMER_ROLE, ADMIN_ROLE].forEach((role) => {
  setRoles(users, role);
});"
      />
    </CardContent>
  </Card>
</template>
