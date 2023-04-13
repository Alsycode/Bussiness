import React from 'react'
import profile from "../images/profile.jpg"
export default function Header() {
    return(
        <div className='header--container'>
            <img src={profile} alt='' width="317px" height="317px" className='profilepic'/>
        </div>
    )
}