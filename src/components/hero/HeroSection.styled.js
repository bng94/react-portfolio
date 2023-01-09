import styled, { keyframes } from "styled-components";

const typing = keyframes`
0%{
    width: 0ch;
},
100%{
    width: 31ch;
}
`;

const blink = keyframes`
0%{
    border-right: 4px solid rgba(255,255,255,0)
},
100%{
    border-right: 4px solid rgba(255,255,255,1)
}
`;

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
    transform: translateY(0)
}
40% {
    transform: translateY(-30px)
}
60% {
    transform: translateY(-15px)
}
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  padding: 10rem 0 5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const HeroContext = styled.div`
  width: 100%;
  max-width: 58rem;
  color: var(--white);

  h1 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 200;
  }
  h2 {
    font-size: 5rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    width: 15.2ch;
    animation: ${typing} 5s steps(31), ${blink} 1s ease-in-out 5.5s infinite;
    border-right: 5px solid rgba(255, 255, 255, 1); /** this does the blink effect */
  }
  h3 {
    font-size: 3rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      var(--aliceBlue) 0%,
      var(--cobaltBlue) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.5rem;
    max-width: 500px;
  }
  div {
    margin: 2.5rem 0;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    h2 {
      font-size: 2.5rem;
      width: 15.3ch;
    }
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;

  svg {
    font-size: 30px;
    color: var(--white);
    animation: ${bounce} 2s infinite 8s;

    &:hover {
      color: var(--aliceBlue);
    }
  }
`;

export const HeroSocialIconsGroup = styled.div`
  position: fixed;
  right: 20px;

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: none;
  }
`;

export const HeroSocialIcon = styled.a`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;

  svg {
    color: var(--lightBlue);
    transition: all 650ms ease-in-out;
  }

  &:hover {
    svg {
      animation: ${rotate} 1.5s linear infinite;
      color: var(--aliceBlue);
    }
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: none;
  }
`;
