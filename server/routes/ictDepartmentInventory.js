const express = require("express");
const router = express.Router();

const IctDepartmentInventory = require("../controller/IctDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", IctDepartmentInventory.create);
router.get("/", authenticateJWT, IctDepartmentInventory.readAll);
router.get("/:ictId", IctDepartmentInventory.read);

router.put("/:ictId", IctDepartmentInventory.update);
router.delete("/:ictId", authenticateJWT, IctDepartmentInventory.delete);

module.exports = router;
