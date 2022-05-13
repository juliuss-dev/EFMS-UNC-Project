import React from "react";

function ViewVpaModal() {
  return (
    <div id="ViewVpaModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">View Equipments</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}

              {
                // if all input field has been inputted, show loading animation but remove the input fields
                <div className="text-center"></div>
                //else show input fields with error
              }
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewVpaModal;
