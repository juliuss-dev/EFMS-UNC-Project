const IctDepartmentInventory = require("../model/IctDepartmentInventory.js");
const Reservation = require("../model/Reservation");

exports.create = async (req, res) => {
  const {
    name,
    model,
    units,
    description,
    dateAdded,
    reservationId,
    // status,
  } = req.body;

  try {
    let ictInventory = new IctDepartmentInventory();

    ictInventory.name = name;
    ictInventory.model = model;
    ictInventory.units = units;
    ictInventory.description = description;
    ictInventory.dateAdded = dateAdded;
    // ictInventory.department = department;
    ictInventory.reservationId = reservationId;
    // ictInventory.status = status;
    await ictInventory.save();
    res.json({
      successMessage: "Equipment has successfully added",
      ictInventory,
    });
  } catch {
    console.log(error, "ictDepartmentInventory POST Controller Error");
    res.status(500).json({
      errorMessage: "Try again, ict Department Inventory Error",
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const ictInventory = await IctDepartmentInventory.find({});
    //return the maintenanceInventory
    res.json({ ictInventory });
    console.log(ictInventory);
  } catch (error) {
    console.log("ict Inventory GET ALL Controller Error");
    res.status(500).json({
      errorMessage: "Try Again, ict Inventroy Error",
    });
  }
};

exports.read = async (req, res) => {
  try {
    const ictId = req.params.ictId;
    const ictInventory = await IctDepartmentInventory.findById(ictId);

    res.json(ictInventory);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of ict Inventory",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const ictId = req.params.ictId;
    const ictInventory = await IctDepartmentInventory.findByIdAndUpdate(
      ictId,
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
    console.log(ictInventory);
    console.log("req.body", req.body);

    res.json({
      successMessage: "Equipment successfully updated",
      ictInventory,
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
    const ictId = req.params.ictId;
    const deleteUpdate = await IctDepartmentInventory.findByIdAndDelete(
      ictId,
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

exports.getIctComputer = async (req, res) => {
  try {
    // const getComputer = await IctDepartmentInventory.find({
    //   name: "Computer",
    // });
    const pipeline = [
      {
        $match: {
          name: "Computer",
        },
      },
      {
        $group: {
          _id: "$name",
          sum_units: {
            $sum: "$units",
          },
        },
      },
    ];

    const getUnits = await IctDepartmentInventory.aggregate(pipeline);

    console.log("Get computer success");
    res.json({
      successMessage: "Get Computer succes",
      getUnits,
    });
  } catch (error) {
    console.log("computer Equipment error", error);
    res.status(500).json({
      errorMessage: "computer Equipment error",
    });
  }
};
