
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/components/Home'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={ <Home/> }/>

        <Route path="/*" element={ <Navigate to="/Home"/> } />
    </Routes>
  )
}
