import { FormWizard, InputTypes } from "adusei-ui";
import { useForm } from "react-hook-form";
import { DocumentRequestDto, DocumentValidator } from "./types";

const Dashboard = () => {
  const {
    register,
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm<DocumentRequestDto>({
    resolver: DocumentValidator,
    mode: "onSubmit",
  });
  return (
    <div>
      <FormWizard
        config={[
          {
            kind: "extensive",
            type: InputTypes.DATE,
            label: "Date Occured",
            name: "dateOccured",
            control,
            errors: {
              message: errors.dateOccured?.message,
              error: !!errors.dateOccured,
            },
            disabled: {
              after: new Date(),
            },
          },
          {
            register: { ...register("dateOccured") },
            label: "Estimated Time",
            placeholder: "Select Time",
            type: InputTypes.MOMENT,
            autoFocus: true,
            required: true,
            errors: {
              message: errors.dateOccured?.message,
              error: !!errors.dateOccured,
            },
          },
          {
            kind: "default",
            type: InputTypes.DATE,
            label: "Date Occured",
            name: "dateOccured",
            control,
            errors: {
              message: errors.dateOccured?.message,
              error: !!errors.dateOccured,
            },
            disabled: {
              after: new Date(),
            },
          },
        ]}
      />

      {/* <Stepper2></Stepper2> */}
    </div>
  );
};

export default Dashboard;
