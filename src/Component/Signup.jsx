import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();
  const [signupData, setsignupData] = useState({ name: "", phone_number: "", password: "", confirm_password: "", otp_fetching_metching: '' })
  const Fetching = () => {
    const data = {
      name: signupData.name,
      phone_number: signupData.phone_number,
      password: signupData.password,
      confirm_password: signupData.confirm_password,
      otp_fetching_metching: signupData.otp_fetching_metching
    };
    fetch("https://bookeve.in/appuser/tenantusersignup/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.info === 'Successfully signed-up') {
          localStorage.setItem('user_id', JSON.stringify(data.user_id));
          navigate("/login")

        }
        else {
          navigate("/signup")
        }
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    e.preventDefault()
    setsignupData({
      ...signupData,
      [e.target.name]: value
    });
  };

  const SubmitData = () => {
    if(signupData.password !== signupData.confirm_password){
      alert('Please Enter the correct password')
    }
    else{
    Fetching()
    }

    if (!signupData.name || !signupData.password || !signupData.confirm_password || !signupData.otp_fetching_metching) {
      alert("All feald requaird");
      return false;
    }
  }

  return (
    <>
      <div className='row'>       
        <div className='col-2'> <img src='assets/images/logo.png' id='signuptree' /></div>
        
        <div className='col-6 conatiner'>

        <h1>Create your account</h1>
        <p>Choose your Linktree username. You can always change it leter.</p>
    
            <div className="mb-3">
              <input name="name" type="text" className="form-control" required placeholder="name" onChange={handleChange} value={signupData.name} />
            </div>

            <div className="mb-3">
              <input name="phone_number" type="text" className="form-control" required placeholder="phone_number" onChange={handleChange} value={signupData.phone_number} />
            </div>

            <div className="mb-3">
              <input name="password" type="text" className="form-control" placeholder="password" onChange={handleChange} value={signupData.password} />
            </div>

            <div className="mb-3">
              <input name="confirm_password" type="text" className="form-control" placeholder="confirm_password" onChange={handleChange} value={signupData.confirm_password} />
            </div>

            <div className="mb-3">
              <input className="userInput form-control" name="otp_fetching_metching" type="text" placeholder="otp_fetching_metching" onChange={handleChange} value={signupData.otp_fetching_metching} />
            </div>
            
  
            <p><input class="form-check-input p-1 mx-1" type="checkbox" value="" id="flexCheckDefault"/>By clicking Create account, you agree to Linktree's Term and conditions, confirm you
              have read our Privacy Notice. You may recive  offer, news and updates from us.
            </p>

            <button className='btn btn-warning' onClick={SubmitData}> Create account</button>
            <center><p>Already have a account? <Link to="/login"> Log in</Link></p></center>
         

        </div>
        <div className='col-4'>
          <div>
            <img src='assets/images/bg_6.jpg' id='bg' /></div>
        </div>
      </div>





    </>
  )
}
