import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Thumbnail } from "@/types/types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      columnVisibility: { id: false },
      pagination: {
        pageIndex: currentPage,
        pageSize: 20,
      },
    },
  });

  return (
    <div>
      {currentPage == 0 ? (
        <div className="flex items-center justify-center py-4">
          <Input
            placeholder="Search by character name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className=" max-w-sm bg-primary/50 backdrop-blur"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full my-3">
          <Button
            className="flex items-center justify-center"
            variant="outline"
            onClick={() => {
              setCurrentPage(0);
            }}
          >
            Search <Search size={20} color="crimson" />{" "}
          </Button>
        </div>
      )}
      <div className="rounded-md">
        <Table className="bg-primary/40 backdrop-blur">
          <TableHeader className="bg-red-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-xl text-white"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => navigate("/character/" + row.getValue("id"))}
                  className="cursor-pointer hover:bg-primary/60 transition-all duration-500"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.id == "thumbnail" ? (
                        <img
                          src={
                            (cell.getValue() as Thumbnail).path +
                            "." +
                            (cell.getValue() as Thumbnail).extension
                          }
                          alt="img"
                          className="rounded-full object-cover h-24 w-24"
                        />
                      ) : (
                        <span>
                          {" "}
                          {(cell.getValue() as string) ||
                            "Marvel has not provided a description for this character"}{" "}
                        </span>
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
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((old) => old - 1)}
          disabled={!table.getCanPreviousPage()}
          className="font-bold hover:bg-primary/50"
          >
          &larr; prev
        </Button>
          {
            <span className="bg-primary/50 backdrop-blur-sm rounded px-2 py-2">
              {" "}
              {currentPage + 1} of {table.getPageCount()}{" "}
            </span>
          }
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((old) => old + 1)}
          disabled={!table.getCanNextPage()}
          className="font-semibold"
        >
          Next &rarr;
        </Button>
      </div>
    </div>
  );
}
