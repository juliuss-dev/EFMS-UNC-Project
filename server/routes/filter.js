const express = require("express");
const router = express.Router();
const maintenanceInventoryFilter = require("../controller/filter");

router.post("/search", maintenanceInventoryFilter.searchByQueryType);
router.post("/search/imc", maintenanceInventoryFilter.searchByQueryTypeImc);
router.post("/search/ict", maintenanceInventoryFilter.searchByQueryTypeIct);
router.post("/search/vpa", maintenanceInventoryFilter.searchByQueryTypeVpa);
module.exports = router;
