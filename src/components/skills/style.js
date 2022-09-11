import styled from 'styled-components';

import { Container } from 'components/style';

export const SkillsContainer = styled(Container)`
  display: grid;
  gap: 2rem;
  row-gap: 0;
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
