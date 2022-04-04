import React from "react";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { showSuccessMsg } from "../helpers/message";
import { createInventoryEquipment } from "../api/inventoryEquipment";
function AddEquipments() {
  //COMPONENT STATES
  // const [name, setName] = useState("")
  // const [quantity, setQuantity] = useState()
  // const [description, setDescription] = useState("")
  // const [dateAdded, setDateAdded] = useState("")
  const [inventoryEquipments, setInventoryEquipments] = useState({
    name: "",
    quantity: "",
    description: "",
    dateAdded: "",
  });
  const { name, quantity, description, dateAdded } = inventoryEquipments;

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // const [clientSideErrorMsg, setClientSideErrorMsg] = useState("")
  // const [clientSideSuccessMsg, setClientSideSuccessMsg] = useState("")
  //EVENT HANDLERS

  //THIS WILL HANDLE ALL THE INPUT DATA FROM THE ADD EQUIPMENTS
  const handleInventory = (e) => {
    //set error and success  in order to remove the messages when retyping
    //get the object name and the value of each input of the setInventoryEquipments
    setInventoryEquipments({
      ...inventoryEquipments,
      [e.target.name]: e.target.value,
    });
  };
  //this will remove all the inputs once user submit button to add equipments has been selected
  const handleMessages = (e) => {
    // setClientSideErrorMsg("")
    setErrorMsg("");
    setSuccessMsg("");
  };

  //this event handler is going to verify the input and get the input data of the add equipments
  const handleInventoryEquipment = (e) => {
    e.preventDefault();

    //if the name is empty, fire an error message
    if (isEmpty(name)) {
      // setClientSideErrorMsg("Equipment name is required")
      // setInventoryEquipments({
      //   ...inventoryEquipments,
      //         errorMsg: 'Equipment name is required'
      // })
      setErrorMsg("Equipment name is required");
    }
    //if the quantity is empty, fire an error message
    else if (isEmpty(quantity)) {
      // setClientSideErrorMsg("Quantity is required")
      // setInventoryEquipments({
      //   ...inventoryEquipments,
      //         // errorMsg: 'Equipment quantity is required'
      // })
      setErrorMsg("Equipment quantity is required");
    }
    //if the dateAdded is empty, fire an error message
    else if (isEmpty(dateAdded)) {
      // setClientSideErrorMsg("Date is required")
      // setInventoryEquipments({
      //   ...inventoryEquipments,
      //         errorMsg: 'Equipment date is required'
      // })
      setErrorMsg("Equipment date is required");
    }
    //once the data inputs was successfully verify,
    else {
      // const {name, quantity, description, dateAdded} = inventoryEquipments

      //Get the four object type and set to data
      const data = { name, quantity, description, dateAdded };

      setLoading(true);
      //we need to import createInventoryEquipment from the api folder,
      //createInventoryEquipment is the api from the folder of api/inventoryEquipment,
      //that will make a POST request from the backend under routes and controller folder
      createInventoryEquipment(data)
        //if the response of the backend is success and without error, it will save the data inputs,
        // and response a success message that is base on the backend message under controller.
        .then((response) => {
          setLoading(false);
          //empty the fields once it submit
          setInventoryEquipments({
            name: "",
            quantity: "",
            description: "",
            dateAdded: "",
          });
          //get the successMessage of the response in the backend and set it to setSuccessMsg state method
          setSuccessMsg(response.data.successMessage);
          console.log("Axios add equipment success", response);
          // {JSON.stringify(inventoryEquipments)}
        })
        //if the response of the backend is error, fire an error message base on the backend message under controller
        .catch((err) => {
          setLoading(false);
          //get the error response from the backend
          setErrorMsg(err.response.errorMessage);
        });
    }
  };
  return (
    <div id="AddEquipmentsModal" className="modal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipment}>
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
                      name="name"
                      value={name}
                      type="text"
                      onChange={handleInventory}
                    />

                    <label className="text-dark">Quantity</label>
                    <input
                      className="form-control"
                      name="quantity"
                      value={quantity}
                      type="number"
                      onChange={handleInventory}
                    />

                    <div className="form-group">
                      <label className="text-dark">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="5"
                        placeholder="Details of the equipment..."
                        value={description}
                        onChange={handleInventory}
                      ></textarea>
                    </div>

                    <label className="text-dark">Date Added</label>
                    <input
                      className="form-control"
                      name="dateAdded"
                      value={dateAdded}
                      type="date"
                      onChange={handleInventory}
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
