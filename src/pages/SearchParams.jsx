import React, { useState, useEffect } from "react";

import useBreedList from "../services/useBreedList";
import Results from "../components/PetsSearchForm/Results";
import SearchForm from "../components/PetsSearchForm/SearchForm";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    setIsLoading(true);

    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await res.json();
    setPets(json.pets);
    setIsLoading(false);
    console.log(json);
  }

  const onChangeAnimalHandler = (animal) => {
    if (animal) {
      setAnimal(animal);
    }
  };

  return (
    <div className="search-params page-content">
      <div className="search-form-container">
        <SearchForm
          animal={animal}
          breed={breed}
          breeds={breeds}
          onChangeAnimalHandler={onChangeAnimalHandler}
          setBreed={setBreed}
          location={location}
          setLocation={setLocation}
          requestPets={requestPets}
          animals={ANIMALS}
        />
      </div>
      <div className="search-result-container">
        <Results pets={pets} isLoading={isLoading} />
      </div>
    </div>
  );
};
export default SearchParams;
