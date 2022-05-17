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
    let imcDepartmentInventory = new ImcDepartmentInventory();

    imcDepartmentInventory.name = name;
    imcDepartmentInventory.model = model;
    imcDepartmentInventory.units = units;
    imcDepartmentInventory.description = description;
    imcDepartmentInventory.dateAdded = dateAdded;
    imcDepartmentInventory.department = department;
    imcDepartmentInventory.reservationId = reservationId;

    await imcDepartmentInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      imcDepartmentInventory,
    });
  } catch {
    console.log(error, "imcDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Imc Department Inventory Error",
    });
  }
};
