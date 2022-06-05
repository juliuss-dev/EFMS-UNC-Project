const express = require("express");
const router = express.Router();

const GetAllEquipments = require("../controller/getAllEquipment");
const { authenticateJWT } = require("../middleware/authenticator");

router.get("/getMaintenance", GetAllEquipments.getMaintenance);
router.get("/getPhFlag", GetAllEquipments.getPhFlag);
router.get("/getUncFlag", GetAllEquipments.getUncFlag);
router.get("/getMonoblock", GetAllEquipments.getMonoblocks);
router.get("/getPavillionTable", GetAllEquipments.getPavillionTable);

module.exports = router;
