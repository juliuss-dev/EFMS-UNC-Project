import React, { useEffect } from 'react'
import './SignIn.css'
import { useState } from 'react'
import {useHistory} from "react-router-dom"
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import {signin} from '../api/auth'
import { isAuthenticated, setAuthentication } from '../helpers/auth'
import { showLoading } from '../helpers/loading'
import {showErrorMsg} from '../helpers/message'
function SignIn() {
    const history = useHistory()

    useEffect( () =>{
        if(isAuthenticated() && isAuthenticated.role === 1){
            history.pust('/admin/dashboard')
        }
        else if(isAuthenticated() && isAuthenticated().role === 0){
            history.push('/user/dashboard')
        }
        else if(isAuthenticated() && isAuthenticated().role === 2){
            history.push('/approval/dashboard')
        }
    }, [history])
    
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        errorMsg: false,
        loading: false,
    })
    //destructure the states
    const {email, password, errorMsg, loading} = formData;

    //Event handlers
    const handleChange = (e) =>{
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            errorMsg: '' 
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        //validation of empty inputs and email
        if(isEmpty(email) || isEmpty(password)){
            setFormData({
                ...formData,
                errorMsg: 'User or Password is incorrect'
            })
        }
        else if(!isEmail(email)){
            setFormData({
                ...formData,
                errorMsg: 'User or Password is incorrect'
            })
        }
        else {

            const {email, password} = formData;
            const data = {email, password}

            setFormData({...formData, loading: true})

            signin(data)
            .then(response =>{

                //set token and user data
                setAuthentication(response.data.token, response.data.user)

                //validation
                if(isAuthenticated() && isAuthenticated().role === 1){
                    console.log('Redirected to admin dashboard')
                    history.push('/admin/dashboard')
                }
                else{
                    console.log('Redirected to user')
                    history.push('/user/dashboard')
                }
            })
            .catch(err =>{
                console.log("Sigin API error", err)
                setFormData({...formData, loading: false, errorMsg: err.response.data.errorMessage})
            }) 
        }
        
    }
    // const history = useHistory()
    // const [username, SetUsername] = useState("");
    // const [password, SetPassword] = useState("");

    // const addLogin = () =>{
    //     const data = {username: username, password:password}
    //     Axios.post("http://localhost:4001/login", data).then((response) =>{
    //         // alert(response.data)
    //         // console.log(data)
            
    //         if(response.data.error){
    //             alert(response.data.error);
    //             console.log(response.data.error)
    //         } 
    //         else{
    //             alert("Login Successfully")
    //             history.push("/user")
    //         }
    //     })
    //}

        
        // history.push('/user')
        // if(username != username.username){
        //     console.log("cannot login")
        //     alert("cannot login incorrect username")
        // }
       
        // if(password != password.password){
        //     console.log("cannot login")
        //     alert("cannot login incorrect password")
        // }
        // else{
        //     console.log("Login na")
        // }
        // console.log(username,password);
    
    
    return (
        <div className="main-sign-in">
            <div className="main-sign-in-form">
                {/* <h1 className="main-sign-in-h1">
                    University of Nueva Caceres Event
                </h1>
                <h2 className="main-sign-in-h2">
                    Facility Management System
                </h2> */}
                <form className="main-form" onSubmit={handleSubmit} noValidate>
                     {/* if error message is true then execute the message method */}
                    {errorMsg && showErrorMsg(errorMsg)}

                    {loading && <div className='text-center pb-4'>{showLoading()}</div> }
                    {/* <h1 className="select-h1">Login As</h1>
                    <select className="select-option" name="" id="">
                        <option value="user">User</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="vpa">VPA Office</option>
                        <option value="imc">IMC Department</option>
                        <option value="ict">ICT Department</option>
                        <option value="main-approval">Approval Department</option>

                    </select> */}
                    <label>Email</label>
                    <input
                        name='email'
                        value={email}
                        className='form-control'
                        placeholder='Email address'
                        type='email'
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        name='password'
                        value={password}
                        className='form-control'
                        placeholder='Create password'
                        type='password'
                        onChange={handleChange}
                    />
                   <button className="main-sign-in-button">Sign In</button>
                </form>
            </div>
            <img className="main-sign-in-logo" src="./img/UNC_LOGO.png" alt=""/>
        </div>
    )
}

export default SignIn
