const validation = (schema) => {
  const validFunc = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error.message);
      return res.status(400).json({
        message: "Error from Joi or other library",
      });
    }
    next();
  };

  return validFunc;
};
module.exports = validation;
