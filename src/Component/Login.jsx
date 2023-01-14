import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  useEffect(() => {

  }, [])

  const navigate = useNavigate();

  const [otpsend, setotpsend] = useState({ otp: "" });
   
  var GetUseID = localStorage.getItem("user_id")
  // console.log(GetUseID)

  const Fetching = async () => {

    const data = { otp: otpsend.otp };
    const URL = `https://bookeve.in/appuser/activate/${GetUseID}/`;
    console.log(URL)

    await axios.post(`${URL}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((data) => {
        console.log(data.data,"data.data.acces");
        sessionStorage.setItem('access', JSON.stringify(data.data.access));
        if (data.data.message === "Successful") {
          navigate("/create-company")
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }

  const handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault()
    setotpsend({
      ...otpsend,
      [e.target.name]: value
    });
  };
  const SubmitData = () => {
    if(otpsend.otp !== '4444'){
      alert('Please enter valid opt')
    }
    else{
       Fetching()
    }
   
    
  }
  return (
    <>


      {/*  /////////////////////////////////////////////////////*/}

      <div className='row'>
        <div className='col-2'> <img src='assets/images/logo.png' id='signuptree' /></div>

        <div className='col-6 conatiner'>
          <h1 className='mt-5 pt-5'>Log in With OTP</h1>
         

            <input className="userInput form-control" name="otp" type="text" placeholder="Enter The OTP" onChange={handleChange} value={otpsend.otp || ""} />
            <button onClick={SubmitData} className="btn btn-dark"> Login with OTP</button>
         
          <p>Don't have account ?<Link to="/signup">Signup</Link></p>
          <Link to="/create-company">Create Company</Link>
        </div>

        <div className='col-4'>
          <div>
            <img src='assets/images/bg_6.jpg' id='bg' /></div>
        </div>
      </div >

    </>
  )
}

export default Login;