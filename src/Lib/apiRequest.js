import axios from 'axios'
import toast from 'react-hot-toast'

export const ApiPostRequest = async (
  endPoint,
  e,
  data,
  setLoading,
  setErr,
  resourceName,
) => {
  e.preventDefault()
  setLoading((prev) => !prev)

  try {
    await axios.post(endPoint, data)
    setLoading((prev) => !prev)
    window.location.reload()
    toast.success(`${resourceName} Created Successfully`)
  } catch (err) {
    setLoading((prev) => !prev)
    return toast.error(err?.response?.data?.message)
  }
}

export const ApiPutRequest = async (
  endPoint,
  e,
  id,
  info,
  dispatch,
  resourceName,
) => {
  e.preventDefault()

  dispatch({ type: 'UPDATE_START' })
  try {
    const res = await axios.put(`/${endPoint}/${id} `, info)
    dispatch({ type: 'UPDATE_SUCCESS', payload: res.data.data })
    toast.success(`${resourceName} Updated Successfully`)
  } catch (err) {
    dispatch({ type: 'UPDATE_FAIL', payload: err.response.data.message })
    toast.success(err.response.data.message)
  }
}

export const ApiDeleteRequest = async (endPoint, id, resourceName) => {
  try {
    await axios.delete(`/${endPoint}/${id}`)
    toast.success(`${resourceName} Deleted Successfully`)
    window.location.reload()
  } catch (err) {}
}

export const ApiPostImageRequest = async (
  e,
  endPoint,
  name,
  setProfileImg,
  setCoverImg,
  setImg,
) => {
  try {
    e.preventDefault()
    const file = e.target.files[0]
    const dataImg = new FormData()
    dataImg.append('photo', file)
    if (file) {
      const { data } = await axios.post(endPoint, dataImg)
      if (name !== '') {
        if (e.target.name === name) {
          setProfileImg(data)
        } else {
          setCoverImg(data)
        }
        return toast.success(`Image Upload Successfully`)
      }
      setImg(data)
     return toast.success(`Image Upload Successfully`)

    }
  } catch (err) {
    toast.error(`Failed To Upload Image`)
  }
}

export const ApiLoginUser = async (e, dispatch, data, setOpenLogin) => {
  e.preventDefault()
  dispatch({ type: 'AUTH_START' })
  try {
    const res = await axios.post('auth/login', data)
    dispatch({ type: 'AUTH_SUCCESS', payload: res.data.data })
    toast.success('User Login Successfully')
    if (res) {
      return setOpenLogin((prev) => !prev)
    }
  } catch (err) {
    dispatch({ type: 'AUTH_FAIL', payload: err.response.data.message })
    toast.error(err.response.data.message)
  }
}

export const follwingUser = async (id, user, dispatch) => {
  try {
    await axios.put(`/users/follw/${id}`, { id: user })
    dispatch({ type: 'USER_FOLLOW', payload: id })
    toast.success(`User Follwing Successfully`)
    window.location.reload()
  } catch (err) {
    toast.error(err.response.data.message)
  }
}

export const unfollwingUser = async (id, user, dispatch) => {
  try {
    await axios.put(`/users/unfollw/${id}`, { id: user })
    dispatch({ type: 'USER_UNFOLLOW', payload: id })
    window.location.reload()
    toast.success(`User UnFollwing Successfully`)
  } catch (err) {
    toast.error(err.response.data.message)
  }
}

export const likePost = async (id, user) => {
  try {
    await axios.put(`/posts/likes/${id}`, { id: user })
    toast.success(`Post Like Successfully`)
  } catch (err) {
    toast.error(err.response.data.message)
  }
}
