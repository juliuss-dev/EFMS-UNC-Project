import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from '../helpers/auth'
//Making the user protected router in order to access only the specific account type
function UserRoute({component: Component, ...rest}) {
  return <div>
        <Route
        {...rest}
        render = {(props) => 
            //if its authenticated to user account type
            isAuthenticated() && isAuthenticated().role === 0 ? (
                <Component {...props}/>
            ) : (
                <Redirect to='/signin'/>
            )
        }
    />
  </div>
    
  
}

export default UserRoute