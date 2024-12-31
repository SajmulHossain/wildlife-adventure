import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && user.email) {
    return children;
  }

  return (
    <Navigate state={location.pathname} replace={true} to="/login"></Navigate>
  );
};

export default PrivetRoute;
