import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

html{
    font-family: "Share Tech Mono", monospace;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
    font-size: 12px;
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    transition: all 250ms ease-in-out;

     &:hover{
        color: ${({ theme }) => theme.colors.cyan};
     }
}

ul{
    list-style: none;
}

hr{
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.aliceBlue} 0%,
        ${({ theme }) => theme.colors.colbatBlue} 100%
    );
    border:0;
    height: 1px
}

.react-pdf__Page__canvas {
    width: 100% !important;
    height: auto !important;
}

/* Custom ScrollBar */

::-webkit-scrollbar{
    width: 4px;
  @media (max-width: 600px) {
    display: none;
  }

}
::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 20px;
}
/** 
::-webkit-scrollbar-thumb:hover{
    background: #202e46;
}*/

`;
