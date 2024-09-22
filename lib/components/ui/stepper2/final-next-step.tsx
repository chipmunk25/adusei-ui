import { cn } from "@/utils";

interface Props {
  title: string;
  className?: string;
}
const FinalNextStep = ({ title, className }: Props) => {
  return (
    <li className="w-full">
      <div className="pb-2">
        <span className="text-base font-medium">{title}</span>
      </div>
      <div
        className={cn(
          "after:border-secondary-200 flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']",
          className
        )}
      />
    </li>
  );
};

export default FinalNextStep;
