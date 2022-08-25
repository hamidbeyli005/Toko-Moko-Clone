import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(207, 255, 187, 0.72);
`;
const Left = styled.div`
  position: relative;
  left: 30px;
`;

const Rating = styled.h2`
  margin-right: 136px;
  font-size: 24px;
  font-weight: 500;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  display: flex;

  justify-content: center;
  height: 544px;
  @media (max-width: 992px) {
    writing-mode: horizontal-tb;
    transform: rotate(0);
    position: absolute;
    top: 50px;
    right: -100%;
    /* transform: translateX(50%); */
  }
  @media (max-width: 767px) {
    right: -120%;
  }
  @media (max-width: 575px) {
    right: 14%;
  }
  @media (max-width: 550px) {
    right: 8%;
  }
  @media (max-width: 500px) {
    right: 3%;
  }
  @media (max-width: 400px) {
    right: -4%;
  }
  @media (max-width: 350px) {
    right: -10%;
  }
`;
const Img = styled.img`
  height: 64px;
  width: 116px;
  position: absolute;
  top: 64px;
  left: 260px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const Icon = styled.img`
  height: 21px;
  width: 10px;
  z-index: 5;
  top: 20px;

  left: 0;
  @media (max-width: 992px) {
    top: 50px;
  }

  &#leftArrow {
    opacity: 0.4;
  }
  &#rightArrow {
    transform: rotate(180deg);
    top: 9.4px;
    margin-left: 5px;
    left: 20px;
    @media (max-width: 992px) {
      top: 39.4px;
    }
  }
`;
const Right = styled.div`
  padding-top: 70px;
  @media (max-width: 992px) {
    padding-top: 90px;
    font-size: 16px;

    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 60px;
`;
const Name = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 500;

  > p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      id="rightArrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      src="/icons/arrow3.png"
      alt=""
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      id="leftArrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      src="/icons/arrow3.png"
      alt=""
    />
  );
}

function Ratings() {
  const onlyWidth = useWindowWidth();

  let data = [
    {
      avatar: "/icons/avatar.png",
      name: "Tayfun Esref",
      job: "UI designer",
      message:
        "Uşaqlar üçün maraqlı və olduqca əyləncəli hədiyyə qutuları var. Müxtəlif yaş aralıqlarının olması hədiyyə qutularını daha anlaşıqlı edir. Uşaqları sevindirmək üçün hər bir valideynə tövsiyə görərəm.1",
    },
    {
      avatar: "/icons/avatar.png",
      name: "Tayfun Esref",
      job: "UI designer",
      message:
        "Uşaqlar üçün maraqlı və olduqca əyləncəli hədiyyə qutuları var. Müxtəlif yaş aralıqlarının olması hədiyyə qutularını daha anlaşıqlı edir. Uşaqları sevindirmək üçün hər bir valideynə tövsiyə görərəm.2",
    },
    {
      avatar: "/icons/avatar.png",
      name: "Tayfun Esref",
      job: "UI designer",
      message:
        "Uşaqlar üçün maraqlı və olduqca əyləncəli hədiyyə qutuları var. Müxtəlif yaş aralıqlarının olması hədiyyə qutularını daha anlaşıqlı edir. Uşaqları sevindirmək üçün hər bir valideynə tövsiyə görərəm.3",
    },
    {
      avatar: "/icons/avatar.png",
      name: "Tayfun Esref",
      job: "UI designer",
      message:
        "Uşaqlar üçün maraqlı və olduqca əyləncəli hədiyyə qutuları var. Müxtəlif yaş aralıqlarının olması hədiyyə qutularını daha anlaşıqlı edir. Uşaqları sevindirmək üçün hər bir valideynə tövsiyə görərəm.4",
    },
  ];

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    afterChange: function (index) {
      if (index === 0) {
        document.getElementById("leftArrow").style.opacity = "0.4";
      } else {
        document.getElementById("leftArrow").style.opacity = "1";
      }
      if (index === data.length - 1) {
        document.getElementById("rightArrow").style.opacity = "0.4";
      } else {
        document.getElementById("rightArrow").style.opacity = "1";
      }
    },
  };
  return (
    <Wrapper>
      <Container fluid="sm">
        <Row>
          <Col sm={5}>
            <Left>
              <Rating>Müştəri Rəyləri</Rating>
              <Img src="/icons/quotes.png" alt="" />
            </Left>
          </Col>
          <Col className="ratingSlider" sm={onlyWidth > 992 ? "7" : "11"}>
            <Slider {...settings}>
              {data.map((user, index) => (
                <Right key={index}>
                  {user.message}
                  <Flex>
                    <img src="/icons/avatar.png" alt="" />
                    <Name>
                      {user.name}
                      <p>{user.job}</p>
                    </Name>
                  </Flex>
                </Right>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Ratings;
