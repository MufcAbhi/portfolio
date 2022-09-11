import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from 'components/style';

export const Nav = styled(Container)`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  columns: var(--title-color);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  &:hover {
    color: var(--first-color);
  }
`;

export const NavToggle = styled.div`
  columns: var(--title-color);
  font-weight: var(--font-medium);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--first-color);
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
    ${(props) => props.toggled && 'bottom: 0;'};
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  list-style: none;
  margin: 0;
`;

export const NavItem = styled.li`
  display: grid;
  align-items: center;
  margin: 0;
  height: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  &:hover {
    color: var(--first-color);
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;
`;

export const NavClose = styled.div`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  columns: var(--first-color);
  &:hover {
    color: var(--first-color-alt);
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  ${(props) => props.scrolled && 'box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);'};
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
    ${Nav} {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 1rem;
    }
    ${NavIcon}, ${NavClose}, ${NavToggle} {
      display: none;
    }
    ${NavList} {
      display: flex;
      column-gap: 2rem;
    }
    ${NavMenu} {
      margin-left: auto;
    }
  }
`;
