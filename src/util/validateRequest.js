// Validate the front end requests with joi with this function

function validateRequest(schema) {
  return (req, res, next) => {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
      next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
    } else {
      req.body = value;
      next();
    }
  };
}

module.exports = validateRequest;
