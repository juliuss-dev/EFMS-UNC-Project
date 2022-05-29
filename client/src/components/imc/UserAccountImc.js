import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { showSuccessMsg, showErrorMsg } from "../helpers/message";
import { isAuthenticated } from "../helpers/auth";
import { getUser } from "../../redux/actions/userAction";
function UserAccountImc({ match }) {
  // console.log(match);
  const [firstname, setFistname] = useState("");
  const [middlename, setMiddlname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [username, setUsername] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const userId = match.params.userId;

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getUser(userId));
  // }, [dispatch]);
  useEffect(() => {
    if (!users) {
      dispatch(getUser(userId));
      // dispatch()
    } else {
      setFistname(users.firstname);
      setMiddlname(users.middlename);
      setLastname(users.lastname);
      setEmail(users.email);
      setBirthdate(users.birthdate);
      setUsername(users.username);
      //   setStatus(imcs.status);
    }
  }, [dispatch, userId, users]);

  const handleInventoryEquipmentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("middlename", middlename);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("birthdate", birthdate);
    formData.append("username", username);
    // formData.append("department", department);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`/api/auth/signup/${userId}`, formData, config)
      .then((res) => {
        // history.push("/imc/view");
        console.log("Update equipment Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <div>{JSON.stringify(imcs)}</div> */}
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/user/dashboard">
          <span className="fas fa-arrow-left text-white display-7 bg-secondary p-2 rounded">
            . Back to Dashboard
          </span>
        </Link>
      </div>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipmentSubmit}>
            {/* Header */}
            <div className="modal-header bg-secondary text-white text-center border-0">
              <h5 className="modal-title w-100">Account Information</h5>
              {/* <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button> */}
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {
                // if all input field has been inputted, show loading animation but remove the input fields
                // loading ? (
                //   <div className="text-center">{showLoading()}</div>
                // ) : (
                //else show input fields with error
                <>
                  <label className="text-dark">Firstname</label>
                  <input
                    className="form-control"
                    name="firstname"
                    // value={isAuthenticated().username}
                    value={firstname}
                    type="text"
                    onChange={(e) => {
                      setFistname(e.target.value);
                    }}
                  />

                  <label className="text-dark">Middlename</label>
                  <input
                    className="form-control"
                    name="middlename"
                    // value={isAuthenticated.middlename}
                    value={middlename}
                    type="text"
                    onChange={(e) => {
                      setMiddlname(e.target.value);
                    }}
                  />

                  <label className="text-dark">Lastname</label>
                  <input
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    type="text"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />

                  <label className="text-dark">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    value={email}
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <label className="text-dark">Birthdate</label>
                  <input
                    className="form-control"
                    name="birthdate"
                    value={birthdate}
                    type="date"
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                  />
                  <label className="text-dark">Username</label>
                  <input
                    className="form-control"
                    name="username"
                    value={username}
                    type="text"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </>
                // )
              }
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              {/* <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button> */}
              <button type="submit" className="btn btn-primary">
                Edit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAccountImc;
