const express = require("express");
const router = express.Router();

const AssignPersonnel = require("../controller/assignPersonnel");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/:personnelId", AssignPersonnel.create);
router.get("/view/all", AssignPersonnel.readAll);
router.get("/view/:personnelId", AssignPersonnel.read);

module.exports = router;
