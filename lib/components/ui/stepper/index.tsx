import { Fragment } from "react";

import ActiveStep from "./active";
import FinalStep from "./final";
import FinalActiveStep from "./final-active-step";
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
  const isActiveStep = (index: number) => currentStep >= index;
  const isLastActiveStep = (index: number) =>
    currentStep >= index && isFinalStep(index);
  const isNextStep = (index: number) =>
    index === currentStep + 1 && !isFinalStep(index);
  const isLastNextStep = (index: number) =>
    index === currentStep + 1 && isFinalStep(index);

  return (
    <div className="">
      <ol className="flex w-full items-center">
        {steps?.map((item, index) => (
          <Fragment key={index}>
            {isLastActiveStep(index) ? (
              <FinalActiveStep title={item.title} />
            ) : isActiveStep(index) ? (
              <ActiveStep title={item.title} />
            ) : isNextStep(index) ? (
              <NextStep title={item.title} />
            ) : isLastNextStep(index) ? (
              <FinalNextStep title={item.title} />
            ) : isFinalStep(index) ? (
              <FinalStep title={item.title} />
            ) : (
              <Step title={item.title} />
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  );
};
