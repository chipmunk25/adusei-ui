import { FormWizard, InputTypes, NoIconStepper } from "adusei-ui";
import { useForm } from "react-hook-form";
import { DocumentRequestDto, DocumentValidator } from "./types";
import { useState } from "react";

const Dashboard = () => {
  const {
    // register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DocumentRequestDto>({
    resolver: DocumentValidator,
    mode: "onSubmit",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const [activeStep, setActiveStep] = useState(0);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NoIconStepper
        currentStep={activeStep}
        setCurrentStep={setActiveStep}
        steps={[
          {
            description: "Step 1",
            title: "Step 1",
          },
          {
            description: "Step 2",
            title: "Step 2",
          },
          {
            description: "Step 3",
            title: "Step 3",
          },
        ]}
      >
        <div>welcome</div>
      </NoIconStepper>
      <FormWizard
        config={[
          // {
          //   kind: "extensive",
          //   type: InputTypes.DATE,
          //   label: "Date Occured",
          //   name: "dateOccured",
          //   control,
          //   errors: {
          //     message: errors.dateOccured?.message,
          //     error: !!errors.dateOccured,
          //   },
          //   disabled: {
          //     after: new Date(),
          //   },
          // },

          {
            type: InputTypes.MOMENT,
            label: "Date Occured",
            name: "dateOccured",
            control,
            errors: {
              message: errors.dateOccured?.message,
              error: !!errors.dateOccured,
            },
          },
          {
            type: InputTypes.SUBMIT,
            title: "Submit",
          },
        ]}
      />
    </form>
  );
};

export default Dashboard;
