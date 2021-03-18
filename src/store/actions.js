const updateFormState = (state, payload) => {
  return {
    ...state,
    ...payload
  };
};

export default updateFormState;
