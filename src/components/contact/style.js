import styled from 'styled-components';

import { Container } from 'components/style';

export const ContactContainer = styled(Container)`
  display: grid;
  gap: 2rem;
  row-gap: 3rem;
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactInformationWrapper = styled.div``;

export const ContactInformation = styled.div`
  display: flex;
  margin-bottom: var(--mb-2);
`;

export const ContactInformationIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

export const ContactInformationTitle = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
`;

export const ContactInformationSubtitle = styled.div`
  font-size: var(--small-font-size);
  color: var(--text-color-light);
`;
