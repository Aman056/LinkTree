import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CreateCompany = () => {
    const[loader, setloader] = useState(false)
    const navigate = useNavigate()

    const [data, setdata] = useState({ password: '', schema_name: '', company_name: '' });

    const access = sessionStorage.getItem('access');

    const Fetching = async () => {
        setloader(true)
        console.log(access, 'get.inner.........')
        const datasend = {
            password: data.password,
            schema_name: data.schema_name,
            company_name: data.company_name
        };
        const config = {
            headers: {
                // 'Authorization': 'Bearer'
            }
        }
        let varTry = access
        var regex = /"/g;
        let variable = varTry?.replace(regex, " ")


        await axios.post("https://bookeve.in/company/createcompany/", datasend, { headers: { 'Authorization': `Bearer ${variable}` } })
            .then((res) => {
                console.log(res.data)
                if (res.data.info === 'Successfully signed-up') {
                    navigate('/dashboard')
                    setloader(false)
                }
            })

            .catch((err) => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const value = (e.target.value)
        setdata({
            ...data,
            [e.target.name]: value
        });
    };
    const SubmitData = () => {

         if (   !data.password || !data.schema_name || !data.company_name) {
            alert("All feald requaird");
            return false;
        }
        else{
               Fetching()
        }

    }
    return (
        <>
        


                <div className='row'>
                <div className='col-lg-2 col-sm-12 col-md-2 col-12'> <img src='assets/images/logo.png' id='signuptree' /></div>
            </div>
            <div className='row'>
               
                <div className='col-md-6 offset-md-3 text-center col-md-6 offset-md-3 p-5'>
                    <h1 className='pt-1'>Create Company</h1>

                    <input
                        className='form-control my-4'
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={data.password}
                    />
                    <input
                        className='form-control my-4'
                        name="schema_name"
                        type="text"
                        placeholder="Schema Name"
                        onChange={handleChange}
                        value={data.schema_name}
                    />
                    <input
                        className='form-control my-4'
                        name="company_name"
                        type="text"
                        placeholder="Company Name"
                        onChange={handleChange}
                        value={data.company_name}
                    />
                    <button className="btn btn-dark" onClick={SubmitData}> Submit </button>

                    <p>Don't have account ?<Link to="/signup">Signup</Link></p>
                </div>
            </div >
       

        </>
    )
}
export default CreateCompany;