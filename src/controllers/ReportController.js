const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@%.com",
        },
      },
      include: [
        {
          association: "addresses",
          where: { street: "Rua Major Dantas Cortez" },
        },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};
