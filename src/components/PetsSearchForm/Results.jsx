import Pet from "../Pet/Pet";

const Results = ({ pets, isLoading }) => {
  if (!pets.length && !isLoading) {
    return <h1>No Pets Found</h1>;
  }

  if (isLoading) {
    return (
      <div className="search-results">
        {Array.from({ length: 10 }).map((_, i) => (
          <Pet key={i} isLoading={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="search-results">
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))}
    </div>
  );
};

export default Results;
