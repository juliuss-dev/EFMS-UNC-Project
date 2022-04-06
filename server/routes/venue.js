const express = require('express');
const router = express.Router();
const venueController = require('../controller/venue')
const {authenticateJWT} = require('../middleware/authenticator')

//  const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//add authenticatedJWt if you don't use postman 
router.post('/', venueController.create);

module.exports = router;    
