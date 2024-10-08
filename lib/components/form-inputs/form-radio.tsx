import { cn } from "@/utils";

import { ErrorProps, FormError } from ".";
import { Label, RadioGroup, RadioGroupItem } from "../ui";

interface Option {
  label: string;
  value: string;
}

interface Props {
  autoFocus?: boolean;
  label: string;
  required?: boolean;
  errors?: ErrorProps;
  defaultValue?: string | undefined;
  onChange: (value: string) => void;
  options: Option[];
}
export default function FormRadioInput({
  label,
  required,
  errors,
  onChange,
  defaultValue,
  options,
}: Props) {
  return (
    <div>
      <label className="space-y-1 capitalize">
        <div
          className={cn("text-base font-medium", {
            "text-danger-500": errors?.error,
          })}
        >
          {label} {required && <span className="text-danger-400">*</span>}
        </div>
        <RadioGroup
          onValueChange={onChange}
          defaultValue={defaultValue}
          className="flex flex-col items-start gap-6 py-1 lg:flex-row"
        >
          {options?.map((item: Option, key: number) => (
            <div className="flex items-center space-x-2" key={key}>
              <RadioGroupItem value={item.value} id={"option-" + (key + 1)} />
              <Label className="text-base" htmlFor={"option-" + (key + 1)}>
                {item?.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <FormError error={errors?.error} message={errors?.message} />
      </label>
    </div>
  );
}
