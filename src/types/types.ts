import { Character } from "@/components/common/characters/Columns";

export type CharactersResponse = {
  data: {
    results: Character[];
  };
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type CharacterDetails = {
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: {
    items: {
      name: string;
    }[];
  };
};

export type CharacterResponse = {
  data: { results: CharacterDetails[] };
};

export type ChartCharacters = [string, number][];
