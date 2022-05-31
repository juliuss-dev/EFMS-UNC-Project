import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";

import { getAllVpaBluetoothSpeaker } from "../../../redux/actions/vpaInventoryAction";

function BluetoothSpeaker() {
  const { vpa } = useSelector((state) => state.vpa);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVpaBluetoothSpeaker());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center my-0 py-0">IMC INVENTORY</h1>
      <br />
      <h4 className="d-flex justify-content-center my-0 py-0 ">
        BLUETOOTH SPEAKER CATERGORY
      </h4>

      <Link to="/vpa/add">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded mb-3 ml-3">
          Add Equipments
        </span>
      </Link>
      <div className="d-flex flex-col-reverse ml-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to={"/vpa/view"}>
            <button type="button" class="btn btn-secondary border">
              All
            </button>
          </Link>
          <Link to={"/vpa/view/speaker"}>
            <button type="button" class="btn btn-secondary border">
              Speaker
            </button>
          </Link>

          {/* <Link to={"/vpa/view/bluetoothSpeaker"}>
            <button type="button" class="btn btn-secondary border">
              Bluetooth Speaker
            </button>
          </Link> */}
          <Link to={"/vpa/view/projector"}>
            <button type="button" class="btn btn-secondary border">
              Projector
            </button>
          </Link>

          <Link to={"/vpa/view/projectorScreen"}>
            <button type="button" class="btn btn-secondary border">
              Projector Screen
            </button>
          </Link>
          <Link to={"/vpa/view/microphone"}>
            <button type="button" class="btn btn-secondary border">
              Microphone
            </button>
          </Link>
          <Link to={"/vpa/view/lights"}>
            <button type="button" class="btn btn-secondary border">
              Lights
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

export default BluetoothSpeaker;
