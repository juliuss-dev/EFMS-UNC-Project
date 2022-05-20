const express = require("express");
const router = express.Router();

const VpaDepartmentInventory = require("../controller/VpaDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", VpaDepartmentInventory.create);
router.get("/", authenticateJWT, VpaDepartmentInventory.readAll);
router.get("/:vpaId", VpaDepartmentInventory.read);

router.put("/:vpaId", VpaDepartmentInventory.update);
router.delete("/:vpaId", authenticateJWT, VpaDepartmentInventory.delete);

module.exports = router;
