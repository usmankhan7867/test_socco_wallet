export const passwordValidator = (main, confirm) => {
  const hasCapital = /[A-Z]/.test(main);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(main);
  const isMinLength = main?.length >= 8;

  if (!isMinLength) {
    return false;
  } else if (!hasCapital) {
    return false;
  } else if (!hasSpecialChar) {
    return false;
  } else if (main !== confirm) {
    return false;
  } else {
    return true;
  }

  //   if (!isMinLength) {
  //     setIsValid(false);
  //     return [false, "Password must be at least 8 characters long." ];
  //   } else if (!hasCapital) {
  //     setIsValid(false);
  //     setErrorMessage("Password must contain at least 1 capital letter.");
  //     return false;
  //   } else if (!hasSpecialChar) {
  //     setIsValid(false);
  //     setErrorMessage("Password must contain at least 1 special character.");
  //     return false;
  //   } else if (main !== confirm) {
  //     setIsValid(false);
  //     setErrorMessage("Passwords do not match.");
  //     return false;
  //   } else {
  //     setIsValid(true);
  //     setErrorMessage("");
  //     return true;
  //   }
};
