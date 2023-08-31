import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import './css/consultantInfo.css';
import image1 from '../assets/IIT.jpg';
import image2 from '../assets/banner3.png';
import image3 from '../assets/consultant.jpg';
import Footer from '../components/Footer';

class ConsultantInfo extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <div className="image-banner">
                    <img
                        src={image1}
                        alt="Banner"
                        className="banner-image"
                    />
                </div>

                <section className="section">
                    <div className="container">
                        <div className="column" id="column-right">
                            <p className="title">The Best Consultants</p>
                            <p className="sub-title">"Guiding Dreams, Bridging Borders"</p>
                            <p>
                                At The Jobs Consultation Centre in Colombo, we are proud to house a team of dedicated and experienced job consultants who play a pivotal role in guiding and empowering job seekers on their journey towards international job opportunities. Our consultants possess specialized expertise in various countries and job sectors, ensuring that our clients receive tailored advice that aligns with their unique aspirations.
                            </p>
                            <Link to="/user-consultant-list">
                                <button className="btn">Find Our Consultant</button>
                            </Link>

                        </div>
                        <div className="column" id="landingPageImage">

                            <img src={image2} alt="Image" className="banner" />
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="column" id="landingPageImage">

                            <img src={image3} alt="Image" className="banner" />
                        </div>

                        <div className="column" id="column-right">
                            <p className="title">Want To Join As a Consultant</p>
                            <p className="sub-title">"Guiding Dreams, Bridging Borders"</p>
                            <p>
                                Embark on a rewarding journey with us at The Jobs Consultation Centre in Colombo! We invite passionate and knowledgeable professionals to join our esteemed team as consultants. As a consultant, you will play a crucial role in guiding job seekers who are aspiring to explore international job opportunities. Your specialized expertise in specific countries and job sectors will empower our clients to make well-informed decisions about their career paths.
                                At The Jobs Consultation Centre, we value dedication and a commitment to excellence.</p>
                            <Link to="/login">
                                <button className="btn">JOIN WITH US</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default ConsultantInfo;
