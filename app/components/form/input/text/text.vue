<script setup lang="ts">
import { useFormField } from "../input.composable";
import type { FormInputTextProps } from "./text.types";

const props = withDefaults(defineProps<FormInputTextProps>(), {});

const model = defineModel({ default: "" });

const formField = useFormField({
  schema: props.schema,
});

const baseProps = reactive({
  inputOuterProps: props.inputOuterProps,
  inputWrapperProps: props.inputWrapperProps,
  inputInnerProps: props.inputInnerProps,
  inputHelpProps: props.inputHelpProps,
  inputMessagesProps: props.inputMessagesProps,
  id: props.id,
  label: props.label,
  labelProps: props.labelProps,
  help: props.help,
  helpProps: props.helpProps,
  messagesProps: props.messagesProps,
});
</script>

<template>
  <FormInputBase
    v-bind="baseProps"
    v-slot="{ messages }"
    :messages="formField.errors.value"
  >
    <input
      v-model="model"
      v-bind="props.input"
      @focusout="formField.validate(model)"
      class="outline-2 py-0.5 px-2 rounded-sm focus:outline-(--gs-c-brand)"
      :class="{
        'outline-red-500 focus:outline-red-600': messages?.length,
        'focus:outline-(--gs-c-brand)': !messages?.length,
      }"
    />
  </FormInputBase>
</template>
