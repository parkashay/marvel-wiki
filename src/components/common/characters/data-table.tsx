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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
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
    <div className="container">
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
      <div className="rounded-lg overflow-hidden">
        <Table className="bg-primary/40 backdrop-blur">
          <TableHeader className="bg-text/90">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="font-semibold text-condensed text-primary"
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
                          className="rounded-full object-cover h-16 w-16"
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
          <TableFooter>
            <TableRow>
              <TableCell
                align="center"
                colSpan={3}
                className="bg-text/60 text-primary"
              >
                <div className="flex items-center justify-start md:justify-end">
                  {" "}
                  <Button
                    size="icon"
                    onClick={() => setCurrentPage((old) => old - 1)}
                    disabled={!table.getCanPreviousPage()}
                    className="rounded-full"
                  >
                    <ArrowLeft />
                  </Button>
                  {
                    <span className="px-2 py-2">
                      {" "}
                      {currentPage + 1} of {table.getPageCount()}{" "}
                    </span>
                  }
                  <Button
                    size="icon"
                    onClick={() => setCurrentPage((old) => old + 1)}
                    disabled={!table.getCanNextPage()}
                    className="rounded-full"
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
