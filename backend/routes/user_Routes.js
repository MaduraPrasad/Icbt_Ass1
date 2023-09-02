const express = require("express");
const {

  loginController,
  registerController,
  authController,
  applyConsultantController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllConsultantController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);


// ------------------------------------------
//LOGIN || POST 
// router.post("/jbs-login", loginController);
//-------------------------------------------

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-consultant", authMiddleware, applyConsultantController);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllconsultants", authMiddleware, getAllConsultantController);

//GET ALL consultant without authorization
router.get("/getAllconsultantsForUsers", getAllConsultantController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
