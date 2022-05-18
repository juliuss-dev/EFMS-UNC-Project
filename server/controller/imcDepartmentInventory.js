const ImcDepartmentInventory = require("../model/ImcDepartmentInventory.js");

exports.create = async (req, res) => {
  const {
    name,
    model,
    units,
    description,
    dateAdded,
    department,
    reservationId,
  } = req.body;

  try {
    let imcInventory = new ImcDepartmentInventory();

    imcInventory.name = name;
    imcInventory.model = model;
    imcInventory.units = units;
    imcInventory.description = description;
    imcInventory.dateAdded = dateAdded;
    // imcInventory.department = department;
    imcInventory.reservationId = reservationId;

    await imcInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      imcInventory,
    });
  } catch {
    console.log(error, "imcDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Imc Department Inventory Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const imcInventory = await ImcDepartmentInventory.find({});
    //return the maintenanceInventory
    res.json({ imcInventory });
    console.log(imcInventory);
  } catch (error) {
    console.log("Imc Inventory GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Imc Inventroy Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const imcId = req.params.imcId;
    const inventory = await ImcDepartmentInventory.findById(imcId);

    res.json(inventory);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of Imc Inventory",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const imcId = req.params.imcId;
    const updateinventory = await ImcDepartmentInventory.findByIdAndUpdate(
      imcId,
      {
        $set: {
          status: "Not Available",
        },
      },
      {
        new: true,
      }
    );

    console.log("Equipment successfully updated");
    console.log(updateinventory);
    console.log("req.body", req.body);

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
