const express = require("express");
const router = express.Router();
const maintenanceInventoryFilter = require("../controller/filter");

router.post("/search", maintenanceInventoryFilter.searchByQueryType);

module.exports = router;
