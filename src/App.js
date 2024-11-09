import { Navigate, Route, Routes } from 'react-router-dom'
import ProfilePage from './Pages/ProfilePage'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { useStateContextAuth } from './context/authContext'
import Logo from './Components/Logo'
function App() {
  const { user } = useStateContextAuth()
  return (
    <div>
    {user && (
      <div className='
            px-4 sms:px-3 
            py-2.5 shadow-lg 
          shadow-blue-100
            smd:flex justify-between
            items-center min-w-full
          bg-blue-300 hidden
            fixed right-0 left-0 z-10 
      '>
       <Logo/>
      </div>
    )}
    <div className=" px-4 sms:px-3 py-3   ">
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          exact
          path="*"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/profile/:id"
          element={user ? <ProfilePage /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../" /> : <Login />}
        />
        
      </Routes>
    </div>
   </div>
  )
}

export default App
