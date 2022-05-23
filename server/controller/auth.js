const User = require("../model/User");
const bcrypt = require("bcryptjs");
//to verify the user token once the user signin
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys");

exports.singupController = async (req, res) => {
  //get the data inputs from the client side
  const {
    firstname,
    middlename,
    lastname,
    email,
    birthdate,
    username,
    password,
  } = req.body;

  try {
    const user = await User.findOne({ email: email });

    //if email is already existed register in the db during the signup process, display an error
    if (user) {
      return res.status(400).json({
        errorMessage: "Email is already exist",
      });
    }
    // if does not have the same account, create a new user
    //create new instance of User
    const newUser = new User();

    //the newUser property of db and is equal to input values of singup property
    newUser.firstname = firstname;
    newUser.middlename = middlename;
    newUser.lastname = lastname;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.username = username;

    //encrypted the password using bcryptjs
    const salt = await bcrypt.genSalt(10);
    //setting the db password input into brcypt
    newUser.password = await bcrypt.hash(password, salt);

    //once it doesn't have an error save the new user
    await newUser.save();
    //response a sucess message back to the client
    res.json({
      successMessage: "Successfully Registered, Please proceed to login",
    });
  } catch (error) {
    console.log("signupController error", error);
    res.json({
      errorMessage: "Server error under signup",
    });
  }
};
// exports.singupControllerUpdate = async (req, res) =>{

//     try {
//         const accountId = req.params.accountId

//         const accountUpdated = await User.findByIdAndUpdate(accountId, req.body)

//         res.json({
//             successMessage: "Successfully updated the account"
//         })
//     } catch (error) {
//         res.status(500).json({
//             errorMessage: "Cannot Update the account"
//         })
//     }
// }
exports.signinController = async (req, res) => {
  // console.log(req.body)
  // console.log("inside the signin controller")
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    //if email does not exist in database
    if (!user) {
      return (
        res.status(404),
        json({
          errorMessage: "Invalid credentials",
        })
      );
      //  res.status(404)
      //  json({
      //     errorMessage: 'Invalid credentials'
      // })
    }
    //checking the haspassword from client to server is match
    //comparing the client input password from the user.password server particulary in database
    //we get the user.password because it has the table or Model of User which have the properties of password in db
    const isMatch = await bcrypt.compare(password, user.password);

    //if not match
    if (!isMatch) {
      // alert('Wrong password');
      return (
        res.status(404),
        res.json({
          errorMessage: "Invalid Credentials",
        })
      );
      // res.status(404)
      // res.json({
      //     errorMessage: "Invalid Credentials"
      // })
    }
    //install jsonwebtoken to get tokens and data info
    //payload
    const payload = {
      //user object that contains the details of user id in db
      user: {
        _id: user._id,
      },
    };
    //create a secret folder in server called config taht contains the secret and expires password
    //we will send the user details and tokens in client once the user login
    //call back function of error or token success
    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      //check for errors
      if (err) {
        console.log("jwt error", err);
      }

      //destructure from the user
      const { _id, email, username, role } = user;

      //send respond of token to the client and if does not have an error
      //sending token and user data in client particularly in token for cookies and user data in localstorage
      res.json({
        //send back the user and token
        //token will be stored in cookie
        // cookies are responsible for sending request from the server while user will be stored in local storage of client side
        token,
        //send back the user with all the destructure from the user
        //we did this because we want to get all the data to the client in order to display it to the frontend
        user: { _id, email, username, role },
      });

      //create a localStorage.js and cookies.js from client/helpers in order to create,get,delete a cookies from localstorage
      //in order to use it in signin method under Signin.js
    });
  } catch (error) {
    // alert(error);
    console.log("signinController error", error);
    res.json({
      errorMessage: "Server error under signin",
    });
  }
};
exports.GetUsers = async (req, res) => {
  try {
    const getUsers = await User.find({ role: 0 });
    res.json({ getUsers });
    console.log(getUsers);
  } catch (error) {
    console.log("Users GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET USERS",
    });
  }
};

exports.GetUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const getUser = await User.findById(userId);
    res.json(getUser);
  } catch (error) {
    console.log("User GET controller error", error);
    res.status(500).json({
      errorMessage: "Error in GET USER",
    });
  }
};
exports.DeleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deleteuser = await User.findByIdAndDelete(userId, req.body);
    console.log("A User successfully deleted");
    res.json({
      successMessage: "A User has been deleted",
    });
  } catch (error) {
    console.log("Users DELETE controller error", error);
    res.status(500).json({
      errorMessage: "Error in DELETE USERS",
    });
  }
};

// exports.GetReservations = async (req, res) => {
//   try {
//     const getReservation = await User.find({
//       name: req.params.username,
//     }).populate("reservations");
//     res.json(getReservation);
//   } catch (error) {
//     console.log("Revervations GET Controller Error", error);
//     res.json(500).json({
//       errorMessage: "Error in Get Reservations",
//     });
//   }
// };
