const MaintenanceInventory = require("../model/MaintenanceInventory");

exports.create = async (req, res) => {
  const { name, model, units, description, dateAdded } = req.body;

  try {
    let maintenanceInventory = new MaintenanceInventory();

    maintenanceInventory.name = name;
    maintenanceInventory.model = model;
    maintenanceInventory.units = units;
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
    // const id = { _id: req.params.id };
    const { inventoryId } = req.params;
    // const inventoryId = req.params.inventoryId;
    // inventoryId = JSON.parse(inventoryId);

    // const updatedData = req.body;
    // const options = { new: true };
    // let newObject = {
    //   equipmentName: req.body.equipmentName,
    //   quantity: req.body.quantity,
    //   description: req.body.description,
    //   dateAdded: req.body.dateAdded,
    // };

    // console.log("reservationId", inventoryId);
    const updateinventory = await MaintenanceInventory.findByIdAndUpdate(
      inventoryId,
      req.body,
      // req.params.id,
      // { $set: req.body },
      // { new: true }
      // req.params.inventoryId,
      // inventoryId,
      // {
      //   name: req.body.name,
      //   model: req.body.model,
      //   units: req.body.units,
      //   description: req.body.description,
      //   dateAdded: req.body.dateAdded,
      //   status: req.body.status,
      //   department: req.body.deparment,
      // },
      { new: true }
      // inventoryId,
      // {
      //   $set: {
      //     status: "Available",
      //     // name: name.req.body,
      //     // status: "Pending",
      //   },
      // },
      // {
      //   new: true,
      // }
      // {
      //   $set: {
      //     equipmentName: req.body.equipmentName,
      //     quantity: req.body.quantity,
      //     description: req.body.description,
      //     dateAdded: req.body.dateAdded,
      //   },
      // }
      // updatedData,
      // options
      // { $set: req.body },
      // function (err, result) {
      //   if (err) {
      //     console.log(err);
      //   }

      //   console.log("RESULT: " + result);

      //   res.send("Done");
      // },
      // { newObject },
      // newObject
      // req.body
    );
    // if (!updateinventory) {
    //   res.status(400).json({
    //     errorMessage: "inventoryid not found",
    //   });
    // }
    console.log("Equipment successfully updated");
    console.log(updateinventory);
    console.log("req.body", req.body);

    res.json({
      successMessage: "Equipment successfully updated",
      // updatedData,
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

exports.getAllMaintenanceUncFlag = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "UNC Flag",
        },
      },
    ];

    const getAllMaintenanceUncFlag = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceUncFlag success");
    res.json({
      successMessage: "getAllMaintenanceUncFlag  success",
      getAllMaintenanceUncFlag,
    });
  } catch (error) {
    console.log("getAllMaintenanceUncFlag error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceUncFlag error",
    });
  }
};

exports.getAllMaintenancePhFlag = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Philippine Flag",
        },
      },
    ];

    const getAllMaintenancePhFlag = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenancePhFlag success");
    res.json({
      successMessage: "getAllMaintenancePhFlag  success",
      getAllMaintenancePhFlag,
    });
  } catch (error) {
    console.log("getAllMaintenancePhFlag error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenancePhFlag error",
    });
  }
};

exports.getAllMaintenanceAircon = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Aircon",
        },
      },
    ];

    const getAllMaintenanceAircon = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceAircon success");
    res.json({
      successMessage: "getAllMaintenanceAircon  success",
      getAllMaintenanceAircon,
    });
  } catch (error) {
    console.log("getAllMaintenanceAircon error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceAircon error",
    });
  }
};

exports.getAllMaintenanceFan = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Fan",
        },
      },
    ];

    const getAllMaintenanceFan = await MaintenanceInventory.aggregate(pipeline);

    console.log("Get getAllMaintenanceFan success");
    res.json({
      successMessage: "getAllMaintenanceFan  success",
      getAllMaintenanceFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceFan error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceFan error",
    });
  }
};

exports.getAllMaintenanceGenerator = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Generator",
        },
      },
    ];

    const getAllMaintenanceGenerator = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceGenerator success");
    res.json({
      successMessage: "getAllMaintenanceGenerator  success",
      getAllMaintenanceGenerator,
    });
  } catch (error) {
    console.log("getAllMaintenanceGenerator error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceGenerator error",
    });
  }
};

exports.getAllMaintenancePlants = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Plants",
        },
      },
    ];

    const getAllMaintenancePlants = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenancePlants success");
    res.json({
      successMessage: "getAllMaintenancePlants  success",
      getAllMaintenancePlants,
    });
  } catch (error) {
    console.log("getAllMaintenancePlants error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenancePlants error",
    });
  }
};

exports.getAllMaintenanceDisplayBoard = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Display Board",
        },
      },
    ];

    const getAllMaintenanceDisplayBoard = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceDisplayBoard success");
    res.json({
      successMessage: "getAllMaintenanceDisplayBoard  success",
      getAllMaintenanceDisplayBoard,
    });
  } catch (error) {
    console.log("getAllMaintenanceDisplayBoard error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceDisplayBoard error",
    });
  }
};

exports.getAllMaintenanceMonoblock = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Monoblock",
        },
      },
    ];

    const getAllMaintenanceMonoblock = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceMonoblock success");
    res.json({
      successMessage: "getAllMaintenanceMonoblock  success",
      getAllMaintenanceMonoblock,
    });
  } catch (error) {
    console.log("getAllMaintenanceMonoblock error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceMonoblock error",
    });
  }
};

exports.getAllMaintenancePavillionTable = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Pavillion Table",
        },
      },
    ];

    const getAllMaintenancePavillionTable =
      await MaintenanceInventory.aggregate(pipeline);

    console.log("Get getAllMaintenancePavillionTable success");
    res.json({
      successMessage: "getAllMaintenancePavillionTable  success",
      getAllMaintenancePavillionTable,
    });
  } catch (error) {
    console.log("getAllMaintenancePavillionTable error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenancePavillionTable error",
    });
  }
};

exports.getAllMaintenanceIndustrialFan = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Industrial Fan",
        },
      },
    ];

    const getAllMaintenanceIndustrialFan = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceIndustrialFan success");
    res.json({
      successMessage: "getAllMaintenanceIndustrialFan  success",
      getAllMaintenanceIndustrialFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceIndustrialFan error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceIndustrialFan error",
    });
  }
};

exports.getAllMaintenanceAeratronFan = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Aeratron Fan",
        },
      },
    ];

    const getAllMaintenanceAeratronFan = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceAeratronFan success");
    res.json({
      successMessage: "getAllMaintenanceAeratronFan  success",
      getAllMaintenanceAeratronFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceAeratronFan error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceAeratronFan error",
    });
  }
};

exports.getAllMaintenanceCoolerFan = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Cooler Fan",
        },
      },
    ];

    const getAllMaintenanceCoolerFan = await MaintenanceInventory.aggregate(
      pipeline
    );

    console.log("Get getAllMaintenanceCoolerFan success");
    res.json({
      successMessage: "getAllMaintenanceCoolerFan  success",
      getAllMaintenanceCoolerFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceCoolerFan error", error);
    res.status(500).json({
      errorMessage: "getAllMaintenanceCoolerFan error",
    });
  }
};
