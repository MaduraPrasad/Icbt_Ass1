const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: [true, "name is require"],
    },
    email: {
        type: String,
        required: [true, "email is require"],
    },
    password: {
        type: String,
        required: [true, "password is require"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isConsultant: {
        type: Boolean,
        default: false,
    },
    isjobSeeker: {
        type: Boolean,
        default: true,
    },
    notifcation: {
        type: Array,
        default: [],
    },
    seennotification: {
        type: Array,
        default: [],
    },
});

const jobSeekerModel = mongoose.model("jobseeker", jobSeekerSchema);
module.exports = jobSeekerModel;
