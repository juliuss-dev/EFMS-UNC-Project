const express = require("express");
const router = express.Router();

const MaintenanceInventory = require("../controller/maintenanceInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", MaintenanceInventory.create);
router.get("/", MaintenanceInventory.readAll);
router.get("/:inventoryId", MaintenanceInventory.read);
router.put("/:inventoryId", MaintenanceInventory.update);
router.delete("/:inventoryId", MaintenanceInventory.delete);

module.exports = router;
