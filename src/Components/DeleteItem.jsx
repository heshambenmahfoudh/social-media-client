import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { ApiDeleteRequest } from '../Lib/apiRequest'

const DeleteItem = ({id ,endPoint ,resourceName ,list , setList}) => {
     const deletedItem = async (id) => {
    ApiDeleteRequest (endPoint, id, resourceName)
    setList(list?.filter((item) => item?._id !== id))
  }
  return (
    <div><AiFillDelete
                      className="cursor-pointer text-red-600"
                      onClick={() => deletedItem(id)}
                    /></div>
  )
}

export default DeleteItem