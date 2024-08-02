import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import DataTablePaginate from "./paginate";
import TableRowSkeleton from "./table-skeleton";
import { DataTableToolbar } from "./toolbar";
import { TPaginationResponse, paginationParams } from "./types";

interface DatatableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  pagination?: paginationParams;
  tableParams?: TPaginationResponse;

  toolbar?: { title: string; actions: React.ReactNode };
  filter?: {
    searchOnchange: (search?: string) => void;
    searchPlaceholder: string;
    searchColumn: string;
  };
}
const Datatable = <TData,>({
  data,
  columns,
  isLoading,
  pagination,
  tableParams,
  // filter,
  // actions,
  toolbar,
}: DatatableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: tableParams?.pageIndex as number,
        pageSize: tableParams?.pageSize as number,
      },
    },
    manualPagination: true,
  });

  return (
    <div className="w-full space-y-4">
      <DataTableToolbar toolbar={toolbar} />
      <Table className="bg-white">
        <TableHeader className="w-full text-black">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="sticky top-0 z-10 font-Bold text-black"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        {isLoading ? (
          <TableRowSkeleton
            columns={columns.length}
            rows={tableParams?.pageSize}
          />
        ) : (
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="text-primary-500"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
      <DataTablePaginate
        table={table}
        pagination={pagination}
        tableParams={tableParams}
      />
    </div>
  );
};

export default Datatable;
