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
      'bg-(--gs-c-divider) flex items-center justify-center',
      direction === 'horizontal' ? 'w-full h-0.5' : 'w-0.5 h-full',
    ]"
  >
    <div
      v-if="$slots.default"
      class="bg-(--gs-c-brand) text-(--gs-c-divider-light) w-fit rounded-xl px-2"
    >
      <slot />
    </div>
  </div>
</template>
