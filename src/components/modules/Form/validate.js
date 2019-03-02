const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = true;
  }

  if (!values.email) {
    errors.email = true;
  }

  if (!values.message) {
    errors.message = true;
  }

  return errors;
};

export default validate;
