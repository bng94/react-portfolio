import { Button } from "../ui/Button.styled";
import { SectionHeading } from "../ui/SectionHeading.styled";
import { Section } from "../ui/Section.styled";
import {
  AboutWrapper,
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "./AboutSection.styled";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { sr, srConfig } from "../../utility/sr";

export const AboutSection = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Section id="about">
      <SectionHeading>
        <h1>About Me</h1>
      </SectionHeading>
      <AboutWrapper ref={revealContainer}>
        <ImageContainer>
          <StyledImage src="./images/brandonNg.jpg" alt="Brandon Ng" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋🏻</StyledEmoji>
          </StyledHeading>
          <p>
            Hello there, my name is Brandon, I am a Software Engineer, who
            resides in New York Metropolitan Area. My interest in programming
            started in 2013, modifying HTML and CSS, BB codes, and eventually
            picking up programming in JavaScript during my Computer Science
            undergraduate years.
          </p>
          <p>
            I have learned and used ReactJS, NodeJS, and MongoDB since then as I
            graduated and obtained my
            <span> Master of Science Degree in Software Engineering</span> from
            Pace University in August 2020. Currently working on developing and
            implementing new functionality at{" "}
            <a
              href="https://envogueinternational.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envogue International
            </a>{" "}
            for their new startup company, madeyn.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
            <ul>
              <li> React </li>
              <li> Node.js </li>
              <li> GraphQL </li>
              <li> AWS </li>
              <li> JavaScript (ES6+) </li>
              <li> HTML5 & CSS3 </li>
            </ul>
          </p>
          <Button href="#experience">Background</Button>
        </AboutContent>
      </AboutWrapper>
    </Section>
  );
};
