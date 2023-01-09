import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { sr, srConfig } from "../../utility/sr";
import { Section } from "../ui/Section.styled";
import { SectionHeading } from "../ui/SectionHeading.styled";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
} from "./ContactSection.styled";

export const ContactSection = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Section id="contact">
      <SectionHeading>
        <h1>Contact</h1>
        <p>Get in touch</p>
      </SectionHeading>

      <DetailsWrapper ref={revealContainer}>
        <ContactInfo>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <div>
            <a href="mailto:Brandon.Bing.Ng@gmail.com">
              <FaEnvelope /> <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bng94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> <span>Linkedin</span>
            </a>
          </div>
        </ContactInfo>
        <ImageWrapper>
          <img src="./images/m_chances.svg" alt="contact" />
        </ImageWrapper>
      </DetailsWrapper>
    </Section>
  );
};
