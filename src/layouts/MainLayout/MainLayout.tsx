import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-zinc-900 text-white flex flex-col h-screen">
      {/* <MainNavbar /> */}
      <div>PLACE FOR THE NAV BAR</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
