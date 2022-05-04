import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../helpers/loading";
import EditEquipments from "./EditEquipments";
import ViewEquipments from "./ViewEquipments";
import { getEquipments } from "../../redux/actions/inventoryAction";
import { useDispatch, useSelector } from "react-redux";
function ItemBody() {
  // const [equipments, setEquipments] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const inventoryId = match.params.inventoryId;

  // useEffect(() => {
  //   loadEquipments();
  // }, [loading]);

  // const loadEquipments = async () => {
  //   await getEquipments()
  //     .then((response) => {
  //       setLoading(false);
  //       setEquipments(response.data.maintenanceInventory);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const { inventory } = useSelector((state) => state.inventory);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getEquipments());
  // }, [dispatch]);

  return (
    <div className="container">
      {/* {inventory.map((inventory) => (
        <ViewEquipments key={inventory._id} inventory={inventory} />
      ))} */}
    </div>
  );
}

export default ItemBody;
