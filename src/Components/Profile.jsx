import React from 'react'
import { NavLink, useParams}  from 'react-router-dom'
import { useStateContextAuth } from '../context/authContext'
import avatar4 from "../data/images/avatar4.jpg"
import avatar3 from '../data/images/avatar3.png'
import useFetchData from '../hooks/useFetchData'
const Profile = () => {
 const userId = useParams().id
  const { user } = useStateContextAuth()
   const { data:posts  } = useFetchData( `/posts/userpost/${user?._id}`);
  return (
    <div className=' flex flex-col rounded-xl -z-10 overflow-hidden bg-blue-200'>
            <img 
              src={!user?.coverpicture?.[0] ?  avatar3
                    :process.env.REACT_APP_PUBLIC_FOLDER + user?.coverpicture}
            className={`w-full  object-cover
            ${userId  ? 'h-[220px]' : 'h-[130px]'}
            `}
            alt=""  />
        <div className='relative  flex justify-center items-center mb-12 '>
            <img
            
               src={!user?.profileimage?.[0] ?  avatar4 
                    :process.env.REACT_APP_PUBLIC_FOLDER + user?.profileimage}
            
            className="  absolute w-[80px] h-[80px]   rounded-full -top-[2.5rem] 
            border-2 border-blue-500 
            object-cover"
            alt=""  />
        </div>
        <div className='text-center mb-2
        '>
            <h2 className='capitalize font-semibold '>
                {`${user?.firstname} ${user?.lastname} 
                `}</h2>
            <span className='capitalize mt-1 block text-16'> {user?.workat ? user?.workat : 'Youre work'}  </span>
        </div>
        <div className={`flex justify-around items-center  bg-blue-600
         p-2  ${userId && 'mb-6' }` }>
            <p className='flex flex-col gap-1 text-center text-white'>
                <span>Follwers</span>
            <span><b>{user?.follwers?.length}</b> </span>
            </p>
            <p className='flex flex-col gap-1 text-center text-white'>
                <span>Follwing</span>
                <span><b>{user?.following?.length}</b> </span>
            </p>
             {userId  && (
                 <p className='flex flex-col gap-1 text-center text-white'>
                <span>Posts</span>
                <span><b>{posts ? posts.length : 0}</b> </span>
            </p>
        )}
        </div>
        {!userId && (

            <NavLink to={`/profile/${user?._id}` }
            className='capitalize text-center my-4 font-semibold'> my profile</NavLink>
            )}
    </div>
  )
}

export default Profile