import { Button } from "../ui/Button.styled";
import {
  HeroContext,
  HeroSocialIcon,
  HeroSocialIconsGroup,
  StyledHeroSection,
} from "./HeroSection.styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContext>
        <h1>Hi my name is</h1>
        <h2>Brandon Bing Ng</h2>
        <h3>Software Engineer</h3>
        <p>
          I am a software engineer who build things for the web and occasionally
          designing.
        </p>
        <div>
          <Button href="#about">Learn More</Button>
        </div>
      </HeroContext>
      <HeroSocialIconsGroup>
        <HeroSocialIcon href="https://github.com/bng94" target="_blank">
          <FaGithub />
        </HeroSocialIcon>
        <HeroSocialIcon
          href="https://www.linkedin.com/in/bng94"
          target="_blank"
        >
          <FaLinkedin />
        </HeroSocialIcon>
      </HeroSocialIconsGroup>
    </StyledHeroSection>
  );
};
