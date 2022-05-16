const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

const Departments = mongoose.model("Departments", DepartmentsSchema);

module.exports = MaintenanceInventory;
