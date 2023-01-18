import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <>
            <img src='assets/images/bg_1.jpg' id="img" />
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

            <div className='container-flude'>
                <p className='p1'> Everything <br />you are. In<br /> one simple<br /> link.</p>
                <div >
                <p >Join 30M people and share everything <br/>you create, curate
                and sell online all from <br/> the all link in bio.</p>
                <input type='text' id='input' placeholder="Linktree/YourName" />
                <button className='btn-primary'>Claim your Linktree</button>
                </div>
            </div>

            {/* <div className='container-flude1'>
                <h6 style={{ color: "yellow" }} id="content">Join 30M people and share everything you create, curate <br />and sell online all from the all link in bio.</h6>
                <input type='text' id='input' placeholder="Linktree/YourName" />

                <button className='btn-primary'>Claim your Linktree</button>
            </div> */}

            <img src='assets/images/b_4.jpg' id="img" />

           

                <div className='container-flude3'>
                    <p id="cont">Create and customize<br /> your bio link in <br />minutes.</p>
                    <p id='text1'>Connect your social, website, stroe, video, music, podcast,<br />
                        event and more. it all comes togather in a link in bio<br />
                        landing page designed to convert.
                    </p>
                    <button className='btn btn-secondary'>Get started for free</button>
                {/* </div> */}
            </div>
        </>
    )
}
