const mongoose = require("mongoose");

const AssignPersonnel = new mongoose.Schema(
  {
    assignReservationId: {
      type: String,
      required: false,
    },
    personnelId: {
      type: String,
      required: false,
    },
    assignServiceName: {
      type: String,
      require: false,
    },
    dateTime: {
      type: Date,
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
  "AssignPersonnelSchema",
  AssignPersonnel
);

module.exports = AssignPersonnelSchema;
