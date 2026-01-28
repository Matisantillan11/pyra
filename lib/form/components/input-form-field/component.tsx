import Input from '~/components/ui/input';
import { FormField, FormItem, FormLabel, FormMessage } from '../../component';
import { useFormContext } from '../../hooks';
import { type FieldPath, type FieldValues } from '../../types';
import { InputFormFieldProps } from './types';

export function InputFormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  isRequired,
  ...inputProps
}: InputFormFieldProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <FormLabel required={isRequired} error={!!fieldState.error}>
              {label}
            </FormLabel>
          )}
          <Input
            {...inputProps}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            isError={!!fieldState.error}
          />
          <FormMessage error={fieldState.error?.message} />
        </FormItem>
      )}
    />
  );
}
