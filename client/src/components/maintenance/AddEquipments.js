import React from "react";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { showSuccessMsg } from "../helpers/message";
// import { createInventoryEquipment } from "../api/inventoryEquipment";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { createInventoryEquipment } from "../../redux/actions/inventoryAction";
import { clearMessages } from "../../redux/actions/messageAction";
function AddEquipments() {
  // * ----------REDUX GLOBAL STATE PROPERTIES----------
  // get the properties from the state
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  // * ----------COMPONENT STATE PROPERTIES----------
  const [clientSideError, setClientSideError] = useState("");
  // const [equipmentData, setEquipmentData] = useState({
  //   equipmentName: "",
  //   quantity: "",
  //   description: "",
  //   dateAdded: "",
  //   // status: "",
  // });
  // const { equipmentName, quantity, description, dateAdded } = equipmentData;
  const [equipmentName, setEquipmentName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  // * ----------EVENT HANDLERS----------

  const handleMessages = (e) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  //Handle Change
  // const handleInventory = (e) => {
  //   setEquipmentData({
  //     ...equipmentData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(equipmentData);
  // };

  //Handle Submit
  const handleInventoryEquipmentSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(equipmentName) ||
      isEmpty(quantity) ||
      isEmpty(description) ||
      isEmpty(dateAdded)
    ) {
      setClientSideError("All fields are required");
    } else {
      dispatch(
        createInventoryEquipment({
          equipmentName,
          quantity,
          description,
          dateAdded,
        })
      );
      // const formData = new FormData();

      // formData.append("equipmentName", equipmentName);
      // formData.append("quantity", quantity);
      // formData.append("description", description);
      // formData.append("dateAdded", dateAdded);

      // dispatch(createInventoryEquipment(formData));
      // setEquipmentData({
      //   equipmentName: "",
      //   quantity: "",
      //   description: "",
      //   dateAdded: "",
      // });
    }
  };
  return (
    <div id="AddEquipmentsModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipmentSubmit}>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">Add Equipments</h5>
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
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {
                // if all input field has been inputted, show loading animation but remove the input fields
                loading ? (
                  <div className="text-center">{showLoading()}</div>
                ) : (
                  //else show input fields with error
                  <>
                    <label className="text-dark">Equipment name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="equipmentName"
                      value={equipmentName}
                      // onChange={handleInventory}
                      onChange={(e) => setEquipmentName(e.target.value)}
                    />

                    <label className="text-dark">Quantity</label>
                    <input
                      className="form-control"
                      type="number"
                      name="quantity"
                      value={quantity}
                      // onChange={handleInventory}
                      onChange={(e) => setQuantity(e.target.value)}
                    />

                    <div className="form-group">
                      <label className="text-dark">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="5"
                        placeholder="Details of the equipment..."
                        value={description}
                        // onChange={handleInventory}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <label className="text-dark">Date Added</label>
                    <input
                      className="form-control"
                      type="date"
                      name="dateAdded"
                      value={dateAdded}
                      // onChange={handleInventory}
                      onChange={(e) => setDateAdded(e.target.value)}
                    />
                  </>
                )
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

export default AddEquipments;
