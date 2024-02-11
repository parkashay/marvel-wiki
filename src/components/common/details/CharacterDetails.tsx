import { Star } from "lucide-react";
import { CharacterDetails } from "@/types/types";

function CharacterDetails(character: CharacterDetails) {
  return (
    <div className="bg-primary/30 backdrop-blur-sm py-6 px-3 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="h-full w-full md:p-6 flex flex-col items-center">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt="s"
            className="h-full w-full rounded max-h-[400px] max-w-[400px] object-cover "
          />
          <div className="flex items-center gap-2">
            Ratings: 4.5/5{" "}
            <Star color="yellow" fill="yellow" height={20} width={20} />{" "}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 divide-y">
            <div className="font-semibold text-xl"> {character?.name} </div>
            <div> {character?.description || "no description"} </div>
            <div className="flexflex-wrap">
              <span className="font-semibold">Appeared in (Comics):</span>
              <div className="flex flex-col gap-2 py-2">
                {character?.comics?.items?.map((comic) => (
                  <span
                    key={comic.name}
                    className="bg-primary/90 italic w-fit text-text rounded-lg px-3 py-2"
                  >
                    {comic.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
