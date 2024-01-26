import { Link } from "react-router-dom";
const Pet = ({ name, animal, location, breed, images, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <div>
      <Link to={`/details/${id}`} className="pet" key={id}>
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p>{`${animal} - ${breed} - ${location}`}</p>
        </div>
      </Link>
    </div>
  );
};
export default Pet;
