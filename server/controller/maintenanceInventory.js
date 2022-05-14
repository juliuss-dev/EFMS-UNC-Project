const MaintenanceInventory = require("../model/MaintenanceInventory");

exports.create = async (req, res) => {
  const { equipmentName, quantity, description, dateAdded } = req.body;

  try {
    let maintenanceInventory = new MaintenanceInventory();

    maintenanceInventory.equipmentName = equipmentName;
    maintenanceInventory.quantity = quantity;
    maintenanceInventory.description = description;
    maintenanceInventory.dateAdded = dateAdded;
    // maintenanceInventory.status = status;

    await maintenanceInventory.save();

    res.json({
      // reservation: reservation,
      successMessage: "Equipment has successfully added",
      maintenanceInventory,
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

exports.read = async (req, res) => {
  try {
    // if (!mongoose.Types.ObjectId.isValid(id)) return false;
    const inventoryId = req.params.inventoryId;
    const inventory = await MaintenanceInventory.findById(inventoryId);
    // res.json({
    //   successMessage: "Getting the id"
    // });
    res.json(inventory);
    // if (!inventoryId) {
    //   res.status(400).json({
    //     errorMessage: "inventoryid not found",
    //   });
    // }
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error getting the id of maintenance inventory",
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
    // if (!updateinventory) {
    //   res.status(400).json({
    //     errorMessage: "inventoryid not found",
    //   });
    // }
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
