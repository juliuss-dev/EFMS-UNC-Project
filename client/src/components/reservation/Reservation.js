import React from "react";
import "../reservation/Reservation.css";
import { Link } from "react-router-dom";
function Reservation() {
  return (
    <div className="main-reservation">
      <form className="main-form-reservation">
        <div className="first-layer">
          <div className="check-box">
            <div className="checkbox-left">
              {/* Type Activity */}
              <label className="select-option">Activity Type</label>
              <select className="select-option" name="" id="">
                <option value="maintenance">Academic</option>
                <option value="vpa">Non-Academic</option>
                <option value="imc">Student Sponsored</option>
                <option value="ict">University Sponsored</option>
              </select>
              {/* Textbox */}
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Your Title"
                required
              />

              <label>Time Duration (7:00am - 10:00pm )</label>
              <input
                type="text"
                name="timeDuration"
                placeholder="ex 8:10am to 11:00am"
                required
              />

              <label>Invited person not from UNC</label>
              <input
                type="text"
                name="personNotUnc"
                placeholder="Invited person not from UNC"
                required
              />
            </div>

            <div className="checkbox-right">
              {/* textbox */}
              <label>Expected number of participants</label>
              <input
                type="number"
                name="numberParticipants"
                placeholder="Number of participants"
                required
              />

              <label>Name of requesting party</label>
              <input
                type="text"
                name="requestingParty"
                placeholder="Name of requesting party"
                required
              />

              <label>Office / Institution</label>
              <input
                type="text"
                name="officeInstitution"
                placeholder="Office / Institution"
                required
              />
              <label>Designation</label>
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                required
              />
            </div>
          </div>
        </div>

        {/* Venue */}
        <div className="second-layer">
          <h1 className="h1">Venue</h1>
          <div className="check-box">
            <div className="checkbox-left">
              Sports Palace <input type="checkbox" name="sportsPalace" />
              Covered Court A <input type="checkbox" name="coveredCourtA" />
              Covered Court B <input type="checkbox" name="coveredCourtB" />
              Pavillion <input type="checkbox" name="pavillion" />
            </div>

            <div className="checkbox-right">
              Social Hall <input type="checkbox" name="socialHall" />
              Chapel <input type="checkbox" name="chapel" />
              AVR <input type="checkbox" name="avr" />
              Others{" "}
              <input
                type="text"
                name="venueOthers"
                placeholder="Input a Venue"
              />
            </div>
          </div>
        </div>

        {/* IMC Resources */}
        <div className="third-layer">
          <h1 className="h1">IMC Resources</h1>
          <div className="check-box">
            <div className="checkbox-left">
              Sound System{" "}
              <input
                type="number"
                name="soundSystem"
                placeholder="Input numbers only"
              />
              Bluetooth Speaker{" "}
              <input
                type="number"
                name="bluetoothSpeaker"
                placeholder="Input numbers only"
              />
              Microphone{" "}
              <input
                type="number"
                name="microPhones"
                placeholder="Input numbers only"
              />
              Projector{" "}
              <input
                type="number"
                name="projector"
                placeholder="Input numbers only"
              />
            </div>

            <div className="checkbox-right">
              Projector Screen{" "}
              <input
                type="number"
                name="projectorScreen"
                placeholder="Input numbers only"
              />
              Spotligths{" "}
              <input
                type="number"
                name="spotLigths"
                placeholder="Input numbers only"
              />
              Lights{" "}
              <input
                type="number"
                name="lights"
                placeholder="Input numbers only"
              />
              Video Documentation{" "}
              <input type="checkbox" name="documentationVideo" />
              Photo Documentation{" "}
              <input type="checkbox" name="documentationPicture" />
            </div>
          </div>
        </div>

        {/* Personnel Services */}
        <div className="fourth-layer">
          <h1 className="h1">Personnel Services</h1>
          <div className="check-box">
            <div className="checkbox-left">
              Janitorial <input type="checkbox" name="janitorial" />
              Security <input type="checkbox" name="security" />
              Electricians <input type="checkbox" name="electricians" />
              IT Technicians <input type="checkbox" name="itTechnicians" />
            </div>

            <div className="checkbox-right">
              Sound Operators <input type="checkbox" name="soundOperator" />
              Generator Operators{" "}
              <input type="checkbox" name="generatorOperator" />
              Van <input type="checkbox" name="van" />
            </div>
          </div>
        </div>

        {/*  Resources Needed */}
        <div className="fifth-layer">
          <h1 className="h1">Resources Needed</h1>
          <div className="check-box">
            <div className="checkbox-left">
              Philippine Flag <input type="checkbox" name="philippineFlag" />
              Aircon <input type="checkbox" name="aircon" />
              Mako Fan <input type="checkbox" name="makoFan" />
              Rostrum <input type="checkbox" name="rostrum" />
              Standby Generator{" "}
              <input type="checkbox" name="standbyGenerator" />
              Decoration Plants{" "}
              <input type="checkbox" name="decorationPlants" />
              UNC Flag <input type="checkbox" name="uncFlag" />
            </div>

            <div className="checkbox-right">
              Display Boards{" "}
              <input
                type="number"
                name="displayBoards"
                placeholder="How many Display Boards"
              />
              Monoblocks{" "}
              <input
                type="number"
                name="monoblocks"
                placeholder="How many Monoblocks"
              />
              Pavillion Table{" "}
              <input
                type="number"
                name="pavillionTable"
                placeholder="How many Pavillion Table"
              />
              Industrial Fan{" "}
              <input
                type="number"
                name="industrialFan"
                placeholder="How many Industrial Fan"
              />
              Aeratron Fan{" "}
              <input
                type="number"
                name="aeratronFan"
                placeholder="How many Aeratron Fans"
              />
              Cooler Fan{" "}
              <input
                type="number"
                name="coolerFan"
                placeholder="How many Cooler Fans"
              />
              Others{" "}
              <input type="text" name="resourcesOthers" placeholder="Others" />
            </div>
          </div>
        </div>

        {/* ICT Resources */}
        <div className="sixth-layer">
          <h1 className="h1">ICT Resources</h1>
          <div className="check-box">
            <div className="checkbox-left">
              Computer(s){" "}
              <input
                type="number"
                name="computer"
                placeholder="How many Printers"
              />
            </div>

            <div className="checkbox-right">
              Printer(s){" "}
              <input
                type="number"
                name="printer"
                placeholder="How many Printers"
              />
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="seven-layer">
          <h1 className="h1">Special Services</h1>
          <div className="check-box">
            <div className="checkbox-left">
              University Theater Guild{" "}
              <input type="checkbox" name="universityTheaterGuild" />
              College Band <input type="checkbox" name="collegeBand" />
              H/S DXMC <input type="checkbox" name="hsdxmc" />
              College Majorettes{" "}
              <input type="checkbox" name="collegeMajorettes" />
            </div>

            <div className="checkbox-right">
              H/S Majorettes <input type="checkbox" name="hsMajoretes" />
              Elementary Majorettes{" "}
              <input type="checkbox" name="elementaryMajorettes" />
              C.A.T Colors <input type="checkbox" name="catColors" />
            </div>
          </div>
        </div>

        <Link to="/user">
          <button className="button-form-approval">
            Submit and Request for Approval
          </button>
        </Link>
        {/* <Link to = "/home"><button className="button-form-back">Back</button></Link> */}
      </form>
    </div>
  );
}

export default Reservation;
