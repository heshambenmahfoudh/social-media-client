import React from 'react'
import {  AiOutlineCloudUpload } from 'react-icons/ai'
const SelectImage = ({chaneValue ,name,
  setImage, img}) => {
  return (
      <div className="w-full gap-2 ">
           {img?.[0] ? (
                  <img
                    className="rounded-xl h-[100px] w-full cursor-pointer"
                    src={process.env.REACT_APP_PUBLIC_FOLDER + img}
                    alt=""
                    onClick={()=> setImage(prev => !prev) 
                      }
                  />
                  
                ):(
                  <label
                  className="rounded-xl h-[100px] w-full bg-gray-300
                  flex justify-center items-center gap-2 cursor-pointer border-1 border-blue-200"
                >
                  <input type="file"  name={name} onChange={chaneValue} 
                  className="hidden" />
                  <AiOutlineCloudUpload lassName="text-25" />
                  <h2 className="text-19">Upload</h2>
                </label>
)}
          </div>
  )
}

export default SelectImage
