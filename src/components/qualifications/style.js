import styled from 'styled-components';

export const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-3);
`;

export const QualificationButton = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: var(--first-color);
  }
  ${(props) => props.active && `color: var(--first-color);`};
`;

export const QualificationIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
`;

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  @media screen and (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const QualificationTitle = styled.h3`
  font-size: var(--normal-font-size);
  margin: 0;
`;

export const QualificationSubtitle = styled.div`
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
`;

export const QualificationCalendar = styled.div`
  font-style: var(--smaller-font-size);
  color: var(--text-color-light);
  span {
    margin-left: 1rem;
  }
`;

export const QualificationRounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
`;

export const QualificationLine = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  transform: translate(6px, -7px);
`;

export const QualificationSections = styled.div`
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.5fr;
  }
  @media screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }
`;

export const QualificationContent = styled.div`
  ${(props) =>
    props.active
      ? `
    display: block;
  `
      : `
    display: none;
  `}
`;
