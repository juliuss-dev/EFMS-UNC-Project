// import React, { useState } from "react";
// // import { Link } from 'react-router-dom'
// import { showErrorMsg, showSuccessMsg } from "../helpers/message";
// import { showLoading } from "../helpers/loading";
// import isEmpty from "validator/lib/isEmpty";

// //redux
// import { useSelector, useDispatch } from "react-redux";
// import { createReservation } from "../../redux/actions/reservationAction";
// import { clearMessages } from "../../redux/actions/messageAction";

// function DisplayIndividualReservation() {
//   //Redux Global State Properties
//   const { loading } = useSelector((state) => state.loading);
//   // const {successMsg, errorMsg} = useSelector(state => state.messages)
//   // const {reservation} = useSelector(state => state.reservation)
//   // console.log(reservation)
//   const dispatch = useDispatch();

//   //state component
//   const [clientSideErrorMsg, setClientSideErrorMsg] = useState("");
//   const [clientSideSuccessMsg, setClientSideSuccessMsg] = useState("");

//   const [activityType, setActivityType] = useState("");
//   const [title, setTitle] = useState("");
//   const [timeDuration, setTimeDuration] = useState("");
//   const [numberParticipants, setNumberParticipants] = useState("");
//   const [nameOfReqParty, setNameOfReqParty] = useState("");
//   const [venue, setVenue] = useState("");
//   const [soundSystem, setSoundSystem] = useState("");
//   const [bluetoothSpeaker, setBluetoothSpeaker] = useState("");
//   const [microphone, setmicrophone] = useState("");
//   const [projector, setProjector] = useState("");
//   const [projectorScreen, setProjectorScreen] = useState("");
//   const [lights, setLights] = useState("");
//   const [videoDocumentation, setVideoDocumentation] = useState("");
//   const [photoDocumentation, setPhotoDocumentation] = useState("");
//   const [janitorial, setJanitorial] = useState("");
//   const [security, setSecurity] = useState("");
//   const [electricians, setElectricians] = useState("");
//   const [itTechnicians, setItTechnicians] = useState("");
//   const [soundOperators, setSoundOperators] = useState("");
//   const [generatorOperators, setGeneratorOperators] = useState("");
//   const [van, setVan] = useState("");
//   const [phFlag, setPhFlag] = useState("");
//   const [uncFlag, setUncFlag] = useState("");
//   const [aircon, setAircon] = useState("");
//   const [fan, setFan] = useState("");
//   const [generator, setGenerator] = useState("");
//   const [plants, setPlants] = useState("");
//   const [displayBoards, setDisplayBoards] = useState("");
//   const [monoblocks, setMonoblocks] = useState("");
//   const [pavillionTable, setPavillionTable] = useState("");
//   const [industrialFan, setIndustrialFan] = useState("");
//   const [aeratronFan, setAeratronFan] = useState("");
//   const [coolerfan, setCoolerfan] = useState("");
//   const [others, setOthers] = useState("");
//   const [computers, setComputers] = useState("");
//   const [printers, setPrinters] = useState("");
//   const [uncTheaterGuild, setUncTheaterGuild] = useState("");
//   const [collegeBand, setCollegeBand] = useState("");
//   const [hsDxmc, setHsDxmc] = useState("");
//   const [hsMajorettes, setHsMajorettes] = useState("");
//   const [collegeMajorettes, setCollegeMajorettes] = useState("");
//   const [elementaryMajorettes, setElementaryMajorettes] = useState("");
//   const [cat, setCat] = useState("");

//   const handleMessages = (e) => {
//     dispatch(clearMessages());
//     // setClientSideErrorMsg("")
//   };

//   const handleReservationSubmit = (e) => {
//     e.preventDefault();

//     //validation

