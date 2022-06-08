const express = require("express");
const router = express.Router();

const PersonnelServices = require("../controller/PersonnelServices");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", PersonnelServices.create);
router.get("/", PersonnelServices.readAll);
router.get("/imcPersonnel", PersonnelServices.GetImcPersonnel);
router.get("/ictPersonnel", PersonnelServices.GetIctPersonnel);
router.get("/vpaPersonnel", PersonnelServices.GetVpaPersonnel);
router.get("/maintenancePersonnel", PersonnelServices.GetMaintenancePersonnel);
router.get("/get/:personnelId", PersonnelServices.read);
router.put("/edit/:personnelId", PersonnelServices.update);
router.delete("/personnel/delete/:personnel", PersonnelServices.delete);
// router.get("/:imcId", PersonnelServices.read);
router.post(
  "/personnelServices/Assign/:personnelId",
  PersonnelServices.assignImcDocumentationPersonnel
);

// router.put("/:imcId", PersonnelServices.update);
// router.delete("/:imcId", authenticateJWT, PersonnelServices.delete);
module.exports = router;
