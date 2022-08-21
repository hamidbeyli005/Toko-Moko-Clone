import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navi from "./Navbar";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: #77cd51;
  height: 620px;
`;
const SliderWrapper = styled.div`
  margin-top: 40px;
  height: 430px;
  display: flex !important;
  &:active {
    cursor: grab;
  }
`;
const Text = styled.h1`
  font-size: 65px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;
const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  width: 450px;
  margin-top: 10px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  flex: 1;
  padding-right: 10px;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 36px;
`;
const Button = styled(Link)`
  height: 48px;
  width: 155px;
  border-radius: 24px;
  color: ${(props) => (props.green ? "white" : "#68BE43")};
  border: 1px solid #fff;
  background: ${(props) => (props.green ? "transparent" : "#fff")};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 350ms color;
  &:hover {
    color: ${(props) => (props.green ? "#ff8145" : "#68BE43")};
  }
`;

function Header() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    // draggable: false,
  };

  const data = [
    {
      title: "Toko-Moko’dan",
      altTitle: "məktəbli balacalar üçün oyuncaqlar",
      text: " Məktəbdə qazandıqları biliklərini unutmamaları üçün sürpriz qutusu almanın tam zamanıdır",
      images: "/images/slider1.png",
    },
    {
      title: "Toko-Moko’dan",
      altTitle: "öyrədici oyuncaqlar seriası!",
      text: "Uşaqlarınızın zehni inkişafına və xəyal güclərinin gəlişməsinə ərkən yaşdan başlayın",
      images: "/images/slider2.png",
    },
    {
      title: "Toko-Moko’nun",
      altTitle: "əyləncəli dünyasına xoş gəlmisiniz!",
      text: "Oğlan və qız uşaqları üçün hədiyyə paketi almanın zamanıdır",
      images: "/images/slider3.png",
    },
  ];

  // const element = document.querySelector(".slick-list");
  // const slider = document.querySelector(".slick-track");
  /*  let start;
    let stop;
    let finish;
    function getValue(slider) {
      const values = slider.style.transform.split(/\w+\(|\);?/);
      const transform = values[1].split(/,\s?/g).map(parseInt);

      return transform[0];
    }
    element.addEventListener("mousedown", (e) => {
      start = e.pageX;


    });

    element.addEventListener("mouseup", (e) => {
      stop = e.pageX;
      finish = start - stop;

      if (finish > 0) {
        let value = getValue(slider) - 1116;
        if (value === -4464) {
          value = -1116;
        }

        slider.style.transform = `translateX(${value}px)`;
      } else {
        let value = getValue(slider) + 1116;
        if (value === 0) {
          value = -3348;
        }
        slider.style.transform = `translateX(${value}px)`;
      }
    }); */

  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <Navi />
              <div id="hh">
                <Slider {...settings}>
                  {data.map((slide, index) => (
                    <SliderWrapper key={index}>
                      <div>
                        <Text>
                          <span style={{ color: "#FF8145" }}>
                            {slide.title}
                          </span>
                          <br />
                          {slide.altTitle}
                          <Paragraph>{slide.text}</Paragraph>
                        </Text>
                        <BtnWrapper>
                          <Button to="/about" green="true">
                            Daha Ətraflı
                          </Button>
                          <Button to="/products">İndi Al</Button>
                        </BtnWrapper>
                      </div>

                      <Image
                        style={
                          slide.images === "/images/slider3.png"
                            ? { height: "300px" }
                            : null
                        }
                        src={slide.images}
                      />
                    </SliderWrapper>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Header;
