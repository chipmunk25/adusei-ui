import { cn } from "@/utils";

import { ErrorProps, FormTextInput } from ".";

interface FormInputProps {
  autoFocus?: boolean;
  label: string;
  required?: boolean;
  errors?: ErrorProps;
  register: any;
}
export default function FormNumberInput({
  label,
  required,
  errors,
  autoFocus,
  register,
}: FormInputProps) {
  return (
    <FormTextInput
      label={label}
      required={required}
      autoFocus={autoFocus}
      type="number"
      step="0.01"
      onWheel={(e: {
        currentTarget: { blur: () => void };
        stopPropagation: () => void;
      }) => {
        //prevent value from changing on scroll
        e.currentTarget.blur();
        e.stopPropagation();
      }}
      {...register}
      className={cn("text-base", { "border-danger-500": errors?.error })}
    />
  );
}
