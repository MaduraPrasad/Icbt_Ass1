import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Column from "antd/lib/table/Column";
import './css/jobSeekerLogin.css';
import image3 from '../assets/consultant.jpg';

const JobSeekerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/jobseeker/jbs-login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token_JobSeeker", res.data.token_JobSeeker);
        message.success("Login Successfully");
        navigate("/jbs-dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div>
      <section className="login-section">
      <div className="login-container">
        <div className="image-column">
          <img src={image3} alt="Login Image" />
        </div>
        <div className="form-column">
        <div className="form-container ">
            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              className="register-form"
            >
              <h3 className="text-center">Job Seeker Login</h3>

              <Form.Item name="email">
                <Input type="email" required placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input type="password" required placeholder="Password"/>
              </Form.Item>
              <Link to="/jbs-register" className="m-2">
                Register here
              </Link><br/>
              <button className="btnlogin btn-primary" type="submit">
                Login
              </button>
              
              
            </Form>
          </div>
        </div>
      </div>
    </section>
      {/* <section className="card-section">
        <div className="column-right">
        </div>
        <div className="column-left">
          
        </div>
      </section> */}
    </div>

  );
};

export default JobSeekerLogin;
