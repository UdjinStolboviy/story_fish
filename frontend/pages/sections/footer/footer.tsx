import React from "react";
import Image from "next/image";

// Styles
import { FooterStyled, StyleEmail, StyleSocialList } from "./styles";
import { imageLoader } from "@/components/ImageLoader";

const socialLinks = [
  {
    link: "https://www.lin.com/company/",
    src: "/images/linkedin.svg",
  },
  {
    link: "https://www.im/",
    src: "/images/instagram.svg",
  },
  {
    link: "https://www.facebook.com/mydigicode",
    src: "/images/facebook.svg",
  },
  {
    link: "https://IE582427.11,19.htm",
    src: "/images/glassdoor.svg",
  },
];

const Footer = () => (
  <FooterStyled>
    <nav>
      <StyleEmail>
        <a
          href="mailto:hello@mydigicode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@mydigicode.com
        </a>
      </StyleEmail>
      <StyleSocialList>
        {socialLinks.map((navItem, index) => (
          <li key={navItem.link + index}>
            <a href={navItem.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={navItem.src}
                width={28}
                height={28}
                loader={imageLoader}
              ></Image>
            </a>
          </li>
        ))}
      </StyleSocialList>
    </nav>
    <div>
      <p>©udjin 2011 — 2022</p>
      <ul className="fuuter-privacy">
        <li>
          <a
            href={"https://de.com/privacy-policy/"}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href={"https://.com/terms-of-use/"}
            target="_blank"
            rel="noreferrer"
          >
            Terms of Use
          </a>
        </li>
      </ul>
    </div>
  </FooterStyled>
);
export default Footer;
