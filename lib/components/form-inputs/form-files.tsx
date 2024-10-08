import { ErrorProps, FormError } from ".";
import { FileUpload } from "../ui";
import { cn } from "@/utils";

interface Props {
  label: string;
  required?: boolean;
  errors?: ErrorProps;
  onChange: (files: FileList | null) => void;
  defaultValue: FileList | null;
}
export default function FormFilesUploadInput({
  label,
  required,
  errors,
  defaultValue,
  onChange,
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

        <FileUpload onChange={onChange} defaultValue={defaultValue} />
        <FormError error={errors?.error} message={errors?.message} />
      </label>
    </div>
  );
}
