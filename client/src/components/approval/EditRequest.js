import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getReservation } from "../../redux/actions/reservationAction";
import { Link } from "react-router-dom";
import axios from "axios";
function EditRequest({ match, history }) {
  const reservationId = match.params.reservationId;
  // const reservationId = useParams();
  console.log(reservationId);
  // console.log(props);

  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);

  const [activityType, setActivityType] = useState("");
  const [title, setTitle] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [timeOfEvent, setTimeOfEvent] = useState("");
  const [numberParticipants, setNumberParticipants] = useState("");
  const [nameOfReqParty, setNameOfReqParty] = useState("");
  const [venue, setVenue] = useState("");
  const [soundSystem, setSoundSystem] = useState("");
  const [bluetoothSpeaker, setBluetoothSpeaker] = useState("");
  const [microphone, setmicrophone] = useState("");
  const [projector, setProjector] = useState("");
  const [projectorScreen, setProjectorScreen] = useState("");
  const [lights, setLights] = useState("");
  const [videoDocumentation, setVideoDocumentation] = useState("");
  const [photoDocumentation, setPhotoDocumentation] = useState("");
  const [janitorial, setJanitorial] = useState("");
  const [security, setSecurity] = useState("");
  const [electricians, setElectricians] = useState("");
  const [itTechnicians, setItTechnicians] = useState("");
  const [soundOperators, setSoundOperators] = useState("");
  const [generatorOperators, setGeneratorOperators] = useState("");
  const [van, setVan] = useState("");
  const [phFlag, setPhFlag] = useState("");
  const [uncFlag, setUncFlag] = useState("");
  const [aircon, setAircon] = useState("");
  const [fan, setFan] = useState("");
  const [generator, setGenerator] = useState("");
  const [plants, setPlants] = useState("");
  const [displayBoards, setDisplayBoards] = useState("");
  const [monoblocks, setMonoblocks] = useState("");
  const [pavillionTable, setPavillionTable] = useState("");
  const [industrialFan, setIndustrialFan] = useState("");
  const [aeratronFan, setAeratronFan] = useState("");
  const [coolerfan, setCoolerfan] = useState("");
  const [others, setOthers] = useState("");
  const [computers, setComputers] = useState("");
  const [printers, setPrinters] = useState("");
  const [uncTheaterGuild, setUncTheaterGuild] = useState("");
  const [collegeBand, setCollegeBand] = useState("");
  const [hsDxmc, setHsDxmc] = useState("");
  const [hsMajorettes, setHsMajorettes] = useState("");
  const [collegeMajorettes, setCollegeMajorettes] = useState("");
  const [elementaryMajorettes, setElementaryMajorettes] = useState("");
  const [cat, setCat] = useState("");
  const [status, setStatus] = useState("");
  //   const reservationId = useParams();
  //   console.log(reservationId);

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    //if the redux does not have a reservations, dispatch a getReservation action to get a value
    if (!reservations) {
      dispatch(getReservation(reservationId));
      //else rerservations exist in redux store,
    } else {
      setActivityType(reservations.activityType);
      setTitle(reservations.title);
      setStatus(reservations.status);
      setDateOfEvent(reservations.dateOfEvent);
      setTimeOfEvent(reservations.timeOfEvent);
      setNumberParticipants(reservations.numberParticipants);
      setNameOfReqParty(reservations.nameOfReqParty);
      setVenue(reservations.venue);
      setSoundSystem(reservations.soundSystem);
      setBluetoothSpeaker(reservations.bluetoothSpeaker);
      setmicrophone(reservations.microphone);
      setProjector(reservations.projector);
      setProjectorScreen(reservations.projectorScreen);
      setLights(reservations.lights);
      setVideoDocumentation(reservations.videoDocumentation);
      setPhotoDocumentation(reservations.photoDocumentation);
      setJanitorial(reservations.janitorial);
      setSecurity(reservations.security);
      setElectricians(reservations.electricians);
      setItTechnicians(reservations.itTechnicians);
      setSoundOperators(reservations.soundOperators);
      setGeneratorOperators(reservations.generatorOperators);
      setVan(reservations.van);
      setPhFlag(reservations.phFlag);
      setUncFlag(reservations.uncFlag);
      setAircon(reservations.aircon);
      setFan(reservations.fan);
      setGenerator(reservations.generator);
      setPlants(reservations.plants);
      setDisplayBoards(reservations.displayBoards);
      setMonoblocks(reservations.monoblocks);
      setPavillionTable(reservations.pavillionTable);
      setIndustrialFan(reservations.industrialFan);
      setAeratronFan(reservations.aeratronFan);
      setCoolerfan(reservations.coolerfan);
      setOthers(reservations.others);
      setComputers(reservations.computers);
      setPrinters(reservations.printers);
      setUncTheaterGuild(reservations.uncTheaterGuild);
      setCollegeBand(reservations.collegeBand);
      setHsDxmc(reservations.hsDxmc);
      setHsMajorettes(reservations.hsMajorettes);
      setCollegeMajorettes(reservations.collegeMajorettes);
      setElementaryMajorettes(reservations.elementaryMajorettes);
      setCat(reservations.cat);
    }
  }, [dispatch, reservations, reservationId]);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("activityType", activityType);
    // formData.append("title", title);
    formData.append("status", status);
    const config = {
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .put(`/api/reservation/${reservationId}`, formData, config)
      .then((res) => {
        history.push("/approval/dashboard");
        console.log("Update", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <div>INSIDE EDIT {reservations.title}</div> */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {/* Go back button to aproval dashboard */}
            <Link to="/approval/dashboard">
              <span className="fas fa-arrow-left text-white display-7 bg-success p-2 rounded">
                {" "}
                . Go Back
              </span>
            </Link>
            <div>
              <br />
              {/* form of update */}
              <div className="modal-content">
                <form onSubmit={handleRequestSubmit}>
                  <div className="modal-header bg-warning text-white">
                    <h5 className="modal-title text-dark">
                      Reservation Request Info
                    </h5>
                  </div>
                  <div className="modal-body my-2">
                    <>
                      {/* <div className="text-secondary">{title}</div> */}
                      <div className="form-group text-center">
                        <label className="text-secondary">Activity Type</label>
                        <p>{activityType}</p>
                        <hr />

                        {/* <label className="text-secondary">Title</label>
                        <p>{title}</p>
                        <label className="text-secondary">Time Duration</label>
                        <p>{timeDuration}</p> */}

                        {/* <input
                          type="text"
                          className="form-control"
                          name="activityType"
                          value={activityType}
                          onChange={(e) => setActivityType(e.target.value)}
                        /> */}
                      </div>
                      <div className="form-group text-center">
                        <label className="text-secondary">Title</label>
                        <p>{title}</p>
                        <hr />

                        <label className="text-secondary">Date</label>
                        <p>{dateOfEvent}</p>
                        <hr />
                        <hr />

                        <label className="text-secondary">Time</label>
                        <p>{timeOfEvent}</p>
                        <hr />

                        <label className="text-secondary">
                          Number of Participants
                        </label>
                        <p>{numberParticipants}</p>
                        <hr />

                        <label className="text-secondary">
                          Name of Requesting Party
                        </label>
                        <p>{nameOfReqParty}</p>
                        <hr />

                        <label className="text-secondary">Venue</label>
                        <p>{venue}</p>
                        <hr />

                        <label className="text-secondary">Sound System</label>
                        <p>{soundSystem}</p>
                        <hr />

                        <label className="text-secondary">
                          Bluetooth Speaker
                        </label>
                        <p>{bluetoothSpeaker}</p>
                        <hr />

                        <label className="text-secondary">Microphone</label>
                        <p>{microphone}</p>
                        <hr />

                        <label className="text-secondary">Projector</label>
                        <p>{projector}</p>
                        <hr />

                        <label className="text-secondary">
                          Projector Screen
                        </label>
                        <p>{projectorScreen}</p>
                        <hr />

                        <label className="text-secondary">Lights</label>
                        <p>{lights}</p>
                        <hr />

                        <label className="text-secondary">
                          Video Documentation
                        </label>
                        <p>{videoDocumentation}</p>
                        <hr />

                        <label className="text-secondary">
                          Photo Documentation
                        </label>
                        <p>{photoDocumentation}</p>
                        <hr />

                        <label className="text-secondary">Janitorial</label>
                        <p>{janitorial}</p>
                        <hr />

                        <label className="text-secondary">Security</label>
                        <p>{security}</p>
                        <hr />

                        <label className="text-secondary">Electricians</label>
                        <p>{electricians}</p>
                        <hr />

                        <label className="text-secondary">It Technicians</label>
                        <p>{itTechnicians}</p>
                        <hr />

                        <label className="text-secondary">
                          Sound Operators
                        </label>
                        <p>{soundOperators}</p>
                        <hr />

                        <label className="text-secondary">
                          Generator Operators
                        </label>
                        <p>{generatorOperators}</p>
                        <hr />

                        <label className="text-secondary">Van</label>
                        <p>{van}</p>
                        <hr />

                        <label className="text-secondary">
                          Philippine Flag
                        </label>
                        <p>{phFlag}</p>
                        <hr />

                        <label className="text-secondary">UNC Flag</label>
                        <p>{uncFlag}</p>
                        <hr />

                        <label className="text-secondary">Aircon</label>
                        <p>{aircon}</p>
                        <hr />

                        <label className="text-secondary">Fan</label>
                        <p>{fan}</p>
                        <hr />

                        <label className="text-secondary">Generator</label>
                        <p>{generator}</p>
                        <hr />

                        <label className="text-secondary">Plants</label>
                        <p>{plants}</p>
                        <hr />

                        <label className="text-secondary">Display Boards</label>
                        <p>{displayBoards}</p>
                        <hr />

                        <label className="text-secondary">Monoblocks</label>
                        <p>{monoblocks}</p>
                        <hr />

                        <label className="text-secondary">
                          Pavillion Table
                        </label>
                        <p>{pavillionTable}</p>
                        <hr />

                        <label className="text-secondary">Industrial Fan</label>
                        <p>{industrialFan}</p>
                        <hr />

                        <label className="text-secondary">Astro Fan</label>
                        <p>{aeratronFan}</p>
                        <hr />

                        <label className="text-secondary">Cooler Fan</label>
                        <p>{coolerfan}</p>
                        <hr />

                        <label className="text-secondary">Others</label>
                        <p>{others}</p>
                        <hr />

                        <label className="text-secondary">Computers</label>
                        <p>{computers}</p>
                        <hr />

                        <label className="text-secondary">Printers</label>
                        <p>{printers}</p>
                        <hr />

                        <label className="text-secondary">
                          UNC Theater Guild
                        </label>
                        <p>{uncTheaterGuild}</p>
                        <hr />

                        <label className="text-secondary">College Band</label>
                        <p>{collegeBand}</p>
                        <hr />

                        <label className="text-secondary">
                          High School DXMC
                        </label>
                        <p>{hsDxmc}</p>
                        <hr />

                        <label className="text-secondary">
                          High School Majorettes
                        </label>
                        <p>{hsMajorettes}</p>
                        <hr />

                        <label className="text-secondary">
                          College Majorettes
                        </label>
                        <p>{collegeMajorettes}</p>
                        <hr />

                        <label className="text-secondary">
                          Elementary Majorettes
                        </label>
                        <p>{elementaryMajorettes}</p>
                        <hr />

                        <label className="text-secondary">CAT</label>
                        <p>{cat}</p>
                        <hr />

                        {/* <textarea
                          className="form-control"
                          rows="3"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        ></textarea> */}
                      </div>

                      <div className="form-group">
                        <label className="font-weight-bold">Status</label>
                        <select
                          name="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="custom-select mr-sm-2 text-white bg-success"
                        >
                          <option>{status}</option>
                          <option>Pending</option>
                          <option>Approve</option>

                          {/* <option>Academic</option> */}
                        </select>
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
