import styled from "styled-components";

export const Section = styled.section`
  min-height: 90vh;
  width: ${props => props.id === "about" ? '100vw' : '100%'};
  max-width: ${props => props.id === "about" && '100%'};
  padding: ${props => props.id === "about" ? '10rem 0 5rem' : '10rem 0 5rem 0'};
  display: ${props => props.id === "about" && 'flex'};
  flex-direction: ${props => props.id === "about" && 'column'};
`;