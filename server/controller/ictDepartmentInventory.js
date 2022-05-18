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
    let ictInventory = new IctDepartmentInventory();

    ictInventory.name = name;
    ictInventory.model = model;
    ictInventory.units = units;
    ictInventory.description = description;
    ictInventory.dateAdded = dateAdded;
    ictInventory.department = department;
    ictInventory.reservationId = reservationId;

    await ictInventory.save();

    res.json({
      successMessage: "Equipment has successfully added",
      ictInventory,
    });
  } catch {
    console.log(error, "IctDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, Ict Department Inventory Error",
    });
  }
};
