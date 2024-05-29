import React from 'react'
import { 
    FaSquareXTwitter,
    FaSquareSnapchat,
    FaSquareFacebook,
    FaSquareInstagram
 } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
            <div className='flex justify-center gap-5 p-5'>
                <a href="#">
                    <i><FaSquareInstagram size={60}/></i>
                </a>
                <a href="#">
                    <i><FaSquareXTwitter size={60}/></i>
                </a>
                <a href="#">
                    <i><FaSquareFacebook size={60}/></i>
                </a>
                <a href="#">
                    <i><FaSquareSnapchat size={60}/></i>
                </a>
            </div>
            <ul className='text-center justify-center sm:flex gap-5'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            <p className='text-center p-5'>7SEAS © 2024</p>
    </footer>
  )
}

export default Footer
