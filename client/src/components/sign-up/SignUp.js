import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showErrorMsg } from "../helpers/message";
import { showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";
import { isAuthenticated } from "../helpers/auth";

// import { Link } from 'react-router-dom'

function SignUp() {
  const history = useHistory();

  useEffect(() => {
    //redirect to admin
    if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
    //redirect to user
    else if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/maintenance/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 2) {
      history.push("/approval/dashboard");
    }
  }, [history]);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    birthdate: "",
    username: "",
    password: "",
    password2: "",
  });
  //destructure the formData
  const {
    firstname,
    middlename,
    lastname,
    email,
    birthdate,
    username,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //Event Handlers

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //client side validation using validator dependency
    //check if empty inputs
    if (
      isEmpty(username) &&
      isEmpty(email) &&
      isEmpty(password) &&
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    }
    //if not email
    else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
        // errorMsg: email.response.data.errorMessage
      });
    }
    //if password is not equal to password2
    else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Password did not match",
      });
    } else {
      //destructure the state into objects
      const {
        firstname,
        middlename,
        lastname,
        email,
        birthdate,
        username,
        password,
      } = formData;
      const data = {
        firstname,
        middlename,
        lastname,
        email,
        birthdate,
        username,
        password,
      };

      //api
      signup(data)
        .then((response) => {
          console.log("Axios singup success", response);

          setFormData({
            firstname: "",
            middlename: "",
            lastname: "",
            email: "",
            birthdate: "",
            username: "",
            password: "",
            password2: "",
            //set the loading data to false to avoid infinite run
            loading: false,
            //everthing that is comming from the server is going to store inside the data object
            //get the response from the server. // successMessage is from the server
            //which is going to store inside the successMsg component state
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("axios signup error", err);
          //seth the loading data to false to avoid infinite run
          // get the errorMsg and set it to the server // which has to be the same name object from the server errorMessage
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });

      //once submitted and does not have error, the loading will appear
      //pag nagsubmit madiretso sa request, habang dae pa nabalik si response maloading lang sya
      //kaya si trycatch na loading naka default false ta para nagluwas si response hali sa axios dae maluwas si loading
      setFormData({ ...formData, loading: true });
    }
  };
  return (
    <div className="main-sign-up">
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        {errorMsg && showErrorMsg(errorMsg)}
        {/* if success message is true then execute the message method */}
        {successMsg && showSuccessMsg(successMsg)}
        {loading && <div className="text-center pb-4">{showLoading()}</div>}
        <label>Firstname</label>
        <input
          name="firstname"
          value={firstname}
          type="text"
          onChange={handleChange}
        />

        {/* <label>Middlename</label>
                    <input type="text" onChange={(event) =>{
                        SetMiddlename(event.target.value)
                    }}/> */}
        <label>Middlename</label>
        <input
          name="middlename"
          value={middlename}
          type="text"
          onChange={handleChange}
        />

        <label>Lastname</label>
        <input
          name="lastname"
          value={lastname}
          type="text"
          onChange={handleChange}
        />

        <label>Email</label>
        <input name="email" value={email} type="text" onChange={handleChange} />

        <label>Birthdate</label>
        <input
          name="birthdate"
          value={birthdate}
          type="date"
          onChange={handleChange}
        />

        <label>Username</label>
        <input
          name="username"
          value={username}
          type="text"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
        />

        <label> Confirm Password</label>
        <input
          name="password2"
          value={password2}
          type="password"
          onChange={handleChange}
        />

        <button className="main-sign-up-button">Register</button>
        <p className="text-center text-black">
          Have an account? <Link to="/signin">Log In</Link>
        </p>
      </form>
      <div className="sign-up-logo">
        <img className="main-sign-up-logo" src="./img/UNC_LOGO.png" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
