import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
// import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";

import { getAllMaintenanceUncFlag } from "../../../../redux/actions/inventoryAction";

function UncFlag() {
  const { inventory } = useSelector((state) => state.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMaintenanceUncFlag());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center ">MAINTENANCE INVENTORY</h1>
      <br />
      <h4 className="d-flex justify-content-center my-0 py-0 ">
        UNIVERSITY OF NUEVA CACERES FLAG CATERGORY
      </h4>
      <Link to="/maintenance/add">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded mb-3 ml-3">
          Add Equipments
        </span>
      </Link>

      <div className="d-flex flex-col-reverse ml-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={"/maintenance/inventory"}>
            <button type="button" className="btn btn-secondary border py-3">
              All
            </button>
          </Link>
          <Link to={"/maintenance/view/unc"}>
            <button type="button" className="btn btn-secondary border py-1">
              UNC Flag
            </button>
          </Link>

          <Link to={"/maintenance/view/ph"}>
            <button type="button" className="btn btn-secondary border py-1">
              PH Flag
            </button>
          </Link>
          <Link to={"/maintenance/view/aircon"}>
            <button type="button" className="btn btn-secondary border py-3">
              Aircon
            </button>
          </Link>

          <Link to={"/maintenance/view/fan"}>
            <button type="button" className="btn btn-secondary border py-3">
              Fan
            </button>
          </Link>
          <Link to={"/maintenance/view/generator"}>
            <button type="button" className="btn btn-secondary border py-3">
              Generator
            </button>
          </Link>
          <Link to={"/maintenance/view/plants"}>
            <button type="button" className="btn btn-secondary border py-3">
              Plants
            </button>
          </Link>
          <Link to={"/maintenance/view/displayBoard"}>
            <button type="button" className="btn btn-secondary border py-1">
              Display Board
            </button>
          </Link>
          <Link to={"/maintenance/view/monoblock"}>
            <button type="button" className="btn btn-secondary border py-3">
              Monoblock
            </button>
          </Link>
          <Link to={"/maintenance/view/pavillionTable"}>
            <button type="button" class="btn btn-secondary border py-1">
              Pavillion Table
            </button>
          </Link>
          <Link to={"/maintenance/view/industrialFan"}>
            <button type="button" className="btn btn-secondary border py-1">
              Industrial Fan
            </button>
          </Link>
          <Link to={"/maintenance/view/aeratronFan"}>
            <button type="button" className="btn btn-secondary border py-1">
              Aeratron Fan
            </button>
          </Link>
          <Link to={"/maintenance/view/coolerFan"}>
            <button type="button" className="btn btn-secondary border py-1">
              Cooler Fan
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
                  {inventory &&
                    inventory.map((inventory) => (
                      <tr key={inventory._id} inventory={inventory}>
                        <td>{inventory.name}</td>
                        <td>{inventory.model}</td>
                        <td>{inventory.units}</td>
                        <td>{inventory.description}</td>
                        <td>{inventory.dateAdded}</td>
                        <td>{inventory.department}</td>
                        <td className="text-primary">{inventory.status}</td>
                        <td>
                          <Link
                            to={`/maintenance/edit/${inventory._id}`}
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

export default UncFlag;
