import {
  ProductContainer,
  ProductInfo,
  Title,
  Description,
  RatingContainer,
  TitleContainer,
  Rating,
  Tag,
  TagContainer,
  ProductImageContainer,
} from "./style";

import star from "../../assets/images/star.png";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  rating: number;
  img: string;
  description: string;
  tags: string[];
  link: string;
};

const Product = ({ title, rating, img, description, tags, link }: Props) => (
  <ProductContainer>
    <ProductImageContainer>
      <img src={img} alt="Hioki Sushi" />
    </ProductImageContainer>

    <TagContainer>
      {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </TagContainer>

    <ProductInfo>
      <TitleContainer>
        <Title>{title}</Title>
        <RatingContainer>
          <Rating>{rating}</Rating>
          <img src={star} alt="" />
        </RatingContainer>
      </TitleContainer>
      <Description>{description}</Description>

      <Link className="btn" to={link}>
        Saiba mais
      </Link>
    </ProductInfo>
  </ProductContainer>
);

export default Product;
