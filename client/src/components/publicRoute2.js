import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute2({ children }) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/jbs-dashboard" />;
  } else {
    return children;
  }
}
