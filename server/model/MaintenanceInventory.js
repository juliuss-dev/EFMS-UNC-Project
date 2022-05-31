const mongoose = require("mongoose");

const MaintenanceInventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    model: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
      required: false,
      default: 1,
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
    department: {
      type: String,
      default: "Maintenance",
    },
    reservationId: {
      type: Array,
    },
  },
  { timestamps: true }
);
MaintenanceInventorySchema.index({ name: "text" });
const MaintenanceInventory = mongoose.model(
  "MaintenanceInventory",
  MaintenanceInventorySchema
);

module.exports = MaintenanceInventory;
