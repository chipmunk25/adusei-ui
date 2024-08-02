// import { Controller } from "react-hook-form";
import { icons } from "lucide-react";
import React from "react";
import { Controller } from "react-hook-form";
import { Button, Icon, SelectComponents } from "@/components/ui";
import { InputTypes, Option } from "@/utils/constants";
import { cn } from "@/utils";

import {
  ErrorProps,
  FormDateInput,
  FormEmailInput,
  FormFileInput,
  FormPasswordInput,
  FormSelectInput,
  FormTextInput,
} from ".";
import FormMultiSelectInput from "./form-multi-select";

interface BaseInputProps {
  errors: ErrorProps;
  autoFocus?: boolean;
  readOnly?: boolean;
  required?: boolean;
  label: string;
  className?: string;
  placeholder?: string;
}
type TextInputProps = BaseInputProps & {
  type:
    | InputTypes.TEXT
    | InputTypes.EMAIL
    | InputTypes.PASSWORD
    | InputTypes.NUMBER;
  register: any;
  suffix?: keyof typeof icons;
  suffixClass?: string;
  description?: React.ReactNode;
};

type PhoneInputProps = BaseInputProps & {
  type: InputTypes.PHONE | InputTypes.OTP | InputTypes.RICHTEXT;
  control: any;
  name: string;
};
type FileInputProps = BaseInputProps & {
  type: InputTypes.IMAGE | InputTypes.COLOR;
  control: any;
  name: string;
  defaultValue?: string;
};
type DateInputProps = BaseInputProps & {
  type: InputTypes.DATE;
  control: any;
  name: string;
  disabled: {
    after: Date;
  };
};
type SelectInputProps = BaseInputProps & {
  type: InputTypes.SELECT;
  control?: any;
  name: string;
  options: Option[];
  defaultValue?: Option;
  value?: Option;
  components?: Partial<SelectComponents>;
};
// type SearchableSelectInputProps = BaseInputProps & {
//   type: InputTypes.SEARCHABLE_SELECT;
//   control?: any;
//   name: string;
//   options: Option[];
//   defaultValue?: Option;
//   value?: Option;
//   searchPlaceholder?: string;
//   prefix?: React.FC;
// };
type MultiInputProps = BaseInputProps & {
  type: InputTypes.MULTI;
  control?: any;
  name: string;
  options: Option[];
  defaultValue?: Option[];
  values?: Option[];
};
type RadioInputProps = BaseInputProps & {
  control?: any;
  name: string;
  options: Option[];
  type: InputTypes.RADIO;
};
interface ButtonProps {
  type: InputTypes.SUBMIT;
  title: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  prefix?: keyof typeof icons;
  prefixClass?: string;
  suffix?: keyof typeof icons;
  suffixClass?: string;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
}
export type FormInput =
  | TextInputProps
  | SelectInputProps
  // | SearchableSelectInputProps
  | MultiInputProps
  | PhoneInputProps
  | FileInputProps
  | DateInputProps
  | RadioInputProps
  | ButtonProps;

interface Props {
  className?: string;
  config: FormInput[];
  fieldWrapperClassName?: string;
}

export default function FormWizard({
  className,
  fieldWrapperClassName,
  config,
}: Props) {
  return (
    <div className={cn("space-y-4", className)}>
      {config?.map((formInput: FormInput, index) => (
        <div key={index} className={cn(fieldWrapperClassName)}>
          {FormWizardSwitch(formInput)}
        </div>
      ))}
    </div>
  );
}

const FormWizardSwitch = (formInput: FormInput) => {
  switch (formInput.type) {
    case InputTypes.TEXT:
      return <FormTextInput {...formInput} />;
    case InputTypes.EMAIL:
      return <FormEmailInput {...formInput} />;
    case InputTypes.PASSWORD:
      return <FormPasswordInput {...formInput} />;
    case InputTypes.SELECT:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormSelectInput
              isMulti={false}
              defaultValue={formInput.defaultValue}
              label={formInput.label}
              required={formInput.required}
              onChange={onChange}
              errors={formInput.errors}
              options={formInput.options}
              autoFocus={formInput.autoFocus}
              placeholder={formInput.placeholder}
              components={formInput.components}
            />
          )}
        />
      );

    // case InputTypes.SEARCHABLE_SELECT:
    //   return (
    //     <Controller
    //       control={formInput.control}
    //       name={formInput.name}
    //       render={({ field: { onChange } }) => (
    //         <FormSearchableSelectInput
    //           defaultValue={formInput.defaultValue}
    //           label={formInput.label}
    //           required={formInput.required}
    //           onChange={onChange}
    //           errors={formInput.errors}
    //           options={formInput.options}
    //           autoFocus={formInput.autoFocus}
    //           placeholder={formInput.placeholder}
    //           searchPlaceholder={formInput.searchPlaceholder}
    //           prefix={formInput.prefix}
    //         />
    //       )}
    //     />
    //   );

    case InputTypes.MULTI:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormMultiSelectInput
              defaultValue={formInput.defaultValue}
              label={formInput.label}
              required={formInput.required}
              onChange={onChange}
              errors={formInput.errors}
              options={formInput.options}
              autoFocus={formInput.autoFocus}
              placeholder={formInput.placeholder}
            />
          )}
        />
      );

    case InputTypes.IMAGE:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormFileInput
              defaultValue={formInput.defaultValue}
              label={formInput.label}
              required={formInput.required}
              onChange={onChange}
              errors={formInput.errors}
            />
          )}
        />
      );
    case InputTypes.DATE:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange, value } }) => (
            <FormDateInput
              label={formInput.label}
              required={formInput.required}
              onChange={onChange}
              value={value}
              disabled={formInput.disabled}
              className={formInput.className}
              errors={formInput.errors}
            />
          )}
        />
      );
    case InputTypes.SUBMIT:
      return (
        <Button
          disabled={formInput.disabled}
          onClick={formInput.onClick}
          type="submit"
          size={formInput.size}
          className={formInput.className}
          variant={formInput.variant ? formInput.variant : "secondary"}
        >
          {formInput.loading ? (
            <Icon name="LoaderCircle" className="mr-2 animate-spin" />
          ) : (
            formInput.prefix && (
              <Icon
                className={cn("pr-2", formInput.prefixClass)}
                name={formInput.prefix}
              />
            )
          )}
          {formInput.title}
        </Button>
      );
    default:
      return null;
  }
};
