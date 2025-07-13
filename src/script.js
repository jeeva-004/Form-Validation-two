function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email);
}

