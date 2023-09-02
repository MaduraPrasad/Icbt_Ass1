const express = require("express");
const {
  jbsAuthController,
  jobSeekerLoginController,
  jobSeekerRegisterController
} = require("../controllers/jobSeekerController");

const {
  loginController,
  authController,

} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const jbs_authMiddleware = require("../middlewares/jbs_authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/jbs-login", jobSeekerLoginController);

//REGISTER || POST
router.post("/jbs-register", jobSeekerRegisterController);

router.post("/getJobSeekerData", authMiddleware, jbsAuthController);


module.exports = router;
