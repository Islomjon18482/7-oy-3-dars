import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Singin from './Pages/Singin'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/singin' element={<Singin></Singin>}></Route>
      </Routes>
    </div>
  )
}
