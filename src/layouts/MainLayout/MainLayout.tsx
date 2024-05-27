import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className=" h-screen w-screen text-white bg-zinc-800">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
