const express = require("express");
const router = express.Router();

const ImcDepartmentInventory = require("../controller/ImcDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", authenticateJWT, ImcDepartmentInventory.create);

router.get("/", authenticateJWT, ImcDepartmentInventory.readAll);
router.get("/getImc/:imcId", ImcDepartmentInventory.read);

router.put("/edit/:imcId", ImcDepartmentInventory.update);
router.delete("delete/:imcId", authenticateJWT, ImcDepartmentInventory.delete);

router.get(
  "/getReservation/:imcReservationId",
  ImcDepartmentInventory.getReservationImc
);

module.exports = router;
