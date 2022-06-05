const { reset } = require("nodemon");
const IctDepartmentInventory = require("../model/IctDepartmentInventory.js");
const ImcDepartmentInventory = require("../model/ImcDepartmentInventory.js");
const MaintenanceInventory = require("../model/MaintenanceInventory");
const VpaDepartmentInventory = require("../model/VpaDepartmentInventory.js");

exports.getMaintenance = async (req, res) => {
  const pipelineAircon = [
    {
      $match: {
        name: "Aircon",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  //
  const pipelineFan = [
    {
      $match: {
        name: "Fan",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];
  const pipelineGenrator = [
    {
      $match: {
        name: "Generator",
      },
    },
    {
      $match: {
        status: "Available",
      },
    },
  ];

  try {
    const getAircon = await MaintenanceInventory.aggregate(pipelineAircon);
    const getAirconUnits = getAircon.length;

    const getFan = await MaintenanceInventory.aggregate(pipelineFan);
    const getFanUnits = getFan.length;

    const getGenerator = await MaintenanceInventory.aggregate(pipelineGenrator);
    const getGeneratorUnits = getGenerator.length;

    res.json([getAirconUnits, getFanUnits, getGeneratorUnits]);
  } catch (error) {
    console.log("Maintenance equipment error", error);
    res.status(500).json({
      errorMessage: "Maintenance Equipment Error",
    });
  }
};

exports.getPhFlag = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "Philippine Flag",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getUncFlag = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "UNC Flag",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getMonoblocks = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "Monoblock",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};

exports.getPavillionTable = async (req, res) => {
  try {
    const phFlag = await MaintenanceInventory.findOne({
      name: "Pavillion Table",
    });

    console.log(phFlag);
    res.json({
      phFlag,
    });
  } catch (error) {
    console.log("Update equipment error", error);
    res.status(500).json({
      errorMessage: "Update Equipment Error",
    });
  }
};
