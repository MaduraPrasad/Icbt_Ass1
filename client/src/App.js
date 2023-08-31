import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyConsultant";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Consultant from "./pages/admin/Consultant";
import Profile from "./pages/consultant/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
// import DoctorAppointments from "./pages/consultant/DoctorAppointments";
import ConsultantAppointments from "./pages/consultant/ConsultantAppointments";
import JobSeekerLogin from "./pages/JobSeekersLogin";
import Landing from "./pages/landing";
import ConsultantInfo from "./pages/consultantInfo";
import UserConsultantList from "./pages/userconsultantList";
import JobSeekerInfo from "./pages/jobSeekerInfo";
import JobSeekerRegister from "./pages/jobSeekerRegister";
import JobSeekerDashboard from "./pages/jobSeekerDashboard";
import ProtectedRouteJobseeker from "./components/ProtectedRouteJobseeker";



function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          
          <Routes>
            <Route
              path="/"
              element={
                  <Landing />
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/consultant-info"
              element={
                <PublicRoute>
                  <ConsultantInfo />
                </PublicRoute>
              }
            />
            <Route
              path="/job-seeker-info"
              element={
                <PublicRoute>
                  <JobSeekerInfo />
                </PublicRoute>
              }
            />
            <Route
              path="/user-consultant-list"
              element={
                
                  <UserConsultantList />
                
              }
            />
            <Route
              path="/apply-consultant"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/consultant"
              element={
                <ProtectedRoute>
                  <Consultant />
                </ProtectedRoute>
              }
            />
            <Route
              path="/consultant/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/consultant/book-appointment/:consultantId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/jbs-login"
              element={
                <PublicRoute>
                  <JobSeekerLogin />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/jbs-register"
              element={
                <PublicRoute>
                  <JobSeekerRegister />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jbs-dashboard"
              element={
                <ProtectedRouteJobseeker>
                  <JobSeekerDashboard />
                </ProtectedRouteJobseeker>
              }
            />
            <Route
              path="/consultant-appointments"
              element={
                <ProtectedRoute>
                  <ConsultantAppointments />
                </ProtectedRoute>
              }
            />
            
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
