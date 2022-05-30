import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";

import { getAllIctLaptop } from "../../../redux/actions/ictInventoryAction";

function Laptop() {
  const { ict } = useSelector((state) => state.ict);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIctLaptop());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <Link to="/ict/add">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded mb-3 ml-3">
          Add Equipments
        </span>
      </Link>
      <div className="d-flex flex-col-reverse ml-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={"/ict/view"}>
            <button type="button" class="btn btn-secondary border">
              All
            </button>
          </Link>
          <Link to={"/ict/view/desktop"}>
            <button type="button" class="btn btn-secondary border">
              Desktop
            </button>
          </Link>

          <Link to={"/ict/view/laptop"}>
            <button type="button" class="btn btn-secondary border">
              Laptop
            </button>
          </Link>
          <Link to={"/ict/view/keyboard"}>
            <button type="button" class="btn btn-secondary border">
              Keyboard
            </button>
          </Link>
          <Link to={"/ict/view/mouse"}>
            <button type="button" class="btn btn-secondary border">
              Mouse
            </button>
          </Link>
        </div>
      </div>

      <form>
        <div className="modal-body my-0 py-0">
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
                  {ict &&
                    ict.map((ict) => (
                      <tr key={ict._id} inventory={ict}>
                        <td>{ict.name}</td>
                        <td>{ict.model}</td>
                        <td>{ict.units}</td>
                        <td>{ict.description}</td>
                        <td>{ict.dateAdded}</td>
                        <td>{ict.department}</td>
                        <td className="text-primary">{ict.status}</td>
                        <td>
                          <Link
                            to={`/ict/edit/${ict._id}`}
                            className="btn btn-success btn-lg mb-2"
                          >
                            <i className="fas fa-edit"></i>
                            {/* Edit */}
                          </Link>

                          <button
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            // onClick={() => dispatch(deleteEquipment(ict._id))}
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
        </div>
      </form>
    </div>
  );
}

export default Laptop;
