import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar2";
import './css/landingPage.css';
import image1 from '../assets/group2.jpg';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import ConsultantList from "../components/ConsultantList";


const JobSeekerDashboard = () => {
    const [consultants, setConsultants] = useState([]);
    // login user data
    const getUserData = async () => {
      try {
        const res = await axios.get(
          "/api/v1/user/getAllConsultants",
  
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (res.data.success) {
          setConsultants(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUserData();
    }, []);
    return (
      <div>
        <Navbar />
        <div className="container">
        <h1 className="text-center">Currently Avilable Counsultants.</h1>
        <Row>
          {consultants && consultants.map((consultant) => <ConsultantList consultant={consultant} />)}
        </Row>
        </div>
            
        <Footer />
      </div>
        
      
    );
  };
  export default JobSeekerDashboard;
// class JobSeekerDashboard extends Component {

//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <section className="section">
//                     <div className="container">
//                         <div className="column" id="landingPageImage">

//                             <img src={image1} alt="Image" className="banner" />
//                         </div>

//                         <div className="column" id="column-right">
//                             <p className="title">THE JOB</p>
//                             <p className="sub-title">"Guiding Dreams, Bridging Borders"</p>
//                             <p>
//                             Welcome to The Jobs Consultation Centre, your premier destination for expert guidance and consultation in Colombo. We pride ourselves on being a trailblazing force in the realm of job consultation, offering unparalleled services that empower job seekers who are aspiring to embark on international job opportunities.
//                             </p>
//                             <button className="btn">Find About Us More</button>
//                         </div>
//                     </div>
//                 </section>
//                 <Footer />
//             </div>
//         );
//     }
// }
// export default JobSeekerDashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "./../components/Layout";
// import { Row } from "antd";
// import ConsultantList from "../components/ConsultantList";
// import Navbar from "../components/navbar";
// import './css/landingPage.css';
// import image1 from '../assets/group2.jpg';
// import Footer from '../components/Footer';


// const JobSeekerDashboard = () => {
//     const [consultants, setConsultants] = useState([]);
//     // login user data
//     const getUserData = async () => {
//         try {
//             const res = await axios.get(
//                 "/api/v1/jobseeker/getAllConsultants",

//                 {
//                     headers: {
//                         Authorization: "Bearer " + localStorage.getItem("token"),
//                     },
//                 }
//             );
//             if (res.data.success) {
//                 setConsultants(res.data.data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getUserData();
//     }, []);
//     return (
//         <div>
//             <Navbar />
//             <Layout>
//                 <h1 className="text-center">Currently Registered Counsultants.</h1>
//                 <Row>
//                     {consultants && consultants.map((consultant) => <ConsultantList consultant={consultant} />)}
//                 </Row>
//             </Layout>
//             <Footer />
//         </div>
//     );
// };

// export default JobSeekerDashboard;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/navbar2";
// import './css/landingPage.css';
// import image1 from '../assets/group2.jpg';
// import Footer from '../components/Footer';
// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { DatePicker, message, TimePicker } from "antd";
// import moment from "moment";
// import { useDispatch, useSelector } from "react-redux";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
// import './css/booking.css';

// const BookingPage = () => {
//   const { user } = useSelector((state) => state.user);
//   const params = useParams();
//   const [consultants, setConsultants] = useState([]);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState();
//   const [isAvailable, setIsAvailable] = useState(false);
//   const dispatch = useDispatch();
//   login user data
//   const getUserData = async () => {
//     try {
//       const res = await axios.post(
//         "/api/v1/consultant/getConsultantById",
//         { consultantId: params.consultantId },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         setConsultants(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   ============ handle availiblity
//   const handleAvailability = async () => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post(
//         "/api/v1/user/booking-availbility",
//         { consultantId: params.consultantId, date, time },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         setIsAvailable(true);
//         console.log(isAvailable);
//         message.success(res.data.message);
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//     }
//   };
//   =============== booking func
//   const handleBooking = async () => {
//     try {
//       setIsAvailable(true);
//       if (!date && !time) {
//         return alert("Date & Time Required");
//       }
//       dispatch(showLoading());
//       const res = await axios.post(
//         "/api/v1/user/book-appointment",
//         {
//           consultantId: params.consultantId,
//           userId: user._id,
//           consultantInfo: consultants,
//           userInfo: user,
//           date: date,
//           time: time,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//     eslint-disable-next-line
//   }, []);
//   return (
// <div>
//     <Navbar />
//   <h3>Scheduling</h3>
//   <div className="container m-2 scheduling-container">
//     {consultants && (
//       <div className="row">
//         <div className="col-md-6">
//           <div className="consultant-details">
//             <h4>
//               Mr/Mrs.{consultants.firstName} {consultants.lastName}
//             </h4>
//             <h4>Fees: {consultants.feesPerCunsaltation}</h4>
//             <h4>
//               Timings: {consultants.timings && consultants.timings[0]} -{" "}
//               {consultants.timings && consultants.timings[1]}{" "}
//             </h4>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="d-flex flex-column availability-form">
//             <div className="row">
//               <div className="col-md-12">
//                 <DatePicker
//                   aria-required="true"
//                   className="m-2"
//                   format="DD-MM-YYYY"
//                   onChange={(value) => {
//                     setDate(moment(value).format("DD-MM-YYYY"));
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-12">
//                 <TimePicker
//                   aria-required="true"
//                   format="HH:mm"
//                   className="mt-3"
//                   onChange={(value) => {
//                     setTime(moment(value).format("HH:mm"));
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-6">
//                 <button className="btn btn-primary mt-2" onClick={handleAvailability}>
//                   Check Availability
//                 </button>
//               </div>
//               <div className="col-md-6">
//                 <button className="btn btn-dark mt-2" onClick={handleBooking}>
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
  
//   </div>
  
// /* </Layout> */

//   );
// };

// export default BookingPage;
