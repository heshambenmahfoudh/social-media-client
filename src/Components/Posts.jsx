import React, { useEffect, useState } from 'react'
import { useStateContextAuth } from '../context/authContext';
import useFetchData from "../hooks/useFetchData";
import Loading from './Loading';
import Post from './Post';
import {useParams} from "react-router-dom"
import { ApiDeleteRequest } from '../Lib/apiRequest';
import StatusData from './StatusData';

const Posts = () => {

const userId = useParams().id
const { user } = useStateContextAuth()
const { data:posts,loading  } = useFetchData(userId ? `/posts/userpost/${userId}`  :
 `/posts/followingPost/${user?._id}`);

const [listposts, setListPosts] = useState()

useEffect(() => {
    setListPosts(posts)
}, [posts])
  


  return (
      <div className='flex  flex-col gap-2.5 '>
       {loading ? <Loading/> : listposts?.map((post) => (
        <div key={post?._id}>
        <Post 
        posts={listposts} 
        setPosts={setListPosts} 
         post={post} 
         userId ={userId} />
       </div>
       ))}
       <StatusData list={listposts}
   resourceName={'Posts'}  size={{}}/>
      </div>
  )
}

export default Posts