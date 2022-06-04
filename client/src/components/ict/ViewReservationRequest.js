import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../redux/actions/reservationAction";
import {
  deleteEquipment,
  getIctEquipments,
} from "../../redux/actions/ictInventoryAction";
import { getIctInventoryByFilter } from "../../redux/actions/filterAction";
import Moment from "moment";
function ViewReservationRequest() {
  const { reservation } = useSelector((state) => state.reservation);

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  //   const handleSearch = (e) => {
  //     setText(e.target.value);
  //     dispatch(getIctInventoryByFilter({ type: "text", query: e.target.value }));
  //   };

  return (
    <div className="container my-2  ">
      {/* <Link to="/ict/add">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded mb-3 ml-3">
          Add Equipments
        </span>
      </Link>
      <input
        className="form-control mr-sm-2 m-2"
        type="search"
        placeholder="Search by name"
        aria-label="Search"
        name="search"
        value={text}
        onChange={handleSearch}
      />
      <div className="d-flex flex-col-reverse ml-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary border">
            All
          </button>
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
      </div> */}
      <h1 className="d-flex justify-content-center ">
        ICT Reservation Request Equipment
      </h1>

      <form>
        <div className="modal-body my-0 py-0 lg">
          {
            <>
              <table class="table table-hover lg">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Requesting Party</th>
                    <th scope="col">Activity Type</th>
                    <th scope="col">Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Computers</th>
                    <th scope="col">Printers</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reservation &&
                    reservation.map((reservation) => (
                      <tr reservation={reservation._id} inventory={reservation}>
                        <td>{reservation.nameOfReqParty}</td>
                        <td>{reservation.activityType}</td>
                        <td>{reservation.title}</td>
                        <td>
                          {
                            (reservation.dateOfEvent = Moment().format(
                              "MMM Do YY"
                            ))
                          }
                        </td>
                        <td>
                          {
                            (reservation.timeOfEvent = Moment().format(
                              "hh:mm A"
                            ))
                          }
                        </td>
                        <td>{reservation.venue}</td>
                        <td>{reservation.computers}</td>
                        <td>{reservation.printers}</td>

                        <td className="text-primary">{reservation.status}</td>
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

export default ViewReservationRequest;
