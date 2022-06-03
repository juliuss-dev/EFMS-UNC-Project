import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers, deleteUser } from "../../../redux/actions/userAction";
function UserAccountManagement() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg-light">
          <form>
            {/* Header */}
            <div className="modal-header bg-info text-black text-center border-0">
              <h5 className="modal-title w-100">User Account Management</h5>
              <Link to={"/maintenance/dashboard"}>
                <button className="close" data-dismiss="modal">
                  <span>
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </button>
              </Link>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              <>
                <table class="table table-hover">
                  <thead class="thead-dark">
                    <tr>
                      {/* <th scope="col">ID</th> */}
                      <th scope="col">Firstname</th>
                      <th scope="col">Middlename</th>
                      <th scope="col">Lastname</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Birthdate</th>
                      <th scope="col">Username</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user &&
                      user.map((user) => (
                        <tr>
                          <td>{user.firstname}</td>
                          <td>{user.middlename}</td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>
                          <td>{user.birthdate}</td>
                          <td>{user.username}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => dispatch(deleteUser(user._id))}
                            >
                              <i className="fas fa-trash pr-2"></i>
                              Delete User
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              {/* <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button> */}
              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAccountManagement;
