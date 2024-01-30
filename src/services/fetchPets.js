// const fetchPet = async (queryKey) => {
//   const { animal, location, breed } = queryKey;
//   const response = await fetch(
//     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
//   );
//   if (!response.ok) {
//     throw new Error(
//       `Please provide ${animal} - ${location} -  ${breed} to fetch data`,
//     );
//   }
//   return await response.json();
// };
// export default fetchPet;
