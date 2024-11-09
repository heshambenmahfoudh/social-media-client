import React, { createContext, useContext, useState } from 'react'

const stateContext = createContext()

const ContextProvider = ({ children }) => {
  const [openLogin, setOpenLogin] = useState(true)
  const [changeProfile, setChangeProfile] = useState(false)
  const [openSideBarRight, setOpneSideBarRight] = useState(false)
  const [openSideBarLeft, setOpneSideBarLeft] = useState(false)

  return (
    <stateContext.Provider
      value={{
        openLogin,
        setOpenLogin,
        changeProfile,
        setChangeProfile,
        openSideBarRight,
        setOpneSideBarRight,
        openSideBarLeft,
        setOpneSideBarLeft
      }}
    >
      {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext)
export default ContextProvider
