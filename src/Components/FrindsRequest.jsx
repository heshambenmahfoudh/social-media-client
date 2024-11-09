import React from 'react'
import {  useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import FrindRequest from './FrindRequest'
import Loading from './Loading'
import StatusData from './StatusData'

const FrindsRequest = () => {

const profile = useParams().id
const {data:users , loading} =  useFetchData(`/users`)

  return (
    <div className={`mt-4 overflow-scroll  ${profile ? 'h-[330px]':'h-[230px]' }`}>
        <h2 className='mb-4 font-semibold text-14'>Are
         you follwing this contacts</h2>
        <div className='flex flex-col gap-2  '>
        {loading ? <Loading/> :users?.map((user) => (
          <FrindRequest users={users} user={user} key={user?._id}/>
        ))}
          {users?.length <2 && (
            <div
              className={`  p-6 text-center text-18  
             `}
            >
              No Frinds Request Here
            </div>
          )}

       </div>
     </div>
       
  )
}

export default FrindsRequest