const express = require("express");
const router = express.Router();

const PersonnelServices = require("../controller/PersonnelServices");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", authenticateJWT, PersonnelServices.create);
router.get("/", authenticateJWT, PersonnelServices.readAll);
// router.get("/:imcId", PersonnelServices.read);

// router.put("/:imcId", PersonnelServices.update);
// router.delete("/:imcId", authenticateJWT, PersonnelServices.delete);
module.exports = router;
