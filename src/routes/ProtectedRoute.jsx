import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children ,admin,}) => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" replace />;
  }
   if(admin&&user.role!=="admin"){
    return <Navigate to="/"/>
   }
  return children;
};

export default ProtectedRoute;