import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <>
            <img src="assets/images/bg_1.jpg" className="img-fluid" id='img' />
            <img src="assets/images/b_4.jpg" className="img-fluid" id='img' />

            <div className='row' id='conatiner'>
                <div className='col-12'>
                    <div className="navbar navbar-expand-lg navbar-light bg-light mt-5 w-90" id='nav' style={{ position: 'fixed' }}>
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="#" id='linktree'><img src='assets/images/logo.png' id='imglogo' /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Marketplace</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Discover</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Learn</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="nav-item" href="#">Marketplace</a></li>

                                        </ul>
                                    </li>

                                </ul>

                                <button className="btn btn-outline-success" type="submit" id='login-btn' ><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login </Link></button>
                                <button className="btn btn-outline-success" type="submit" id='signup-btn'><Link to="/signup" style={{ textDecoration: 'none', color: '#ffff' }}>Sign up free</Link></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row'>              
                    <div className='container-flude1 col-lg-6 col-sm-12 col-xl-6 col-12 ' content="width=device-width, initial-scale=1" style={{border: '2px solid red'}}>
                    
                        <p id='p1' className='' content="width=device-width, initial-scale=1"> Everything <br />you are. In<br/> one simple<br/> link.</p>
                        <h6 style={{ color: "yellow" }} id="content">Join 30M people and share everything you create, curate <br />and sell online all from the all link in bio.</h6>
                        <input type='text' id='input' placeholder="Linktree/YourName" />
                        <button className='btn-primary'>Claim your Linktree</button>
                
                </div>
            </div>


                

                    <div className='container col-lg-12 col-sm-10 col-12' content="width=device-width, initial-scale=1" style={{border: '2px solid red'}}>
                      
                            <p style={{ color: "green" }} id="cont">Create and customize<br /> your bio link in <br />minutes.</p>
                            <p id='text1'>Connect your social, website, stroe, video, music, podcast,<br />
                               0 event and more. it all comes togather in a link in bio<br />
                                landing page designed to convert.
                            </p>
                            <button className='btn btn-secondary'>Get started for free</button>                       
                    </div>            

        </>
    )
}
