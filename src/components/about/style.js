import styled from 'styled-components';

import { Container } from 'components/style';

export const AboutContainer = styled(Container)`
  display: grid;
  grid-gap: 1.5;
  @media screen and (min-width: 768px) {
    column-gap: 5rem;
  }
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutImage = styled.img`
  width: 200px;
  border-radius: 0.5rem;
  justify-self: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: var(--mb-2-5);
  @media screen and (min-width: 768px) {
    text-align: initial;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const AboutInfoTitle = styled.span`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  display: block;
  text-align: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const AboutInfoTitleName = styled.span`
  font-size: var(--smaller-font-size);
  display: block;
  text-align: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const AboutInfoLink = styled.a`
  text-decoration: none;
`;

export const AboutInfoButtons = styled.span`
  display: flex;
  justify-content: center;
  height: fit-content;
  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`;

export const AboutInfoButtonIcon = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
`;
