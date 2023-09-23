const bcrypt = require("bcryptjs");
const User = require("../../models/user/user");
const appErr = require("../../utils/appErr");
//Register
const registerCtrl = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  // check if field is empty
  if (!fullname || !email || !password) {
    return next(appErr("All fields are required"));
  }
  try {
    //1. Check if user exists(email)
    const userFound = await User.findOne({ email });
    // throw error
    if (userFound) {
      return next(appErr("User already Exist"));
      //return res.json({ status: "failed", data: "User already Exist" });
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    //register userS
    const user = await User.create({
      fullname,
      email,
      password: passwordHashed,
    });
    res.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};
//Login
const loginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(appErr("Email and Password fields are require"));
  }
  try {
    // Check the user is exist
    const userFound = await User.findOne({ email });
    if (!userFound) {
      // throw an error
      if (userFound) {
        return next(appErr("Invalid login Credentials"));
        //return res.json({
        //  status: "failed",
        //  data: "Invalid login credentials",
        // });
      }
    }
    //verify password
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      //throw error
      if (userFound) {
        return next(appErr("Invalid login Credentials"));
        //return res.json({
        // status: "failed",
        //  data: "Invalid login credentials",
        // });
      }
    }
    // save the user into
    req.session.userAuth = userFound;
    res.json({
      status: "Success",
      data: userFound,
    });
  } catch (error) {
    res.json(error);
  }
};
// All users details
const usersCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Users Details",
    });
  } catch (error) {
    res.json(error);
  }
};
//Single user details
const singleUserctrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Single User Details",
    });
  } catch (error) {
    res.json(error);
  }
};
//Cover photo
const coverPhotoCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Cover Photo",
    });
  } catch (error) {
    res.json(error);
  }
};
// logout
const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  registerCtrl,
  loginCtrl,
  usersCtrl,
  singleUserctrl,
  coverPhotoCtrl,
  logoutCtrl,
};
