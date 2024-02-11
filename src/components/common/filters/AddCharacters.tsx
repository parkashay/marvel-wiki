import { ChartCharacters } from "@/types/types";
import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { appearances } from "@/lib/data";
import { PlusCircle } from "lucide-react";

/**
 *  The characters are taken as a static data as appearances because marvel api just provides 100
 *  characters at a time and also restricts the number of characters
 *  upto 100 that can be fetched at a time.
 *
 */

function AddCharacters({
  characters,
  setCharacters,
}: {
  characters: ChartCharacters;
  setCharacters: Dispatch<SetStateAction<ChartCharacters>>;
}) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const handleChoose = (e: string) => {
    let info = e.split(":");
    let char = [info[0], Number(info[1])] as ChartCharacters[0];
    setCharacters([...characters, char]);
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <Button onClick={() => setOpen(true)} variant="secondary" className="font-semibold" >
          Add more characters <PlusCircle size={20} />
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={toggleOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Choose a character:">
            {appearances
              .filter(
                (c) =>
                  !characters
                    .toString()
                    .toLowerCase()
                    .includes(c.toString().toLowerCase())
              )
              .map((char) => (
                <CommandItem
                  key={char[0]}
                  onSelect={handleChoose}
                  value={`${char[0]}:${char[1]}`}
                  className="cursor-pointer"
                >
                  {" "}
                  {char[0]}{" "}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default AddCharacters;
