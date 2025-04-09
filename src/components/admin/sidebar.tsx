import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiBox, FiLayers, FiMenu, FiPlusCircle, FiList } from "react-icons/fi";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openProduct, setOpenProduct] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white min-h-screen fixed left-0 top-0 transition-all duration-300 p-4 shadow-lg`}
    >
      {/* Toggle Menu */}
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold text-center py-4 ${!isOpen && "hidden"}`}>
          Admin Panel
        </h2>
        <button
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="text-xl" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              <FiHome className="mr-3 text-xl" />
              {isOpen && <span>Dashboard</span>}
            </NavLink>
          </li>

          {/* Sản phẩm (Dropdown) */}
          <li>
            <button
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setOpenProduct(!openProduct)}
            >
              <FiBox className="mr-3 text-xl" />
              {isOpen && <span>Sản phẩm</span>}
            </button>
            {openProduct && (
              <ul className="ml-6 mt-2 space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/product/add"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FiPlusCircle className="mr-2" /> {isOpen && "Thêm sản phẩm"}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/product/list"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FiList className="mr-2" /> {isOpen && "Danh sách sản phẩm"}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Danh mục sản phẩm (Dropdown) */}
          <li>
            <button
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setOpenCategory(!openCategory)}
            >
              <FiLayers className="mr-3 text-xl" />
              {isOpen && <span>Danh mục sản phẩm</span>}
            </button>
            {openCategory && (
              <ul className="ml-6 mt-2 space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/category/add"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FiPlusCircle className="mr-2" /> {isOpen && "Thêm danh mục"}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/category/list"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FiList className="mr-2" /> {isOpen && "Danh sách danh mục"}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
