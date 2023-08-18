const bodyParser = require("body-parser");
const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const middleware = (req, res, next) => {
//     // Pass the `req` variable to the client
//     res.locals.req = req;
//     next();
//   };

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRoutes);

app.listen(8000);
