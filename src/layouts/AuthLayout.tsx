import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="relative min-h-[500px] w-[50%] min-w-[300px]">
        <div className="flex justify-between my-[30px]">
          <button onClick={() => navigate("/")}>Home</button>
          <button
            onClick={() => navigate("/auth/login")}
            className={`${
              pathname === "/auth/login" ? "text-primary" : "text-black"
            }`}>
            Login
          </button>
          <button
            onClick={() => navigate("/auth/register")}
            className={`${
              pathname === "/auth/register" ? "text-primary" : "text-black"
            }`}>
            Register
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
