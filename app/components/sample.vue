<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}
defineProps<Props>();
</script>

<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-(--gs-c-bg) text-(--gs-c-text-1)"
  >
    <h1 class="text-2xl font-bold">
      {{ title }}
    </h1>
    <p class="mt-2 text-(--gs-c-text-3)">
      {{ description }}
    </p>

    <slot />
  </main>
</template>