//     if (isEmpty(activityType)) {
//       setClientSideErrorMsg("Activity Type is required");
//     } else if (isEmpty(title)) {
//       setClientSideErrorMsg("Title is required");
//     } else if (isEmpty(timeDuration)) {
//       setClientSideErrorMsg("Time Duration is required");
//     } else {
//       dispatch(
//         createReservation({
//           activityType,
//           title,
//           timeDuration,
//           numberParticipants,
//           nameOfReqParty,
//           venue,
//           soundSystem,
//           bluetoothSpeaker,
//           microphone,
//           projector,
//           projectorScreen,
//           lights,
//           videoDocumentation,
//           photoDocumentation,
//           janitorial,
//           security,
//           electricians,
//           itTechnicians,
//           soundOperators,
//           generatorOperators,
//           van,
//           phFlag,
//           uncFlag,
//           aircon,
//           fan,
//           generator,
//           plants,
//           displayBoards,
//           monoblocks,
//           pavillionTable,
//           industrialFan,
//           aeratronFan,
//           coolerfan,
//           others,
//           computers,
//           printers,
//           uncTheaterGuild,
//           collegeBand,
//           hsDxmc,
//           hsMajorettes,
//           collegeMajorettes,
//           elementaryMajorettes,
//           cat,
//         })
//       );

//       setClientSideSuccessMsg("Successfully Create a Reservation ???");
//     }
//   };
//   return (
//     <div id="addReservationModal" className="modal" onClick={handleMessages}>
//       <div className="modal-dialog modal-dialog-centered modal-lg">
//         <div className="modal-content">
//           <form onSubmit={handleReservationSubmit}>
//             {/* Header */}
//             <div className="modal-header bg-danger text-white">
//               <h5 className="modal-title">ADD RESERVATION</h5>
//               <button className="close" data-dismiss="modal">
//                 <span>
//                   <i class="fa-solid fa-xmark"></i>
//                 </span>
//               </button>
//             </div>

//             {/* Body */}
//             <div className="modal-body my-2">
//               {/* if has error message, show the message in the client */}
//               {/* checking the empty string validation */}
//               {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
//               {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)}
//               {/* {errorMsg && showErrorMsg(errorMsg)} */}
//               {/* if has success message, show the message in the client */}
//               {/* {successMsg && showSuccessMsg(successMsg)} */}

//               {/* we can add showLoading() the same as errorMsg and successMsg
//                       but we need to show the loading animation only and not the input field once
//                       it was submit, so we have the if else statement below  */}

