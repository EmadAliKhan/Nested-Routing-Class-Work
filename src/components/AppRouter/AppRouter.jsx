import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom'
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/Dashboard/*' element={<Dashboard/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default AppRouter
