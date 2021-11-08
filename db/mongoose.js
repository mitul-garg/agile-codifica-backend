const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mitul:mitul@cluster0.cy95g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection is on!....");
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
