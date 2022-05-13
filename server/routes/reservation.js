const express = require("express");
const router = express.Router();
const reservationController = require("../controller/reservation");
const { authenticateJWT } = require("../middleware/authenticator");

// if( !mongoose.Types.ObjectId.isValid(id) )
//     return false;
router.post("/", authenticateJWT, reservationController.create);
router.get("/", authenticateJWT, reservationController.readAll);
router.get("/:reservationId", authenticateJWT, reservationController.read);
router.delete("/:reservationId", authenticateJWT, reservationController.delete);
router.put(
  "/:reservationId",
  authenticateJWT,
  reservationController.updateViewRequest
);
module.exports = router;
