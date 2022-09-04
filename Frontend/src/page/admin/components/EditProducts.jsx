import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "Loader";
import Card from "page/products/Card";

const Header = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #1d2123;
`;
const Ul = styled.ul`
  padding-left: 14px;

  > li {
    font-size: 16px;
    font-weight: 700;
    margin-top: 14px;
    ul {
      padding: 0;
      margin-top: 8px;

      li {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 4px;
        user-select: none;
        label {
          display: flex;
          align-items: center;
          gap: 10px;
          input {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;
const Submit = styled.input`
  margin-top: 20px;
  padding: 10px 20px;
  background: #43ba7f;
  border: none;
  border-radius: 22px;
  width: 80%;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.5px;
  transition: 300ms all;
  border: 1px solid #43ba7f;
  &:hover {
    background: #fff;
    color: #43ba7f;
    border: 1px solid #43ba7f;
  }
`;

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

function EditProducts() {
  // const state = useSelector((state) => state.products.products);
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState();
  const [filter, setFilter] = useState({
    category: "",
    sort: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `/api/products?limit=${filter.category}&${filter.sort}`
      );
      res ? setState(res.data.products) : null;
    };
    getProducts();
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  if (!state) {
    return <Loader />;
  }

  if (state) {
    return (
      <Container fluid="md">
        <Row>
          <Col>
            <ProdLength>məhsul sayı:{state.length} </ProdLength>
            <Flex>
              {state.map((product, index) => (
                <Card to="admin/product"  key={index} product={product} />
              ))}
            </Flex>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditProducts;
