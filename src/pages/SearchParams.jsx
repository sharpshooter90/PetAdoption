import React, { useState } from "react";

import useBreedList from "../services/useBreedList";
import Results from "../components/PetsSearchForm/Results";
import AnimalDropdown from "../components/PetsSearchForm/AnimalDropdown";
import BreedDropdown from "../components/PetsSearchForm/BreedDropdown";
import useAnimalList from "../services/useAnimalList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [inputAnimal, setInputAnimal] = useState("");
  const [formData, setFormData] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [breeds] = useBreedList(inputAnimal);
  const [isLoading, pets, error] = useAnimalList(
    formData.location,
    formData.animal,
    formData.breed,
  );

  const handleAnimalInputChange = (e) => {
    const { value } = e.target;
    setInputAnimal(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      location: formData.get("location") ?? "",
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
    };
    setFormData(obj);
  };

  return (
    <div className="search-params page-content">
      <div className="search-form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="location" className="form__label">
            Location
            <input
              className="form__input"
              type="text"
              id="location"
              name="location"
              placeholder="location"
            />
          </label>
          <AnimalDropdown
            id="animal"
            name="animal"
            animals={ANIMALS}
            value={inputAnimal}
            onChange={handleAnimalInputChange}
          />
          <BreedDropdown
            id="breed"
            name="breed"
            breeds={breeds}
            disabled={!breeds.length}
          />
          <button type="submit" className="form__button">
            Submit
          </button>
        </form>
      </div>
      <div className="search-result-container">
        <Results pets={pets} isLoading={isLoading} />
      </div>
    </div>
  );
};
export default SearchParams;
