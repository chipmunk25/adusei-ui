// import { icons } from "lucide-react";
// import { formatTime } from "@/utils";

// import { ErrorProps, FormTextInput } from ".";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Label,
  Slider,
  Checkbox,
  Separator,
} from "../ui";
// import { useRef, useState } from "react";
// import { UseFormRegisterReturn } from "react-hook-form";
// interface FormInputProps<TFieldValues extends string> {
//   autoFocus?: boolean;
//   label: string;
//   placeholder?: string;
//   required?: boolean;
//   errors?: ErrorProps;
//   value?: string | undefined;
//   onChange: (option: string | undefined) => void;
//   suffix?: keyof typeof icons;
//   suffixClass?: string;
// }
// export default function FormMomentInput<TFieldValues extends string>({
//   label,
//   required,
//   errors,
//   autoFocus,
//   value,
//   onChange,
//   placeholder,
//   suffix,
//   suffixClass,
// }: FormInputProps<TFieldValues>) {

//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [varies, setVaries] = useState(false);

//   const handleHoursChange = (values: number[]) => {
//     setHours(values[0]);
//     onChange(formatTime(values[0], minutes));
//   };

//   const handleMinutesChange = (values: number[]) => {
//     setMinutes(values[0]);
//     onChange(formatTime(hours, values[0]));
//   };
//   const resetTimeSelection = () => {
//     setVaries(false);
//     setMinutes(0);
//     setHours(0);
//     onChange(formatTime(0, 0));
//   };

//   return (
//     <Popover>
//       <PopoverTrigger className="w-full p-0 py-0">
//         <FormTextInput
//           value={value}
//           onChange={(e) => {
//             setVaries(false);
//             onChange(e.target.value);
//           }}

//           label={label}
//           required={required}
//           errors={errors}
//           autoFocus={autoFocus}
//           type="text"

//           placeholder={placeholder}
//           suffix={suffix}
//           suffixClass={suffixClass}
//           defaultValue={varies ? "Varies" : formatTime(hours, minutes)}
//         />
//       </PopoverTrigger>
//       <PopoverContent
//         align="start"
//         className="w-80 overflow-hidden space-y-4 relative"
//       >
//         <div className="absolute top-0 right-0">
//           <div className="flex justify-end pb-3 p-1">
//             <span
//               className="text-sm font-bold text-danger-500 hover:cursor-pointer"
//               onClick={resetTimeSelection}
//             >
//               Reset
//             </span>
//           </div>
//         </div>
//         <div className="flex gap-4 items-center justify-center">
//           <div className="bg-secondary-500 w-16 h-16 rounded-lg flex justify-center items-center">
//             <span className="text-3xl font-bold text-black">{hours}</span>
//           </div>
//           <div>
//             <span className="text-3xl font-bold text-black">:</span>
//           </div>
//           <div className="bg-secondary-500 w-16 h-16 rounded-lg flex justify-center items-center">
//             <span className="text-3xl font-bold text-black">{minutes}</span>
//           </div>
//         </div>
//         <div>
//           <Label className="text-xl">Hours:</Label>
//           <Slider
//             max={23}
//             step={1}
//             value={[hours]}
//             onValueChange={handleHoursChange}
//           />
//         </div>
//         <div className="">
//           <Label className="text-xl">Minutes:</Label>
//           <Slider
//             max={59}
//             step={1}
//             value={[minutes]}
//             onValueChange={handleMinutesChange}
//           />
//         </div>
//         <div className="px-5 w-full">
//           <div className="flex justify-center items-center gap-2 ">
//             <Separator />
//             <div className="h-8 w-8 flex justify-center items-center rounded-full bg-neutral-200 text-neutral-900 shrink-0">
//               <span>OR</span>
//             </div>
//             <Separator />
//           </div>
//         </div>
//         <div className="flex gap-4 items-center pb-5">
//           <Label className="text-xl">Time Varies:</Label>
//           <Checkbox
//             onCheckedChange={(chk) => {
//               setVaries(chk ? true : false);
//             }}
//           />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

import { Input } from "@/components/ui";
import { cn, formatTime } from "@/utils";

import { ErrorProps, FormError } from ".";
import { useState } from "react";

interface Props {
  label: string;
  required?: boolean;
  errors?: ErrorProps;
  value?: string | undefined;
  onChange: (option: string | undefined) => void;
  placeholder?: string;
}

export default function FormMomentInput({
  label,
  errors,
  value,
  onChange,
  placeholder,
}: Props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (values: number[]) => {
    setHours(values[0]);
    onChange(formatTime(values[0], minutes));
  };

  const handleMinutesChange = (values: number[]) => {
    setMinutes(values[0]);
    onChange(formatTime(hours, values[0]));
  };
  const resetTimeSelection = () => {
    setMinutes(0);
    setHours(0);
    onChange(formatTime(0, 0));
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full p-0 py-0">
        <MomentInput
          value={value}
          onChange={onChange}
          label={label}
          errors={errors}
          placeholder={placeholder}
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
              onChange(chk ? "Varies" : formatTime(hours, minutes));
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

const MomentInput = ({
  label,
  required,
  errors,
  value,
  onChange,
  placeholder,
}: Props) => (
  <div>
    <div className="space-y-1 capitalize text-left">
      <div
        className={cn("text-sm font-medium", {
          "text-danger-500": errors?.error,
        })}
      >
        {label} {required && <span className="text-danger-400">*</span>}
      </div>

      <div>
        <Input
          readOnly={true}
          value={value}
          prefix={"Watch"}
          prefixClass={"text-neutral-600"}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cn("", {
            "border-danger-500": errors?.error,
          })}
        />
      </div>
      <FormError error={errors?.error} message={errors?.message} />
    </div>
  </div>
);
