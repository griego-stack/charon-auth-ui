import type { InputHTMLAttributes } from "vue";
import type { FormInputBaseProps } from "../base/base.types";
import type z from "zod/v4";

export interface FormInputTextProps
  extends Omit<FormInputBaseProps, "messages"> {
  input?: InputHTMLAttributes;
  schema?: z.ZodString | z.ZodEmail;
}
