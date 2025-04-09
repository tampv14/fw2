import React from "react";
import { Route, useRoutes } from "react-router-dom";
import ClientLayout from "./layout/client";
import Home from "./components/client/home";
import Register from "./components/client/register";
import Login from "./components/client/login";
import Category from "./components/client/category";
import Details from "./components/client/details";
import Not from "./components/client/not-found";
import AdminLayout from "./layout/admin";
import AdminSidebar from "./components/admin/sidebar";
import AdminHome from "./components/admin/adminHome";
import CategoryAdd from "./components/admin/category/category";
import CategoryList from "./components/admin/category/category-list";
import AddProduct from "./components/admin/product/product-add";
import ListProduct from "./components/admin/product/product-list";
import EditProduct from "./components/admin/product/product-edit";
import CategoryEdit from "./components/admin/category/category-edit";
import ProductDetail from "./components/client/product-details";
import SearchResults from "./components/client/search";
type Props = {};

const App = (props: Props) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "category/:cateName", element: <Category /> },
        { path: "details", element: <Details /> },
        { path: "search", element: <SearchResults /> },
        { path: "product-details/:id", element: <ProductDetail /> },
        { path: "err", element: <Not /> },
      ],
    },
    {
      path: "/dashboard",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <AdminSidebar />,
        },
        {
          path: "home",
          element: <AdminHome />,
        },

        {
          path: "category/add",
          element: <CategoryAdd />,
        },
        {
          path: "category/list",
          element: <CategoryList />,
        },
        {
          path: "category/edit/:id",
          element: <CategoryEdit />,
        },

        {
          path: "product/add",
          element: <AddProduct />,
        },
        {
          path: "product/list",
          element: <ListProduct />,
        },
        {
          path: "product/edit/:id",
          element: <EditProduct />,
        },
      ],
    },
    {
      path: "*",
      element: <Not />,
    },
  ]);

  return routes;
};

export default App;
