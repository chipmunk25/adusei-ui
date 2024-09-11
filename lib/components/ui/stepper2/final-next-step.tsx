interface Props {
  title: string;
}
const FinalNextStep = ({ title }: Props) => {
  return (
    <li className="w-full">
      <div className="pb-2">
        <span className="text-base font-medium">{title}</span>
      </div>
      <div className="after:border-secondary-200 flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']" />
    </li>
  );
};

export default FinalNextStep;
