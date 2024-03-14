import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
