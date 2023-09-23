//Create Post
const postCreateCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Post Created",
    });
  } catch (error) {
    res.json(error);
  }
};
// All posts
const allPostsCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "All posts",
    });
  } catch (error) {
    res.json(error);
  }
};
//single post
const singlePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Singel Post",
    });
  } catch (error) {
    res.json(error);
  }
};
//update post
const updatePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Posts Updated",
    });
  } catch (error) {
    res.json(error);
  }
};
//delete post
const deletePostCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Posts Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  postCreateCtrl,
  allPostsCtrl,
  singlePostCtrl,
  updatePostCtrl,
  deletePostCtrl,
};
