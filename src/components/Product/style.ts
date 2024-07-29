import styled from "styled-components";
import { colors } from "../../styles";

export const ProductContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 472px;
  height: content-fit;
  position: relative;
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 8px;

  border-left: 1px solid ${colors.text};
  border-right: 1px solid ${colors.text};
  border-bottom: 1px solid ${colors.text};
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 217px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: ${colors.text};
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text};
  line-height: 22px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 82px;
  background-color: ${colors.text};
  color: ${colors.text2};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Rating = styled(Title)``;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Tag = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.text2};
  background-color: ${colors.text};
  text-align: center;
  padding: 6px 4px;
`;
