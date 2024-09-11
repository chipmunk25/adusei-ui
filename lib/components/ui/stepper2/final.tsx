interface Props {
  title: string;
}
const FinalStep = ({ title }: Props) => {
  return (
    <li className="w-full">
      <div className="pb-2">
        <span className="text-base font-medium">{title}</span>
      </div>
      <div className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-neutral-200 after:content-['']" />
    </li>
  );
};

export default FinalStep;
