import { DataTable } from "./characters/data-table";
import { columns } from "./characters/Columns";
import { fetcher } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { CharactersResponse } from "@/types/types";
import Loading from "./fallback/Loading";

function CharactersTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetcher<CharactersResponse>("/characters"),
  });

  return isLoading ? (
    <Loading />
  ) : (
    <DataTable columns={columns} data={error ? [] : data?.data.results!} />
  );
}

export default CharactersTable;
