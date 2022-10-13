import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from  '../pages/home/Home'
import { Profile } from  '../pages/profile/Profile'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/profile" element={ <Profile/> }/>
      <Route path="/*" element={ <Navigate to='/'/> } />
    </Routes>
  )
}
