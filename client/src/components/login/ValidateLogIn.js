const ValidateLogIn = (data) => {
  if (data.emailOrUsername && data.password) {
    return true;
  }
  return false;
};

export default ValidateLogIn;
