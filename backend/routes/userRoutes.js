const express = require("express");
const {
  authController,
  getProfileController,
  forRegistration,
} = require("../controller/userController");
const { authProtected } = require("../middlewares/authMiddleware");
const router = express.Router();
//REGISTRATION ROUTE
router.route("/").post(forRegistration);

//POST ROUTE FOR AUTH EMAIL/PASSWORD
router.post("/login", authController);

//USER PROFILE ROUTE PROTECTED
router.route("/profile").get(authProtected, getProfileController);

module.exports = router;
