import { InputProps } from '~/components/ui/input/types';
import { FieldPath, FieldValues } from '../../types';

export type InputFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<InputProps, 'value' | 'onChangeText' | 'onBlur' | 'isError' | 'errorText'> & {
  name: TName;
};
