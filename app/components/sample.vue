<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}
defineProps<Props>();
</script>

<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="mt-2 text-gray-600">{{ description }}</p>

    <slot />
  </main>
</template>
