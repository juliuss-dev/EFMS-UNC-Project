const mongoose = require("mongoose");

const AssignPersonnel = new mongoose.Schema(
  {
    assignReservationId: {
      type: String,
      required: false,
    },
    activityName: {
      type: String,
      required: false,
    },
    nameOfRequestingParty: {
      type: String,
      required: false,
    },
    personnelId: {
      type: String,
      required: false,
    },
    personnelName: {
      type: String,
      required: false,
    },
    assignServiceName: {
      type: String,
      require: false,
    },
    dateOfEvent: {
      type: Date,
      require: false,
    },
    timeOfEvent: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const AssignPersonnelSchema = mongoose.model(
  "AssignPersonnel",
  AssignPersonnel
);

module.exports = AssignPersonnelSchema;
