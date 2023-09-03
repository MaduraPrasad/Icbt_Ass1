const mongoose = require("mongoose");

const ShedullingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    consultantId: {
      type: String,
      required: true,
    },
    consultantInfo: {
      type: String,
      required: true,
      ref:'consultants'
    },
    userInfo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const shedullingModel = mongoose.model("shedulles", ShedullingSchema);

module.exports = shedullingModel;
