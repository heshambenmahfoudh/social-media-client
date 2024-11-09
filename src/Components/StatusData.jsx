import React from 'react'

const StatusData = ({list,resourceName}) => {
  return (
    <div> {list?.length <= 0 && (
            <div
              className={`  p-6 text-center text-18  
             `}
            >
              No {resourceName} Here
            </div>
          )}</div>
  )
}

export default StatusData