import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Singin from './Pages/Singin'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/singin' element={<Singin></Singin>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
