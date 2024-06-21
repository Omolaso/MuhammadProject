import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loginID = sessionStorage.getItem("loginID");

  if (!loginID) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
