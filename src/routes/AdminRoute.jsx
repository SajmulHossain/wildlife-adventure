import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
  const { admin, user, loading} = useContext(AuthContext);
   if(loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && admin) {
    return children;
  }

  return <Navigate to='/' replace={true} />
};

export default AdminRoute;