import { useEffect, useState } from 'react'
import axios from 'axios'
const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
        setData(res.data.data)
      } catch (err) {
        setErr(false)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])

  
  return { data, loading, err }
}

export default useFetchData
