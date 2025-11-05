<script setup lang="ts">
import { MenuIcon } from "lucide-vue-next";

const isSidebarOpen = ref(false);
</script>
<template>
  <header
    class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
  >
    <NuxtLink :to="{ name: 'index' }">
      <img
        class="block"
        src="/assets/images/logo-mediahaus.svg"
        alt="MEDIAHAUS Logo"
        width="200"
      />
    </NuxtLink>
    <AppNavigation
      class="hidden h-1/2 max-w-full flex-row items-center gap-5 overflow-x-auto text-sm md:flex lg:gap-6"
    />
    <div class="ml-auto">
      <ColorSwitcher />
    </div>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose as-child>
          <AppNavigation @navigate="isSidebarOpen = true" />
        </SheetClose>
      </SheetContent>
    </Sheet>
  </header>
</template>
