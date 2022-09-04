import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import axios from "axios";
import NewProduct from "../NewProduct";
import EditProduct from "./EditProduct";



const Left = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  width: 310px;
  padding-left: 50px;
`;
const Right = styled.div`
  width: 100%;
  padding-right: 50px;
`;

function AdminProduct() {
  const { id } = useParams();
  const [state, setState] = useState();
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`/api/products`);
      res ? setState(res.data.products) : null;
    };
    getProducts();
  }, []);

  if (!state) {
    return <Loader />;
  }
  const product = state.find((product) => product._id === id);

  if (state) {
    return (
      <Container fluid="md">
        <Row>
          <Col style={{ display: "flex", gap: "100px", background: "#858383" }}>
            <Left>
              <img src="/icons/box.png"></img>
              <input type="file" name="image" id="image" />
            </Left>
            <Right>
              <EditProduct
                prod={product}
              />
            </Right>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminProduct;
