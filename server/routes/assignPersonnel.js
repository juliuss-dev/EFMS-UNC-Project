const express = require("express");
const router = express.Router();

const AssignPersonnel = require("../controller/assignPersonnel");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/:personnelId", AssignPersonnel.create);

module.exports = router;
