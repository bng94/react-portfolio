import styled from "styled-components";

export const NoteworthyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    grid-template-columns: auto;
  }
`;

export const SingleNoteworthyProjects = styled.div`
  min-height: 20rem;
  border-radius: 7px;
  background: rgba(4, 20, 44, 1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  padding: 1.4rem;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-1rem);
  }

  h1 {
    font-size: 2rem;
    margin: 1.5rem 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.aliceBlue} 0%,
      ${(props) => props.theme.colors.colbatBlue} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: ${(props) => props.theme.colors.white};
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    a {
      color: ${(props) => props.theme.colors.white};
      &:hover {
        color: ${(props) => props.theme.colors.green};
      }
    }
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    margin: 0 0 2rem 0;
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  font-weight: 200;
  font-size: 5rem;
  justify-content: space-between;
  align-items: start;
  color: ${(props) => props.theme.colors.babyBlueEyes};
`;

export const SvgIconLink = styled.a`
  width: 20px;
  display: flex;
  place-self: center;
  height: 20px;
  color: ${(props) => props.theme.colors.babyBlueEyes};
  &:hover {
    color: ${(props) => props.theme.colors.green};
  }

  svg {
    width: inherit;
    height: inherit;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-right: 1.5rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  height: 100%;
  color: ${(props) => props.theme.colors.lightBlue};

  span {
    display: inline-block;
    padding: 7px 7px 0 0;
    border-radius: 5px;
    font-size: 14px;
    margin-right: 0.8rem;
  }
`;
