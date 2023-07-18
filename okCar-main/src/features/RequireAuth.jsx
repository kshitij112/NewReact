import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  console.log(allowedRoles,'alloweroles');
  const location = useLocation();
  const username = localStorage.getItem("userInfo");

  const role = JSON.parse(username)?.roles;
console.log(role[0],'roles')
  const userTrue = username == null;

  const content =  userTrue ? (
    <Navigate to="/access" state={{ from: location }} replace />
  ) :allowedRoles.includes(role[0]) ? (
    <Outlet />
  ) : (
    <Navigate to="/access" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
