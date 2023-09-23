const express = require("express");
const {
  registerCtrl,
  loginCtrl,
  usersCtrl,
  singleUserctrl,
  logoutCtrl,
  coverPhotoCtrl,
} = require("../../controllers/users/users");
const userRoutes = express.Router();

//---------
//user route
//----------
//POST/users/request
userRoutes.post("/register", registerCtrl);

//POST/users/login
userRoutes.post("/login", loginCtrl);

//GET/users/details
userRoutes.get("/details", usersCtrl);

//GET/users/profile/:id
userRoutes.get("/profile/:id", singleUserctrl);

//PUT/users/cover-photo-uplode/:id
userRoutes.put("/cover-photo-uplode/:id", coverPhotoCtrl);

//Update/api/users/update-password/:id
//app.update("/api/v1/users/update-password/:id", async (req, res) => {
//try {
//  res.json({
//   status: "Success",
//   user: "User password updated",
//  });
//  } catch (error) {
//    res.json(error);
//  }
//});

//GET/users/logout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
