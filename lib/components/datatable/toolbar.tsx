// import { Table } from "@tanstack/react-table";

// import { DataTableViewOptions } from "./view-options";

interface DataTableToolbarProps {
  // table: Table<TData>;
  toolbar?: { title?: string; actions?: React.ReactNode };
}
interface IProps extends DataTableToolbarProps {
  filter?: {
    placeholder: string;
    search: string;
    searchOnchange: (search?: string) => void;
  };
}

export function DataTableToolbar({ toolbar }: IProps) {
  return (
    <div className="flex justify-between">
      <div className="text-[28px] font-medium text-primary-500">
        {toolbar?.title}
      </div>
      {toolbar?.actions}
    </div>
  );
}
