import React, { useState } from 'react'
import {   Link } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import { ApiPostRequest } from '../Lib/apiRequest'
import Inputs from './Forms/Inputs'
import Lables from './Forms/Lables'
import Buttons from './Forms/Buttons'

const SignUp = () => {
  const [information, setInformation] = useState('')
 const {  setOpenLogin } = useStateContext()
 const [loading, setLoading] = useState()
 const [err, setErr] = useState()
  const changeData = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value })
  }

  const registerUser = (e) => {
    const data={
      ...information
    }
   e.preventDefault()
    ApiPostRequest( 'auth/register',
  e,
  data,
  setLoading,
  setErr,
  'User',)
  }
   
  return (
         <div className='bg-slate-300  p-5 smd:p-3   w-full rounded-2xl '>
         <h2 className="text-center mb-3 text-19 font-bold mt-2">Sign Up</h2>
      <form >
          <div className="flex   items-center gap-2 mb-2">
            <div className=" flex flex-col w-full">
                <Lables text="User First Name" />
                <Inputs
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  changeValue={changeData}
                />
              </div>
          <div className=" flex flex-col w-full">
                <Lables text="User Last Name" />
                <Inputs
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  changeValue={changeData}
                />
              </div>
          </div>
          <div className=" flex flex-col w-full mb-2">
              <Lables text="User UserName" />
              <Inputs
                type="email"
                name="username"
                placeholder="You@gmail.com"
                changeValue={changeData}
              />
          </div>
          <div className="flex items-center  sms:flex-wrap gap-2">
            <div className=" flex flex-col sms:w-full w-1/2">
                <Lables text="User Password" />
                <Inputs
                  type="password"
                  name="password"
                  placeholder="Password"
                  changeValue={changeData}
                />
            </div>
            <div className=" flex flex-col sms:w-full w-1/2">
                <Lables text="User Confirm Password" />
                <Inputs
                  type="password"
                  name="connfirmPassword"
                  placeholder="Confirm Password"
                  changeValue={changeData}
                />
            </div>
          </div>
         <div className="flex  justify-end mt-2">
          <small
          className="text-13 cursor-pointer text-left "
        >
            Alredy have account? <Link 
            className="text-14 font-semibold underline"
           onClick={() => setOpenLogin(prev => !prev)}
            >Sign In</Link>
        </small>
      </div>
          <Buttons
            text={ 'SignUp'}
            onClick={registerUser}
            loading={loading}
            title="User"
            err={err}
          />
      </form>
    </div>
  )
}

export default SignUp
