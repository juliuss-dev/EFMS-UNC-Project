//create 3 function 
//one for setting an item from localstorage
//one for getting an item from the localstorage
//one for deleting an item from the localstorage

//key = the name of the item from the localstorage
//value = the value of the item from the localstorage 
export const setLocalStorage = (key, value) =>{
    //localStorage is part of the window object
    //we cannot make a value because the user before token from controllers are objects,
    //we cannot store a js object from localStorage, we have to convert it to json object

    // localStorage.setItem(key, value)
    localStorage.setItem(key, JSON.stringify(value));

}
//take only the (key) name of the item from localstorage
export const getLocalStorage = key =>{
    //we to send back the json object from js object
    return JSON.parse(localStorage.getItem(key))
}

//delete item from localstorage
//add expiration from the cookie
//when the user click the logout button at that point we are going to delete all data pertaining to the user in localstorage and cookie
export const deleteLocalStorage = key =>{
    localStorage.removeItem(key);
}

// install js-cookie in client in order to allow us to work with the cookies