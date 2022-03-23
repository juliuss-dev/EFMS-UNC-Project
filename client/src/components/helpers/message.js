import React from 'react';

// function message({msg}) {
//   return <div>
//       <div className="alert alert-danger" role="alert">
//         {msg}
//       </div>
//   </div>;
// }

// export default message;

export const showErrorMsg = (msg) => (
    <div className="alert alert-danger" role="alert">
          {msg}
     </div>
)
export const showSuccessMsg = (msg) => (
    <div className="alert alert-success" role="alert">
          {msg}
     </div>
)
