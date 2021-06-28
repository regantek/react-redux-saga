export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};
export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};
export const petFavoriteIncrement = (number) => {
  return {
    type: "PET_FAVORITE_INCREASED",
    payload: number,
  };
};

export const petFavoriteDecrement = () => {
  return {
    type: "PET_FAVORITE_DECREASED",
  };
};
