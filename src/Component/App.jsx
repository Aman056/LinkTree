import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCompany from './CreateCompany'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Index from './Index'
import Login from './Login'
import Signup from './Signup'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/create-company" element={<CreateCompany/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route/>

    </Routes>
    <Footer/>
    
    </BrowserRouter>

    </>
  )
}
