export const getBreedsList = async (animal) => {
  const response = {
    error: false,
    success: true,
    data: null,
  };

  try {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
    );

    const json = await res.json();
    response.data = json.breeds || [];
  } catch (error) {
    response.error = true;
    response.success = false;
  }

  return response;
};
