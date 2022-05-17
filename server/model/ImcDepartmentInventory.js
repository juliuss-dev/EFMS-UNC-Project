const mongoose = require("mongoose");

const ImcInventorySchema = new mongoose.Schema(
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
      default: "IMC",
    },
    reservationId: {
      type: Array,
    },
  },
  { timestamps: true }
);

const ImcInventory = mongoose.model("ImcInventory", ImcInventorySchema);

module.exports = ImcInventory;
