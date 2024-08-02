import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui";

export const TableCheckbox = <T extends object>(): ColumnDef<T> => ({
  id: "select",
  header: ({ table }) => (
    <div className="pr-3">
      <Checkbox
        className="border-black p-0"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  ),
  cell: ({ row }) => (
    <div className="pr-3">
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    </div>
  ),
  enableSorting: false,
  enableHiding: false,
});
