import React, { useEffect, useState } from "react";
// import { getImc } from "../../redux/actions/imcInventoryAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";
import { useHistory } from "react-router-dom";
import { updateMaintenanceReport } from "../../../redux/actions/maintenanceScheduleAction";
import isEmpty from "validator/lib/isEmpty";
import { getMSchedule } from "../../../redux/actions/maintenanceScheduleAction";

function EditMaintenanceSchedule({ match, history }) {
  const [scheduleData, setScheduleData] = useState({
    title: title,
    dateReported: dateReported,
    dateStarted: dateStarted,
    dateFinished: dateFinished,
    maintenanceType: maintenanceType,
    checkedBy: checkedBy,
    performedBy: performedBy,
    description: "",
    department: "",
    status: "",
    report: "",
  });

  const {
    title,
    dateReported,
    dateStarted,
    dateFinished,
    maintenanceType,
    checkedBy,
    performedBy,
    description,
    department,
    status,
    report,
  } = scheduleData;
  const [error, setErrorMsg] = useState("");
  let dispatch = useDispatch();
  const mScheduleId = match.params.mScheduleId;

  const { schedules } = useSelector((state) => state.schedule);

  useEffect(() => {
    dispatch(getMSchedule(mScheduleId));
  }, []);
  useEffect(() => {
    if (schedules) {
      setScheduleData({ ...schedules });
    }
  }, [schedules]);
  useEffect(() => {
    dispatch(updateMaintenanceReport(scheduleData, mScheduleId));
  }, [dispatch, scheduleData, mScheduleId]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setScheduleData({ ...scheduleData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMaintenanceReport, scheduleData, mScheduleId);
    setErrorMsg("");
    // history.push("/imc/view");
    alert("Update equipment Successfully");
    // }

    // }
  };
  return (
    <div>
      <div className="d-flex flex-row-reverse py-3 pr-5"></div>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleSubmit}>
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">Edit Maintenance Request</h5>

              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button>
            </div>
            <div className="modal-body my-2">
              {error && showErrorMsg(error)}

              <label className="text-dark">Title</label>
              <input
                className="form-control"
                name="title"
                value={title}
                type="text"
                onChange={handleInputChange}
              />
              <label className="text-dark">Date Reported</label>
              <input
                className="form-control"
                name="dateReported"
                value={dateReported}
                type="date"
                onChange={handleInputChange}
              />
              <label className="text-dark">Date Started</label>
              <input
                className="form-control"
                name="dateStarted"
                value={dateStarted}
                type="date"
                onChange={handleInputChange}
              />
              <label className="text-dark">Date Finished</label>
              <input
                className="form-control"
                name="dateFinished"
                value={dateFinished}
                type="date"
                onChange={handleInputChange}
              />

              <label className="text-dark">Maintenance Type</label>
              <input
                className="form-control"
                name="maintenanceType"
                value={maintenanceType}
                type="text"
                onChange={handleInputChange}
              />

              <label className="text-dark">Check By</label>
              <input
                className="form-control"
                name="checkedBy"
                value={checkedBy}
                type="text"
                onChange={handleInputChange}
              />

              <label className="text-dark">Performed By</label>
              <input
                className="form-control"
                name="performedBy"
                value={performedBy}
                type="text"
                onChange={handleInputChange}
              />

              <label className="text-dark">Description</label>
              <input
                className="form-control"
                name="description"
                value={description}
                type="text"
                onChange={handleInputChange}
              />
              <label className="text-dark">Status</label>
              <select
                className="form-control bg-success text-white"
                name="status"
                value={status}
                type="text"
                onChange={handleInputChange}
              >
                <option>{status}</option>
                <option>To be Checked</option>
                <option>To be repair</option>
                <option>Repair ongoing</option>
                <option>Repaired</option>
                <option>To be replace</option>
              </select>
            </div>

            <div className="modal-footer border-0 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditMaintenanceSchedule;
