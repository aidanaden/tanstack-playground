import { createFileRoute } from "@tanstack/react-router";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import { notUndefined, useVirtualizer } from "@tanstack/react-virtual";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const Status = {
  PENDING: "pending",
  PROCESSING: "processing",
  SUCCESS: "success",
  FAILED: "failed",
} as const;
type Status = (typeof Status)[keyof typeof Status];

type Payment = {
  id: string;
  amount: number;
  status: Status;
  email: string;
};

export function createRandomPayment(): Payment {
  return {
    id: faker.string.uuid(),
    amount: faker.number.float(),
    email: faker.internet.email(),
    status: faker.helpers.enumValue(Status),
  };
}

export const payments = faker.helpers.multiple(createRandomPayment, {
  count: 10_000,
});

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    // size: 100,
    header: "ID",
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium truncate max-w-[100px] text-ellipsis">
          {row.getValue("id")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    // size: 80,
    header: "Status",
  },
  {
    accessorKey: "email",
    // size: 100,
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center gap-x-1.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>Email</span>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium truncate max-w-[100px] text-ellipsis">
          {row.getValue("email")}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    // size: 80,
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    size: 30,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 p-0 flex items-center justify-center">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    // Data
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // Filtering
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    // // Pagination
    // getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const { rows } = table.getRowModel();
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 54,
    overscan: 50,
  });
  const items = virtualizer.getVirtualItems();
  const [before, after] =
    items.length > 0
      ? [
          notUndefined(items[0]).start - virtualizer.options.scrollMargin,
          virtualizer.getTotalSize() -
            notUndefined(items[items.length - 1]).end,
        ]
      : [0, 0];

  return (
    <div>
      <div className="flex items-center py-4">
        <input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div
        ref={parentRef}
        className="h-[480px] overflow-auto rounded-md border w-[500px]"
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="sticky top-0 bg-white z-10"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
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
            <TableBody className="">
              {before > 0 && (
                <tr>
                  <td colSpan={columns.length} style={{ height: before }} />
                </tr>
              )}
              {items.length ? (
                items.map((virtualRow) => {
                  const row = rows[virtualRow.index];
                  return (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      style={{
                        height: `${virtualRow.size}px`,
                      }}
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
                  );
                })
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
              {after > 0 && (
                <tr>
                  <td colSpan={columns.length} style={{ height: after }} />
                </tr>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-end space-x-2 py-4"> */}
      {/*   <button */}
      {/*     className="bg-gray-300 py-1 px-2.5 rounded" */}
      {/*     onClick={() => table.previousPage()} */}
      {/*     disabled={!table.getCanPreviousPage()} */}
      {/*   > */}
      {/*     Previous */}
      {/*   </button> */}
      {/*   <button */}
      {/*     className="bg-gray-300 py-1 px-2.5 rounded" */}
      {/*     onClick={() => table.nextPage()} */}
      {/*     disabled={!table.getCanNextPage()} */}
      {/*   > */}
      {/*     Next */}
      {/*   </button> */}
      {/* </div> */}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center container w-full mx-auto">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
