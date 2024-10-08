import { cn } from "@/utils";

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}
const ActiveStep = ({ title, className, onClick }: Props) => {
  return (
    <li className="w-full hover:cursor-pointer" onClick={onClick}>
      <div className="pb-2">
        <span className="text-base font-medium">{title}</span>
      </div>
      <div
        className={cn(
          "text-success-500 after:border-success-500 flex w-full items-center after:inline-block after:h-0.5 after:w-full after:border-4 after:border-b after:content-['']",
          className
        )}
      />
    </li>
  );
};

export default ActiveStep;
