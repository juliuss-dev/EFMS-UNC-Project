const mongoose = require("mongoose");

const DepartmentsSchema = new mongoose.Schema(
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

module.exports = Departments;
