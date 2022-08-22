import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Navi from "./Navbar";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: #77cd51;
  height: 540px;
  @media (max-width: 1200px) {
    height: 590px;
  }
  @media (max-width: 1020px) {
    padding-left: 50px;
  }
  @media (max-width: 992px) {
    height: 420px;
  }
  @media (max-width: 991px) {
    height: 1000px;
  }

  @media (max-width: 750px) {
    height: 800px;
  }
  @media (max-width: 480px) {
    height: 900px;
  }
  @media (max-width: 450px) {
    height: 820px;
  }
  @media (max-width: 420px) {
    height: 900px;
  }
  @media (max-width: 390px) {
    height: 920px;
  }
`;
const SlidersWrapper = styled.div`
  margin-top: 40px;
  height: 430px;
  display: flex !important;
  &:active {
    cursor: grab;
  }

  @media (max-width: 1200px) {
    height: 550px;
  }
  @media (max-width: 991px) {
    /* display: block!important; */
    align-items: center;
    flex-direction: column;
    height: 900px;
  }
  @media (max-width: 750px) {
    height: 700px;
  }
  @media (max-width: 480px) {
    height: 800px;
  }
  @media (max-width: 450px) {
    height: 660px;
  }
  @media (max-width: 420px) {
    height: 800px;
  }
  @media (max-width: 390px) {
    height: 850px;
  }
`;
const Text = styled.h1`
  font-size: 65px;
  font-weight: 700;
  /* line-height: 76px; */
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  max-width: 650px;

  @media (max-width: 992px) {
    max-width: 500px;
    font-size: 44px;
    text-align: center;
    /* margin-right: 60px; */
  }
  @media (max-width: 991px) {
    padding-right: 20px;
    max-width: 650px;
    /* margin-right: 60px; */
  }
  .orange {
    color: #ff8145;
    @media (max-width: 992px) {
      color: #fff;
    }
  }
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

  @media (max-width: 992px) {
    text-align: center;
    width: 500px;
  }
  @media (max-width: 991px) {
    position: absolute;
    bottom: 60px;
    width: 650px;
    text-align: center;
  }
  @media (max-width: 600px) {
    bottom: 40px;
  }

  @media (max-width: 750px) {
    /* width: 550px; */
    width: 13%;
    bottom: 70px;
  }
  @media (max-width: 650px) {
    padding-left: 0;
  }
  @media (max-width: 450px) {
  }
`;
const Image = styled.img`
  height: 100%;
  padding-right: 10px;
  flex: 1;
  @media (max-width: 991px) {
    margin-bottom: 140px;
    margin-top: 0 !important;
  }
  @media (max-width: 750px) {
    padding-top: 14px;

    max-height: 50% !important;
  }
  @media (max-width: 600px) {
    max-height: 46% !important;
  }
  @media (max-width: 450px) {
    max-height: 36% !important;
  }

  &.slider3 {
    height: 300px;
    position: relative;
    right: -20px;
    @media (max-width: 1200px) {
      height: 260px;
    }
    @media (max-width: 991px) {
      right: 50px;
    }
  }
  @media (max-width: 1200px) {
    height: 68%;
    margin-top: 20px;
  }
  @media (max-width: 1050px) {
    height: 58%;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 36px;
  @media (max-width: 992px) {
    margin-left: 70px;
  }
  @media (max-width: 991px) {
    position: absolute;
    bottom: 0;
    padding-left: 170px;
  }
  @media (max-width: 750px) {
    padding-left: 3%;
  }
  @media (max-width: 600px) {
    padding-left: 2.2%;
  }
  @media (max-width: 500px) {
    padding-left: 1.6%;
  }
  @media (max-width: 450px) {
    padding-left: 0.6%;
  }
  @media (max-width: 400px) {
    padding-left: 0;
  }
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
  @media (max-width: 991px) {
    display: ${(props) => (props.green ? "flex" : "none")};
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
        <Container fluid="lg">
          <Row>
            <Col>
              {/* <Navi /> */}
              <div id="hh">
                <Slider {...settings}>
                  {data.map((slide, index) => (
                    <SlidersWrapper key={index}>
                      <div>
                        <Text>
                          <span className="orange">{slide.title}</span>
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
                        className={
                          slide.images === "/images/slider3.png"
                            ? "slider3"
                            : null
                        }
                        src={slide.images}
                      />
                    </SlidersWrapper>
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
