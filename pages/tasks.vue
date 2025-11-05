<template>
  <div>
    <Tabs
      :model-value="tabValue"
      class="g mx-auto mt-6 w-full max-w-6xl"
      @update:model-value="onUpdate"
    >
      <TabsList class="grid w-full grid-cols-3">
        <TabsTrigger
          value="tasks-level-1"
          class="bg-green-50 text-green-800 data-[state=active]:bg-green-500 data-[state=active]:text-white"
        >
          Leicht
        </TabsTrigger>
        <TabsTrigger
          value="tasks-level-2"
          class="bg-yellow-50 text-yellow-800 data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
        >
          Mittel
        </TabsTrigger>
        <TabsTrigger
          value="tasks-level-3"
          class="bg-red-50 text-red-800 data-[state=active]:bg-red-500 data-[state=active]:text-white"
        >
          Schwer
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const LEVEL_NAMES = [
  "tasks-level-1",
  "tasks-level-2",
  "tasks-level-3",
] as const;
type TaskRouteName = (typeof LEVEL_NAMES)[number];

const route = useRoute("tasks");
const tabValue = computed(() => route.name);

function isLevelRoute(value: string): value is TaskRouteName {
  return LEVEL_NAMES.some((level) => level === value);
}

function onUpdate(value: string | number) {
  const name = value.toString();
  if (!isLevelRoute(name)) return;
  navigateTo({ name });
}
</script>
