const MaintenanceInventory = require("../model/MaintenanceInventory");

exports.create = async (req, res) => {
  const { name, quantity, description, dateAdded, status } = req.body;

  try {
    let maintenanceInventory = new MaintenanceInventory();

    maintenanceInventory.name = name;
    maintenanceInventory.quantity = quantity;
    maintenanceInventory.description = description;
    maintenanceInventory.dateAdded = dateAdded;
    maintenanceInventory.status = status;

    await maintenanceInventory.save();

    res.json({
      // reservation: reservation,
      successMessage: "Equipment has successfully added",
    });
  } catch (error) {
    console.log(error, "MaintenanceInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Maintenance Inventory Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const maintenanceInventory = await MaintenanceInventory.find({});
    //return the maintenanceInventory
    res.json({ maintenanceInventory });
    console.log(maintenanceInventory);
  } catch (error) {
    console.log("MaintenanceInventory GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Maintenance Inventroy Error",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;

    const updateinventory = await MaintenanceInventory.findByIdAndUpdate(
      inventoryId,
      req.body
    );
    console.log("Equipment successfully updated");
    res.json({
      successMessage: "Equipment successfully updated",
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const deleteUpdate = await MaintenanceInventory.findByIdAndDelete(
      inventoryId,
      res.body
    );
    console.log("Equipment successfully delete");
    res.json({
      successMessage: "An equipment has been deleted",
    });
  } catch (error) {
    console.log("Delete Equipment error", error);
    res.status(500).json({
      errorMessage: "Delete Equipment error",
    });
  }
};
