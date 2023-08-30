const express = require("express");
const {
  authController,
  jobSeekerLoginController,
  jobSeekerRegisterController
} = require("../controllers/jobSeekerController");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/jbs-login", jobSeekerLoginController);

//REGISTER || POST
router.post("/jbs-register", jobSeekerRegisterController);


module.exports = router;
