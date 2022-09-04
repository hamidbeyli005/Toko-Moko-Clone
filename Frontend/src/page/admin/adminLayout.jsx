import axios from "axios";
import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import Navi from "./components/Navbar";

function AdminLayout() {


  return (
    <div>
      
      <Navi/>
      
      <Toaster  />

      <Outlet />
    </div>
  );
}

export default AdminLayout;
