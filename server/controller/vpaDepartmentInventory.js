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
    let vpaInventory = new VpaDepartmentInventory();

    vpaInventory.name = name;
    vpaInventory.model = model;
    vpaInventory.units = units;
    vpaInventory.description = description;
    vpaInventory.dateAdded = dateAdded;
    vpaInventory.department = department;
    vpaInventory.reservationId = reservationId;

    await vpaInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      vpaInventory,
    });
  } catch {
    console.log(error, "VpaDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Vpa Department Inventory Error",
    });
  }
};
