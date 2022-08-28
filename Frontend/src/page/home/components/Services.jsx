import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section = styled.section`
  height: 100%;
  background: #fafdf9;
`;
const RowColumns = styled(Row)`
  flex-wrap: nowrap;
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;
const Collapse = styled(Col)`
  display: flex;
  padding: 90px 20px;
  @media (max-width: 992px) {
    padding: 20px;
  }
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: #ff8b1c;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #838383;
`;

function Services() {
  const data = [
    {
      icon: "/icons/delivery.png",
      title: "Pulsuz çatdırılma& Geri ödəmə",
      text: "Bir gün içərisində qapıya çatdırılma",
    },
    {
      icon: "/icons/call-center.png",
      title: "Canlı Dəstək Xidmədi",
      text: "Ən qısa zamanda yaranan problemin həlli üçün",
    },
    {
      icon: "/icons/verified.png",
      title: "100% qaranti təhlükəsizlik",
      text: "Şirkətimiz tərəfindən edilən bütün əməliyyatlarda",
    },
  ];

  return (
    <Section>
      <Container>
        <RowColumns>
          {data.map((d, index) => (
            <Collapse key={index}>
              <img
                width="100px"
                height="100px"
                style={{ marginRight: "14px" }}
                src={d.icon}
                alt=""
              />
              <div>
                <Title>{d.title} </Title>
                <Text>{d.text} </Text>
              </div>
            </Collapse>
          ))}
        </RowColumns>
      </Container>
    </Section>
  );
}

export default Services;
