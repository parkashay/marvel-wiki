import CharacterDetails from "@/components/common/details/CharacterDetails";
import Error from "@/components/common/fallback/Error";
import Loading from "@/components/common/fallback/Loading";
import { fetcher } from "@/lib/utils";
import { CharacterResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const Character = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["character"],
    queryFn: () => fetcher<CharacterResponse>(`/characters/${params.id}`),
  });

  if (error) return <Error />;

  return isLoading ? (
    <Loading />
  ) : (
    <CharacterDetails {...data?.data.results[0]!} />
  );
};

export default Character;
