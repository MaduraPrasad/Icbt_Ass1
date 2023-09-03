import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
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
