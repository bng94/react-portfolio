import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem;
  color: ${(props) => props.theme.colors.lightBlue};
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FooterNav = styled.div`
  a {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin: 0;
  }
`;

export const Info = styled.div`
  margin: 0.7rem 0;
`;

export const FooterSocialIconsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FooterSocialIcon = styled.a`
  display: none;
  font-size: 30px;
  border: none;
  align-items: center;
  justify-content: space-around;
  svg {
    color: ${(props) => props.theme.colors.lightBlue};
    transition: all 650ms ease-in-out;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: flex;
  }
`;
