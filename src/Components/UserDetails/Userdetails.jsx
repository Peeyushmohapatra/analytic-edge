import React, { useEffect, useState } from 'react'
import "./userdetails.css"
import { userDetails } from '../../Functions/function'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Userdetails = () => {
    const userData = useSelector((state) => {
        return state.userData
    })
  return (
    <div className='usedetails'>
        {userData ? <div className='innerDiv'>
            <p className='userName'>Hi ' {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Username: {userData.username}</p>
            <p>Contact: {userData.phone.slice(0,14)}</p>
            <p>{`Address: ${userData.address.city}, ${userData.address.street}, ${userData.address.suite}, Zipcode:${userData.address.zipcode}`}</p>
        </div> : <h1 className='userData'>User Data Not Available !!</h1>}
        
    </div>
  )
}

export default Userdetails