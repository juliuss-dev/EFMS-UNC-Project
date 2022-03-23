import axios from 'axios'

export const signup = async (data) =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('/api/auth/signup', data, config)

    return response;
}

export const signin = async (data) =>{
    const config = {
        //sending the headers for request
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('/api/auth/signin', data, config)

    //return whatever is in response whether it its success or not
    return response;
}