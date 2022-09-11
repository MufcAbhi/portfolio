import React from 'react';
import { RiSendPlane2Line, RiMouseLine, RiLinkedinFill } from 'react-icons/ri';
import { MdArrowDownward } from 'react-icons/md';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { Section } from 'components/style';

import {
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeSocialIcon,
  HomeBlob,
  HomeBlobImage,
  HomeData,
  HomeTitle,
  ContactButtonIcon,
  HomeSubtitle,
  HomeDescription,
  HomeScroll,
  HomeScrollButton,
  ButtonLink,
  HomeScrollMouseIcon,
  HomeScrollName,
  HomeImg,
  HomeScrollArrowIcon,
  ContactButton,
} from './style';

export default function Hero() {
  return (
    <Section id="home">
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <HomeSocialIcon href="https://www.linkedin.com/in/abhijeet-pradhanang/" target="_blank">
              <RiLinkedinFill />
            </HomeSocialIcon>
            <HomeSocialIcon href="https://github.com/MufcAbhi" target="_blank">
              <FiGithub />
            </HomeSocialIcon>
          </HomeSocial>
          <HomeImg>
            <HomeBlob
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <HomeBlobImage x="12" y="18" xlinkHref="/me.png" />
              </g>
            </HomeBlob>
          </HomeImg>
          <HomeData>
            <HomeTitle>Hi, I'am Abhijeet Pradhanang</HomeTitle>
            <HomeSubtitle>Software Engineer | Full Stack Developer</HomeSubtitle>
            <HomeDescription>
              Experienced full-stack web developer. Dedicated to producing reliable, quality work.
            </HomeDescription>
            <ButtonLink to="/#contact">
              <ContactButton variant="flex">
                Contact Me
                <ContactButtonIcon>
                  <RiSendPlane2Line />
                </ContactButtonIcon>
              </ContactButton>
            </ButtonLink>
          </HomeData>
        </HomeContent>
        <HomeScroll>
          <HomeScrollButton href="/#about">
            <HomeScrollMouseIcon>
              <RiMouseLine />
            </HomeScrollMouseIcon>
            <HomeScrollName>Scroll down</HomeScrollName>
            <HomeScrollArrowIcon>
              <MdArrowDownward />
            </HomeScrollArrowIcon>
          </HomeScrollButton>
        </HomeScroll>
      </HomeContainer>
    </Section>
  );
}
