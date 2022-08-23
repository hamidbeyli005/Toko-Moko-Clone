import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import Card from "./Card";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  background: #fafdf9;
`;
const Text = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #1d2123;
`;
const More = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1d2123;
  text-decoration: none;
  transition: 300ms color border;
  border: 1px solid #fff;
  padding: 8px 12px;

  &:hover {
    color: #ff8145;
    border: 1px solid #e2e2e2;
    border-radius: 16px;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 0;
  @media (max-width: 991px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;
const Icon = styled.img`
  height: 29px;
  width: 13px;
  @media (max-width: 1020px) {
    margin-right: 30px;
  }

  &#left {
    transform: rotate(180deg);
    z-index: 5;
    @media (max-width: 1100px) {
      margin-left: 20px;
    }
    @media (max-width: 1020px) {
      margin-left: 36px;
    }
  }
`;
const Banners = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 70px;
  gap: 34px;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
  height: 278px;
  width: 551px;

  @media (max-width: 1300px) {
    height: 259px;
    width: 500px;
  }
  @media (max-width: 1200px) {
    height: 239px;
    width: 400px;
  }
  @media (max-width: 870px) {
    height: 210px;
    width: 350px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      src="/icons/arrow2.png"
      alt=""
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      id="left"
      style={{ ...style, display: "none" }}
      onClick={onClick}
      src="/icons/arrow2.png"
      alt=""
    />
  );
}

function Popular({ title, banner }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: function (index) {
      if (index === 0) {
        document.getElementById("left").style.display = "none";
      } else {
        document.getElementById("left").style.display = "block";
      }
    },
  };

  const data = [
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 1,
    },
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 2,
    },
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 3,
    },
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 4,
    },
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 5,
    },
    {
      images: "/icons/box.png",
      title: "Toko-Moko  ",
      altTitle: "Sürpriz Paketi by Toko-moko",
      price: "289",
      id: 6,
    },
  ];
  return (
    <Wrapper>
      <Container fluid="lg">
        <Row>
          <Flex>
            <Text>{title}</Text>
            <More to="/products">
              Hamısına bax
              <img width={5} height={10} src="/icons/arrow.png" alt="" />
            </More>
          </Flex>
        </Row>
        <Row className="Popular">
          <Slider {...settings}>
            {data.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </Slider>
        </Row>
        {banner && (
          <Row>
            <Banners>
              <Image src="/images/banner1.png" alt="" />
              <Image src="/images/banner2.png" alt="" />
            </Banners>
          </Row>
        )}
      </Container>
    </Wrapper>
  );
}

export default Popular;