//               {
//                 // if all input field has been inputted, show loading animation but remove the input fields
//                 loading ? (
//                   <div className="text-center">{showLoading()}</div>
//                 ) : (
//                   //else show input fields with error
//                   <>
//                     <p className="h6 text-danger">
//                       *Select only what is needed in your reservation*{" "}
//                     </p>
//                     <label className="text-danger mb-5">I. ACTIVITY TYPE</label>
//                     <select
//                       name="activityType"
//                       onChange={(e) => setActivityType(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Activity Type...</option>
//                       <option>Academic</option>
//                       <option>Non-Academic</option>
//                       <option>Student Sponsored</option>
//                       <option>University Sponsored</option>
//                     </select>
//                     {/* <label className='text-secondary'>Activty Type</label>
//                            <input type="text" className='form-control' onChange={(e) => setActivityType(e.target.value)} /> */}
//                     <label className="text-dark">Title</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <label className="text-dark">Time Duration</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="*e.g. 1:00PM - 3:00PM"
//                       onChange={(e) => setTimeDuration(e.target.value)}
//                     />
//                     <label className="text-dark">Number of Participants</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="numberParticipants"
//                       value={numberParticipants}
//                       onChange={(e) => setNumberParticipants(e.target.value)}
//                     />
//                     <label className="text-dark">
//                       Name Of Requesting Party
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="nameOfReqParty"
//                       value={nameOfReqParty}
//                       onChange={(e) => setNameOfReqParty(e.target.value)}
//                     />
//                     <label className="text-center text-danger mt-5">
//                       {" "}
//                       II. VENUE
//                     </label>
//                     <select
//                       name="venue"
//                       onChange={(e) => setVenue(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Choose a venue....</option>
//                       <option>Sports Palace</option>
//                       <option>Covert Court A</option>
//                       <option>Covert Court B</option>
//                       <option>Pavillion</option>
//                       <option>Social Hall</option>
//                       <option>Chapel</option>
//                     </select>
//                     {/* <label className='text-secondary'>Venue</label>
//                           <input type="text" className='form-control' name='venue' value={venue} onChange={(e) => setVenue(e.target.value)} /> */}
//                     <label className="text-center text-danger mt-5">
//                       {" "}
//                       III. IMC RESOURCES
//                     </label>{" "}
//                     <br />
//                     <label className="text-dark">Sound System</label>
//                     {/* <input type="number" className='form-control' name='soundSystem' value={soundSystem} onChange={(e) => setSoundSystem(e.target.value)} /> */}
//                     <select
//                       name="soundSystem"
//                       onChange={(e) => setSoundSystem(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Bluetooth Speaker</label>
//                     {/* <input type="number" className='form-control' name='bluetoothSpeaker' value={bluetoothSpeaker} onChange={(e) => setBluetoothSpeaker(e.target.value)} /> */}
//                     <select
//                       name="bluetoothSpeaker"
//                       onChange={(e) => setBluetoothSpeaker(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Microphone</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="microphone"
//                       value={microphone}
//                       onChange={(e) => setmicrophone(e.target.value)}
//                     />
//                     <label className="text-dark">Multi Media Projector</label>
//                     {/* <input type="number" className='form-control' name='projector' value={projector} onChange={(e) => setprojector(e.target.value)} /> */}
//                     <select
//                       name="projector"
//                       onChange={(e) => setProjector(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Projector Screen</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="projectorScreen"
//                       value={projectorScreen}
//                       onChange={(e) => setProjectorScreen(e.target.value)}
//                     />
//                     <label className="text-dark">Lights</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="lights"
//                       value={lights}
//                       onChange={(e) => setLights(e.target.value)}
//                     />
//                     {/* <label className='text-dark'>Video Documentation</label>
//                           <input type="text" className='form-control' name='videoDocumentation' value={videoDocumentation} onChange={(e) => setVideoDocumentation(e.target.value)} /> */}
//                     <label className="text-dark">Video Documentation</label>
//                     <select
//                       name="videoDocumentation"
//                       onChange={(e) => setVideoDocumentation(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     {/* <label className='text-dark'>Photo Documentation</label>
//                           <input type="text" className='form-control' name='photoDocumentation' value={photoDocumentation} onChange={(e) => setPhotoDocumentation(e.target.value)} /> */}
//                     <label className="text-dark">Photo Documentation</label>
//                     <select
//                       name="photoDocumentation"
//                       onChange={(e) => setPhotoDocumentation(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-danger mt-5">
//                       IV. PERSONNEL SERVICES
//                     </label>{" "}
//                     <br />
//                     <label className="text-dark">Janitorial</label>
//                     <select
//                       name="janitorial"
//                       onChange={(e) => setJanitorial(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Security</label>
//                     <select
//                       name="security"
//                       onChange={(e) => setSecurity(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Electricians</label>
//                     <select
//                       name="electricians"
//                       onChange={(e) => setElectricians(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">IT Technicians</label>
//                     <select
//                       name="itTechnicians"
//                       onChange={(e) => setItTechnicians(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Sound Operators</label>
//                     <select
//                       name="soundOperators"
//                       onChange={(e) => setSoundOperators(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Generator Operators</label>
//                     <select
//                       name="generatorOperators"
//                       onChange={(e) => setGeneratorOperators(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Van</label>
//                     <select
//                       name="van"
//                       onChange={(e) => setVan(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-danger mt-5">
//                       V. RESOURCES NEEDED
//                     </label>{" "}
//                     <br />
//                     <label className="text-dark">Philippine Flag</label>
//                     <select
//                       name="phFlag"
//                       onChange={(e) => setPhFlag(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Unc Flag</label>
//                     <select
//                       name="uncFlag"
//                       onChange={(e) => setUncFlag(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Aircon</label>
//                     <select
//                       name="aircon"
//                       onChange={(e) => setAircon(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Fan</label>
//                     <select
//                       name="fan"
//                       onChange={(e) => setFan(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Generator</label>
//                     <select
//                       name="generator"
//                       onChange={(e) => setGenerator(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Plants</label>
//                     <select
//                       name="plants"
//                       onChange={(e) => setPlants(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Display Boards</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="displayBoards"
//                       value={displayBoards}
//                       onChange={(e) => setDisplayBoards(e.target.value)}
//                     />
//                     <label className="text-dark">Monoblocks</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="monoblocks"
//                       value={monoblocks}
//                       onChange={(e) => setMonoblocks(e.target.value)}
//                     />
//                     <label className="text-dark">Pavillion Table</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="pavillionTable"
//                       value={pavillionTable}
//                       onChange={(e) => setPavillionTable(e.target.value)}
//                     />
//                     <label className="text-dark">Industrial Fan</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="industrialFan"
//                       value={industrialFan}
//                       onChange={(e) => setIndustrialFan(e.target.value)}
//                     />
//                     <label className="text-dark">Aeratron Fan</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="aeratronFan"
//                       value={aeratronFan}
//                       onChange={(e) => setAeratronFan(e.target.value)}
//                     />
//                     <label className="text-dark">Coolerfan</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="coolerfan"
//                       value={coolerfan}
//                       onChange={(e) => setCoolerfan(e.target.value)}
//                     />
//                     <label className="text-dark">Others</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="others"
//                       value={others}
//                       onChange={(e) => setOthers(e.target.value)}
//                     />
//                     <label className="text-danger mt-5">
//                       VI. ICT RESOURCES
//                     </label>{" "}
//                     <br />
//                     <label className="text-dark">Computers</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="computers"
//                       value={computers}
//                       onChange={(e) => setComputers(e.target.value)}
//                     />
//                     <label className="text-dark">Printers</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       name="printers"
//                       value={printers}
//                       onChange={(e) => setPrinters(e.target.value)}
//                     />
//                     <label className="text-danger mt-5">
//                       VII. SPECIAL SERVICES
//                     </label>{" "}
//                     <br />
//                     <label className="text-dark">Unc Theater Guild</label>
//                     {/* <input type="text" className='form-control' name='uncTheaterGuild' value={uncTheaterGuild} onChange={(e) => setUncTheaterGuild(e.target.value)} /> */}
//                     <select
//                       name="uncTheaterGuild"
//                       onChange={(e) => setUncTheaterGuild(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">College Band</label>
//                     {/* <input type="text" className='form-control' name='collegeBand' value={collegeBand} onChange={(e) => setCollegeBand(e.target.value)} /> */}
//                     <select
//                       name="collegeBand"
//                       onChange={(e) => setCollegeBand(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">HighSchool Dxmc</label>
//                     {/* <input type="text" className='form-control' name='hsDxmc' value={hsDxmc} onChange={(e) => setHsDxmc(e.target.value)} /> */}
//                     <select
//                       name="hsDxmc"
//                       onChange={(e) => setHsDxmc(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">HighSchool Majorettes</label>
//                     {/* <input type="text" className='form-control' name='hsMajorettes' value={hsMajorettes} onChange={(e) => setHsMajorettes(e.target.value)} /> */}
//                     <select
//                       name="hsMajorettes"
//                       onChange={(e) => setHsMajorettes(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">College Majorettes</label>
//                     {/* <input type="text" className='form-control' name='collegeMajorettes' value={collegeMajorettes} onChange={(e) => setCollegeMajorettes(e.target.value)} /> */}
//                     <select
//                       name="collegeMajorettes"
//                       onChange={(e) => setCollegeMajorettes(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">Elementary Majorettes</label>
//                     {/* <input type="text" className='form-control' name='elementaryMajorettes' value={elementaryMajorettes} onChange={(e) => setElementaryMajorettes(e.target.value)} /> */}
//                     <select
//                       name="elementaryMajorettes"
//                       onChange={(e) => setElementaryMajorettes(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       <option selected>Select Options....</option>
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                     <label className="text-dark">CAT</label>
//                     <select
//                       name="cat"
//                       onChange={(e) => setCat(e.target.value)}
//                       className="custom-select mr-sm-2"
//                     >
//                       {/* <option selected>....</option> */}
//                       <option>NO</option>
//                       <option>YES</option>
//                     </select>
//                   </>
//                 )
//               }
//             </div>

//             {/* Footer */}
//             <div className="modal-footer">
//               <button className="btn btn-secondary" data-dismiss="modal">
//                 Close
//               </button>
//               <button type="submit" className="btn btn-info">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DisplayIndividualReservation;
