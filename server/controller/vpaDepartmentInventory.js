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
    serialNumber,
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
    vpaInventory.serialNumber = serialNumber;

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
      req.body
      // {
      //   $set: {
      //     status: "Not Available",
      //   },
      // },
      // {
      //   new: true,
      // }
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

exports.getAllVpaSpeaker = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Speaker",
        },
      },
    ];

    const getAllVpaSpeaker = await VpaDepartmentInventory.aggregate(pipeline);

    console.log("Get getAllVpaSpeaker success");
    res.json({
      successMessage: "getAllVpaSpeaker  success",
      getAllVpaSpeaker,
    });
  } catch (error) {
    console.log("getAllVpaSpeaker error", error);
    res.status(500).json({
      errorMessage: "getAllVpaSpeaker Speaker Camera error",
    });
  }
};

exports.getAllVpaBluetoothSpeaker = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Bluetooth Speaker",
        },
      },
    ];

    const getAllVpaBluetoothSpeaker = await VpaDepartmentInventory.aggregate(
      pipeline
    );

    console.log("Get getAllVpaBluetoothSpeaker success");
    res.json({
      successMessage: "getAllVpaBluetoothSpeaker  success",
      getAllVpaBluetoothSpeaker,
    });
  } catch (error) {
    console.log("getAllVpaBluetoothSpeaker error", error);
    res.status(500).json({
      errorMessage: "getAllVpaBluetoothSpeaker Bluetooth Speaker Camera error",
    });
  }
};

exports.getAllVpaProjector = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Projector",
        },
      },
    ];

    const getAllVpaProjector = await VpaDepartmentInventory.aggregate(pipeline);

    console.log("Get getAllVpaProjector success");
    res.json({
      successMessage: "getAllVpaProjector  success",
      getAllVpaProjector,
    });
  } catch (error) {
    console.log("getAllVpaProjector error", error);
    res.status(500).json({
      errorMessage: "getAllVpaProjector Projector error",
    });
  }
};

exports.getAllVpaProjectorScreen = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Projector Screen",
        },
      },
    ];

    const getAllVpaProjectorScreen = await VpaDepartmentInventory.aggregate(
      pipeline
    );

    console.log("Get getAllVpaProjectorScreen success");
    res.json({
      successMessage: "getAllVpaProjectorScreen  success",
      getAllVpaProjectorScreen,
    });
  } catch (error) {
    console.log("getAllVpaProjectorScreen error", error);
    res.status(500).json({
      errorMessage: "getAllVpaProjectorScreen Projector Screen error",
    });
  }
};

exports.getAllVpaMicrophone = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Microphone",
        },
      },
    ];

    const getAllVpaMicrophone = await VpaDepartmentInventory.aggregate(
      pipeline
    );

    console.log("Get getAllVpaMicrophone success");
    res.json({
      successMessage: "getAllVpaMicrophone  success",
      getAllVpaMicrophone,
    });
  } catch (error) {
    console.log("getAllVpaMicrophone error", error);
    res.status(500).json({
      errorMessage: "getAllVpaMicrophone Microphone error",
    });
  }
};

exports.getAllVpaLights = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Lights",
        },
      },
    ];

    const getAllVpaLights = await VpaDepartmentInventory.aggregate(pipeline);

    console.log("Get getAllVpaLights success");
    res.json({
      successMessage: "getAllVpaLights  success",
      getAllVpaLights,
    });
  } catch (error) {
    console.log("getAllVpaLights error", error);
    res.status(500).json({
      errorMessage: "getAllVpaLights Lights error",
    });
  }
};
