import Home from "page/Home";
import MainLayout from "page/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/inbox",
      //   element: <InboxLayout />,
      // },
    ],
  },
];

export default routes;
