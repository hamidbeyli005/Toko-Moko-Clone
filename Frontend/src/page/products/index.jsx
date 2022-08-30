import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { products } from "store/productSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import Loader from "Loader";
import Filter from "./components/Filter";

const Breadrumb = styled.ol`
  padding-top: 30px;
  display: flex;
  gap: 10px;
`;
const BreadrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  &:last-child {
    img {
      display: none;
    }
    a {
      color: #828282;
    }
  }
`;
const LinkTo = styled(Link)`
  color: #4f4f4f;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    color: #4f4f4f;
    text-decoration: underline;
  }
`;
const ProdLength = styled.p`
  color: #333333;
  font-weight: 400;
  font-size: 16px;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 60px;
`;

function Products() {
  const state = useSelector((state) => state.products.products);
  const [loader, setLoader] = useState(true);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await axios.get(`/api/products`);
  //     await dispatch(products(res.data.products));
  //     setLoader(false)
  //   };
  //   getProducts();
  // }, []);
  if (!state) {
    return <Loader />;
  }

  if (state) {
    return (
      <Container fluid="md">
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <Breadrumb>
                <BreadrumbItem>
                  <LinkTo to="/">Ana səhifə</LinkTo>
                  <img src="/icons/arrow4.png" alt="" />
                </BreadrumbItem>
                <BreadrumbItem>
                  <LinkTo to="/products">Oyuncaqlar</LinkTo>
                  <img src="/icons/arrow4.png" alt="" />
                </BreadrumbItem>
                <BreadrumbItem>
                  <LinkTo to="/products">Oğlanlar</LinkTo>
                  <img src="/icons/arrow4.png" alt="" />
                </BreadrumbItem>
              </Breadrumb>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Filter products={state} />
          </Col>
          <Col>
            <ProdLength>{state.length} məhsul tapıldı</ProdLength>
            <Flex>
              {state.map((product, index) => (
                <Card key={index} product={product} />
              ))}
            </Flex>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
