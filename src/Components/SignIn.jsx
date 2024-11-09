import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContextAuth } from '../context/authContext'
import { useStateContext } from '../context/contextProvider'
import { ApiLoginUser } from '../Lib/apiRequest'
import Lables from './Forms/Lables'
import Inputs from './Forms/Inputs'
import Buttons from './Forms/Buttons'

const SignIn = () => {
 const [informations, setInformations] = useState()

const {loading  ,dispatch} = useStateContextAuth()
const {  setOpenLogin } = useStateContext()
const changeData = (e) => {
    setInformations({ ...informations, [e.target.name]: e.target.value })
}
const login = (e) => {
    e.preventDefault()
    const data={
      ...informations
    }
    ApiLoginUser(e, dispatch, data, setOpenLogin)
}
  
  return (
    
      <div className="bg-slate-300  p-5 smd:p-3  w-full rounded-2xl  ">
        <h2 className="text-center mb-8 mt-2 text-19 font-bold">Log In</h2>
        <form>
          <div className="flex items-center flex-col gap-1 mb-2 ">
            <div className="w-full">
              <Lables text="User Username" />
              <Inputs
                type="text"
                placeholder="You@gmail.com"
                name="username"
                changeValue={changeData}
              />
            </div>
            <div className="w-full">
              <Lables text="Ueer Password" />
              <Inputs
                type="password"
                placeholder="User Password"
                name="password"
                changeValue={changeData}
              />
            </div>
          </div>
     <div className="flex  justify-end mt-2">
          <small
          className="text-13 cursor-pointer text-left "
        >
            Don't hane an account? <Link 
            className="text-14 font-semibold underline"
           onClick={() => setOpenLogin(prev => !prev)}
            >Register Now</Link>
        </small>
      </div>
        
          <Buttons
            text={'Login'}
            onClick={login}
            loading={loading}
            title="User"
          />
        </form>

      </div>
      
   
  )
}

export default SignIn
      
