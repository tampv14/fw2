import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-5 ml-64">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
