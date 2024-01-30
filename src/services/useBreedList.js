import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["animal", animal],
    queryFn: () => fetchBreedList(animal),
    enabled: !!animal, // The query will not run if 'animal' is falsy
  });

  return [data?.breeds ?? [], error, isLoading];
}
