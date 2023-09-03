import React from "react";
import { Link } from 'react-router-dom';
import './componentStyle/navbar.css';
import logo from '../assets/logo2.jpg';
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";


const Navbar2 = () => {

    const { user } = useSelector((state) => state.user);
    const auth = localStorage.getItem('token');

    //logout function
    const handleLogout = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        Navigate("/");
    };
    return (
        <div>

            {

                auth ?
                    <nav class="navbar">
                        <div>
                            <img src={logo} alt="Image" className="logo" />
                        </div>
                        <ul class="nav-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/job-seeker-info">Job Seeker</a></li>
                            <li><a href="/consultant-info">Consultant</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/" onClick={handleLogout}>Sign out</a></li>
                            <li className="user"><a href="#">{user?.name}</a></li>
                        </ul>
                    </nav>
                    :
                    <nav class="navbar">
                        <div>
                            <img src={logo} alt="Image" className="logo" />
                        </div>
                        <ul class="nav-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/job-seeker-info">Job Seeker</a></li>
                            <li><a href="/consultant-info">Consultant</a></li>
                            <li><a href="/contact">Contact</a></li>

                        </ul>
                    </nav>
            }
        </div>


        //#00587c
        // <nav className="navbar">
        //   <div className="nav-container">
        //     <img src={logo} alt="Image" className="logo"/>
        //     <Link to="/" className="nav-logo">
        //       The Job
        //     </Link>
        //     <ul className="nav-menu">
        //       <li className="nav-item">
        //         <Link to="/" className="nav-link">
        //           Home
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link to="/services" className="nav-link">
        //           Services
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link to="/" className="nav-link">
        //           Contact Us
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link to="/about" className="nav-link">
        //           About Us
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link to="/login" className="nav-link">
        //           Consultants
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link to="/jobseeker-login" className="nav-link">
        //           Job Seekers
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
    );
};

export default Navbar2;
