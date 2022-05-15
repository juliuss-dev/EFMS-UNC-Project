import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getReservation } from "../../redux/actions/reservationAction";
// import { Link } from "react-router-dom";
import axios from "axios";
function EditRequest({ match, history }) {
  const reservationId = match.params.reservationId;
  // const reservationId = useParams();
  // console.log(reservationId);
  const dispatch = useDispatch();
  const { reservation } = useSelector((state) => state.reservation);

  const [activityType, setActivityType] = useState("");
  const [title, setTitle] = useState("");
  // const [timeDuration, setTimeDuration] = useState("");
  // const [numberParticipants, setNumberParticipants] = useState("");
  // const [nameOfReqParty, setNameOfReqParty] = useState("");
  // const [venue, setVenue] = useState("");
  // const [soundSystem, setSoundSystem] = useState("");
  // const [bluetoothSpeaker, setBluetoothSpeaker] = useState("");
  // const [microphone, setmicrophone] = useState("");
  // const [projector, setProjector] = useState("");
  // const [projectorScreen, setProjectorScreen] = useState("");
  // const [lights, setLights] = useState("");
  // const [videoDocumentation, setVideoDocumentation] = useState("");
  // const [photoDocumentation, setPhotoDocumentation] = useState("");
  // const [janitorial, setJanitorial] = useState("");
  // const [security, setSecurity] = useState("");
  // const [electricians, setElectricians] = useState("");
  // const [itTechnicians, setItTechnicians] = useState("");
  // const [soundOperators, setSoundOperators] = useState("");
  // const [generatorOperators, setGeneratorOperators] = useState("");
  // const [van, setVan] = useState("");
  // const [phFlag, setPhFlag] = useState("");
  // const [uncFlag, setUncFlag] = useState("");
  // const [aircon, setAircon] = useState("");
  // const [fan, setFan] = useState("");
  // const [generator, setGenerator] = useState("");
  // const [plants, setPlants] = useState("");
  // const [displayBoards, setDisplayBoards] = useState("");
  // const [monoblocks, setMonoblocks] = useState("");
  // const [pavillionTable, setPavillionTable] = useState("");
  // const [industrialFan, setIndustrialFan] = useState("");
  // const [aeratronFan, setAeratronFan] = useState("");
  // const [coolerfan, setCoolerfan] = useState("");
  // const [others, setOthers] = useState("");
  // const [computers, setComputers] = useState("");
  // const [printers, setPrinters] = useState("");
  // const [uncTheaterGuild, setUncTheaterGuild] = useState("");
  // const [collegeBand, setCollegeBand] = useState("");
  // const [hsDxmc, setHsDxmc] = useState("");
  // const [hsMajorettes, setHsMajorettes] = useState("");
  // const [collegeMajorettes, setCollegeMajorettes] = useState("");
  // const [elementaryMajorettes, setElementaryMajorettes] = useState("");
  // const [cat, setCat] = useState("");
  const [status, setStatus] = useState("");
  //   const reservationId = useParams();
  //   console.log(reservationId);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!reservation) {
      dispatch(getReservation(reservationId));
    } else {
      setActivityType(reservation.activityType);
      setTitle(reservation.title);
      setStatus(reservation.status);
    }
  }, [dispatch, reservation, reservationId]);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("activityType", activityType);
    formData.append("title", title);
    formData.append("status", status);
    const config = {
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .put(`/api/reservation/${reservationId}`, formData, config)
      .then((res) => {
        history.push("/approval/dashboard");
        console.log("Update");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>INSIDE EDIT {reservation.title}</div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* Go back button to admin dashboard */}
            {/* <Link to="/approval/dashboard">
              <span className="fas fa-arrow-left">Go Back</span>
            </Link> */}
            <div>
              <br />
              {/* form of update */}
              <div className="modal-content">
                <form onSubmit={handleRequestSubmit}>
                  <div className="modal-header bg-warning text-white">
                    <h5 className="modal-title">Reservation Request</h5>
                  </div>
                  <div className="modal-body my-2">
                    <>
                      {/* <div className="text-secondary">{title}</div> */}
                      <div className="form-group">
                        <label className="text-secondary">Activity Type</label>
                        <input
                          type="text"
                          className="form-control"
                          name="activityType"
                          value={activityType}
                          onChange={(e) => setActivityType(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-secondary">Title</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label className="text-secondary">Status</label>
                        <input
                          type="text"
                          className="form-control"
                          name="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                      </div>
                    </>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-warning text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditRequest;
