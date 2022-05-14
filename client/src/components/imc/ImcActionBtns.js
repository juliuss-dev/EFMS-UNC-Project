import React from "react";

function ImcActionBtns() {
  return (
    <div>
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-4 my-1">
            <button
              className=" p-0 display-6 btn btn-danger"
              data-toggle="modal"
              data-target="#AddImcModal"
            >
              <i className="fa-solid fa-circle-plus"></i> <br /> Add IMC
              Equipment
            </button>
          </div>

          <div className="col-md-6 my-1">
            <button
              className=" p-0 display-6 btn btn-success"
              data-toggle="modal"
              data-target="#ViewImcModal"
            >
              <p className="p-0 m-0 fas fa-eye"> </p> <br /> View IMC Equipments
            </button>
          </div>

          <div className="col-md-4 my-1">
            <button
              className=" p-0 display-6 btn btn-warning"
              data-toggle="modal"
              data-target="#RequestImcModal"
            >
              <i className="fa-solid fa-circle-plus"></i> <br /> Request
              Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImcActionBtns;
