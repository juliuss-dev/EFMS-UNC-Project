const IctDepartmentInventory = require("../model/IctDepartmentInventory.js");
const Reservation = require("../model/Reservation");

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
    let ictDepartmentInventory = new IctDepartmentInventory();

    ictDepartmentInventory.name = name;
    ictDepartmentInventory.model = model;
    ictDepartmentInventory.units = units;
    ictDepartmentInventory.description = description;
    ictDepartmentInventory.dateAdded = dateAdded;
    ictDepartmentInventory.department = department;
    ictDepartmentInventory.reservationId = reservationId;

    await ictDepartmentInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      ictDepartmentInventory,
    });
  } catch {
    console.log(error, "IctDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Ict Department Inventory Error",
    });
  }
};
