import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../services/fetchPet";
import Modal from "../components/Modal/Modal";
import AdoptedPetContext from "../context/AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  const { id } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["petDetails", id],
    queryFn: () => fetchPet(id),
  });
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  const pet = data?.pets[0];
  if (isLoading) {
    return (
      <div className="page-content">
        <div className="skeleton">
          <div className="skeleton__title"></div>
          <div className="skeleton__description"></div>
          <div className="skeleton__image"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="page-content">
      <h1 className="detail-page__title">{pet.name}</h1>
      <p>{pet.description}</p>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="button button--primary"
      >
        Adopt Me
      </button>
      <div className="image-gallery">
        {pet.images.map((image, index) => (
          <img key={index} src={image} alt={`${pet.name} ${index}`} />
        ))}
      </div>

      {showModal ? (
        <Modal>
          <div className="modal__content">
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="modal__actions">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
                className="button button--primary"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="button button--secondary"
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
