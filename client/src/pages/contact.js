import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/contact.css';
import image1 from '../assets/contact2.jpg';
import Footer from '../components/Footer';

class Contact extends Component {
    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="container">
                        <div className="column" id="column-contact-left">

                            <img src={image1} alt="Image" className="banner" />
                        </div>

                        <div className="column" id="column-right">
                            <div className="row-contact">
                                
                                <div className="column-contact-text">
                                <i class="fa-solid fa-globe"></i><label>www.TheJob.com</label>
                                </div>
                            </div>
                            <div className="row-contact">
                                
                                <div className="column-contact-text">
                                <i className="fa-solid fa-envelope"></i><label>thejob@gmail.com</label>
                                </div>
                            </div>
                            <div className="row-contact">
                                
                                <div className="column-contact-text">
                                <i className="fa-solid fa-phone"></i><label>0112568545 / 0779568256</label>
                                </div>
                            </div>
                            <div className="row-contact">
                               
                                <div className="column-contact-text">
                                <i className="fa-solid fa-location-dot"></i><label>Head Office : No 52, Galle Road</label><br />
                                    
                                </div>
                            </div>
                            <div className="row-contact">
                                
                                <div className="column-contact-text">
                                <i className="fa-solid fa-location-arrow"></i><label>Branches : No 70, Athurugiriya Road</label><br />
                                   
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
export default Contact;
