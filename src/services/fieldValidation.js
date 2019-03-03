const isValidEmail = (value) => {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return true;
  return false;
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = true;
  }

  if (!values.email || !isValidEmail(values.email)) {
    errors.email = true;
  }

  if (!values.message) {
    errors.message = true;
  }

  return errors;
};

export default validate;
