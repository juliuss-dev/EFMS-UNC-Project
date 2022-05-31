const express = require("express");
const router = express.Router();

const MaintenanceInventory = require("../controller/maintenanceInventory");
const { authenticateJWT } = require("../middleware/authenticator");
const { route } = require("./vpaDepartmentInventory");

router.post("/", MaintenanceInventory.create);
router.get("/", MaintenanceInventory.readAll);
router.get("/:inventoryId", MaintenanceInventory.read);
router.put("/:inventoryId", MaintenanceInventory.update);
router.delete("/:inventoryId", MaintenanceInventory.delete);

router.get(
  "/maintenance/getAllMaintenanceUncFlag",
  MaintenanceInventory.getAllMaintenanceUncFlag
);
router.get(
  "/maintenance/getAllMaintenancePhFlag",
  MaintenanceInventory.getAllMaintenancePhFlag
);
router.get(
  "/maintenance/getAllMaintenanceAircon",
  MaintenanceInventory.getAllMaintenanceAircon
);
router.get(
  "/maintenance/getAllMaintenanceFan",
  MaintenanceInventory.getAllMaintenanceFan
);
router.get(
  "/maintenance/getAllMaintenanceGenerator",
  MaintenanceInventory.getAllMaintenanceGenerator
);
router.get(
  "/maintenance/getAllMaintenancePlants",
  MaintenanceInventory.getAllMaintenancePlants
);
router.get(
  "/maintenance/getAllMaintenanceDisplayBoard",
  MaintenanceInventory.getAllMaintenanceDisplayBoard
);
router.get(
  "/maintenance/getAllMaintenanceMonoblock",
  MaintenanceInventory.getAllMaintenanceMonoblock
);
router.get(
  "/maintenance/getAllMaintenancePavillionTable",
  MaintenanceInventory.getAllMaintenancePavillionTable
);
router.get(
  "/maintenance/getAllMaintenanceIndustrialFan",
  MaintenanceInventory.getAllMaintenanceIndustrialFan
);
router.get(
  "/maintenance/getAllMaintenanceAeratronFan",
  MaintenanceInventory.getAllMaintenanceAeratronFan
);
router.get(
  "/maintenance/getAllMaintenanceCoolerFan",
  MaintenanceInventory.getAllMaintenanceCoolerFan
);

module.exports = router;
