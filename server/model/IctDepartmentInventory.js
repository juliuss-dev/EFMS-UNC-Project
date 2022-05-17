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

const IctInventory = mongoose.model("IctInventory", IctInventorySchema);

module.exports = IctInventory;
