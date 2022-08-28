import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

var NLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
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
const Wrapper = styled.header`
  background: #77cd51;
  height: 80px;
`;

function Navi() {
  return (
    <Wrapper>
      <Container fluid="lg">
        <Row>
          <Col>
            <Navbar expand={"lg"} className="pt-1 px-2 ">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />

              <Navbar.Brand href="/">
                <img src="./images/logo.png" alt="" />
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
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Məhsullar" id="basic-nav-dropdown">
                      <Link className="dropdown-item" to="/products?gender=f">
                        Oğlan uşağı
                      </Link>
                      <Link className="dropdown-item" to="/products?gender=f">
                        Qız uşağı
                      </Link>
                      <Link className="dropdown-item" to="products?gender=a">
                        Digər yaş qrupları
                      </Link>
                    </NavDropdown>

                    <NLink to="/blogs">Bloglar</NLink>
                    <NLink to="/faq">FAQS</NLink>
                    <NLink to="/about">Haqqımızda</NLink>
                    {/* <NLink to="/contact">ƏLAQƏ</NLink> */}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <NLink to="/contact" className="contact">
                ƏLAQƏ
              </NLink>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Navi;
