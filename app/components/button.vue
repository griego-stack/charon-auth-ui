<script setup lang="ts">
import { NuxtLink } from "#components";

interface Props {
  to?: string;
  icon?: string;
}
defineProps<Props>();

const loading = defineModel<boolean>("loading", {
  default: false,
  required: false,
});
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="Button flex items-center justify-center bg-(--gs-c-brand) text-(--gs-c-text-inverse-1) py-1 rounded-md shadow-2xl"
    :class="{
      'opacity-50 cursor-not-allowed': loading,
      'cursor-pointer': !loading,
    }"
    :disabled="loading"
  >
    <Icon v-if="icon" :name="icon" class="inline-block mr-2 text-xl" />
    <slot />
  </component>
</template>

<style scoped>
.Button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.Button:active {
  background-color: var(--gs-c-brand-lig);
  transform: scale(0.98);
}
</style>
