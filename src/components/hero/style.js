import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container, Button } from 'components/style';

export const HomeContent = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`;

export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
  @media screen and (min-width: 1024px) {
    transform: translateX(-6rem);
  }
`;

export const HomeSocialIcon = styled.a`
  font-size: 1.25rem;
  color: var(--first-color);
  &:hover {
    color: var(--first-color-alt);
  }
`;

export const HomeImg = styled.div``;

export const HomeBlob = styled.svg`
  width: 200px;
  fill: var(--first-color);
`;

export const HomeBlobImage = styled.image`
  width: 170px;
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  @media screen and (min-width: 350px) {
    text-align: center;
    margin-top: 2rem;
  }
`;

export const HomeTitle = styled.h1`
  font-size: var(--h3-font-size);
  margin: 0;
`;

export const HomeSubtitle = styled.span`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin: 0;
  margin-bottom: var(--mb-0-75);
`;

export const HomeDescription = styled.p`
  margin-bottom: var(--mb-2);
`;

export const HomeScroll = styled.div`
  display: none;
`;

export const HomeScrollButton = styled.a`
  columns: var(--first-color);
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  &:hover {
    transform: translateY(0.25rem);
  }
`;

export const ContactButton = styled(Button)`
  cursor: pointer;
`;

export const ContactButtonIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

export const HomeScrollMouseIcon = styled.div`
  display: flex;
  align-items: center;
  color: var(--first-color);
  font-size: 2rem;
`;

export const HomeScrollName = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
  margin-left: var(--mb-0-25);
`;

export const HomeScrollArrowIcon = styled.div`
  color: var(--first-color);
  display: flex;
  align-items: center;
  font-size: 1.25rem;
`;

export const HomeContainer = styled(Container)`
  display: grid;
  grid-gap: 1.5;
  row-gap: 5rem;

  @media screen and (max-width: 350px) {
    ${HomeContent} {
      grid-template-columns: 0.25fr 3fr;
    }
    ${HomeBlob} {
      width: 180px;
    }
  }

  @media screen and (min-width: 568px) {
    ${HomeContent} {
      grid-template-columns: max-content 1fr 1fr;
    }
    ${HomeData} {
      grid-column: initial;
    }
    ${HomeImg} {
      order: 1;
      justify-self: center;
    }
  }

  @media screen and (min-width: 768px) {
    row-gap: 5rem;
    ${HomeContent} {
      padding-top: 5.5rem;
      column-gap: 2rem;
    }
    ${HomeBlob} {
      width: 270px;
    }
    ${HomeScroll} {
      display: block;
    }
    ${HomeScrollButton} {
      margin-left: 2rem;
    }
    ${HomeScroll} {
      display: block;
    }
  }
`;
