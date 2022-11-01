import React from 'react';

import { StyledLink, Wrapper } from './styles';

interface IProps {
    color: string;
    text: string;
    arrowWidth: number;
    arrowHeight: number;
    fontSize: string;
    href: string;
}

const ActionLink = ({ color, text, arrowWidth, arrowHeight, fontSize, href }: IProps) => (
    <Wrapper>
        <StyledLink color={color} fontSize={fontSize} href={href} target="_blank" rel="noreferrer">
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width={arrowWidth} height={arrowHeight} viewBox="0 0 66 32">
                <path
                    fill={color}
                    d="M66 15.683c-8.587-3.257-15.621-8.741-20.937-15.683 0.082 4.199 1.636 8.57 3.844 12.941h-48.907v5.142h48.907c-2.126 3.685-3.353 7.97-3.68 13.284 6.052-7.199 12.595-12.941 20.773-15.683z"
                />
            </svg>
        </StyledLink>
    </Wrapper>
);

export default ActionLink;
