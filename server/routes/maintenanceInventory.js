const express = require('express')
const router = express.Router()

const MaintenanceInventory = require('../controller/maintenanceInventory')
const {authenticateJWT} = require('../middleware/authenticator')

router.post('/', authenticateJWT, MaintenanceInventory.create);
router.get('/', authenticateJWT, MaintenanceInventory.readAll)


module.exports = router;
