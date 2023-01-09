import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --white: rgba(217, 231, 252,1);
    --green: rgba(0, 206, 158, 1); 
    --cyan: rgba(0,255,255);
    --darkCyanBlue: darkCyanBlue: rgba(14, 33, 60);
    --lightNavyBlue: rgba(4, 22, 48, 1);
    --lightBlue: rgba(119, 150, 203);
    --lightShadeBlue: rgba(168, 178, 209);
    --babyBlueEyes: rgba(163, 188, 249);
    --aliceBlue: rgba(227, 242, 253);
    --cobaltBlue: rgba(13, 71, 161);
    --navBgColor: rgba(2, 12, 27, 0.8);
    --bgColor: rgba(2, 12, 27, 1);
    --scrollBarColor: rgba(32,46,70);
    --borderColor: rgba(46,90,136);
    --buttonHoverColor: rgba(192,164,201);
}

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
    color: var(--white);
    background: var(--bgColor);
    font-size: 12px;
}

a{
    text-decoration: none;
    color: var(--green);
    transition: all 250ms ease-in-out;

     &:hover{
        color: var(--cyan);
     }
}

ul{
    list-style: none;
}

hr{
    background: linear-gradient(
        to right,
        var(--aliceBlue) 0%,
        var(--cobaltBlue) 100%
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
    background: rgba(49,67,95);
    border-radius: 20px;
}
/** 
::-webkit-scrollbar-thumb:hover{
    background: var(--scrollBarColor);
}*/

`;
