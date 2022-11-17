const User = require("../models/User");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getUserInfo = async (req, res) => {
  const mongooseId = req.params.id;
  const user = await User.findById(mongooseId);
  res.send({ email: user.email, bio: user.bio });
};

module.exports = {
  getUserInfo,
};
