module.exports = {
  validation: (signinData) => {
    passwordVald = false;
    if (signinData.password == signinData.rePassword) {
      passwordVald = true;
    }
    return passwordVald;
  },
};
