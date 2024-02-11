import PieChart from "@/components/common/charts/PieChart";
import AddCharacters from "@/components/common/filters/AddCharacters";
import CharacterFilter from "@/components/common/filters/CharacterFilter";
import { charactersAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";

function Appearances() {
  const [characters, setCharacters] = useAtom(charactersAtom);
  return (
    <div className="container relative h-fit overflow-hidden mt-24 min-h-screen bg-primary/50 backdrop-blur-sm px-3 md:px-6 py-12 rounded-lg">
      <h1 className="italic text-slate-200">
        Compare the number of apearances of different characters in the comics.
      </h1>
      <AddCharacters characters={characters} setCharacters={setCharacters} />
      <CharacterFilter characters={characters} setCharacters={setCharacters} />
      <PieChart characters={characters} />
    </div>
  );
}

export default Appearances;
