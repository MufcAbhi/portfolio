import styled from 'styled-components';

import { Container } from 'components/style';

export const ProjectContainer = styled(Container)`
  display: grid;
  gap: 2rem;
  text-align: center;
  @media screen and (min-width: 568px) {
    text-align: left;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    background-color: var(--first-color-second);
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }
`;

export const ProjectBackground = styled.div`
  background-color: var(--first-color-second);
  padding-top: 3rem;
  @media screen and (min-width: 768px) {
    background: none;
  }
`;

export const ProjectData = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 0.8rem;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: var(--h2-font-size);
  margin: 0;
  margin-bottom: var(--mb-0-75);
  color: #fff;
`;

export const ProjectDescription = styled.p`
  margin-bottom: var(--mb-1-5);
  color: #fff;
`;

export const ProjectImg = styled.img`
  width: 232px;
  justify-self: center;
  @media screen and (max-width: 350px) {
    width: 200px;
  }
`;

export const ProjectButtonIcon = styled.div`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
  display: flex;
  align-items: center;
`;

export const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: var(--first-color);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  &:hover {
    background-color: #fff;
    ${ProjectButtonIcon} {
      transform: translateX(0.25rem);
    }
  }
`;
