const express = require("express");
const router = express.Router();

const ImcDepartmentInventory = require("../controller/ImcDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", authenticateJWT, ImcDepartmentInventory.create);
router.get("/", authenticateJWT, ImcDepartmentInventory.readAll);
router.get("/:imcId", ImcDepartmentInventory.read);

router.put("/:imcId", ImcDepartmentInventory.update);
router.delete("/:imcId", authenticateJWT, ImcDepartmentInventory.delete);
module.exports = router;
