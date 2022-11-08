import { forwardRef, ForwardedRef, FC, MouseEvent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { boxShadow, transition } from "@/components/styles";
import { Icon, Props as IconProps } from "@/components/Icon";

type ButtonProps = { size: string };

const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}
  border-radius: 50%;

  ${transition()};

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}

  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }

  &:hover {
    opacity: 0.9;
  }
`;

export type Props = {
  /** onClick callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<IconProps, "ref">;

export const IconButton: FC<Props> = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ onClick, ...props }, ref) => (
    <Button
      onClick={onClick}
      // eslint-disable-next-line react/prop-types
      size={`${(props.size || 2) * 2}rem`}
      // eslint-disable-next-line react/prop-types
      title={props.name}
      ref={ref as ForwardedRef<HTMLButtonElement>}
    >
      <Icon {...props} />
    </Button>
  )
);

IconButton.displayName = "IconButton";
