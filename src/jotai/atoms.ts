import { ChartCharacters } from "@/types/types";
import { atom } from "jotai";

export const charactersAtom = atom<ChartCharacters>([
  ["Hulk", 10],
  ["Captain America", 20],
  ["Iron Man", 30],
  ["Captain Marvel", 5],
]);
