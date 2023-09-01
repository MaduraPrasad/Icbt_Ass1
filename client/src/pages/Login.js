import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './css/login.css';
import image3 from "../assets/login1.jpg";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/home");
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
                  <h3 className="text-center">USER LOGIN</h3>

                  <Form.Item name="email">
                    <Input type="email" required placeholder="Email" className="userlogin" />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input type="password" required placeholder="Password" className="userlogin" />
                  </Form.Item>
                  <Link to="/register" className="m-2">
                    Register here
                  </Link><br />
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
    </div>
  );
};

export default Login;
