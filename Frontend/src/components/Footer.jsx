import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  min-height: 381px;
  width: 100%;
  background: #131515;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;

  color: #fff;
  margin-bottom: 32px;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &.icons {
    display: flex;
    align-items: center;
    gap: 33px;
    margin-bottom: 40px;
  }
  &.iconCard {
    > img {
      @media only screen and (min-width: 768px) and (max-width: 992px) {
        height: 40px;
      }
    }
  }
  &.cards {
    font-size: 16px;
    color: #ffffff;
  }
  a {
    transition: 300ms color;
    text-decoration: none;
    color: #fff;
    opacity: 0.8;
    &:hover {
      color: #ff8145;
      opacity: 1;
    }
  }
`;
const Dvider = styled.div`
  height: 1px;
  width: 100%;
  background: #ffffff;
  opacity: 0.2;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const BottomLeft = styled(Bottom)`
  justify-content: flex-start;
  flex-direction: row !important;
  gap: 18px;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    order: 2;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
const BottomRight = styled(Bottom)`
  gap: 48px;
  color: #ffffff;
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    order: 1;
    gap: 12px;
  }
  > li {
    font-size: 14px;
    a {
      transition: 300ms color;
      text-decoration: none;
      color: #fff;
      opacity: 0.8;
      &:hover {
        color: #ff8145;
        opacity: 1;
      }
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container fluid="lg">
        <Row className="pt-5 pb-4">
          <Col md="3">
            <Title>Toko-Moko</Title>
            <ul className="p-0">
              <ListItem>
                <Link to={"/about"}>Haqqımızda</Link>
              </ListItem>
              <ListItem>
                <Link to={"/blogs"}>Blog Yazıları</Link>
              </ListItem>
              <ListItem>
                <Link to={"/contact"}>Əlaqə</Link>
              </ListItem>
            </ul>
          </Col>
          <Col md="3">
            <Title>Menu</Title>
            <ul className="p-0">
              <ListItem>
                <Link to={"/products"}>Məhsullar</Link>
              </ListItem>
              <ListItem>
                <Link to={"/blog"}>Bloglar</Link>
              </ListItem>
              <ListItem>
                <Link to={"/faq"}>FAQS</Link>
              </ListItem>
            </ul>
          </Col>
          <Col md="3">
            <Title>Kömək</Title>
            <ul className="p-0">
              <ListItem>
                <Link to={"/delivery"}>Çatdırılma xidməti</Link>
              </ListItem>
              <ListItem>
                <Link to={"/return"}>Geri qaytarma şərtləri</Link>
              </ListItem>
            </ul>
          </Col>
          <Col md="3">
            <Title>Əlaqə</Title>
            <ul className="p-0">
              <ListItem className="icons">
                <a
                  href="https://www.instagram.com/tokomokofficial/"
                  target="blank"
                >
                  <img src="/icons/instagram.png" alt="" />
                </a>
                <a
                  href="https://www.facebook.com/tokomokosurprise"
                  target="blank"
                >
                  <img
                    style={{ width: "12px", height: "20px" }}
                    src="/icons/facebook.png"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    style={{ width: "20px", height: "15px" }}
                    src="/icons/youtube.png"
                    alt=""
                  />
                </a>
                <a href="/">
                  <img
                    style={{ width: "20px", height: "17px" }}
                    src="/icons/twitter.png"
                    alt=""
                  />
                </a>
              </ListItem>
              <ListItem className="cards">Qəbul edilən kartlar</ListItem>
              <ListItem className="iconCard">
                <img src="/icons/cards.png" alt="" />
              </ListItem>
            </ul>
          </Col>
        </Row>
        <Row>
          <Dvider />
        </Row>
        <Row>
          <Col>
            <Bottom>
              <BottomLeft>
                <img src="/icons/copyright.png" alt="" />
                <Paragraph style={{ margin: "0" }}>
                  2021 Toko-Moko Surprise
                </Paragraph>
              </BottomLeft>
              <BottomRight>
                <li>
                  <Link to={"/privacy"}>Qaydalar və şərtlər</Link>
                </li>
                <li>
                  <Link to={"/privacy"}>Gizlilik siyasəti</Link>
                </li>
              </BottomRight>
            </Bottom>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Footer;
