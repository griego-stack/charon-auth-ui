<script setup lang="ts">
import type { FormInputBaseProps } from "./base.types";

const props = defineProps<FormInputBaseProps>();

const id = props.id ? props.id : useId();
</script>

<template>
  <div v-bind="inputOuterProps" class="InputOuter">
    <div v-bind="inputWrapperProps" class="InputWrapper">
      <slot name="label" v-bind="{ label, id, labelProps }">
        <label v-bind="labelProps" :for="id" class="InputLabel">
          {{ label }}
        </label>
      </slot>

      <div v-bind="inputInnerProps" class="InputInner">
        <slot :messages />
      </div>
    </div>

    <div class="InputHelp">
      <slot name="help" v-bind="{ help, helpProps }">
        <p v-bind="helpProps">{{ help }}</p>
      </slot>
    </div>

    <ul v-bind="inputMessagesProps" class="InputMessages">
      <li
        v-for="(message, index) in messages"
        v-bind="messagesProps"
        :key="index"
        class="InputMessage"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>
