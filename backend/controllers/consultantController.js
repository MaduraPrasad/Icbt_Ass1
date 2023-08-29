const shedullingModel = require("../models/shedullingModel");
const consultantModel = require("../models/consutantModel");
const userNewModel = require("../models/newUserModel");
const newUserModel = require("../models/newUserModel");

const getConsultantInfoController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "consultant data fetch success",
      data: consultants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching consultant Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const consultants = await consultantModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Consultant Profile Updated",
      data: consultants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Consultant Profile Update issue",
      error,
    });
  }
};

//get single consultant
const getConsultantsByIdController = async (req, res) => {
  try {
    const consultants = await consultantModel.findOne({ _id: req.body.consultantId });
    res.status(200).send({
      success: true,
      message: "Sigle consultant Info Fetched",
      data: consultants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Erro in Single consultant info",
    });
  }
};

const consultantAppointmentsController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOne({ userId: req.body.userId });
    const appointments = await shedullingModel.find({
        consultantId: consultant._id,
    });
    res.status(200).send({
      success: true,
      message: "Consultant Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await shedullingModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await newUserModel.findOne({ _id: appointments.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/consultant-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getConsultantInfoController,
  updateProfileController,
  getConsultantsByIdController,
  consultantAppointmentsController,
  updateStatusController,
};
