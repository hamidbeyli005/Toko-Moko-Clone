import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      navigate("/admin", { replace: true });
    } catch (err) {
      alert(err.response.data.msg)
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col
          className="p-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "40px 0 ",
            }}
          >
            Register Form
          </h4>

          <Form onSubmit={registerSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                value={user.email}
                onChange={handleChangeInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="password "
                type="password"
                value={user.password}
                onChange={handleChangeInput}
              />
            </FormGroup>
            <Button
              style={{
                width: "80%",
                margin: "10px 20px 30px 20px",
              }}
              color="primary"
            >
              Submit
            </Button>
          </Form>

          <FormGroup>
            <Link to="/admin/login">Login</Link>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
