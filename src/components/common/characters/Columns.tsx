import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: true,
  },
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
