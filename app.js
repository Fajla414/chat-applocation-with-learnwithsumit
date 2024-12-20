// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require('./Router/loginRouter');
const usersRouter = require('./Router/userRouter');
const inboxRouter = require('./Router/inboxRouter');

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNETION_STRING)
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

// 404 not found handler
app.use(notFoundHandler);

// commom error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
