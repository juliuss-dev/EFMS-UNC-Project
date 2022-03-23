import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
function Contact() {
    return (
        <div className= "contact-us">
                <h1 className="contact-us-h1">Contact Us</h1>
            <div className="sub-contact">
                {/* <Link to="https://www.facebook.com/UniversityOfNuevaCaceres">
                    <Image src="./img/facebook(1).png" className="contact-img"/>
                </Link> */}
                
                <a href="https://www.facebook.com/UniversityOfNuevaCaceres">
                    <img src="./img/fb.png" alt="" />
                    <p>Facebook</p>
                </a>
               <a href="https://www.unc.edu.ph/">
                   <img className="contact-us-img-unc" src="./img/UNC_LOGO.png" alt="" />
                   <p>Official Unc Website</p>
               </a>
               <a href="https://www.instagram.com/uncgreyhounds/?fbclid=IwAR1TuuG0ofpvtBgtRyIElpTjGVJUJ3arnGRxkpXuZkT-sSToZjjMVpsJucw">
                   <img src="./img/instagram1.png" alt="" />
                   <p>Instagram</p>
               </a>
               <a href="https://www.youtube.com/channel/UCwWe3O-23BDIKhYsTN4_A6g">
                   <img src="./img/youtube1.png" alt="" />
                   <p>Youtube</p>
               </a>
            </div>
        </div>
    )
}

export default Contact
