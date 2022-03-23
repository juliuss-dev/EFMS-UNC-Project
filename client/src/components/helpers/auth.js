import {setCookie, getCookie, deleteCookie} from './cookies'
import {setLocalStorage, getLocalStorage, deleteLocalStorage} from './localStorage'
//parameters of token and user object that is being recieve from the server side
export const setAuthentication = (token, user) =>{
    //set up the cookie from cookies.js
    //takes name and a value
    //name = 'token' and value = token
    setCookie('token', token);
    setLocalStorage('user', user)
}
//check the user and token 
export const isAuthenticated = () => {
    // 'token' && 'user' must have the same as declare in setAuthentication
    if(getCookie('token') && getLocalStorage('user')){
        //if the token and user is true, return the user object
        // we need to return the object for us to get the data info about user such as username,email etc
        //but most importantly we need to get the user role and pass it to the client singin(data)
        return getLocalStorage('user')
    }
    //otherwise reject
    else{
        return false;
    }
}

//delete cookie and localStorage from the logout button
                    //callback
export const logout = (next) => {
    deleteCookie('token');
    deleteLocalStorage('user')

    //callback function 
    next()
}