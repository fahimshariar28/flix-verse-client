import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingSvg from "../assets/loading.svg";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={loadingSvg} alt="loading" />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
