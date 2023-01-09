import styled, { keyframes } from "styled-components";

const float = keyframes`
from{
 transform: translate(0px, 0px)
}
65%{
    transform: translate(0px, 10px)
}
to{
    transform: translate(0px, 0px)
}
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-size: 19px;

  p {
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      margin: 0 2rem 2rem 0;

      svg {
        margin-right: 0.5rem;
      }
    }

    @media (max-width: ${(props) => props.theme.mobile}) {
      align-items: flex-start;
      flex-direction: column;

      a {
        margin: 0 0 2rem 0;
        font-size: 16px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    width: 70%;
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    text-align: left;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
