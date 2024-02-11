import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Md5 } from "ts-md5";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<T>(endpoint: string): Promise<T> {
  const API_URL = import.meta.env.VITE_MARVEL_API_URL;
  const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime().toString();
  const hash = Md5.hashStr(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  return fetch(
    API_URL +
      endpoint +
      "?ts=" +
      ts +
      "&apikey=" +
      PUBLIC_KEY +
      "&hash=" +
      hash +
      "&limit=100",
  ).then((res) => res.json());
}
