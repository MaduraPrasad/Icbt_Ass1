import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
// import './css/landingPage.css';
import '../components/componentStyle/userConsultantList.css';
import Footer from '../components/Footer';
import ConsultantList from "../components/ConsultantList";

const UserConsultantList = () => {
  const [consultants, setConsultants] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllconsultantsForUsers",

        // {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
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
      <section className="section">
        <div className="container">
          {consultants && consultants.map((consultant) => <ConsultantList consultant={consultant} />)}
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default UserConsultantList;
