const express = require("express");
const router = express.Router();

const IctDepartmentInventory = require("../controller/IctDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", IctDepartmentInventory.create);
router.get("/", IctDepartmentInventory.readAll);
router.get("/getIctId/:ictId", IctDepartmentInventory.read);
router.get("/getComputer", IctDepartmentInventory.getIctComputer);
// router.get("/getPrinter", IctDepartmentInventory.getIctPrinter);
router.get("/getAllIctDekstop", IctDepartmentInventory.getAllIctDesktop);
router.get("/getAllIctLaptop", IctDepartmentInventory.getAllIctLaptop);
router.get("/getAllIctMouse", IctDepartmentInventory.getAllIctMouse);
router.get("/getAllIctKeyboard", IctDepartmentInventory.getAllIctKeyboard);
router.get("/getAllIctPrinter", IctDepartmentInventory.getAllIctPrinter);

router.put("/edit/:ictId", IctDepartmentInventory.update);
router.delete("/:ictId", authenticateJWT, IctDepartmentInventory.delete);

module.exports = router;
