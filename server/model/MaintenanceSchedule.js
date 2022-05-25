const mongoose = require("mongoose");

const MaintenanceScheduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dateReported: {
      type: String,
      required: true,
    },
    dateStarted: {
      type: String,
      required: true,
    },
    dateFinished: {
      type: String,
      required: true,
    },
    maintenanceType: {
      type: String,
      required: true,
    },
    checkedBy: {
      type: String,
      required: true,
    },
    performedBy: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    equipmentId: {
      type: mongoose.Schema.Types.ObjectId,
      rquired: false,
    },
    facilityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  { timestamps: true }
);

const MaintenaceSchedule = mongoose.model(
  "MaintenanceSchedule",
  MaintenanceScheduleSchema
);

module.exports = MaintenaceSchedule;
