const express = require("express");
const router = express.Router();

const DeptInventory = require("../controller/DeptInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", DeptInventory.create);
router.get("/", DeptInventory.readAll);
router.get("/:deptInventoryId", DeptInventory.read);
//router.put("/:inventoryId", DeptEquipment.update);
//router.delete("/:inventoryId", DeptEquipment.delete);

module.exports = router;
