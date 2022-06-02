const express = require("express");
const router = express.Router();
const reservationController = require("../controller/reservation");
const { authenticateJWT } = require("../middleware/authenticator");

// if( !mongoose.Types.ObjectId.isValid(id) )
//     return false;
router.get(
  "/reservation/getImcDocumentation",
  reservationController.getImcDocumentation
);

router.post("/", reservationController.create);
router.get("/", reservationController.readAll);
router.get("/:reservationId", reservationController.read);
router.delete("/:reservationId", reservationController.delete);
router.put(
  "/:reservationId",
  // authenticateJWT,
  reservationController.updateViewRequest
);

module.exports = router;
