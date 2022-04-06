import React from 'react'

function InventoryManagement() {
    return (
        <div id='InventoryModal' className='modal'>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                 <div className="modal-content">
                 <form>
      
                    {/* Header */}
                      <div className="modal-header bg-success text-white">
                        <h5 className='modal-title'>Inventory Management</h5>
                        <button className='close' data-dismiss='modal'>
                            <span><i class="fa-solid fa-xmark"></i></span>
                        </button>
                      </div>
    
                    {/* Body */}
                      <div className="modal-body my-2">
                              
                          <>
                          <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-3 my-1 ">
                              <button className="display-6 btn btn-primary" data-toggle='modal' data-target='#AddEquipmentsModal' data-dismiss="modal">
                              <p class="far fa-plus-circle"></p> <br /> Add Equipments
                              </button>    
                            </div>
              
                          <div className="col-md-3 my-1">
                              <button className="display-6 btn btn-success" data-toggle='modal' data-target='#ViewEquipmentsModal' data-dismiss="modal">             
                              <p className="fas fa-eye"> </p> <br /> View Equipments                  
                              </button>    
                          </div>

                          </div>
                          </>
                                    
                               
                      </div>
    
                      {/* Footer */}
                      <div className="modal-footer">
                          <button className='btn btn-secondary' data-dismiss= 'modal'>Close</button>
                          {/* <button type='submit' className='btn btn-info'>Submit</button> */}
                      </div>  
                 </form>
                 </div> 
                
              </div>
          </div>
      )
}

export default InventoryManagement