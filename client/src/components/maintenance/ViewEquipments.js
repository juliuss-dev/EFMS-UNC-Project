import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../helpers/loading";
import EditEquipments from "./EditEquipments";
import { useDispatch, useSelector } from "react-redux";
import {
  getEquipments,
  getEquipment,
  deleteEquipment,
} from "../../redux/actions/inventoryAction";
function ViewEquipments() {
  // const [equipments, setEquipments] = useState();
  // const [loading, setLoading] = useState(false);
  // const inventoryId = match.params.inventoryId;

  // useEffect(() => {
  //   loadEquipments();
  // }, [loading]);

  // const loadEquipments = async () => {
  //   await getEquipments()
  //     .then((response) => {
  //       setLoading(false);
  //       setEquipments(response.data.maintenanceInventory);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const inventoryId = useParams();
  const { inventory } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEquipments());
  }, [dispatch]);
  return (
    <div id="ViewEquipmentsModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg-light">
          <form>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">View Equipments</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button>
            </div>

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
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
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
                            <td>{inventory._id}</td>
                            <td>{inventory.equipmentName}</td>
                            <td>{inventory.quantity}</td>
                            <td>{inventory.description}</td>
                            <td>{inventory.dateAdded}</td>
                            <td>{inventory.status}</td>
                            <td>
                              <Link
                                to={`/maintenance/edit/${inventory._id}`}
                                className="btn btn-warning btn-lg mb-2"
                                data-toggle="modal"
                                data-target="#EditEquipmentsModal"
                                data-dismiss="modal"
                                // key={e._id}
                              >
                                Edit
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
                                Delete
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

            {/* Footer */}
            <div className="modal-footer border-0 ">
              <button className="btn btn-danger" data-dismiss="modal">
                Back
              </button>
              {/* <button type="submit" className="btn btn-primary">
                Submit
              </button> */}

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewEquipments;
