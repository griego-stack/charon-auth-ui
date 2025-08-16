import { z } from "zod/v4";

export interface UseFormFiledProps {
  schema?: z.ZodType;
}

export function useFormField(props: UseFormFiledProps) {
  const errors = ref<string[]>();

  const validate = (value: unknown) => {
    if (!props.schema) return;

    const { success, error } = props.schema.safeParse(value);

    if (success) {
      errors.value = undefined;
      return;
    }

    errors.value = error.issues.map((issue) => issue.message);
  };

  return {
    errors,
    validate,
  };
}
