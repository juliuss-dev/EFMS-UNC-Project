import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import isEmpty from "validator/lib/isEmpty";
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { createReservation } from "../../redux/actions/reservationAction";
import { clearMessages } from "../../redux/actions/messageAction";
import { getComputer } from "../../redux/actions/ictInventoryAction";
import { getPrinter } from "../../redux/actions/ictInventoryAction";
// import { getIctEquipments } from "../../redux/actions/ictInventoryAction";

function AddReservationModal() {
  //Redux Global State Properties
  const { loading } = useSelector((state) => state.loading);
  const { ict } = useSelector((state) => state.ict);
  // const counter = useSelector((state) => state.counter.ict);
  // console.log("ict", ict);
  // const {successMsg, errorMsg} = useSelector(state => state.messages)
  // const {reservation} = useSelector(state => state.reservation)
  // console.log(reservation)
  const dispatch = useDispatch();

  //state component
  const [clientSideErrorMsg, setClientSideErrorMsg] = useState("");
  const [clientSideSuccessMsg, setClientSideSuccessMsg] = useState("");
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

  // const [getComputerUnits, setGetComputerUnits] = useState([]);
  //event handlers
  const handleMessages = (e) => {
    dispatch(clearMessages());
    setClientSideErrorMsg("");
  };

  useEffect(() => {
    dispatch(getComputer());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getPrinter());
  // }, [dispatch]);

  // const displayPrinterLength = getComputer().getComputerSum;

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    //validation

    if (isEmpty(activityType)) {
      setClientSideErrorMsg("Activity Type is required");
    } else if (isEmpty(title)) {
      setClientSideErrorMsg("Title is required");
    } else if (isEmpty(dateOfEvent)) {
      setClientSideErrorMsg("Time Duration is required");
    } else {
      dispatch(
        createReservation({
          activityType,
          title,
          dateOfEvent,
          timeOfEvent,
          numberParticipants,
          nameOfReqParty,
          venue,
          soundSystem,
          bluetoothSpeaker,
          microphone,
          projector,
          projectorScreen,
          lights,
          videoDocumentation,
          photoDocumentation,
          janitorial,
          security,
          electricians,
          itTechnicians,
          soundOperators,
          generatorOperators,
          van,
          phFlag,
          uncFlag,
          aircon,
          fan,
          generator,
          plants,
          displayBoards,
          monoblocks,
          pavillionTable,
          industrialFan,
          aeratronFan,
          coolerfan,
          others,
          computers,
          printers,
          uncTheaterGuild,
          collegeBand,
          hsDxmc,
          hsMajorettes,
          collegeMajorettes,
          elementaryMajorettes,
          cat,
        })
      );

      setClientSideSuccessMsg("Successfully Create a Reservation ✓");
    }
  };

  const arrayCom = getComputer();

  return (
    <div onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <form onSubmit={handleReservationSubmit}>
            {/* Header */}
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">ADD RESERVATION</h5>
              <button className="close" data-dismiss="modal">
                <Link to={"/user/dashboard"}>
                  {" "}
                  <span>
                    <i className="fa-solid fa-xmark text-white"></i>
                  </span>
                </Link>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* if has error message, show the message in the client */}
              {/* checking the empty string validation */}
              {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
              {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)}
              {/* {errorMsg && showErrorMsg(errorMsg)} */}
              {/* if has success message, show the message in the client */}
              {/* {successMsg && showSuccessMsg(successMsg)} */}

              {/* we can add showLoading() the same as errorMsg and successMsg
                            but we need to show the loading animation only and not the input field once
                            it was submit, so we have the if else statement below  */}

              {// if all input field has been inputted, show loading animation but remove the input fields
              loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                //else show input fields with error
                <>
                  <p className="h6 text-danger">
                    *Select only what is needed in your reservation*{" "}
                  </p>
                  <label className="text-danger mb-5">I. ACTIVITY TYPE</label>
                  <select
                    name="activityType"
                    onChange={(e) => setActivityType(e.target.value)}
                    className="custom-select mr-sm-2"
                  >
                    <option selected>Select Activity Type...</option>
                    <option>Academic</option>
                    <option>Non-Academic</option>
                    <option>Student Sponsored</option>
                    <option>University Sponsored</option>
                  </select>
                  {/* <label className='text-secondary'>Activty Type</label>
                                 <input type="text" className='form-control' onChange={(e) => setActivityType(e.target.value)} /> */}
                  <label className="text-dark">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="text-dark">Date </label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDateOfEvent(e.target.value)}
                  />
                  <label className="text-dark">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    onChange={(e) => setTimeOfEvent(e.target.value)}
                  />
                  <label className="text-dark">Number of Participants</label>
                  <input
                    type="text"
                    className="form-control"
                    name="numberParticipants"
                    value={numberParticipants}
                    onChange={(e) => setNumberParticipants(e.target.value)}
                  />
                  <label className="text-dark">Name Of Requesting Party</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nameOfReqParty"
                    value={nameOfReqParty}
                    onChange={(e) => setNameOfReqParty(e.target.value)}
                  />
                  <label className="text-center text-danger mt-5">
                    {" "}
                    II. VENUE
                  </label>
                  <select
                    name="venue"
                    onChange={(e) => setVenue(e.target.value)}
                    className="custom-select mr-sm-2"
                  >
                    <option selected>Choose a venue....</option>
                    <option>Sports Palace</option>
                    <option>Covert Court A</option>
                    <option>Covert Court B</option>
                    <option>Pavillion</option>
                    <option>Social Hall</option>
                    <option>Chapel</option>
                  </select>
                  {/* <label className='text-secondary'>Venue</label>
                                <input type="text" className='form-control' name='venue' value={venue} onChange={(e) => setVenue(e.target.value)} /> */}
                  <label className="text-center text-danger mt-5">
                    {" "}
                    III. IMC RESOURCES
                  </label>{" "}
                  <br />
                  {/* <label className='text-dark'>Video Documentation</label>
                                <input type="text" className='form-control' name='videoDocumentation' value={videoDocumentation} onChange={(e) => setVideoDocumentation(e.target.value)} /> */}
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="videoDocumentation"
                      onChange={(e) => setVideoDocumentation(e.target.value)}
                      // className="custom-select mr-sm-2"
                    ></input>
                    <label className="text-dark ml-4">
                      Video Documentation
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="photoDocumentation"
                      onChange={(e) => setPhotoDocumentation(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">
                      Photo Documentation
                    </label>
                  </div>
                  <label className="text-center text-danger mt-5">
                    {" "}
                    IV. VPA AUXILIARY
                  </label>{" "}
                  <br />
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="soundSystem"
                      onChange={(e) => setSoundSystem(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Sound System</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="bluetoothSpeaker"
                      onChange={(e) => setBluetoothSpeaker(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Bluetooth Speaker</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="projector"
                      onChange={(e) => setProjector(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">
                      Multimedia Projector
                    </label>
                  </div>
                  <label className="text-dark">Microphone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="microphone"
                    value={microphone}
                    onChange={(e) => setmicrophone(e.target.value)}
                  />
                  <br />
                  <label className="text-dark">Projector Screen</label>
                  <input
                    type="number"
                    className="form-control"
                    name="projectorScreen"
                    value={projectorScreen}
                    onChange={(e) => setProjectorScreen(e.target.value)}
                  />
                  <label className="text-dark">Lights</label>
                  <input
                    type="number"
                    className="form-control"
                    name="lights"
                    value={lights}
                    onChange={(e) => setLights(e.target.value)}
                  />
                  <label className="text-danger mt-5">
                    V. PERSONNEL SERVICES
                  </label>{" "}
                  <br />
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="janitorial"
                      onChange={(e) => setJanitorial(e.target.value)}
                      // className="custom-select mr-sm-2"
                    ></input>
                    <label className="text-dark ml-4">Janitorial</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="security"
                      onChange={(e) => setSecurity(e.target.value)}
                      // className="custom-select mr-sm-2"
                    >
                      {/* <option selected>Select Options....</option>
                      <option>NO</option>
                      <option>YES</option> */}
                    </input>
                    <label className="text-dark ml-4">Security</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="electricians"
                      onChange={(e) => setElectricians(e.target.value)}
                      // className="custom-select mr-sm-2"
                    >
                      {/* <option selected>Select Options....</option>
                      <option>NO</option>
                      <option>YES</option> */}
                    </input>
                    <label className="text-dark ml-4  ">Electricians</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="itTechnicians"
                      onChange={(e) => setItTechnicians(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">IT Technicians</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="soundOperators"
                      onChange={(e) => setSoundOperators(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Sound Operator</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="generatorOperators"
                      onChange={(e) => setGeneratorOperators(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">
                      Generator Operators
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="van"
                      onChange={(e) => setVan(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Van</label>
                  </div>
                  <label className="text-danger mt-5">
                    VI. RESOURCES NEEDED
                  </label>{" "}
                  <br />
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="phFlag"
                      onChange={(e) => setPhFlag(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Philippine Flag</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="uncFlag"
                      onChange={(e) => setUncFlag(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">UNC Flag</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="aircon"
                      onChange={(e) => setAircon(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Aircon</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="fan"
                      onChange={(e) => setFan(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Fan</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="generator"
                      onChange={(e) => setGenerator(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Generator</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="plants"
                      onChange={(e) => setPlants(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">Plants</label>
                  </div>
                  <label className="text-dark">Display Boards</label>
                  <input
                    type="number"
                    className="form-control"
                    name="displayBoards"
                    value={displayBoards}
                    onChange={(e) => setDisplayBoards(e.target.value)}
                  />
                  <label className="text-dark">Monoblocks</label>
                  <input
                    type="number"
                    className="form-control"
                    name="monoblocks"
                    value={monoblocks}
                    onChange={(e) => setMonoblocks(e.target.value)}
                  />
                  <label className="text-dark">Pavillion Table</label>
                  <input
                    type="number"
                    className="form-control"
                    name="pavillionTable"
                    value={pavillionTable}
                    onChange={(e) => setPavillionTable(e.target.value)}
                  />
                  <label className="text-dark">Industrial Fan</label>
                  <input
                    type="number"
                    className="form-control"
                    name="industrialFan"
                    value={industrialFan}
                    onChange={(e) => setIndustrialFan(e.target.value)}
                  />
                  <label className="text-dark">Aeratron Fan</label>
                  <input
                    type="number"
                    className="form-control"
                    name="aeratronFan"
                    value={aeratronFan}
                    onChange={(e) => setAeratronFan(e.target.value)}
                  />
                  <label className="text-dark">Coolerfan</label>
                  <input
                    type="number"
                    className="form-control"
                    name="coolerfan"
                    value={coolerfan}
                    onChange={(e) => setCoolerfan(e.target.value)}
                  />
                  {/* <label className="text-dark">Others</label>
                  <input
                    type="text"
                    className="form-control"
                    name="others"
                    value={others}
                    onChange={(e) => setOthers(e.target.value)}
                  /> */}
                  <label className="text-danger mt-5">VII. ICT RESOURCES</label>{" "}
                  <br />
                  <label className="text-dark">Computers</label>
                  <p>No. of Available Units : {ict[0]} </p>
                  {/* <p>No. of Available Units : {ict.getComputer}</p> */}
                  <input
                    type="number"
                    className="form-control"
                    name="computers"
                    value={computers}
                    onChange={(e) => setComputers(e.target.value)}
                  />
                  <label className="text-dark">Printers</label>
                  <p>No. of Available Units : {ict[1]}</p>
                  <input
                    type="number"
                    className="form-control"
                    name="printers"
                    value={printers}
                    onChange={(e) => setPrinters(e.target.value)}
                  />
                  <label className="text-danger mt-5">
                    VIII. SPECIAL SERVICES
                  </label>{" "}
                  <br />
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="uncTheaterGuild"
                      onChange={(e) => setUncTheaterGuild(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">UNC Theater Guild</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="collegeBand"
                      onChange={(e) => setCollegeBand(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">College Band</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="hsDxmc"
                      onChange={(e) => setHsDxmc(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">High School DXMC</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="hsMajorettes"
                      onChange={(e) => setHsMajorettes(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">
                      High School Majorettes
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="collegeMajorettes"
                      onChange={(e) => setCollegeMajorettes(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">College Majorettes</label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="elementaryMajorettes"
                      onChange={(e) => setElementaryMajorettes(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">
                      Elementary Majorettes
                    </label>
                  </div>
                  <div className="checkbox">
                    <input
                      className="form-check-input ml-0 mt-0 bg-secondary"
                      type="checkbox"
                      value="YES"
                      name="cat"
                      onChange={(e) => setCat(e.target.value)}
                    ></input>
                    <label className="text-dark ml-4">CAT</label>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReservationModal;
