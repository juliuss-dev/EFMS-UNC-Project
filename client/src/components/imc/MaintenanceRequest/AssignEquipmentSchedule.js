import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteEquipment,
  getImcEquipments,
  getAllImcRepair,
} from "../../../redux/actions/imcInventoryAction";
// import { getImcInventoryByFilter } from "../../redux/actions/filterAction";

function AssignEquipmentSchedule() {
  const { imc } = useSelector((state) => state.imc);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getAllImcRepair());
  }, [dispatch]);

  //   const handleSearch = (e) => {
  //     setText(e.target.value);
  //     dispatch(getImcInventoryByFilter({ type: "text", query: e.target.value }));
  //   };

  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center ">
        Assign Equipment to be repair
      </h1>

      <Link to="/imc/add">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded mb-3 ml-3">
          Back
        </span>
      </Link>
      {/* <input
        className="form-control mr-sm-2 m-2"
        type="search"
        placeholder="Search by name"
        aria-label="Search"
        name="search"
        value={text}
        onChange={handleSearch}
      /> */}
      {/* <div className="d-flex flex-col-reverse ml-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary border">
            All
          </button>
          <Link to={"/imc/view/dslr"}>
            <button type="button" class="btn btn-secondary border">
              DSLR
            </button>
          </Link>

          <Link to={"/imc/view/lense"}>
            <button type="button" class="btn btn-secondary border">
              Lenses
            </button>
          </Link>
          <Link to={"/imc/view/tripod"}>
            <button type="button" class="btn btn-secondary border">
              Tripod
            </button>
          </Link>
        </div>
      </div> */}

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
                  {imc &&
                    imc.map((imc) => (
                      <tr key={imc._id} imc={imc}>
                        <td>{imc.name}</td>
                        <td>{imc.model}</td>
                        <td>{imc.units}</td>
                        <td>{imc.description}</td>
                        <td>{imc.dateAdded}</td>
                        <td>{imc.department}</td>
                        <td className="text-primary">{imc.status}</td>
                        <td>
                          <Link
                            to={`/imc/edit/${imc._id}`}
                            className="btn btn-success btn-lg mb-2"
                          >
                            <i className="fas fa-edit"></i>
                            {/* Edit */}
                          </Link>

                          <button
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            onClick={() => dispatch(deleteEquipment(imc._id))}
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

export default AssignEquipmentSchedule;
