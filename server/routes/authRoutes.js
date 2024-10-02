// ye hai aam zindagi
// const express = require("express");
// const router = express.Router();

const { login, signup } = require("../controllers/authController");

//ye hai mentos zindagi
const router = require("express").Router();

router.post("/login", login);
router.post("/signup", signup);


module.exports = router;
