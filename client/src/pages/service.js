import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/landingPage.css';
import image1 from '../assets/group2.jpg';
import Footer from '../components/Footer';
import './css/services.css'

class Services extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <div className="title-services">
                    <p>OUR SERVICES</p>
                </div>
                <div className="details">
                    <p>At THE JOB, we are dedicated to providing a comprehensive range of services designed to connect job seekers with their dream careers and assist businesses in finding top talent. Our online job consulting agency offers a plethora of solutions tailored to meet the diverse needs of our clients. From job placement and resume optimization to interview coaching and talent acquisition for employers, we've got you covered. Our experienced team of professionals leverages cutting-edge technology and industry expertise to streamline the recruitment process, ensuring the perfect match between candidates and employers. Whether you're a job seeker looking for the next big opportunity or an organization seeking the best talent, THE JOB is your trusted partner in achieving your career and hiring goals.</p>
                </div>
                <section className="section-services">
                    <div className="container-services">
                        <div className="row">
                            <div className="column-services">
                                <div className="row-icon">
                                <i class="fa-solid fa-street-view"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">Best Consultants</p>
                                </div>
                            </div>
                            <div className="column-services">
                                <div className="row-icon">
                                <i class="fa-regular fa-handshake"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">Contract Jobs</p>
                                </div>
                            </div>
                            <div className="column-services">
                                <div className="row-icon">
                                <i class="fa-brands fa-guilded"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">Career Guidance</p>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="column-services">
                                <div className="row-icon">
                                <i class="fa-solid fa-users"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">General Staffing</p>
                                </div>
                            </div>
                            <div className="column-services">
                                <div className="row-icon">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">Overseas Jobs</p>
                                </div>
                            </div>
                            <div className="column-services">
                                <div className="row-icon">
                                <i class="fa-solid fa-landmark"></i>
                                </div>
                                <div className="row-desc">
                                   <p className="desc">Job Placements</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Services;
