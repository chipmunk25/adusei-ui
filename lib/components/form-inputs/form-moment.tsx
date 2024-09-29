import { icons } from "lucide-react";
import { formatTime } from "@/utils";

import { ErrorProps, FormTextInput } from ".";
import { Popover, PopoverTrigger, PopoverContent, Label, Slider } from "../ui";
import { useState } from "react";
interface FormInputProps {
  autoFocus?: boolean;
  label: string;
  placeholder?: string;
  required?: boolean;
  errors?: ErrorProps;
  register: any;
  suffix?: keyof typeof icons;
  suffixClass?: string;
}
export default function FormMomentInput({
  label,
  required,
  errors,
  autoFocus,
  register,
  placeholder,
  suffix,
  suffixClass,
}: FormInputProps) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (values: number[]) => {
    setHours(values[0]);
  };

  const handleMinutesChange = (values: number[]) => {
    setMinutes(values[0]);
  };
  return (
    <Popover>
      <PopoverTrigger className="w-full p-0 py-0">
        <FormTextInput
          label={label}
          required={required}
          errors={errors}
          autoFocus={autoFocus}
          type="text"
          register={register}
          placeholder={placeholder}
          suffix={suffix}
          suffixClass={suffixClass}
          value={formatTime(hours, minutes)}
        />
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 overflow-hidden space-y-4">
        <div className="flex gap-4 items-center justify-center">
          <div className="bg-secondary-500 w-16 h-16 rounded-lg flex justify-center items-center">
            <span className="text-3xl font-bold text-black">{hours}</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-black">:</span>
          </div>
          <div className="bg-secondary-500 w-16 h-16 rounded-lg flex justify-center items-center">
            <span className="text-3xl font-bold text-black">{minutes}</span>
          </div>
        </div>
        <div>
          <Label className="text-xl">Hours:</Label>
          <Slider max={23} step={1} onValueChange={handleHoursChange} />
        </div>
        <div>
          <Label className="text-xl">Minutes:</Label>
          <Slider max={59} step={1} onValueChange={handleMinutesChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
