const fetchPet = async (queryKey) => {
  const id = queryKey;
  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!response.ok) {
    throw new Error(`Details/ ${id} fetch not ok`);
  }
  return await response.json();
};
export default fetchPet;
