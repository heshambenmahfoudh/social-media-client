import React from 'react'

const Inputs = ({type , name,placeholder,value,changeValue , min}) => {
  return (
        <input 
         type={type}
         name={name} 
         placeholder={placeholder}
         value={value}
         min={min}
         className="p-2 text-15 border-[2px] 
              rounded-md focus:outline-none
              focus:border-blue-300 w-full mt-1 text-black placeholder:text-gray-500  "
         onChange={changeValue}
        />
  )
}

export default Inputs