const { validate, Joi } = require("express-validation");
// Joi é a biblioteca que valida as informações

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(), // edde Joi.required mostra que é um campo OBRIGATÓRIO
    email: Joi.string().email().required(),
    senha: Joi.string().min(8).required(),
  }),
});
