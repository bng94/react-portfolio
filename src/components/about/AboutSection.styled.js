import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`;

const wave = keyframes`
0%{
    transform: rotate(0deg)
}
10%{
    transform: rotate(14deg)
}
20%{
    transform: rotate(-8deg)
}
30%{
    transform: rotate(14deg)
}
40%{
    transform: rotate(-4deg)
}
50%{
    transform: rotate(10deg)
}
60%{
    transform: rotate(0deg)
}
100%{
    transform: rotate(0deg)
}
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5rem;
  position: relative;

  @media (max-width: ${(props) => props.theme.mobile}) {
    margin-bottom: 4rem;
  }
`;

export const StyledImage = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;

export const DarkCircle = styled.div`
  height: 15.5rem;
  width: 15.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  background: ${(props) => props.theme.colors.navyBlue};
`;

export const GradientCircle = styled.div`
  height: 15.8rem;
  width: 15.8rem;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  animation: ${rotate} 5s linear infinite;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.aliceBlue} 0%,
    ${(props) => props.theme.colors.green} 50%,
    ${(props) => props.theme.colors.colbatBlue} 100%
  );
`;

export const AboutContent = styled.div`
  flex: 1 1;
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    text-align: left;
    margin-bottom: 1.45rem;
    span {
      color: ${(props) => props.theme.colors.lightBlue};
    }
    ul {
      display: grid;
      grid-template-columns: auto auto;
      width: 400px;
      max-width: 90%;
    }
    li:before {
      content: "•";
      color: rgba(0, 206, 158, 1);
    }
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const StyledEmoji = styled.span`
  display: inline-block;
  animation: ${wave} 3s infinite;
  transform-origin: 70% 70%;
`;
