import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { deleteEquipment } from "../../redux/actions/vpaInventoryAction";
import { getVpaEquipments } from "../../redux/actions/vpaInventoryAction";

function ViewVpaModal() {
  const { vpa } = useSelector((state) => state.vpa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVpaEquipments());
  }, [dispatch]);
  return (
    <div className="container my-2">
      <div className="d-flex flex-row-reverse">
        <Link to="/vpa/add">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Add Equipments
          </span>
        </Link>
      </div>

      <form>
        <div className="modal-body my-2">
          {
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Department</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vpa &&
                    vpa.map((vpa) => (
                      <tr key={vpa._id} inventory={vpa}>
                        <td>{vpa.name}</td>
                        <td>{vpa.model}</td>
                        <td>{vpa.units}</td>
                        <td>{vpa.description}</td>
                        <td>{vpa.dateAdded}</td>
                        <td>{vpa.department}</td>
                        <td className="text-primary">{vpa.status}</td>
                        <td>
                          <Link
                            to={`/vpa/edit/${vpa._id}`}
                            className="btn btn-success btn-lg mb-2"
                          >
                            <i className="fas fa-edit"></i>
                            {/* Edit */}
                          </Link>

                          <button
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            onClick={() => dispatch(deleteEquipment(vpa._id))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* //{" "} */}
            </>
            // )
          }

          {}
        </div>
      </form>
    </div>
  );
}

export default ViewVpaModal;
