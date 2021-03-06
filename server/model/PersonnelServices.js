const mongoose = require("mongoose");

const PerssonelServicesSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: "Available",
    },
    department: {
      type: String,
    },
    reservationId: {
      type: String,
      // default: "0",
    },
  },
  { timestamps: true }
);

const Personnel = mongoose.model("Personnel", PerssonelServicesSchema);

module.exports = Personnel;
