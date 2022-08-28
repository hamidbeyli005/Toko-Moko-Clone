import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  height: 392px;
  width: 262px;
  border-radius: 4px;
  background: #fff;
  padding: 8px;
  transition: 300ms all;
  @media (max-width: 555px) {
    margin-left: 25%;
  }
  @media (max-width: 470px) {
    margin-left: 20%;
  }
  @media (max-width: 420px) {
    margin-left: 14%;
  }

  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;
const Heart = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
const Image = styled.img`
  height: 236px;
  width: 230px;
  margin: 22px 16px 0 10px;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  padding: 0 18px;
  max-width: 220px;
  margin-bottom: 2px;
  > span {
    font-size: 16px;
  }
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 16px;
  color: #68be43;
  margin-bottom: 0;
`;

function Card({ card }) {
  return (
    <Box>
      <Link to={`/product/${card.id}`} style={{ textDecoration: "none" }}>
        <Heart>
          <img src="/icons/heart.png" alt="" />
        </Heart>
        <Image src={card.images}></Image>
        <Text>
          <span>{card.title}</span>
          {card.altTitle}
        </Text>
        <Price>
          {card.price}
          <img src="/icons/azn.png" alt="" />
        </Price>
      </Link>
    </Box>
  );
}

export default Card;
