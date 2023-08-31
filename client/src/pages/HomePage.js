import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import ConsultantList from "../components/ConsultantList";
const HomePage = () => {
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
    <Layout>
      <h1 className="text-center">Currently Registered Counsultants.</h1>
      <Row>
        {consultants && consultants.map((consultant) => <ConsultantList consultant={consultant} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
