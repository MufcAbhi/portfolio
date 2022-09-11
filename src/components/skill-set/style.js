import styled from 'styled-components';

export const SkilSetHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`;

export const SkillSetIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

export const SkillSetArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--first-color);
  margin-left: auto;
  transition: 0.4s;
`;

export const SkillSetTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--mb-0-5);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  font-size: 1.5em;
  margin: 0;
`;

export const SkillSetSubtitle = styled.span``;

export const SkillList = styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 1.5rem;
  padding-left: 2.7rem;
`;

export const SkillTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`;

export const SkillData = styled.div``;

export const SkillName = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin: 0;
`;

export const SkillNumber = styled.span``;

export const SkillBar = styled.div`
  height: 5px;
  border-radius: 0.25rem;
  background-color: var(--first-color-lighter);
`;

export const SkillPercentage = styled.span`
  height: 5px;
  border-radius: 0.25rem;
  display: block;
  background-color: var(--first-color);
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const SkilSetlWrapper = styled.div`
  ${(props) =>
    props.open
      ? `
    ${SkillList} {
      height: max-content;
      margin-bottom: var(--mb-2-5);
    }
    ${SkillSetArrow} {
      transform: rotate(-180deg);
    }
  `
      : `
    ${SkillList} {
      height: 0;
      overflow: hidden;
    }
  `}
`;
