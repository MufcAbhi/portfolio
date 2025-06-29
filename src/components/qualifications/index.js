import React, { useState } from 'react';
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';
import { BiCalendar } from 'react-icons/bi';

import { Container, Section, SectionTitle, SectionSubtitle } from 'components/style';

import {
  QualificationTabs,
  QualificationButton,
  QualificationIcon,
  QualificationSections,
  QualificationContent,
  QualificationData,
  QualificationTitle,
  QualificationSubtitle,
  QualificationCalendar,
  QualificationRounder,
  QualificationLine,
} from './style';

export default function Qualifications() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const educationQualifications = [
    {
      title: 'Bachelor In Computer Engineering',
      subtitle: 'Tribhuvan University - Nepal',
      time: '2013 - 2017',
      last: false,
    },
    {
      title: '+2 in Physics',
      subtitle: `St. Xaviers' College - Nepal`,
      time: '2011 - 2013',
      last: false,
    },
    {
      title: 'School',
      subtitle: `Little Angels' School - Nepal`,
      time: '2010',
      last: true,
    },
  ];

  const workQualifications = [
    {
      title: 'Software Developer - SME React',
      subtitle: 'Child & Family Service Agency',
      time: 'Sep 2023 - present',
      last: false,
    },
    {
      title: 'Lead full-stack developer',
      subtitle: 'Dimitra - Canada',
      time: 'Jun 2022 - Mar 2023',
      last: false,
    },
    {
      title: 'Software Engineer',
      subtitle: 'Gurzu Inc. - Nepal',
      time: 'Jan 2022 - Dec 2022',
      last: false,
    },
    {
      title: 'Software Engineer & Team Lead',
      subtitle: 'Dzango - HongKong',
      time: 'Jan 2019 - Dec 2021',
      last: false,
    },
    {
      title: 'Associate Software Engineer',
      subtitle: 'Dzango - HongKong',
      time: 'Oct 2017 - Dec 2018',
      last: true,
    },
  ];

  const renderQualificationContent = (qualificationContent, key) => {
    const { title, subtitle, time, last } = qualificationContent;
    const even = key % 2 !== 0;

    return (
      <QualificationData key={key}>
        {even && (
          <>
            <div />
            <div>
              <QualificationRounder />
              {!last && <QualificationLine />}
            </div>
          </>
        )}
        <div>
          <QualificationTitle>{title}</QualificationTitle>
          <QualificationSubtitle>{subtitle}</QualificationSubtitle>
          <QualificationCalendar>
            <BiCalendar />
            <span>{time}</span>
          </QualificationCalendar>
        </div>
        {!even && (
          <div>
            <QualificationRounder />
            {!last && <QualificationLine />}
          </div>
        )}
      </QualificationData>
    );
  };

  return (
    <Section id="qualifications">
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubtitle>My Personal Journey</SectionSubtitle>
      <Container>
        <QualificationTabs>
          <QualificationButton onClick={() => setActiveTabIndex(0)} active={activeTabIndex === 0}>
            <QualificationIcon>
              <HiOutlineAcademicCap />
            </QualificationIcon>
            Work
          </QualificationButton>
          <QualificationButton onClick={() => setActiveTabIndex(1)} active={activeTabIndex === 1}>
            <QualificationIcon>
              <HiOutlineBriefcase />
            </QualificationIcon>
            Education 
          </QualificationButton>
        </QualificationTabs>

        <QualificationSections>
          <QualificationContent active={activeTabIndex === 0} id="work">
            {workQualifications.map((data, index) => renderQualificationContent(data, index))}
          </QualificationContent>
          <QualificationContent active={activeTabIndex === 1} id="education">
            {educationQualifications.map((data, index) => renderQualificationContent(data, index))}
          </QualificationContent>
        </QualificationSections>
      </Container>
    </Section>
  );
}
