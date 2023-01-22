import React from 'react';
import { BiCodeCurly, BiServer } from 'react-icons/bi';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiAzuredevops } from 'react-icons/si';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';
import SkillSet from 'components/skill-set';

import { SkillsContainer } from './style';

export default function Skills() {
  const totalYearsWorked = 5;

  const skillSets = [
    {
      id: 1,
      icon: <BiCodeCurly />,
      title: 'Frontend Developer',
      subtitle: `More than ${totalYearsWorked} years`,
      data: [
        {
          name: 'HTML / CSS / SCSS / Bootstrap',
          year: totalYearsWorked,
        },
        {
          name: 'JS / VueJS',
          year: totalYearsWorked,
        },
        {
          name: 'NuxtJS / Vuetify / React / Material UI',
          year: totalYearsWorked - 3,
        },
      ],
    },
    {
      id: 2,
      icon: <BiServer />,
      title: 'Backend Developer',
      subtitle: `More than ${totalYearsWorked} years`,
      data: [
        {
          name: 'PHP / Laravel / MySQL',
          year: 2.5,
        },
        {
          name: 'NodeJS / NestJS / Mongoose / GraphQL',
          year: 3,
        },
        {
          name: 'Firebase / Socket.io',
          year: 1,
        },
      ],
    },
    {
      id: 3,
      icon: <AiOutlineAntDesign />,
      title: 'Cloud',
      subtitle: `More than 1.5 years`,
      data: [
        {
          name: 'AWS S3, SNS, SES',
          year: 1.5,
        },
      ],
    },
    {
      id: 4,
      icon: <SiAzuredevops />,
      title: 'Devops',
      subtitle: 'More than 2 years',
      data: [
        {
          name: 'Docker',
          year: 2,
        },
      ],
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My Technical Level</SectionSubtitle>
      <SkillsContainer>
        {skillSets.map((skillSet) => (
          <SkillSet key={skillSet.id} skillSet={skillSet} />
        ))}
      </SkillsContainer>
    </Section>
  );
}
