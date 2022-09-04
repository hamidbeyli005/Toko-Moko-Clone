import Home from "page/home";
import MainLayout from "page/MainLayout";
import Products from "page/products";
import Product from "page/product";
import NewProduct from "page/admin/NewProduct";
import PrivateRoute from "components/PrivateRoute";
import Login from "page/auth/Login";
import Register from "page/auth/Register";
import AdminLayout from "page/admin/adminLayout";
import { useSelector } from "react-redux";
import EditProducts from "page/admin/components/EditProducts";
import AdminProduct from "page/admin/components/AdminProducts";


const routes = [
  {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    auth: true,

    children: [
      {
        path: "upload",

        element: <NewProduct />,
      },
      {
        path: "products",

        element: <EditProducts />,
      },
      {
        path: "product/:id",

        element: <AdminProduct />,
      },
    ],
  },
  {
    path: "/admin/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
];

const checkAuth = (routes) =>

  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = checkAuth(route.children);
    }
    return route;
  });
export default checkAuth(routes);
