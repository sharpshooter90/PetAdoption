const fetchAnimalList = async (location, animal, breed) => {
  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );
  if (!response.ok) {
    throw new Error(`Details/ ${animal} fetch not ok`);
  }
  return response.json();
};

export default fetchAnimalList;
