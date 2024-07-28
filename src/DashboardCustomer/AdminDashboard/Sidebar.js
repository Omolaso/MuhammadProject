import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  //   BsFillGrid3X3GapFill,
  BsPeopleFill,
  //   BsListCheck,
  BsMenuButtonWideFill,
  //   BsFillGearFill,
  BsArrowBarLeft,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, CloseSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const handleEventListener = () => {
      window.addEventListener("resize", CloseSidebar);
      window.addEventListener("scroll", CloseSidebar);
    };

    handleEventListener();

    return () => {
      window.removeEventListener("resize", CloseSidebar);
      window.removeEventListener("scroll", CloseSidebar);
    };
  }, [CloseSidebar]);

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <button
          type="button"
          className="icon close_icon block lg:hidden"
          onClick={() => CloseSidebar()}
        >
          X
        </button>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/Admin" onClick={() => CloseSidebar()}>
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Admin/Products" onClick={() => CloseSidebar()}>
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        {/* <li className='sidebar-list-item'>
                <Link to="/Admin">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </Link>
            </li> */}
        {/* <li className="sidebar-list-item">
          <Link to="/Admin">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li> */}
        {/* <li className='sidebar-list-item'>
                <Link to="/Admin">
                    <BsListCheck className='icon'/> Inventory
                </Link>
            </li> */}
        <li className="sidebar-list-item">
          <Link to="/Admin/Reports" onClick={() => CloseSidebar()}>
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Admin/Users" onClick={() => CloseSidebar()}>
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>

        <li className="sidebar-list-item">
          <button
            onClick={() => handleLogout()}
            className="flex flex-row items-center w-full"
          >
            <BsArrowBarLeft className="icon" /> Logout
          </button>
        </li>
        {/* <li className='sidebar-list-item'>
                <Link to="/Admin">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;
