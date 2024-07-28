import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Admin.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(true);
  };

  const CloseSidebar = () => {
    setOpenSidebarToggle(false);
  };

  return (
    <div className="grid-container bg-[#1d2634]">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        CloseSidebar={CloseSidebar}
      />
      <Outlet />
    </div>
  );
}

export default Admin;
