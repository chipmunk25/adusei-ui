import { cn } from "@/utils";

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}
const FinalStep = ({ title, className ,onClick}: Props) => {
  return (
    <li className="w-full hover:cursor-pointer" onClick={onClick}>
      <div className="pb-2">
        <span className="text-base font-medium">{title}</span>
      </div>
      <div
        className={cn(
          "flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']",
          className
        )}
      />{" "}
    </li>
  );
};

export default FinalStep;
