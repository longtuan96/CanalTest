import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-zinc-800 text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
