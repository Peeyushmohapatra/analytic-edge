import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./comments.css"
import { commentFun } from '../../Functions/function'
import Userdetails from '../UserDetails/Userdetails'

const Comment = () => {
    const {id} = useParams()
    const [comment,setComment] = useState([])
    useEffect(() => {
        commentFun(id,setComment)
    },[])
    const navigate = useNavigate()
  return (
    <div className='comments'>
        <div className="commentContainer">
            <Userdetails/>
        {comment && <h1 className='commentHeading'>You can see conmments on your post......</h1>}

            {comment && comment.map((user) => {
                return (
            <div className="userCommentContainer">
                {/* <div className="useName"><p>{user.name}</p></div> */}
                <div className="userEmail"><p>This Comment is by: {user.email}</p></div>
                <div className="userComment"><p>{user.body}</p></div>
            </div>
                )
            })}
        </div>
        <button className='backButton' onClick={() => {
            navigate("/")
        }}>Back</button>
    </div>
  )
}

export default Comment