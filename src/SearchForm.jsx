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
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label htmlFor="location">
        Location
        <input
          type="text"
          id="location"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          type="select"
          id="animal"
          value={animal}
          placeholder="animal"
          onChange={(e) => (
            onChangeAnimalHandler(e.target.value), setBreed("")
          )}
        >
          <option />
          {animals.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          type="select"
          disabled={!breeds.length}
          id="breed"
          value={breed}
          placeholder="breed"
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
