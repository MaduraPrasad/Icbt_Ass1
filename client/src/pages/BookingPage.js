import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import './css/booking.css';

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [consultants, setConsultants] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/consultant/getConsultantById",
        { consultantId: params.consultantId },
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
  // ============ handle availiblity
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { consultantId: params.consultantId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          consultantId: params.consultantId,
          userId: user._id,
          consultantInfo: consultants,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    // <Layout>
    //   <h3>Shedulling</h3>
    //   <div className="container m-2">
    //     {consultants && (
    //       <div>
    //         <h4>
    //           Mr/Mrs.{consultants.firstName} {consultants.lastName}
    //         </h4>
    //         <h4>Fees : {consultants.feesPerCunsaltation}</h4>
    //         <h4>
    //           Timings : {consultants.timings && consultants.timings[0]} -{" "}
    //           {consultants.timings && consultants.timings[1]}{" "}
    //         </h4>
    //         <div className="d-flex flex-column w-50">
    //           <DatePicker
    //             aria-required={"true"}
    //             className="m-2"
    //             format="DD-MM-YYYY"
    //             onChange={(value) => {
    //               setDate(moment(value).format("DD-MM-YYYY"));
    //             }}
    //           />
    //           <TimePicker
    //             aria-required={"true"}
    //             format="HH:mm"
    //             className="mt-3"
    //             onChange={(value) => {
    //               setTime(moment(value).format("HH:mm"));
    //             }}
    //           />

    //           <button
    //             className="btn btn-primary mt-2"
    //             onClick={handleAvailability}
    //           >
    //             Check Availability
    //           </button>

    //           <button className="btn btn-dark mt-2" onClick={handleBooking}>
    //             Book Now
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </Layout>
    <Layout>
      <p className="titleBooking">Schedule your Time Slot </p>
      <div className="container-booking">
        {consultants && (
          <div className="row">
            <div className="col-left">
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>Name</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.firstName} {consultants.lastName}
                </div>
              </div>
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>Website</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.website}
                </div>
              </div>
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>E-mail</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.email}
                </div>
              </div>
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>Specialization</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.specialization}
                </div>
              </div>
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>Address</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.address}
                </div>
              </div>
              <div className="row-consultant-fields">
                <div className="col-consultant-fields-left">
                  <label>Phone</label>
                </div>
                <div className="col-consultant-fields-right">
                  {consultants.phone}
                </div>
              </div>
              {/* <div className="consultant-details">
            <p className="consultant-fields">
              Mr/Mrs.{consultants.firstName} {consultants.lastName}
            </p>
            <p className="consultant-fields">
              website:{consultants.website}
            </p>
            <p className="consultant-fields">
              Email:{consultants.email}
            </p>
            <p className="consultant-fields">
              specialization:{consultants.specialization}
            </p>
            <p className="consultant-fields">
              Timings: {consultants.timings && consultants.timings[0]} -{" "}
              {consultants.timings && consultants.timings[1]}{" "}
            </p>
          </div> */}
            </div>
            <div className="col-right">
              <div className="d-flex flex-column availability-form">
                <div className="row">
                  <div className="col-md-12">
                    <DatePicker
                      aria-required="true"
                      className="datepicker"
                      format="DD-MM-YYYY"
                      onChange={(value) => {
                        setDate(moment(value).format("DD-MM-YYYY"));
                      }}
                    />
                  </div>
                </div>
                <div className="row" id="timepicker-bottom">
                  <div className="col-md-12">
                    <TimePicker
                      aria-required="true"
                      format="HH:mm"
                      className="timepicker"
                      onChange={(value) => {
                        setTime(moment(value).format("HH:mm"));
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-btn-left">
                    <button className="btn-available" onClick={handleAvailability}>
                      Check Availability
                    </button>
                  </div>
                  <div className="col-btn-right">
                    <button className="btn-book" onClick={handleBooking}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>

  );
};

export default BookingPage;
