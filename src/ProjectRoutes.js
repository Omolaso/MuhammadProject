import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blogs/Blog";
import Contact from "./Pages/Contact/Contact";
import Category from "./Pages/Category/Category";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/Register/Register";
import CustomerDashboard from "./DashboardCustomer/CustomerDashboard/CustomerDashboard";
import Vendor from "./DashboardCustomer/Components/Vendor";
import Admin from "./DashboardCustomer/AdminDashboard/Admin";
import AdminProducts from "./DashboardCustomer/AdminProducts/Products";
import AdminReports from "./DashboardCustomer/AdminReports/AdminReports";
import NotFound from "./Pages/NotFound/NotFound";
import AdminHome from "./DashboardCustomer/AdminDashboard/AdminHome";
import AdminUsers from "./DashboardCustomer/AdminUsers/AdminUsers";
import ProtectedRoute from "./components/ProtectedRoute";
import MobilePhones from "./Pages/Category/SubCategory/MobilePhones";
import GPU from "./Pages/Category/SubCategory/GPU";
import GraphicCard from "./Pages/Category/SubCategory/GraphicCard";
import Laptops from "./Pages/Category/SubCategory/Laptops";
import SmartWatch from "./Pages/Category/SubCategory/SmartWatch";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Category" element={<Category />} />
      <Route
        path="/Category/mobile-phones"
        element={
          <ProtectedRoute>
            <MobilePhones />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Category/gpu"
        element={
          <ProtectedRoute>
            <GPU />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Category/graphic-card"
        element={
          <ProtectedRoute>
            <GraphicCard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Category/laptops"
        element={
          <ProtectedRoute>
            <Laptops />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Category/smart-watch"
        element={
          <ProtectedRoute>
            <SmartWatch />
          </ProtectedRoute>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<NotFound />} />

      {/* CUSTOMER DASHBOARD ROUTES */}
      <Route
        path="/CustomerDashboard"
        element={
          <ProtectedRoute>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Vendor */}
      <Route
        path="/Vendor"
        element={
          <ProtectedRoute>
            <Vendor />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/Admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path="/Admin/Products" element={<AdminProducts />} />
        <Route path="/Admin/Reports" element={<AdminReports />} />
        <Route path="/Admin/Users" element={<AdminUsers />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
