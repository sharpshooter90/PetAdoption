import { useState, useEffect } from "react";
// import { getBreedsList } from "./services/breeds";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      // const breedsResponse = await getBreedsList(animal);

      // if (breedsResponse.success) {
      //   localCache[animal] = breedsResponse.data;
      // } else {
      //   alert("Error Occured while fetching data");
      // }
      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );

      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
