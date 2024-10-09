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
  FormFilesUploadInput,
  FormMomentInput,
  FormNumberInput,
  FormPasswordInput,
  FormRadioInput,
  FormRichtextInput,
  FormSelectInput,
  FormTextareaInput,
  FormTextInput,
} from ".";
import FormMultiSelectInput from "./form-multi-select";
import FormDate2Input from "./form-date-2";

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
    | InputTypes.TEXTAREA
    | InputTypes.EMAIL
    | InputTypes.PASSWORD
    | InputTypes.NUMBER;
  register: any;
  suffix?: keyof typeof icons;
  suffixClass?: string;
  description?: React.ReactNode;
};

type PhoneInputProps = BaseInputProps & {
  type:
    | InputTypes.PHONE
    | InputTypes.OTP
    | InputTypes.RICHTEXT
    | InputTypes.MOMENT;
  control: any;
  name: string;
  defaultValue?: string;
};
type FilesUploadInputProps = BaseInputProps & {
  type: InputTypes.UPLOAD;
  control: any;
  name: string;
  defaultValue: FileList | null;
};
type FileInputProps = BaseInputProps & {
  type: InputTypes.IMAGE | InputTypes.COLOR;
  control: any;
  name: string;
  defaultValue?: string;
};
type DateInputProps = BaseInputProps & {
  type: InputTypes.DATE;
  kind?: "default" | "extensive";
  control: any;
  name: string;
  disabled: {
    after: Date;
  };
};
type SelectInputProps = BaseInputProps & {
  type: InputTypes.SELECT | InputTypes.MULTIPLE;
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
  | MultiInputProps
  | PhoneInputProps
  | FileInputProps
  | FilesUploadInputProps
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
    case InputTypes.NUMBER:
      return <FormNumberInput {...formInput} />;
    case InputTypes.TEXTAREA:
      return <FormTextareaInput {...formInput} />;
    case InputTypes.MOMENT:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange, value } }) => (
            <FormMomentInput
              defaultValue={formInput.defaultValue}
              label={formInput.label}
              required={formInput.required}
              errors={formInput.errors}
              value={value}
              onChange={onChange}
            />
          )}
        />
      );

    case InputTypes.RICHTEXT:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field }) => (
            <FormRichtextInput
              label={formInput.label}
              required={formInput.required}
              errors={formInput.errors}
              field={field}
            />
          )}
        />
      );
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
    case InputTypes.MULTIPLE:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormSelectInput
              isMulti={true}
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
    case InputTypes.RADIO:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormRadioInput
              label={formInput.label}
              required={formInput.required}
              onChange={onChange}
              errors={formInput.errors}
              options={formInput.options}
              autoFocus={formInput.autoFocus}
            />
          )}
        />
      );

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
    case InputTypes.UPLOAD:
      return (
        <Controller
          control={formInput.control}
          name={formInput.name}
          render={({ field: { onChange } }) => (
            <FormFilesUploadInput
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
            <>
              {formInput.kind === "extensive" ? (
                <FormDate2Input
                  label={formInput.label}
                  required={formInput.required}
                  onChange={onChange}
                  value={value}
                  disabled={formInput.disabled}
                  className={formInput.className}
                  errors={formInput.errors}
                />
              ) : (
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
            </>
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
