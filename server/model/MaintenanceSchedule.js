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
      required: false,
    },
    dateFinished: {
      type: String,
      required: false,
    },
    maintenanceType: {
      type: String,
      required: false,
    },
    checkedBy: {
      type: String,
      required: false,
    },
    performedBy: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
      default: "To be Checked",
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
