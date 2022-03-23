import Cookies from 'js-cookie';

export const setCookie = (key, value)  =>{
    //set cokies and expires within 1 day
    Cookies.set(key, value, {expires: 1})
}

//geting the cookie
export const getCookie = key => {
    return Cookies.get(key);
}

//delete cookie
export const deleteCookie = key => {
    Cookies.remove(key);
}