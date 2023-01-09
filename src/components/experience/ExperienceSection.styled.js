import styled from "styled-components";

export const StyledTabContainer = styled.div`
  .inner {
    display: flex;
    ${"" /*  max-width: 700px; */}
    ${"" /* added test */}
    margin: 0 3rem;
    @media (max-width: 600px) {
      display: block;
      margin: 0 1.3rem;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

export const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

export const StyledTabButton = styled.button`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors.green};
    outline: 0;
  }
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-left: 2px solid #2e5a88;
  background-color: transparent;
  color: ${(props) => (props.isActive ? props.theme.colors.green : "#c0c2c9")};
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 768px) {
    padding: 0 15px 2px;
    white-space: pre-wrap;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid #123;
    text-align: center;
  }
  &:hover,
  &:focus {
    background-color: #123;
  }
`;

export const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.green};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${(props) => props.theme.colors.green};
      }
    }
  }
  h3 {
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    .company {
      color: ${(props) => props.theme.colors.green};
    }
  }
  .range {
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.lightShadeBlue};
    font-family: "Poppins", sans-serif;
    font-size: 13px;
  }
`;
