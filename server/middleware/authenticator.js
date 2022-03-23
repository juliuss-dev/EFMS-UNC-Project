//checking the jsonwebtoken
const jwt = require('jsonwebtoken')
//get the secret keys from keys
const {jwtSecret} = require("../config/keys")

//middleware
exports.authenticateJWT = (req, res, next) =>{
    // cookies are from the npm cookie parser that we install, we did not install these could not be available 
    // .token is the name that we gave that token inside the cookie which was token
    const token = req.cookies.token
    // console.log(token);

    // if not token
    if(!token) {
        res.status(400).json({
            errorMessage: 'No token, Authorization denied'
        })
    }

    try {
        //verify the token
        const decoded = jwt.verify(token, jwtSecret)
        //attach the user because once the user is verified, it gonna striped out the user that we attach to it before it was encrypted or
        // its going to remove the user that was used and then store it inside the decoded variable
        req.user = decoded.user
        
        next();
    } catch (error) {
        console.log('jwt error', error)
        res.status(401).json({
            errorMessage: "Invalid token"
        })
    }
}