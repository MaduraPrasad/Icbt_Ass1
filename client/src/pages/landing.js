import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/landingPage.css';
import image1 from '../assets/group2.jpg';
import Footer from '../components/Footer';

class Landing extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="container">
                        <div className="column" id="landingPageImage">
                            
                            <img src={image1} alt="Image" className="banner" />
                        </div>
                        
                        <div className="column" id="column-right">
                            <p className="title">THE JOB</p>
                            <p className="sub-title">"Guiding Dreams, Bridging Borders"</p>
                            <p>
                            Welcome to The Jobs Consultation Centre, your premier destination for expert guidance and consultation in Colombo. We pride ourselves on being a trailblazing force in the realm of job consultation, offering unparalleled services that empower job seekers who are aspiring to embark on international job opportunities.
                            </p>
                            <button className="btn">Find About Us More</button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Landing;
