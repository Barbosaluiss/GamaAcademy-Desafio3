module.exports = function (req, res, next) {
  console.log(req.headers);
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Não foi informado o token");
  }

  if (authorization !== "gama2022") {
    return res.status(401).json("token invalido");
  }

  next();
};
