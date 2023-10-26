const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//
//
//
// view user || get request
const viewUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) throw Error("Users user cannot fetch");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
//
// view single user || get request
const singleuser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw Error("User not exist");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
//
// delete user || delete request
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw Error("User not exist");
    res.status(200).json({ message: "User is Deleted", user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
//
// Update user || put request
const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    if (!user) throw Error("User not exist");
    res.status(200).json({ message: "User is Updated", user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
// Create user || register a user
const userSignup = async (req, res) => {
  const { image, firstname, lastname, email, password, confirmPassword } =
    req.body;
  try {
    if (!firstname || !lastname || !email || !password || !confirmPassword)
      throw Error("All fileds must be filed");
    // is User exist ?
    const exist = await User.findOne({ email });
    if (exist) throw Error("Email is in use");
    // Hashing password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = await User.create({
      image,
      firstname,
      lastname,
      email,
      password: hashPassword,
      confirmPassword: hashPassword,
    });
    // create a token
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//
//
//
// login a user || post request
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw Error("All fileds must be filed");
    // is User exist ?
    const existUser = await User.findOne({ email });
    if (!existUser) throw Error("Email is incorrect");
    // Hashing password
    const match = await bcrypt.compare(password, existUser.password);
    if (!match) throw Error("Password is incorrect");

    // create a token
    // const token = createToken(existUser._id);
    const userData = {
      _id: existUser._id,
      image: existUser.image,
      firstname: existUser.firstname,
      lastname: existUser.lastname,
      email: existUser.email,
    };
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//
//
//
// Exports all method
module.exports = {
  viewUser,
  singleuser,
  deleteUser,
  updateUser,
  userSignup,
  userLogin,
};
