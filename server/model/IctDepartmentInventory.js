const mongoose = require("mongoose");

const IctInventorySchema = new mongoose.Schema(
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
      default: "ICT",
    },
    reservationId: {
      type: Array,
    },
  },
  { timestamps: true }
);
IctInventorySchema.index({ name: "text" });
const IctInventory = mongoose.model("IctInventory", IctInventorySchema);

module.exports = IctInventory;
