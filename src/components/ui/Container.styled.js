import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 5rem;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0 10vw;
  }
`;
