const mongoose = require("mongoose");

const MaintenanceInventorySchema = new mongoose.Schema(
  {
    equipmentName: {
      type: String,
      // required: true,
    },
    quantity: {
      type: Number,
    },
    description: {
      type: String,
    },
    dateAdded: {
      type: String,
    },
    status: {
      type: String,
      default: "Available",
    },
  },
  { timestamps: true }
);

const MaintenanceInventory = mongoose.model(
  "MaintenanceInventory",
  MaintenanceInventorySchema
);

module.exports = MaintenanceInventory;
