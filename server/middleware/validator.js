const {check, validatorResult ,validationResult} = require('express-validator');

exports.signupValidator = [
    //checking the input comming from the client
    check('firstname')
    .not().isEmpty()
    .withMessage('Firstname is required'),

    // check('middlename')
    // .not().isEmpty()
    // .withMessage('Middlename must required'),

    check('lastname')
    .not().isEmpty()
    .withMessage('Lastname is required'),
    
    check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid email'),

    check('birthdate')
    .not().isEmpty()
    .withMessage('Birthdate is required'),

    check('username')
    .not().isEmpty()
    .withMessage('username is required'),

    check('password')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 characters or more'),
    
]
exports.signinValidator = [
    //checking of the input comming from the client
        check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid email'),
    
        // check('password')
        // .isLength({min: 6})
        // .withMessage('Password must be atleast 6 characters or more'),
    ]

exports.validatorResult = (req, res, next) =>{
    ///pass the request object
    const result = validationResult(req)
    //if there is error, passs it to hasErrors
    const hasErrors = !result.isEmpty();
    // if there is error
    if(hasErrors){
        //return the result of the first array and its message
        const firstError = result.array()[0].msg
        //console the errors
        console.log('hasErrors', hasErrors)
        console.log('result', result)
        
        //if has error fire the errorMessage object from the server and pass it to the client to display the error message
        return res.status(400).json({
            errorMessage: firstError,
            
        })
    }
    next();
}
// exports.validatorEdit(req, res, next =>{

// })

