import { Fragment } from "react";

import ActiveStep from "./active";
import FinalStep from "./final";
import FinalNextStep from "./final-next-step";
import NextStep from "./next-step";
import Step from "./step";

interface Props {
  currentStep: number;
  steps: {
    title: string;
    description: string;
  }[];
}

export const Stepper = ({ currentStep, steps }: Props) => {
  const isFinalStep = (index: number) => index === steps.length - 1;
  const isLastActiveStep = (index: number) =>
    currentStep === index && isFinalStep(index);
  const isActiveStep = (index: number) => currentStep === index || index === 0;

  const isCompletedStep = (index: number) => currentStep > index;
  const isLastNotActiveStep = (index: number) => index === steps.length - 1;
  return (
    <div className="">
      <ol className="flex w-full items-center">
        {steps?.map((item, index) => {
          return (
            <Fragment key={index}>
              {isCompletedStep(index) ? (
                <ActiveStep title={item.title} />
              ) : isLastActiveStep(index) ? (
                <FinalNextStep title={item.title} />
              ) : isActiveStep(index) ? (
                <NextStep title={item.title} />
              ) : isLastNotActiveStep(index) ? (
                <FinalStep title={item.title} />
              ) : (
                <Step title={item.title} />
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
};
