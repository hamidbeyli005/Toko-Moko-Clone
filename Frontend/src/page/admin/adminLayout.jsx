import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function AdminLayout() {
  const navigate = useNavigate();

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0 0 0",
        }}
      >
        Admin Page
      </h3>
      <Button onClick={logoutUser} color="danger">
        logout
      </Button>

      <Outlet />
    </div>
  );
}

export default AdminLayout;
