import Home from "page/home";
import MainLayout from "page/MainLayout";
import Products from "page/products";
import Product from "page/product";

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
        path:"/products",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ],
  },
 
];

export default routes;
