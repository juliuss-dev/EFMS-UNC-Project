const VpaDepartmentInventory = require("../model/VpaDepartmentInventory.js");

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
    let vpaDepartmentInventory = new VpaDepartmentInventory();

    vpaDepartmentInventory.name = name;
    vpaDepartmentInventory.model = model;
    vpaDepartmentInventory.units = units;
    vpaDepartmentInventory.description = description;
    vpaDepartmentInventory.dateAdded = dateAdded;
    vpaDepartmentInventory.department = department;
    vpaDepartmentInventory.reservationId = reservationId;

    await vpaDepartmentInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      vpaDepartmentInventory,
    });
  } catch {
    console.log(error, "VpaDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Vpa Department Inventory Error",
    });
  }
};
