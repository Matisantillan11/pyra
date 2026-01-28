import { useForm as useRHForm, useFormContext, useFieldArray } from 'react-hook-form';
import type { FieldValues, UseFormProps, UseFormReturn } from './types';

export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props?: UseFormProps<TFieldValues>
): UseFormReturn<TFieldValues> {
  return useRHForm<TFieldValues>(props);
}

export { useFormContext, useFieldArray };
