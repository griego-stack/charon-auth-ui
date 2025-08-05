<script setup lang="ts">
interface Props {
  title?: string;
}
defineProps<Props>();
</script>

<template>
  <main class="flex flex-col items-center justify-center">
    <section
      class="flex flex-col items-center justify-center gap-6 w-full py-6 min-h-screen"
    >
      <div
        class="flex flex-col bg-(--gs-c-bg-mute) rounded-2xl p-6 shadow-lg gap-4 max-w-[25rem] w-full"
      >
        <div class="flex flex-col items-center gap-4">
          <NuxtImg src="/images/logo.png" width="120" class="object-cover" />

          <slot name="title">
            <h1 v-if="title" class="text-3xl text-center font-medium">
              {{ title }}
            </h1>
          </slot>
        </div>

        <slot />
      </div>
    </section>
  </main>
</template>
