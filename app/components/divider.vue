<script setup lang="ts">
interface Props {
  direction?: "horizontal" | "vertical";
}
withDefaults(defineProps<Props>(), {
  direction: "horizontal",
});
</script>

<template>
  <div
    role="separator"
    :aria-orientation="direction"
    :class="[
      'bg-[var(--gs-c-divider)] flex items-center justify-center',
      direction === 'horizontal' ? 'w-full h-0.5' : 'w-0.5 h-full',
    ]"
  >
    <div
      v-if="$slots.default"
      class="bg-[var(--gs-c-brand)] w-fit rounded-full px-1.5"
    >
      <slot />
    </div>
  </div>
</template>
