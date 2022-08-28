import Home from "page/home/Home";
import MainLayout from "page/MainLayout";
import Axios from "./Axios";

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
        path:"/axios",
        element:<Axios/>
      }
    ],
  },
 
];

export default routes;
