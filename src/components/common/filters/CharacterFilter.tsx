import { Button } from "@/components/ui/button";
import { ChartCharacters } from "@/types/types";
import { SetStateAction } from "jotai";
import { X } from "lucide-react";
import { Dispatch } from "react";

function CharacterFilter({
  characters,
  setCharacters,
}: {
  characters: ChartCharacters;
  setCharacters: Dispatch<SetStateAction<ChartCharacters>>;
}) {
  const handleFilter = (char: string) => {
    const newCharacters = characters.filter((c) => c[0] !== char);
    setCharacters(newCharacters);
  };

  return (
    <div>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        {characters.map((char) => (
          <Button
            key={char[0]}
            variant={"destructive"}
            size={"sm"}
            className="flex gap-2 items-center justify-center capitalize rounded-full"
            onClick={() => handleFilter(char[0])}
            >
            {" "}
            {char[0]} <X size={15} />{" "}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CharacterFilter;
