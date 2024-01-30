// BreedDropdown.jsx
const BreedDropdown = ({ id, name, breeds, disabled }) => {
  return (
    <label htmlFor={id} className="form__label">
      Breed
      <select id={id} name={name} disabled={disabled} className="form__select">
        <option />
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  );
};

export default BreedDropdown;
