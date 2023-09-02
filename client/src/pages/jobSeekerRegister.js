import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/jobSeekerInfo.css';
import image1 from '../assets/job2.jpg';
import image2 from '../assets/banner3.png';
import image3 from '../assets/consultant.jpg';
import Footer from '../components/Footer';
import { Button } from "antd";

class JobSeekerInfo extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <section className="image-section">
                    <div className="image-overlay">
                        <p className="section-description">
                            ARE YOU LOOKING FOR A JOB ?
                        </p>
                        <Link to="/jbs-dashboard">
                        <Button className="btn-2">Get The Free Consultation</Button>
                        </Link>
                        
                    </div>
                </section>
                {/* <div className="image-banner">
                    <img
                        src={image1}
                        alt="Banner"
                        className="banner-image"
                    />
                    <p className="looking-for-job">LOOKING FOR A JOB ?</p>
                </div> */}

                <section className="section">
                    <div className="container">
                        <div className="column" id="column-right">
                            <p className="title">The Best Consultants</p>
                            <p className="sub-title">"Guiding Dreams, Bridging Borders"</p>
                            <p>
                                At The Jobs Consultation Centre in Colombo, we are proud to house a team of dedicated and experienced job consultants who play a pivotal role in guiding and empowering job seekers on their journey towards international job opportunities. Our consultants possess specialized expertise in various countries and job sectors, ensuring that our clients receive tailored advice that aligns with their unique aspirations.
                            </p>
                        </div>
                        <div className="column" id="landingPageImage">

                            <img src={image3} alt="Image" className="banner" />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
export default JobSeekerInfo;
