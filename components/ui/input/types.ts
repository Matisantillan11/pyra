import { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  label?: string;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
}
