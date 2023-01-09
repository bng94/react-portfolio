import styled from "styled-components";

export const Button = styled.a`
  background: ${({ primary }) => (primary ? "var(--green)" : "none")};
  color: ${({ primary }) => (primary ? "var(--white)" : "var(--green)")};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 2px solid var(--green);
  border-radius: 5px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${({ primary }) => (primary ? "none" : "var(--green)")};
    color: var(--white);
  }
`;
