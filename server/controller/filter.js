const MaintenanceInventory = require("../model/MaintenanceInventory");
const ImcInventory = require("../model/ImcDepartmentInventory");
const IctInventory = require("../model/IctDepartmentInventory");
const VpaInventory = require("../model/VpaDepartmentInventory");
exports.searchByQueryType = async (req, res) => {
  const { type, query } = req.body;
  try {
    let maintenance;

    switch (type) {
      case "text":
        maintenance = await MaintenanceInventory.find({
          $text: { $search: query },
        });
        break;
    }

    if (!maintenance.length > 0) {
      maintenance = await MaintenanceInventory.find({});
    }

    res.json({ maintenance });
  } catch (error) {
    console.log("Filter Controlller searchByQueryType", error);
    res.status(500).json({
      errorMessage: "Error Searching",
    });
  }
};

exports.searchByQueryTypeImc = async (req, res) => {
  const { type, query } = req.body;
  try {
    let imc;

    switch (type) {
      case "text":
        imc = await ImcInventory.find({
          $text: { $search: query },
        });
        break;
    }

    if (!imc.length > 0) {
      imc = await ImcInventory.find({});
    }

    res.json({ imc });
  } catch (error) {
    console.log("Filter Controlller searchByQueryTypeImc", error);
    res.status(500).json({
      errorMessage: "Error Searching",
    });
  }
};

exports.searchByQueryTypeIct = async (req, res) => {
  const { type, query } = req.body;
  try {
    let ict;

    switch (type) {
      case "text":
        ict = await IctInventory.find({
          $text: { $search: query },
        });
        break;
    }

    if (!ict.length > 0) {
      ict = await IctInventory.find({});
    }

    res.json({ ict });
  } catch (error) {
    console.log("Filter Controlller searchByQueryTypeIct", error);
    res.status(500).json({
      errorMessage: "Error Searching",
    });
  }
};

exports.searchByQueryTypeVpa = async (req, res) => {
  const { type, query } = req.body;
  try {
    let vpa;

    switch (type) {
      case "text":
        vpa = await VpaInventory.find({
          $text: { $search: query },
        });
        break;
    }

    if (!vpa.length > 0) {
      vpa = await VpaInventory.find({});
    }

    res.json({ vpa });
  } catch (error) {
    console.log("Filter Controlller searchByQueryTypeVpa", error);
    res.status(500).json({
      errorMessage: "Error Searching",
    });
  }
};
