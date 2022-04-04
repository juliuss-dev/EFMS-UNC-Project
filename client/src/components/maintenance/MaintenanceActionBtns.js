import React from 'react'

function MaintenanceActionBtns() {
    return (
        <div>
        <div className="container">
            <div className="row pb-4">
                <div className="col-md-3 my-1 ">
                    <button className="display-6 btn btn-primary" data-toggle='modal' data-target='#ReservationModal'>
                    <p className="fad fa-calendar-star"></p> <br /> Reservations Request
                    </button>    
                </div>
    
                <div className="col-md-3 my-1">
                    <button className="display-6 btn btn-success" data-toggle='modal' data-target='#InventoryModal'>             
                    <p className="fas fa-inventory"> </p> <br />Inventory Management                  
                    </button>    
                </div>

                <div className="col-md-3 my-1">
                    <button className="display-6 btn btn-danger" data-toggle='modal' data-target='#Mainte   nanceModal'>             
                    <p className=" far fa-tools"> </p> <br />Maintenance Request                  
                    </button>    
                </div>

                <div className="col-md-3 my-1">
                    <button className="display-6 btn btn-warning" data-toggle='modal' data-target='#UserAccountModal'>             
                    <p className="fas fa-users"> </p> <br /> User Account Management                  
                    </button>    
                </div>
            </div>
        </div>    
    </div>
      )
}

export default MaintenanceActionBtns