const express = require("express");
const router = express.Router();

const VpaDepartmentInventory = require("../controller/VpaDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", VpaDepartmentInventory.create);
router.get("/", authenticateJWT, VpaDepartmentInventory.readAll);
router.get("/:vpaId", VpaDepartmentInventory.read);

router.put("/edit/:vpaId", VpaDepartmentInventory.update);
router.delete("/delete/:vpaId", authenticateJWT, VpaDepartmentInventory.delete);

router.get("/vpa/getAllVpaSpeaker", VpaDepartmentInventory.getAllVpaSpeaker);
router.get(
  "/vpa/getAllVpaBluetoothSpeaker",
  VpaDepartmentInventory.getAllVpaBluetoothSpeaker
);
router.get(
  "/vpa/getAllVpaMicrophone",
  VpaDepartmentInventory.getAllVpaMicrophone
);

router.get(
  "/vpa/getAllVpaProjector",
  VpaDepartmentInventory.getAllVpaProjector
);
router.get(
  "/vpa/getAllVpaProjectorScreen",
  VpaDepartmentInventory.getAllVpaProjectorScreen
);
router.get("/vpa/getAllVpaLights", VpaDepartmentInventory.getAllVpaLights);

module.exports = router;
