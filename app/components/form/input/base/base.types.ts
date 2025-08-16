import type {
  HTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  ReservedProps,
} from "vue";

export type HTMLProps = HTMLAttributes & ReservedProps;

export interface FormInputBaseProps {
  inputOuterProps?: HTMLProps;
  inputWrapperProps?: HTMLProps;
  inputInnerProps?: HTMLProps;
  inputHelpProps?: HTMLProps;
  inputMessagesProps?: HTMLProps;

  id?: string;

  label?: string;
  labelProps?: LabelHTMLAttributes & ReservedProps;

  help?: string;
  helpProps?: HTMLProps;

  messages?: string[];
  messagesProps?: LiHTMLAttributes & ReservedProps;
}
