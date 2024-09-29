export interface Option {
  label: string;
  value: string;
}

export enum InputTypes {
  TEXT = "text",
  OTP = "otp",
  EMAIL = "email",
  NUMBER = "number",
  PASSWORD = "password",
  PHONE = "phone",
  MOMENT = "moment",
  SELECT = "select",
  MULTIPLE = "multiple",
  MULTI = "multi",
  DATE = "date",
  RANGE = "daterange",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  RICHTEXT = "richtext",
  UPLOAD = "upload",
  IMAGE = "image",
  BUTTON = "button",
  SUBMIT = "submit",
  COLOR = "color",
}

export const HEADER_HEIGHT_CLASS = "h-10";
