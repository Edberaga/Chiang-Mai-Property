import { Outlet, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import checkAuthStatus from "../hooks/checkAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = checkAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}