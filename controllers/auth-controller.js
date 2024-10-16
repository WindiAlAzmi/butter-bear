require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  regis: async (req, res) => {
    const data = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;

    try {
      const isUserThere = await User.findOne({ email: data.email }).exec();

      if (isUserThere !== null) {
        return res.status(409).json({ message: "Email sudah terdaftar" });
      } else {
        const newUser = new User(data);
        newUser.save();

        res.status(201).json({
          message: "berhasil register",
        });
      }
    } catch (error) {
      res.json({ message: "Terjadi kesalahan" });
    }
  },
  login: async (req, res) => {
    const data = req.body;

    const user = await User.findOne({ email: data.email }).exec();
    if (!user) {
      res.json({ message: "ga ada email yg didaftarkan" });
      return;
    }

    const checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) {
      res.json({ message: "password yg diberikan salah" });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
        role: user.role,
      },
      process.env.JWT_KEY
    );

    res.json({
      message: "berhasil login",
      token,
    });
  },
};
