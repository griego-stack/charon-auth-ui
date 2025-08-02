<script setup lang="ts">
useHead({
  title: "Charon Auth UI",
  meta: [
    {
      name: "description",
      content: "This is Charon Auth UI template of Grigo Stack.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
