//create comment
const commentCreateCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Created",
    });
  } catch (error) {
    res.json(error);
  }
};
//all comments
const allCommentsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "All Comments",
    });
  } catch (error) {
    res.json(error);
  }
};
//single comment
const singleCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Singel Comment",
    });
  } catch (error) {
    res.json(error);
  }
};
//update comment
const updateCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comments Updated",
    });
  } catch (error) {
    res.json(error);
  }
};
//delete comment
const deleteCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "comment Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  commentCreateCtrl,
  allCommentsCtrl,
  singleCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
};
