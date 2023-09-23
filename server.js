const express = require("express");
require("dotenv").config();
const session = require("express-session");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrHandler = require("./middlewares/globalHandler");

require("./config/dbConnect");

const app = express();

//middlewares
// Pass incoming data
app.use(express.json());
// sessioc configration
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
//Users routes
app.use("/api/users", userRoutes);

// Posts Routs
app.use("/api/posts", postRoutes);
//Comments Routs
app.use("/api/comments", commentRoutes);

//Error handler middlewares
app.use(globalErrHandler);
//listen server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on the PORT ${PORT}`));
