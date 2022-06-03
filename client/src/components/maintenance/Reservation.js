import React from "react";

function Reservation() {
  return (
    <div id="ReservationModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form>
            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Reservation Request</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              <>
                <div className="container">
                  <div className="row"></div>
                </div>
              </>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
