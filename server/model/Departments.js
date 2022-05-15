const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({}, { timestamps: true });

const MaintenanceInventory = mongoose.model(
  "MaintenanceInventory",
  MaintenanceInventorySchema
);

module.exports = MaintenanceInventory;
