import React, { useEffect, useState } from "react";
import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../helpers/loading";
function ViewEquipments() {
  const [equipments, setEquipments] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEquipments();
  }, [loading]);

  const loadEquipments = async () => {
    await getEquipments()
      .then((response) => {
        setLoading(false);
        setEquipments(response.data.maintenanceInventory);
        console.log(equipments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                loading ? (
                  <div className="text-center">{showLoading()}</div>
                ) : (
                  //else show input fields with error
                  <>
                    <table class="table table-hover">
                      <thead class="thead-dark">
                        <tr>
                          {/* <th scope="col">ID</th> */}
                          <th scope="col">Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Description</th>
                          <th scope="col">Date Added</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipments &&
                          equipments.map((e) => (
                            <tr>
                              {/* <th scope="row"></th> */}
                              {/* <td>{e._id}</td> */}
                              <td>{e.name}</td>
                              <td>{e.quantity}</td>
                              <td>{e.description}</td>
                              <td>{e.dateAdded}</td>
                              <td>{e.status}</td>
                              <td>
                                <button className="btn btn-warning btn-lg mb-2">Edit</button>
                                <button className="btn btn-danger btn-lg mb-2">Delete</button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {/* //{" "} */}
                  </>
                )

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
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewEquipments;
