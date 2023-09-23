const express = require("express");
const {
  postCreateCtrl,
  allPostsCtrl,
  singlePostCtrl,
  updatePostCtrl,
  deletePostCtrl,
} = require("../../controllers/posts/posts");
const postRoutes = express.Router();

//--------
//posts route
//---------
//POST/create
postRoutes.post("/create", postCreateCtrl);

//GET/posts/:id
postRoutes.get("/single/:id", singlePostCtrl);

//GET/all/posts
postRoutes.get("/all", allPostsCtrl);

//DELETE/posts/:id
postRoutes.delete("/delete/:id", deletePostCtrl);

//PUT/posts/:id
postRoutes.put("/update/:id", updatePostCtrl);

module.exports = postRoutes;
