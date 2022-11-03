import StyleGuide from "@/style-guide";
import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;

  & div {
    width: 100%;
    transform: translateY();
    padding: 0 96px;
    border-radius: 100px 100px 0 0;
    color: ${({ theme }) => theme.font.regular};
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
  }
  & nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #000000;
  }
  & div {
    padding-top: 32px;
    padding-bottom: 32px;
    margin: 0 auto;
    display: flex;
    & ul {
      display: flex;
      margin-left: auto;
      & li:last-of-type {
        margin-left: 50px;
      }
      & li {
        & a {
          text-decoration: none;
          color: ${StyleGuide.Colors.Basic.black};
          transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        }
        & a:hover {
          color: #9e279b;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 739px) {
    padding: 0 46px;
    nav {
      flex-direction: column;
      align-items: center;
    }
    ul {
      margin: 0 auto;
    }
    & p {
      margin-bottom: 24px;
    }
    & div {
      flex-direction: column;
      align-items: center;
      padding-bottom: 34px;
    }
  }
  @media screen and (max-width: 374px) {
    min-width: 375px;
  }
`;

export const StyleSocialList = styled.ul`
  margin: 0 auto;
  z-index: 4;
  max-width: 1240px;
  display: flex;
  width: 60%;
  justify-content: flex-end;

  & li {
    margin-right: 50px;
  }
  & li:last-of-type {
    margin-right: 0;
  }
  @media screen and (min-width: 740px) and (max-width: 1200px) {
    margin: 0 auto;
    z-index: 4;
    max-width: 1240px;
    display: flex;
    width: 50%;
    text-align: start;
    justify-content: flex-end;

    & li {
      margin-right: 50px;
    }
    & li:last-of-type {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 740px) {
    padding: 30px 15px;
    width: 100%;
    margin: 0 auto;
    & li:first-of-type {
      margin-left: auto;
    }
    & li:last-of-type {
      margin-right: auto;
    }
    & li {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 380px) {
    padding: 30px 15px;
    width: 100%;
    margin: 0 auto;
    & li:first-of-type {
      margin-left: auto;
    }
    & li:last-of-type {
      margin-right: auto;
    }
    & li {
      margin-right: 30px;
    }
  }
`;
export const StyleEmail = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;

  & a {
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #9e279b;
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    width: 40%;
    & a {
      font-size: ${StyleGuide.FontStyles.title.h6.fontSize};
    }
  }
`;
