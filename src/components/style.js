import styled from 'styled-components';

function getVariantTheme(variant = 'flex') {
  return variant.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export const Container = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  @media screen and (max-width: 350px) {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Main = styled.main`
  @media screen and (min-width: 768px) {
    margin-top: 5rem;
    padding: 0 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const Section = styled.section`
  padding: 2rem 0 4rem;
  @media screen and (min-width: 768px) {
    padding: 8rem 0 6rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: var(--h1-font-size);
  margin: 0;
  text-align: center;
`;

export const SectionSubtitle = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const variantTheme = {
  white: `
    background-color: #fff;
    color: var(--first-color);
    &:hover {
      background-color: #FFF;
    }
  `,
  flex: `
    display: inline-flex;
    align-items: center;
  `,
  small: `
    padding: 0.75rem 1rem;
  `,
  link: `
    padding: 0;
    background-color: transparent;
    color: var(--first-color);
    &:hover {
      background-color: transparent;
      color: var(--first-color-alt);
    }
  `,
};

export const Button = styled.button`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  border: none;
  &:hover {
    background-color: var(--first-color-alt);
  }

  ${(props) => variantTheme[getVariantTheme(props.variant)]}
`;
