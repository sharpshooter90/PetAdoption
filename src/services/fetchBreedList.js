const fetchBreedList = async (queryKey) => {
  const animal = queryKey;
  const response = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!response.ok) {
    throw new Error(`Details/ ${animal} fetch not ok`);
  }
  return await response.json();
};
export default fetchBreedList;
