import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import avatar4 from "../data/images/avatar4.jpg"
import { useStateContextAuth } from '../context/authContext'
import { follwingUser, unfollwingUser } from '../Lib/apiRequest'
import StatusData from './StatusData'

const FrindRequest = ({user,users}) => {
    const {user:currUser , dispatch} =  useStateContextAuth()

    const [follwing, setFollwing] = useState(currUser?.following?.includes(user?._id))
const follwings = () =>{
   
    if (follwing) {
        unfollwingUser(user?._id ,currUser?._id, dispatch)
       
}else{
    follwingUser(user?._id ,currUser?._id, dispatch)
   
}
setFollwing(!follwing)
}
  return (
<>
    {user?._id !== currUser?._id && (
       <article className='flex justify-between items-center grow ' key={user?._id}>
                <div className='flex gap-2 items-center '>
                    <img src={!user?.profileimage?.[0] ?  avatar4 
                    :process.env.REACT_APP_PUBLIC_FOLDER + user?.profileimage}
                    className="   w-[45px] h-[45px]  rounded-full  
                    border-2 border-blue-500 
                    object-cover"
                    alt=""  />
                    <div className='leading-4'>
                        <h2 className='text-12 font-semibold'>{`${user?.firstname} ${user?.lastname}`}</h2>
                        <span className='text-12'>{user?.username}</span>
                    </div>
                </div>
                <Link className={`   py-1.5 px-4 rounded-3xl 
                hover:bg-transparent hover:text-black border-1 border-blue-500
                 text-14 font-semibold ${follwing ?` 
                  text-black bg-transparent 
                  ` : `bg-blue-500 text-white `}`} 
                 onClick={ follwings }
                 >
                 {follwing ? 'nuFollow' : 'Follow'}   
                </Link>
       </article>
    )} </>
           
  )
}

export default FrindRequest