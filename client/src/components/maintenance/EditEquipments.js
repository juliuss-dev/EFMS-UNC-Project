import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showSuccessMsg } from "../helpers/message";
import { showErrorMsg } from "../helpers/message";
import { getEquipments } from "../api/inventoryEquipment";
import { useDispatch, useSelector } from "react-redux";
import { getEquipment } from "../../redux/actions/inventoryAction";
function EditEquipments() {
  const [equipmentName, setEquipmentName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  // const [status, getStatus] = useState("")
  // const [equipmentData, setEquipmentData] = useState({
  //   name: "",
  //   quantity: "",
  //   description: "",
  //   dateAdded: "",
  // });
  // const { name, quantity, description, dateAdded } = equipmentData;
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const inventoryId = useParams();
  // const inventoryId = match.params.inventoryId;
  console.log(inventoryId);

  // const inventoryId = match.params.inventoryId;

  // useEffect(() => {
  //   const getInventoryEquipments = async () => {
  //     const res = await axios.get(`/api/maintenanceInventory/${inventoryId}`);
  //     setName(res.data);
  //     setQuantity(res.data);
  //     setDescription(res.data);
  //     setDateAdded(res.data);
  //   };
  //   getInventoryEquipments();
  // }, [inventoryId]);
  // useEffect(() => {
  //   const getInventoryEquipments = async () => {
  //     const res = await axios.get(`/api/maintenanceInventory/${inventoryId}`);
  //     setName(res.data);
  //     setQuantity(res.data);
  //     setDescription(res.data);
  //     setDateAdded(res.data);
  //     // setEquipmentData(res.data);
  //   };
  //   getInventoryEquipments();
  // }, [inventoryId]);

  const dispatch = useDispatch();
  const { inventory } = useSelector((state) => state.inventory);

  useEffect(() => {
    if (!inventory) {
      dispatch(getEquipment(inventoryId));
      // dispatch()
    } else {
      setEquipmentName(inventory.equipmentName);
      setQuantity(inventory.quantity);
      setDescription(inventory.description);
      setDateAdded(inventory.dateAdded);
    }
  }, [dispatch, inventoryId, inventory]);

  const handleInventoryEquipmentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("equipmentName", equipmentName);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("dateAdded", dateAdded);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`/api/maintenanceInventory/${inventoryId}`, formData, config)
      .then((res) => {
        console.log("Update equipment Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="EditEquipmentsModal" className="modal">
      <div>{JSON.stringify(inventoryId)}</div>

      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipmentSubmit}>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">Edit Equipments</h5>
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
                // loading ? (
                //   <div className="text-center">{showLoading()}</div>
                // ) : (
                //else show input fields with error
                <>
                  <label className="text-dark">Equipment name</label>
                  <input
                    className="form-control"
                    name="equipmentName"
                    value={equipmentName}
                    type="text"
                    onChange={(e) => {
                      setEquipmentName(e.target.value);
                    }}
                  />

                  <label className="text-dark">Quantity</label>
                  <input
                    className="form-control"
                    name="quantity"
                    value={quantity}
                    type="number"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />

                  <div className="form-group">
                    <label className="text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="5"
                      placeholder="Details of the equipment..."
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <label className="text-dark">Date Added</label>
                  <input
                    className="form-control"
                    name="dateAdded"
                    value={dateAdded}
                    type="date"
                    onChange={(e) => {
                      setDateAdded(e.target.value);
                    }}
                  />
                </>
                // )
              }
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Edit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEquipments;
