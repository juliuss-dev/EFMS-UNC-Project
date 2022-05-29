const express = require("express");
const router = express.Router();

const IctDepartmentInventory = require("../controller/IctDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", IctDepartmentInventory.create);
router.get("/", authenticateJWT, IctDepartmentInventory.readAll);
router.get("/getIctId/:ictId", IctDepartmentInventory.read);
router.get("/getComputer", IctDepartmentInventory.getIctComputer);
router.get("/getPrinter", IctDepartmentInventory.getIctPrinter);

router.put("/:ictId", IctDepartmentInventory.update);
router.delete("/:ictId", authenticateJWT, IctDepartmentInventory.delete);

module.exports = router;
