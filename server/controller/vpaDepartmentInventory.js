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

exports.readAll = async (req, res) => {
  try {
    const vpaInventory = await VpaDepartmentInventory.find({});
    //return the maintenanceInventory
    res.json({ vpaInventory });
    console.log(vpaInventory);
  } catch (error) {
    console.log("Vpa Inventory GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, Vpa Inventroy Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const vpaId = req.params.vpaId;
    const vpaInventory = await VpaDepartmentInventory.findById(vpaId);

    res.json(vpaInventory);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of Vpa Inventory",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const vpaId = req.params.vpaId;
    const vpaInventory = await VpaDepartmentInventory.findByIdAndUpdate(
      vpaId,
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
    console.log(vpaInventory);
    console.log("req.body", req.body);

    res.json({
      successMessage: "Equipment successfully updated",
      vpaInventory,
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
    const vpaId = req.params.vpaId;
    const deleteUpdate = await VpaDepartmentInventory.findByIdAndDelete(
      vpaId,
      res.body
    );
    console.log("Equipment successfully delete");
    res.json({
      successMessage: "An equipment has been deleted",
      deleteUpdate,
    });
  } catch (error) {
    console.log("Delete Equipment error", error);
    res.status(500).json({
      errorMessage: "Delete Equipment error",
    });
  }
};
