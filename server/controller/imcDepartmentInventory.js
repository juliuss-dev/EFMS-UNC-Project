// const { default: mongoose } = require("mongoose");
const ImcDepartmentInventory = require("../model/ImcDepartmentInventory.js");
const Reservation = require("../model/Reservation");

exports.create = async (req, res) => {
  const {
    name,
    model,
    units,
    description,
    dateAdded,
    reservationId,
    serialNumber,
    // status,
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
    imc.imcInventory.serialNumber = serialNumber;
    // imcInventory.status = status;
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
    const imcInventory = await ImcDepartmentInventory.findById(imcId);

    res.json(imcInventory);
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
    const imcInventory = await ImcDepartmentInventory.findByIdAndUpdate(
      imcId,
      req.body
    );

    console.log("Equipment successfully updated");
    console.log(imcInventory);
    // console.log("req.body", req.body);

    res.json({
      successMessage: "Equipment successfully updated",
      imcInventory,
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
    const imcId = req.params.imcId;
    const deleteUpdate = await ImcDepartmentInventory.findByIdAndDelete(
      imcId,
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
exports.getReservationImc = async (req, res) => {
  try {
    const id = req.params.imcReservationId;
    const reservationId = await Reservation.findById(id);

    res.json(reservationId);
  } catch (error) {
    console.log("Read id in controller error", error);
    res.json({
      errorMessage: "Error Getting the id of Reservation",
    });
  }
};

exports.getAllImcDslr = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "DSLR Camera",
        },
      },
    ];

    const getAllImcDslr = await ImcDepartmentInventory.aggregate(pipeline);

    console.log("Get DSLR success");
    res.json({
      successMessage: "getAllImcDslr  success",
      getAllImcDslr,
    });
  } catch (error) {
    console.log("getAllImcDslr error", error);
    res.status(500).json({
      errorMessage: "getAllImcDslr DSLR Camera error",
    });
  }
};

exports.getAllImcLense = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Camera Lenses",
        },
      },
    ];

    const getAllImcLense = await ImcDepartmentInventory.aggregate(pipeline);

    console.log("Get Lense success");
    res.json({
      successMessage: "getAllImcLense  success",
      getAllImcLense,
    });
  } catch (error) {
    console.log("getAllImcLense error", error);
    res.status(500).json({
      errorMessage: "getAllImcLense Lense Camera error",
    });
  }
};

exports.getAllImcTripod = async (req, res) => {
  try {
    const pipeline = [
      {
        $match: {
          name: "Tripod",
        },
      },
    ];

    const getAllImcTripod = await ImcDepartmentInventory.aggregate(pipeline);

    console.log("Get Tripod success");
    res.json({
      successMessage: "getAllImcTripod  success",
      getAllImcTripod,
    });
  } catch (error) {
    console.log("getAllImcDslr error", error);
    res.status(500).json({
      errorMessage: "getAllImcDslr Tripod Camera error",
    });
  }
};

exports.getAllImcEquipmentsToRepair = async (req, res) => {
  try {
    pipelineGetRepair = [
      {
        $match: {
          status: "To be repair",
        },
      },
    ];

    const getImcRepair = await ImcDepartmentInventory.aggregate(
      pipelineGetRepair
    );
    console.log(getImcRepair);
    res.json({
      successMessage: "Equipment repair has successful",
      getImcRepair,
    });
  } catch (error) {
    console.log(error, "getAllImcEquipmentsToRepair Controller Error");
    res.status(500).json({
      errorMessage: "Try again, getAllImcEquipmentsToRepair Error",
    });
  }
};
