import AnimalDropdown from "./AnimalDropdown";
import BreedDropdown from "./BreedDropdown";

const SearchForm = ({
  animals,
  breed,
  breeds,
  setBreed,
  onChangeAnimalHandler,
  animal,
  location,
  setLocation,
  requestPets,
}) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label htmlFor="location" className="form__label">
        Location
        <input
          className="form__input"
          type="text"
          id="location"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <AnimalDropdown
        id="animal"
        animals={animals}
        value={animal}
        onChange={(e) => {
          onChangeAnimalHandler(e.target.value);
          setBreed("");
        }}
      />
      <BreedDropdown
        id="breed"
        breeds={breeds}
        value={breed}
        disabled={!breeds.length}
        onChange={(e) => setBreed(e.target.value)}
        onBlur={(e) => setBreed(e.target.value)}
      />
      <button className="form__button">Submit</button>
    </form>
  );
};

export default SearchForm;
