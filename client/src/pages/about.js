import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/landingPage.css';
import image1 from '../assets/group2.jpg';
import Footer from '../components/Footer';
import './css/about.css'

class About extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <div className="section">
                    <div className="title-services">
                        <p>Company Overview</p>
                    </div>
                    <div className="details">
                        <p>At The Job, we are your trusted partner in navigating the ever-evolving job market. Founded in 1999, our company has been a beacon of opportunity, connecting talented job seekers with employers seeking exceptional talent. With our headquarters located in Colombo, we are strategically positioned to serve both local and global clientele.</p>
                    </div>

                    <div className="title-services">
                        <p>Mission and Vision</p>
                    </div>
                    <div className="sub-title-services">
                        <p>Mission</p>
                    </div>
                    <div className="details">
                        <p>At TheJob, our mission is to empower job seekers by providing them with the tools, knowledge, and support they need to secure their dream careers. We believe that every individual deserves the opportunity to thrive professionally, and we are committed to making that vision a reality.</p>
                    </div>
                    <div className="sub-title-services">
                        <p>Vision</p>
                    </div>
                    <div className="details">
                        <p>Our long-term vision is to become the go-to destination for job seekers and employers alike, fostering mutually beneficial connections that drive success. We aim to reshape the job consultancy landscape by consistently delivering exceptional value and insight.</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
export default About;
