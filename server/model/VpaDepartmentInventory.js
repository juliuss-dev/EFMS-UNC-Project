const mongoose = require("mongoose");

const VpaInventorySchema = new mongoose.Schema(
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
      required: false,
      default: 1,
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
      default: "Available",
    },
    department: {
      type: String,
      default: "VPA",
    },
    reservationId: {
      type: Array,
    },
  },
  { timestamps: true }
);

const VpaInventory = mongoose.model("VpaInventory", VpaInventorySchema);

module.exports = VpaInventory;
