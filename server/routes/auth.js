const express = require("express");
const { postSignIn, postSignUp, getUsers , getLoggedInUsers  } = require("../controllers/auth");

const router = express.Router();

router.get("/", getUsers);

router.post("/auth/signup", postSignUp);

router.post("/auth/signin", postSignIn);

router.get("/auth/signin", getLoggedInUsers);

module.exports = router;
