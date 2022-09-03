import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      dispatch(setUser(true));

      localStorage.setItem("firstLogin", true);

      navigate("/admin", { replace: true });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({ ...user, [name]: value });
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
            Login Form
          </h4>

          <Form onSubmit={loginSubmit}>
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
            <Link to="/admin/register">Register</Link>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
