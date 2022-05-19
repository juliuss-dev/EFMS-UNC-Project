import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import EditEquipments from "../../maintenance/EditEquipments";
import { useDispatch, useSelector } from "react-redux";
import {
  getEquipments,
  getEquipment,
  deleteEquipment,
} from "../../../redux/actions/inventoryAction";
function ViewMaintenanceEquipment() {
  const { inventory } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEquipments());
  }, [dispatch]);
  return (
    <div className="container my-2">
      <div className="d-flex flex-row-reverse">
        <Link to="/maintenance/add">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Add Equipments
          </span>
        </Link>
      </div>

      <form>
        {/* Header */}

        {/* Body */}
        <div className="modal-body my-2">
          {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
              {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
          {/* {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)} */}

          {
            // if all input field has been inputted, show loading animation but remove the input fields
            // loading ? (
            //   <div className="text-center">{showLoading()}</div>
            // ) : (
            //else show input fields with error
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory &&
                    inventory.map((inventory) => (
                      <tr key={inventory._id} inventory={inventory}>
                        {/* <th scope="row"></th> */}
                        {/* <td>{inventory._id}</td> */}
                        <td>{inventory.name}</td>
                        <td>{inventory.model}</td>
                        <td>{inventory.units}</td>
                        <td>{inventory.description}</td>
                        <td>{inventory.dateAdded}</td>
                        <td>{inventory.status}</td>
                        <td>
                          <Link
                            to={`/maintenance/edit/${inventory._id}`}
                            className="btn btn-warning btn-lg mb-2 m-1"
                            // data-toggle="modal"
                            // data-target="#EditEquipmentsModal"
                            // data-dismiss="modal"
                            // key={e._id}
                          >
                            <i className="fas fa-edit"></i>
                            {/* Edit */}
                          </Link>

                          {/* <EditEquipments
                                  key={e._id}
                                  e={e}
                                  className="btn btn-warning btn-lg mb-2"
                                >
                                  Edit
                                </EditEquipments> */}
                          <button
                            className="btn btn-danger btn-lg mb-2"
                            onClick={() =>
                              dispatch(deleteEquipment(inventory._id))
                            }
                          >
                            <i className="fas fa-trash"></i>
                            {/* Delete */}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* //{" "} */}
            </>
            // )

            /* <label className='text-dark'>Equipment name</label>
                      <input className='form-control' name='name' value={name} type="text" onChange={handleInventory}/> */
          }

          {/* <label className="text-dark" key={e._id} value={e._id}>
                     {e.name}, {e.quantity}
                    
                  </label>
                  
                  {(_id, name, quantity, description, dateAdded, status)} */}
        </div>
      </form>
    </div>
  );
}

export default ViewMaintenanceEquipment;
