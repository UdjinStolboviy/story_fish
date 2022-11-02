import React from "react";

//Components
import ActionLink from "../action-link";

import { StyledLink } from "./styles";
import StyleGuide from "../../style-guide";

interface IProps {
  backgroundColor?: boolean;
  text: string;
  color: string;
}

const FooterAction = ({ backgroundColor = false, color, text }: IProps) => (
  <StyledLink backgroundColor={backgroundColor}>
    <ActionLink
      arrowHeight={50}
      arrowWidth={115}
      href="https://mxxx.com/jobs"
      text={text}
      color={color}
      fontSize={StyleGuide.FontStyles.link.huge.fontSize}
    />
  </StyledLink>
);

export default FooterAction;
