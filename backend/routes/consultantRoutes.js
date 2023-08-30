const express = require("express");
const {
  getConsultantInfoController,
  updateProfileController,
  getConsultantsByIdController,
  consultantAppointmentsController,
  updateStatusController,
} = require("../controllers/consultantController");

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getConsultantInfo", authMiddleware, getConsultantInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getConsultantById", authMiddleware, getConsultantsByIdController);

//GET Appointments
router.get(
  "/consultant-appointments",
  authMiddleware,
  consultantAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
