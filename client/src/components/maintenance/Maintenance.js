import React from 'react'
import AddEquipments from './AddEquipments'
import InventoryManagement from './InventoryManagement'
import MaintenanceActionBtns from './MaintenanceActionBtns'
import MaintenanceRequest from './MaintenanceRequest'
import Reservation from './Reservation'
import UserAccountManagement from './UserAccountManagement'
import ViewEquipments from './ViewEquipments'

function Maintenance() {
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
            <MaintenanceActionBtns/>
            <Reservation/>
            <InventoryManagement/>
            <MaintenanceRequest/>
            <UserAccountManagement/>
            <InventoryManagement/>
            <AddEquipments/>
            <ViewEquipments/>
           
        </div>
    
</div>
)
}

export default Maintenance