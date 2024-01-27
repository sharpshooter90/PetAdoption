// AnimalDropdown.jsx
const AnimalDropdown = ({ id, animals, value, onChange }) => {
  return (
    <label htmlFor={id} className="form__label">
      Animal
      <select
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onChange}
        className="form__select"
      >
        <option />
        {animals.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
    </label>
  );
};

export default AnimalDropdown;
