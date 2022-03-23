import React from 'react'
import '../approval/Approval.css'
function ApproveEquipments() {
    return (
        <div className="main-approval">
                <table>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Approval</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        {/* <button className='Approval-reject'>Reject</button> */}
                    </td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        {/* <button className='Approval-reject'>Reject</button> */}
                    </td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        
                    </td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        {/* <button className='Approval-reject'>Reject</button> */}
                    </td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        {/* <button className='Approval-reject'>Reject</button> */}
                    </td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        <button className='Approval-approved'>View Details</button>
                        {/* <button className='Approval-reject'>Reject</button> */}
                    </td>
                </tr>
                </table>
        </div>
    )
}

export default ApproveEquipments
