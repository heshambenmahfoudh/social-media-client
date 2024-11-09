import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiFillCloseCircle}  from 'react-icons/ai'
import { useStateContext } from '../context/contextProvider'
import { useStateContextAuth } from '../context/authContext'
import useFetchData from '../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { ApiPostImageRequest, ApiPutRequest } from '../Lib/apiRequest'
import Lables from './Forms/Lables'
import Inputs from './Forms/Inputs'
import Buttons from './Forms/Buttons'
import SelectImage from './Forms/SelectImage'

const ChangeProfile = () => {

const { setChangeProfile} = useStateContext()
const [profileImg, setProfileImg] = useState(null)
const [coverImg, setCoverImg] = useState(null)
const [information, setInformation] = useState()  
const userId = useParams().id
const { loading,dispatch } = useStateContextAuth()
const { data: user } = useFetchData(`/users/find/${userId}`)

useEffect(() => {
  setInformation(user)
  setProfileImg(user?.profileimage)
  setCoverImg(user?.coverpicture)
}, [user])

  const changeImage = async (e) => {
    e.preventDefault()
    ApiPostImageRequest (e, '/deploy', 'profileImg',setProfileImg,setCoverImg)
  }

 const changeData = (e) =>{
  e.preventDefault()
  setInformation({...information , [e.target.name]:e.target.value} )
  
 
} 
const updateProfile = (e) =>{
   e.preventDefault()

   
   const  data = {
  ...information,
    profileimage :profileImg,   
    coverpicture:coverImg
   }
 
    ApiPutRequest(
          `users`,
          e,
          userId,
          data,
          dispatch,
          'Profile',
        )
   setChangeProfile(prev => !prev)

 }
 
  return (
    <div className='fixed inset-0 bg-black/70'>
        <div className='flex justify-center items-center h-screen'>
        <div className=' bg-blue-100 p-4 w-2/4 m-auto rounded-xl
         translate-y-0 
         overflow-scroll
          slg:w-4/6
          smd:w-full
          smd:mx-4
        '>
          <span 
          className='cursor-pointer text-18 absolute right-4 top-3.5'
          onClick={() => setChangeProfile(prev => !prev)}
           ><AiFillCloseCircle/>
           </span>
      <h2 className="text-center mb-5 text-19 font-bold mt-5 smd:mt-4 smd:mb-3">Youre information </h2>
      <form >
        <div className="flex flex-col gap-1 ">
             <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="First Name" />
                <Inputs
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  changeValue={changeData}
                  value={userId && information?.firstname}
                />
              </div>
              <div className="w-full">
                <Lables text="Last Name" />
                <Inputs
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  changeValue={changeData}
                  value={userId && information?.lastname}
                />
              </div>
            </div>
            <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="User Name" />
                <Inputs
                  type="email"
                  placeholder="User Name"
                  name="username"
                  changeValue={changeData}
                  value={userId && information?.username}
                />
              </div>
              <div className="w-full">
                <Lables text="User Work At" />
                <Inputs
                  type="text"
                  placeholder="User Work At"
                  name="workat"
                  changeValue={changeData}
                  value={userId && information?.workat}
                />
              </div>
            </div>
            <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="User Live In" />
                <Inputs
                  type="text"
                  placeholder="User Live In"
                  name="livein"
                  changeValue={changeData}
                  value={userId && information?.livein}
                />
              </div>
              <div className="w-full">
                <Lables text="User Country" />
                <Inputs
                  type="text"
                  placeholder="User Country"
                  name="country"
                  changeValue={changeData}
                  value={userId && information?.country}
                />
              </div>
            </div>
          <div className="flex justify-between items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="User Relation Ship" />
                <Inputs
                  type="text"
                  placeholder="User Relation Ship"
                  name="relationship"
                  changeValue={changeData}
                  value={userId && information?.relationship}
                />
              </div>
              <div className="w-full">
                <Lables text="User Password" />
                <Inputs
                  type="password"
                  placeholder="User Password"
                  name="password"
                  changeValue={changeData}
                  value={userId && information?.password}
                />
              </div>
            </div>
        </div>
        <div className='flex  justify-between items-center gap-4 my-3'> 
                <div className='w-1/2' >
                <h2 className='text-15 font-semibold mb-2'>Profile image</h2>
                 <SelectImage chaneValue={changeImage} 
                 setImage={setProfileImg} img={profileImg} name={'profileImg'} />
                </div>
               <div className='w-1/2' >
                <h2 className='text-15 font-semibold mb-2'>Cover image</h2>
                <SelectImage chaneValue={changeImage} 
                setImage={setCoverImg} img={coverImg} name={'coverImg'} />
                </div>
        </div>
       <Buttons
          text={ 'Update' }
          onClick={updateProfile}
          loading={loading}
          title="Profile"
        />
      </form>
    </div>
    </div>
    </div>
  )
}

export default ChangeProfile