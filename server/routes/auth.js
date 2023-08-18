const express = require("express");
const { postSignIn, postSignUp, getUsers , getSignIn } = require("../controllers/auth");

const router = express.Router();

router.get("/", getUsers);

router.post("/signup", postSignUp);

router.post("/signin", postSignIn);

router.get('/signin', getSignIn)       // get users who have logged in

module.exports = router;
