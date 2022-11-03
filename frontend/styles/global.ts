import { css } from "@emotion/react";

export const GlobalStyles = css`
  html,
  body {
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
    background-color: var(--themeBackgroundColor);
    color: var(--themeColor);
  }

 .body-not-scroll {
     overflow: hidden;
 }


 a {
     color: inherit;
     text-decoration: none;
 }

 * {
     box-sizing: border-box;
 }

 body,
 h1,
 h2,
 h3,
 h4,
 p,
 ul,
 ol,
 li,
 figure,
 figcaption,
 blockquote,
 dl,
 dd {
     margin: 0;
     padding: 0;
 }

 ul {
     list-style: none;
 }

 main {
 }

 @media screen and (min-width:320px) and (max-width:740px) {

     h1,
     h2,
     h3 {
         text-align: center;
         overflow: hidden;
         text-overflow: ellipsis;
     }
 }
`;
