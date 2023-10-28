/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-20 mx-auto font-bold text-5xl">
        Loading ....
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to={`/login`}
      replace
      state={location.pathname}
    />
  );
};

export default PrivateRoute;
