import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "reactstrap";
import axios from "axios";


var NLink = styled(NavLink)`
  font-size: 17px;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  margin-right: 4px;
  padding: 8px;
  transition: 250ms color;

  &:hover {
    color: #ff8145;
  }
  &.contact {
    background: #43ba7f;
    padding: 8px 20px;
    margin-right: 0;
    margin-left: 14px;
    border-radius: 24px;

    &:hover {
      color: #fff;
    }
  }
`;


function Navi() {
  const navigate = useNavigate();

const logoutUser = async () => {
  await axios.get("/user/logout");
  localStorage.removeItem("firstLogin");
  navigate("/admin/login", { replace: true });
};
  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <Navbar expand={"lg"} className="pt-1 px-2 ">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />

            <Navbar.Brand>
              <NLink to="/">ADMIN PAGE</NLink>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"sm"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"xxl"}`}
              placement="start"
              style={{ width: "300px", background: "#6FC549" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <NLink to="upload">Yeni Məhsul </NLink>
                  <NLink to="products">Məhsullar</NLink>
                  <NLink to="">
                    <Button onClick={logoutUser} color="danger">
                      logout
                    </Button>
                  </NLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navi;
