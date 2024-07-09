import "./Footer.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style= {{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Bhadrabas Chowk, Kathmandu</p>
                        <p>Nepal</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style= {{color: "#fff", marginRight: "2rem"}} />+977-9865475613
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style= {{color: "#fff", marginRight: "2rem"}} />prabalbhandary97@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Myself</h4>
                <p>I am a student of University Level</p>
                <div className="social">
                <FaFacebook size={30} style= {{color: "#fff", marginRight: "1rem"}} />
                <FaYoutube size={30} style= {{color: "#fff", marginRight: "1rem"}} />
                <FaInstagram size={30} style= {{color: "#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer