import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import avatar4 from "../data/images/avatar4.jpg"
import Loading from './Loading'
import StatusData from './StatusData'
const Frinds = () => {
const userId = useParams().id
const {data:frinds , loading} =  useFetchData(`/users/frinds/${userId}`)



return (
     <div className={`overflow-scroll  h-[630px] mt-7`}>
     <div className="bg-blue-200 p-3 rounded-xl py-5">
        <h2 className='mb-4 font-semibold text-16 '>All frinds</h2>
        <div className='flex flex-col gap-2  '>
        {loading ?  <Loading/> :frinds?.map((user) => (
            user?._id !== userId && (
            <article className='flex justify-between items-center grow ' key={user?._id}>
                <div className='flex gap-2 items-center '>
                    <img src={!user?.profileimage?.[0] ?  avatar4 :process.env.REACT_APP_PUBLIC_FOLDER + user?.profileimage}
                    className="   w-[45px] h-[45px]  rounded-full  
                    border-2 border-blue-500 
                    object-cover"
                    alt=""  />
                    <div className='leading-4'>
                        <h2 className='text-12 font-semibold'>{`${user?.firstname} ${user?.lastname}`}</h2>
                        <span className='text-12'>{user?.username}</span>
                    </div>
                </div>
            </article>
             )
        ))}
     </div>
       <StatusData list={frinds}
           resourceName={'Frinds'}  size={{}}/>
       </div>
       </div>
  )
}

export default Frinds