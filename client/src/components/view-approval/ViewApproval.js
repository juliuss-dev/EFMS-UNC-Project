import React from 'react'
import "../approval/Approval.css"
import "../view-approval/ViewApproval.css"
function ViewApproval() {
    return (
        <div className="main-approval">
            <table>
                <tr>
                    <th>Title Event</th>
                    <th>Time</th>
                    <th>Approval</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>10:00am - 3:00pm</td>
                    <td>
                        {/* <button className='Approval-approved'>Approved</button> */}
                        <button className='viewApproval-result'>Rejected</button>
                    </td>
                </tr>
                   
                </table>
        </div>
    )
}

export default ViewApproval
