import React, { useState } from 'react'
import { BsCaretDownFill, BsHeart , BsHeartFill, BsShare, BsThreeDotsVertical } from 'react-icons/bs'
import {AiOutlineMessage} from "react-icons/ai"
import { useStateContextAuth } from '../context/authContext'
import avatar4 from '../data/images/avatar4.jpg'
import {format}  from 'timeago.js'
import { likePost } from '../Lib/apiRequest'
import DeleteItem from './DeleteItem'


const Post = ({post ,  userId ,posts,setPosts}) => {
const {user} = useStateContextAuth()
  const [like, setLike] = useState(post?.likes.includes(user?._id))
  const [likeLenth, setLikeLength] = useState(post?.likes?.length)
  const [deletePost, setDeletePost] = useState(false)

  const likedPost = () => {
   setLike(prev => !prev)
    likePost(post?._id , user?._id) 
    like ? setLikeLength(prev => prev -1) :  setLikeLength(prev => prev +1) 
  }

  return (
<>

   <article className="bg-blue-50
        rounded-xl
        w-full
        p-[20px]
        sms:p-[10px]
        "  >
          <div className="flex
          justify-between
          items-center 
          mb-[20px]">
            <div className="flex
            items-center gap-[15px]">
              <img 
                 alt=""
                 src={!post?.userId?.profileimage?.[0] ?  avatar4 
                    :process.env.REACT_APP_PUBLIC_FOLDER + post?.userId?.profileimage}
                 className='w-[40px]
              h-[40px]
              rounded-full'
              />
              <div>
                <p className='font-bold
                text-15
                leading-4'>{`${post?.userId?.firstname} ${post?.userId?.lastname}`}</p>
                <small className='text-13
                text-gray-600'> {format(post?.createdAt)}</small>
              </div>
            </div>
            <span className={`text-16
            text-gray-600
            mb-0
            relative
            ${userId && 'cursor-pointer'}
            `}
            onClick={() => userId &&  setDeletePost(prev => !prev)}
            >
              <BsThreeDotsVertical />
            {userId &&  deletePost && (
              <span className=' absolute top-[1.22rem] right-1
              p-2 rounded-lg bg-gray-300'
              > 
               {userId && <DeleteItem
              id={post?._id}
               endPoint={'posts'}
                resourceName={'Post'}
                 list ={posts}
                  setList={setPosts}
              />
            }
              </span>
            )}
            </span>
          </div>
          <div >
            <p className='text-14
            leading-4
            text-black
            mb-[16px]
            smss:mb-[10px]
            '>
            {post?.description}
            </p>
            {post?.image?.[0] && (
              
              <img
               src={process.env.REACT_APP_PUBLIC_FOLDER + post?.image} alt=""
              
              className='w-full h-[300px]
              rounded-xl border-[3px] smss:h-[180px]'/>
              )}
          </div>
          <div className="flex justify-between mt-4 items-center">
            <div className="flex  gap-3  items-center">
                {likeLenth > 0 && (
              <span className='text-15'>
                  <b>{  likeLenth}</b> {"  "}likes
              </span>
                  )}
              <span className=' cursor-pointer  '
              onClick={likedPost}
              >
                {like ?  <BsHeartFill  className='text-blue-500'/> : <BsHeart  className=''/>}
              </span>
              <span className=' cursor-pointer'><AiOutlineMessage /></span>
              <span className=' cursor-pointer'><BsShare /></span>
            </div>
            <div className="flex items-center">
              <img 
                src={!post?.userId?.profileimage?.[0] ?  avatar4 
                    :process.env.REACT_APP_PUBLIC_FOLDER + post?.userId?.profileimage}
               alt="" 
               className='w-[20px] h-[20px]
               rounded-full
               mb-[4px]
               '/>
              <BsCaretDownFill 
              className='text-11'
              />
            </div>
          </div>
    </article>
         
           </>
  )
}

export default Post