import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <footer>
    <center>This site is protected by reCAPTCHA and the <Link to="#">Google Privacy Policy</Link> and <Link to="#">Terms of Service apply</Link>.</center>
    </footer>
    </div>
    </>
  )
}
