import React from 'react'
import { AiOutlineEdit} from 'react-icons/ai'
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'
import ChangeProfile from './ChangeProfile'
import toast from 'react-hot-toast'
import Buttons from './Forms/Buttons'

const ProfileInfo = () => {
  
 const {changeProfile, setChangeProfile} = useStateContext()
 const {user,dispatch,loading} = useStateContextAuth()
 const LogOut =()=>{
    dispatch({type:"LOG_OUT"})
    toast.success("User LogOut Successfully")
    
 }

  return (
    <div className='bg-blue-200 p-3 rounded-lg'>
      <div className='flex justify-between items-center my-4'>
        <h2 className='capitalize text-17 font-semibold'>youre information</h2>
        <span className='text-20 cursor-pointer'
        onClick={() => setChangeProfile(prev => !prev)}
        ><AiOutlineEdit/></span>
      </div>
      <div>
        <div className='flex items-center  gap-2'>
          <span className='font-semibold text-16'>works at :</span>
          <p className='text-15 capitalize '>{user?.workat ? user?.workat  : 'Youre work' }</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>lives in :</span>
          <p className='text-15 capitalize'>{user?.livein ? user?.livein : 'Youre lives in' }</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>country :</span>
          <p className='text-15 capitalize'>{user?.country ? user?.country: 'Youre country'}</p>
        </div>
        <div className='flex items-center  gap-2 mt-2.5'>
          <span className='font-semibold text-16'>relationShip :</span>
          <p className='text-15 capitalize'>{user?.relationship ?  user?.relationship : "Youre relation shap"}</p>
        </div>
        </div>
        <div className='mt-8 flex justify-end'>
        <Buttons
          text={'Log Out'}
          onClick={LogOut}
          loading={loading}
          title=""
          />
          </div>
        {changeProfile && (
          <ChangeProfile/>
        )}
    </div>
  )
}

export default ProfileInfo