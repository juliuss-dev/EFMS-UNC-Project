const express = require("express");
const router = express.Router();

const MaintenaceSchedule = require("../controller/maintenanceSchedule");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", MaintenaceSchedule.create);
router.get("/", MaintenaceSchedule.readAll);
router.get("/", MaintenaceSchedule.read);

module.exports = router;
