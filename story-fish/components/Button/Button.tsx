import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { AppTheme } from "@/styles/themes";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "danger"
  | "success"
  | "warning"
  | "info";

export type Props = {
  children: string;
  color?: Color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColor = (color?: Color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background: #1ea7fd;
        color: #e4ebf5e6;
      `;
    case "secondary":
      return css`
        color: #5e5c64eb;
      `;
    case "tertiary":
      return css`
        background: #1ea7fd;
        color: #e4ebf5e6;
      `;
    case "quaternary":
      return css`
        background: #1ea7fd;
        color: #e4ebf5e6;
      `;
    case "danger":
      return css`
        background: #dc3545e6;
        color: #e4ebf5e6;
      `;
    case "success":
      return css`
        background: #1ea7fd;
        color: #e4ebf5e6;
      `;
    case "warning":
      return css`
        background: #ffca2ce6;
        color: #5e5c64eb;
      `;
    case "info":
      return css`
        background: #1ea7fd;
        color: #e4ebf5e6;
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color }) => getColor(color)};
  ${({ theme }) =>
    `box-shadow: 0.5vmin 0.5vmin 1vmin ${"#504e55"}, -0.5vmin -0.5vmin 1vmin ${"#6c6a73"}`};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 0.5vmin 0.5vmin 1vmin #c8d0e7,
      inset -0.5vmin -0.5vmin 1vmin #ffffff;
  }
`;

Button.defaultProps = {
  color: "primary",
};
