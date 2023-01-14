import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {

    const navigate = useNavigate()
  function cler(){
    localStorage.clear()
 
    navigate('/signup')
    alert("session End")

  }

  setTimeout(()=>{cler()},[9000])
  return (
    <>

    <div className='conatiner' >
      <div className='row'>
       <center> <h1>User Dashboard</h1></center>
        <button className='btn btn-dark' onClick={cler}> Log out</button>
      </div>
    </div>
    
    </>
  )
}
