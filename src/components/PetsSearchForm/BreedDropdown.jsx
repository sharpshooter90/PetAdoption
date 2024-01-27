// BreedDropdown.jsx
const BreedDropdown = ({ id, breeds, value, disabled, onChange, onBlur }) => {
  return (
    <label htmlFor={id} className="form__label">
      Breed
      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        className="form__select"
      >
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
