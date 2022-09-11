import React, { useState } from 'react';

import { HiChevronUp } from 'react-icons/hi';

import {
  SkilSetlWrapper,
  SkilSetHeader,
  SkillSetIcon,
  SkillSetArrow,
  SkillSetTitle,
  SkillSetSubtitle,
  SkillData,
  SkillName,
  SkillBar,
  SkillPercentage,
  SkillTitle,
  SkillNumber,
  SkillList,
} from './style';

export default function SkillSet({ skillSet }) {
  const { icon, title, subtitle, data } = skillSet;
  const [isOpen, setIsOpen] = useState(false);

  const showSkillSetData = () => (
    <SkillList>
      {data.map((skillData) => (
        <SkillData key={skillData.name}>
          <SkillTitle>
            <SkillName>{skillData.name}</SkillName>
            <SkillNumber>{skillData.year === 1 ? `Around 1 year` : `${skillData.year} years`}</SkillNumber>
          </SkillTitle>
          <SkillBar>
            <SkillPercentage width="100%" />
          </SkillBar>
        </SkillData>
      ))}
    </SkillList>
  );

  return (
    <SkilSetlWrapper open={isOpen}>
      <SkilSetHeader onClick={() => setIsOpen(!isOpen)}>
        <SkillSetIcon>{icon}</SkillSetIcon>
        <div>
          <SkillSetTitle>{title}</SkillSetTitle>
          <SkillSetSubtitle>{subtitle}</SkillSetSubtitle>
        </div>
        <SkillSetArrow>
          <HiChevronUp />
        </SkillSetArrow>
      </SkilSetHeader>
      {showSkillSetData()}
    </SkilSetlWrapper>
  );
}
