import React from "react";
import AddEquipments from "./AddEquipments";
import EditEquipments from "./EditEquipments";
import InventoryManagement from "./InventoryManagement";
import ItemBody from "./ItemBody";
import MaintenanceActionBtns from "./MaintenanceActionBtns";
import MaintenanceRequest from "./MaintenanceRequest";
import Reservation from "./Reservation";
import UserAccountManagement from "./UserAccountManagement";
import ViewEquipments from "./ViewEquipments";

import { useEffect, useState } from "react";
import { getEquipments } from "../api/inventoryEquipment";

function Maintenance() {
  // const [equipments, setEquipments] = useState();
  // const [loading, setLoading] = useState(false);
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
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="UNC" />
      <div className="home-title">
        <h1>Maintenance Dashboard</h1>
        <h3>Event Facility Management System</h3>
      </div>
      <div className="button-home">
        {/* <UserActionBtns/>
            <AddReservationModal/>
            <ViewReservationModal/> */}
        <MaintenanceActionBtns />
        <Reservation />
        <InventoryManagement />
        <MaintenanceRequest />
        <UserAccountManagement />
        <InventoryManagement />
        <AddEquipments />
        <ViewEquipments />
        {/* <ItemBody />   */}
        <EditEquipments />
      </div>
    </div>
  );
}

export default Maintenance;
