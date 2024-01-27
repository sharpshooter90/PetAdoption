import { Link } from "react-router-dom";
const Pet = ({ name, animal, location, breed, images, id, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card-pet">
        <div className="skeleton">
          <div className="skeleton__image"></div>
          <div className="skeleton__title"></div>
          <div className="skeleton__meta"></div>
          <div className="skeleton__meta"></div>
          <div className="skeleton__meta"></div>
        </div>
      </div>
    );
  }
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <div className="card-pet">
      <Link to={`/details/${id}`} className="pet" key={id}>
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="card-pet__info">
          <h3 className="card-pet__name">{name}</h3>
          <p className="card-pet__meta">{animal}</p>
          <p className="card-pet__meta">{breed}</p>
          <p className="card-pet__meta">{location}</p>
        </div>
      </Link>
    </div>
  );
};
export default Pet;
