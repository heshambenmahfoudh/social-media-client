import React, {  useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import { BsCameraVideo } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'
import avatar4 from '../data/images/avatar4.jpg'
import { useStateContextAuth } from '../context/authContext'
import axios from 'axios'
import { ApiPostImageRequest, ApiPostRequest } from '../Lib/apiRequest'

const CreatePost = () => {

const [img, setImg] = useState(null)
const [desc, setDes] = useState('')
const [loading, setLoading] = useState(false)
const [err, setErr] = useState('')
const { user } = useStateContextAuth()
  
const changeImage = async (e) => {
  e.preventDefault()
       ApiPostImageRequest (e, '/deploy', '','','',setImg)
  }
const addedPost = async (e) => {
    e.preventDefault()
    const data = {
      userId:user?._id,
      description:desc,
      image : img
    }
    
    ApiPostRequest(
          '/posts',
          e,
          data,
          setLoading,
          setErr,
          'Post',
        )
       
}
const date = new Date()

  return (
   <div className="p-[20px] sms:p-[10px] bg-gray-200 rounded-[10px]  ">
      <div className="flex items-center gap-[15px] mb-[2px] leading-4">
        <img 
        src={!user?.profileimage?.[0] ?  avatar4 
                    :process.env.REACT_APP_PUBLIC_FOLDER + user?.profileimage}
         alt=""
        className='w-[40px] h-[40px] rounded-full '
        />
        <div>
          <p className='font-semibold text-14 '>{`${user?.firstname} ${user?.lastname}`}</p>
          <small className='text-12 text-gray-500'>
            <span>{date.toString().slice(15,25)}</span>
            Public
            <BsCaretDownFill  className='text-[10px] ml-[5px] align-middle'/>
          </small>
        </div>
      </div>
      <div className="ml-[5px] mt-1">
        <textarea
          placeholder= {`What's on youre mind ${user?.firstname} ${user?.lastname}`}
          cols="30"
          rows="10"
          className=' outline-none w-full focus:bg-gray-300 p-2 rounded-lg 
          resize-none text-15 leading-4   bg-transparent
          border-b-1 border-[#ccc] h-[60px]
          '
          onChange={(e) => setDes(e.target.value)}
        ></textarea>
        <div className='mb-3'>
        {img && (
              <img
                className="rounded-xl h-[280px] "
                src={process.env.REACT_APP_PUBLIC_FOLDER + img}
                alt=""
              />
            )}
           </div>
        <div className="flex items-center justify-between ">
          <div className='flex items-center  
          gap-8 smd:gap-10
           sms:gap-4'>
             <label
          className='flex items-center text-14 cursor-pointer'
          >
              <input type="file" onChange={changeImage} className="hidden" />
            <BsCamera  className='mr-[10px] text-18 text-green-500'/>
            Photo/video
          </label>
          <label
          className='flex items-center text-14'
          >
            <BsCameraVideo  className='mr-[10px] text-18 text-red-600'/>
            Live/video
          </label>
          <label className='flex items-center text-14 smss:hidden'>
            <BsEmojiSmile  className='mr-[10px] text-18 ext-blue-500'/>
            Feeling/activity
          </label>
          </div>
          <button 
          onClick={addedPost}
                className=" font-bold text-13 w-[7rem] focus:outline-none  placeholder:capitalize
            hover:bg-transparent hover:border-2 p-1.5
             border-blue-500 border-2 bg-blue-500 rounded-xl 
              hover:text-black text-white cursor-pointer capitalize">
                
                {loading  ? 'deploy...': 'deploy'}
              </button>
        </div>
      </div>
   </div>
  )
}

export default CreatePost