import styled from 'styled-components';

import { Container } from 'components/style';

export const PortfolioContainer = styled(Container)`
  overflow: initial;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }

  .swiper-button-prev {
    left: -0.2rem;
  }

  .swiper-button-next {
    right: -0.2rem;
  }

  .swiper-pagination-bullet-active {
    border-color: var(--first-color);
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    outline: none;
  }
`;

export const PortfolioContent = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0 1.5rem;
  min-height: 200px;
  width: 100%;
  padding: 3rem;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    column-gap: 3rem;
  }
`;

export const PortfolioImage = styled.div`
  border-radius: 0.5rem;
  justify-content: center;
  width: 200px;
  height: 200px;
  align-items: center;
  .gatsby-image-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 200px;
    img {
      object-fit: cover;
      height: 200px !important;
      width: 200px !important;
      object-fit: cover !important;
    }
  }
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const PortfolioData = styled.div``;

export const PortfolioTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin: 0;
  margin-bottom: var(--mb-0-5);
`;

export const PortfolioDescription = styled.p`
  margin: 0;
  margin-bottom: var(--mb-0-75);
`;

export const SwiperPortfolioIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const PortfolioButtonIcon = styled.div`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
  display: flex;
  align-items: center;
`;

export const PortfolioButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  &:hover {
    background-color: var(--first-color-alt);
    ${PortfolioButtonIcon} {
      transform: translateX(0.25rem);
    }
  }
`;
