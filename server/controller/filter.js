const MaintenanceInventory = require("../model/MaintenanceInventory");

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
