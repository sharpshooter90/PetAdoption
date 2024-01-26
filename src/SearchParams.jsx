import React, { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import SearchForm from "./SearchForm";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await res.json();
    setPets(json.pets);
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
        <Results pets={pets} />
      </div>
    </div>
  );
};
export default SearchParams;
