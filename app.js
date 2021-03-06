// NPM Dependencies
const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const axios = require("axios");

// Other Dependencies
const indexPageRoute = require("./routes/index");
const loginPageRoute = require("./routes/login");
const signUpPageRoute = require("./routes/signup");
const profilePageRoute = require("./routes/profile");
const userEditorial = require("./routes/myEditorials");
const writeEditorial = require("./routes/writeEditorial");

// Database connection
require("./db/mongoose");

// cors headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
// cors headers

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", indexPageRoute); // for displaying Home Page
app.use("/", loginPageRoute); // for displaying Login
app.use("/", signUpPageRoute); // for displaying Sign Up
app.use("/", profilePageRoute); // for displaying Profile Up
app.use("/", userEditorial); // for displaying User Editorials
app.use("/", writeEditorial); // for Writing Editorials

//ON PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`On Port ${PORT}`);
});

const userModel = require("./models/user");
const editorialModel = require("./models/editorial");

const f = async () => {
  try {
    // const editorial = await editorialModel.findById('616fd5ad367f81da497b7a1d');
    // await editorial.populate('owner')
    // console.log(editorial.owner);

    const user = await userModel.find({ email: "sanidhya10628@gmail.com" });
    await user.populate("editorials");
    console.log(user.editorials);
  } catch (e) {
    console.log(e);
  }
};
