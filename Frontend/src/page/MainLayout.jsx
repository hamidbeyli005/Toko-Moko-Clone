import Footer from "components/Footer";
import Navi from "components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navi />
      <Outlet />
      <Footer/>
    </>
  );
}

export default MainLayout;
