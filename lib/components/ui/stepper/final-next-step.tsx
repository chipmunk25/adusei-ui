import { FaRegCircleDot } from "react-icons/fa6";

interface Props {
  title: string;
  onClick?: () => void;
}
const FinalNextStep = ({ title,onClick }: Props) => {
  return (
    <li className="w-full hover:cursor-pointer" onClick={onClick}>
      <div className="flex w-full items-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-500 p-1.5">
          <FaRegCircleDot className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-info-500" />
        </div>{" "}
      </div>
      <div className="pt-2">
        <span className="text-base font-medium">{title}</span>
      </div>
    </li>
  );
};

export default FinalNextStep;
