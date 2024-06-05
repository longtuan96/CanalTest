import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div className="main-layout h-screen w-screen bg-zinc-800 text-white ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
