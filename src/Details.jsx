import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
const Details = () => {
  const { id } = useParams();
  const { data, error } = useQuery({
    queryKey: ["petDetails]", id],
    queryFn: () => fetchPet(id),
  });
  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <div className="page-content">
      <h1>Details</h1>
      {data?.pets.map((pet, index) => (
        <div key={index}>
          <h1>{pet.name}</h1>
          <p>{pet.description}</p>
          <div className="image-gallery">
            {pet.images.map((image, index) => (
              <img key={index} src={image} alt={`${pet.name} ${index}`} />
            ))}
          </div>
        </div>
      ))}

      {/* <p>{pet.name}</p>
      <p>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
      </p>
      <button>Adopt {pet.name}</button> */}
    </div>
  );
};

export default Details;
