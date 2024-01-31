import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../services/fetchPet";
import Modal from "../components/Modal/Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);

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
      {/* #TODO: add a skeleton for all the components */}
      <h1 className="detail-page__title">{pet.name}</h1>
      <p>{pet.description}</p>
      <div className="image-gallery">
        {pet.images.map((image, index) => (
          <img key={index} src={image} alt={`${pet.name} ${index}`} />
        ))}
      </div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Adopt Me
      </button>

      {showModal ? (
        <Modal>
          <div className="modal__content">
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="modal__actions">
              <button>Yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
