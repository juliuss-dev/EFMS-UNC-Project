const mongoose = require("mongoose");

const DeptInventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    dateAdded: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
    departmentId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const DeptInventory = mongoose.model("DeptInventory", DeptInventorySchema);

module.exports = DeptInventory;
