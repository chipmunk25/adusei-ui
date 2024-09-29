import { FormWizard, InputTypes } from "adusei-ui";
import { useForm } from "react-hook-form";
import { DocumentRequestDto, DocumentValidator } from "./types";

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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
