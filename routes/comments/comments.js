const express = require("express");
const {
  commentCreateCtrl,
  allCommentsCtrl,
  singleCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
} = require("../../controllers/comments/comments");
const commentRoutes = express.Router();

//-----------
//Comment
//----------
//POST/Comment
commentRoutes.post("/create", commentCreateCtrl);
//GET/comments/all
commentRoutes.get("/all", allCommentsCtrl);
//GET/comments/single/:id
commentRoutes.get("/single/:id", singleCommentCtrl);

//DELETE/comments
commentRoutes.delete("/delete/:id", deleteCommentCtrl);

//PUT/comments/:id
commentRoutes.put("/update/:id", updateCommentCtrl);
module.exports = commentRoutes;
