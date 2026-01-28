import { Controller, FormProvider, useFormContext } from 'react-hook-form';
import { Text, TextProps, View, ViewProps } from 'react-native';
import { cn } from '~/utils/tailwind';
import { useFieldArray, useForm } from './hooks';
import type { ControllerProps, FieldPath, FieldValues } from './types';

type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>;

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: FormFieldProps<TFieldValues, TName>) {
  return <Controller {...props} />;
}

type FormItemProps = ViewProps;

function FormItem({ className, ...props }: FormItemProps) {
  return <View className={cn('gap-1', className)} {...props} />;
}

type FormLabelProps = TextProps & {
  required?: boolean;
  error?: boolean;
};

function FormLabel({ className, required, error, children, ...props }: FormLabelProps) {
  return (
    <Text
      className={cn(
        'text-sm font-medium text-gray-700',
        error && 'text-red-500',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

type FormDescriptionProps = TextProps;

function FormDescription({ className, ...props }: FormDescriptionProps) {
  return (
    <Text className={cn('text-sm text-gray-500', className)} {...props} />
  );
}

type FormMessageProps = TextProps & {
  error?: string;
};

function FormMessage({ className, error, children, ...props }: FormMessageProps) {
  const body = error || children;

  if (!body) {
    return null;
  }

  return (
    <Text className={cn('text-sm font-medium text-red-500', className)} {...props}>
      {body}
    </Text>
  );
}

export const Form = Object.assign(FormProvider, {
  useForm,
  useFormContext,
  useFieldArray,
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Description: FormDescription,
  Message: FormMessage,
});

export {
  FormDescription, FormField,
  FormItem,
  FormLabel, FormMessage
};

