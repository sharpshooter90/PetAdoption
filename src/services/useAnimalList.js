import { useQuery } from "@tanstack/react-query";
import fetchAnimalList from "./fetchAnimalList";

export default function useAnimalList(location, animal, breed) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["pets", location, animal, breed],
    queryFn: () => fetchAnimalList(location, animal, breed),
  });

  return [isLoading, data?.pets, error]; // Return isLoading and error as well
}
