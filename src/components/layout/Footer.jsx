import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Info,
  StyledFooter,
  FooterSocialIcon,
  FooterSocialIconsGroup,
} from "./Footer.styled.js";

export const Footer = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <StyledFooter>
      <FooterSocialIconsGroup>
        <FooterSocialIcon href="https://github.com/bng94" target="_blank">
          <FaGithub />
        </FooterSocialIcon>
        <FooterSocialIcon
          href="https://www.linkedin.com/in/bng94"
          target="_blank"
        >
          <FaLinkedin />
        </FooterSocialIcon>
      </FooterSocialIconsGroup>

      <Info>Brandon Bing Ng</Info>
      <div>
        &copy; Dec 2021 - {months[new Date().getMonth()]}{" "}
        {new Date().getFullYear()}
      </div>
    </StyledFooter>
  );
};
