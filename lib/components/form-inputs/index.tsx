export interface ErrorProps {
  error: boolean | undefined;
  message: string | undefined;
}
export const FormError = ({ error, message }: ErrorProps) => (
  <div>{error && <small className="text-danger-500">{message}</small>}</div>
);
export { default as FormTextInput } from "./form-input";
export { default as FormEmailInput } from "./form-email";
export { default as FormPasswordInput } from "./form-password-input";
export { default as FormFileInput } from "./form-file";
// export { default as FormPhoneInput } from "./form-phone";
export { default as FormSelectInput } from "./form-select";
export { default as FormDateInput } from "./form-date";
export { default as FormRadioInput } from "./form-radio";
export { default as FormNumberInput } from "./form-number";
export { default as FormMonthInput } from "./form-month";
export { default as FormWizard } from "./wizard";
