const ValidateSignUp = (data) => {
  if (
    data.firstName &&
    data.lastName &&
    data.username &&
    data.email &&
    data.password
  ) {
    return true;
  }
  return false;
};

export default ValidateSignUp;
