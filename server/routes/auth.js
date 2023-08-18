const express = require("express");
const { postSignIn, postSignUp, getUsers } = require("../controllers/auth");

const router = express.Router();

router.get("/", getUsers);

router.post("/signup", postSignUp);

router.post("/signin", postSignIn);

module.exports = router;
