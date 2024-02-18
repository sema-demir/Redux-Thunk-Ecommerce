export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const setProducts = (payload) => {
  return {
    type: "SET_PRODUCTS",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};
