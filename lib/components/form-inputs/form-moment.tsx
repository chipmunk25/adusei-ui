import { icons } from "lucide-react";
import { formatTime } from "@/utils";

import { ErrorProps, FormTextInput } from ".";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Label,
  Slider,
  Checkbox,
  Separator,
} from "../ui";
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
  const [varies, setVaries] = useState(false);

  const handleHoursChange = (values: number[]) => {
    setHours(values[0]);
  };

  const handleMinutesChange = (values: number[]) => {
    setMinutes(values[0]);
  };
  const resetTimeSelection = () => {
    setVaries(false);
    setMinutes(0);
    setHours(0);
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
          defaultValue={varies ? "Varies" : formatTime(hours, minutes)}
        />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-80 overflow-hidden space-y-4 relative"
      >
        <div className="absolute top-0 right-0">
          <div className="flex justify-end pb-3 p-1">
            <span
              className="text-sm font-bold text-danger-500 hover:cursor-pointer"
              onClick={resetTimeSelection}
            >
              Reset
            </span>
          </div>
        </div>
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
          <Slider
            max={23}
            step={1}
            value={[hours]}
            onValueChange={handleHoursChange}
          />
        </div>
        <div className="">
          <Label className="text-xl">Minutes:</Label>
          <Slider
            max={59}
            step={1}
            value={[minutes]}
            onValueChange={handleMinutesChange}
          />
        </div>
        <div className="px-5 w-full">
          <div className="flex justify-center items-center gap-2 ">
            <Separator />
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-neutral-200 text-neutral-900 shrink-0">
              <span>OR</span>
            </div>
            <Separator />
          </div>
        </div>
        <div className="flex gap-4 items-center pb-5">
          <Label className="text-xl">Time Varies:</Label>
          <Checkbox
            onCheckedChange={(chk) => {
              setVaries(chk ? true : false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
