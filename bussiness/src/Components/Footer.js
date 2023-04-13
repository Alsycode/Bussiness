import React from 'react'
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"

export default function Footer() {
    return(
        <div className='footer--container'>
            <img src={linkedin} alt='' className='logo'></img>
            <img src={instagram} alt='' className='logo'></img>
            <img src={twitter} alt='' className='logo'></img>
            <img src={facebook} alt='' className='logo'></img>
        </div>
        
    )
}