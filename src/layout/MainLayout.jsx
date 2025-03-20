import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";

function MainLayout() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="flex flex-col grow overflow-y-auto">
        <Navbar />
        <div className="p-4 bg-lightGray h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
