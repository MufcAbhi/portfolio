import styled from 'styled-components';

import { Container } from 'components/style';

export const ServicesContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 350px) {
    grid-template-columns: max-content;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 238px);
  }
`;

export const ServiceContent = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  @media screen and (max-width: 350px) {
    padding-right: 3.5rem;
  }
  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem 2.5rem;
  }
`;

export const ServiceIcon = styled.div`
  display: block;
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: var(--mb-1);
  @media screen and (min-width: 768px) {
    font-style: 2rem;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
  margin: 0;
`;

export const ServiceButtonIcon = styled.div`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
  display: flex;
  align-items: center;
`;

export const ServiceButton = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: var(--first-color);
  color: #fff;
  padding: 0;
  background-color: transparent;
  color: var(--first-color);
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  cursor: pointer;
  font-size: var(--small-font-size);
  &:hover {
    background-color: transparent;
    color: var(--first-color-alt);
    ${ServiceButtonIcon} {
      transform: translateX(0.25rem);
    }
  }
`;

export const ServiceModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  ${(props) =>
    props.open &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const ServiceModalTitle = styled.h4`
  font-size: var(--h4-font-size);
  font-weight: var(--font-semi-bold);
  margin: 0;
  margin-bottom: var(--mb-1-5);
  line-height: 26px;
`;

export const ServiceModalContent = styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const ServiceModalServices = styled.ul`
  display: grid;
  gap: 1.5rem;
  row-gap: 1rem;
  margin: 0;
`;

export const ServiceModalService = styled.li`
  display: flex;
`;

export const ServiceModalCloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
`;

export const ServiceModalIcon = styled.div`
  color: var(--first-color);
  margin-right: var(--mb-0-75);
  display: flex;
  align-items: center;
`;
