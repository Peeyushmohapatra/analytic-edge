import React from 'react'
import "./display.css"
import { Link } from 'react-router-dom'
import { userDetail } from '../../Functions/function'
import { useDispatch } from 'react-redux'


const Display = ({state}) => {
    const dispatch = useDispatch(); // disPatch() helps to pass action object to reducer function.
  return (
    <div className='display'>
        <div className="tableHeading">
            <div className="serialNumber"><b>S.No</b></div>
            <div className="title"><b>Title</b></div>
            <div className="discription"><b>Discription</b></div>
        </div>
        <div className="userDetails">
            {state && state.map((user) => {
                console.log(user);
                return (
                    <Link to={`/comments/${user.userId}`}>
                        <div onClick={() => {
                            userDetail(user.id,dispatch)
                        }} className="dataContainer">
                            <div className="innerSerialNumber"><p>{user.id}</p></div>
                            <div className="innerTitle"><p>{user.title}</p></div>
                            <div className="innerDiscription"><p>{user.body}</p></div>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Display