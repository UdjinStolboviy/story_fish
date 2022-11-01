import styled from '@emotion/styled';
import StyleGuide from '../../style-guide';

export const StyledLink = styled.div<{ backgroundColor: boolean }>`
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 0;
    
    & div {
        padding: 240px 0;
        z-index: 1;
       
    }
    &::after {
        content: '';
        position: absolute;
        padding: 140px 0;
        top: -150px;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 0;
        
        background-color: ${StyleGuide.Colors.Basic.black900};
        ${({ backgroundColor }) =>
            !backgroundColor &&
            `
        background-image: url("/images/counters-bg.jpg");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        `}
    }
    @media screen and (min-width: 320px) and (max-width: 1300px) {
        background-repeat: no-repeat;
        background-size: 100rem;
        & a {
            transform: translateX(0%);
        }
        & div {
            padding: 100px 0;
            z-index: 1;
        }
        &::after {
            content: '';
            position: absolute;
            padding: 140px 0;
            top: -150px;
            display: block;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: ${StyleGuide.Colors.Basic.black900};
            ${({ backgroundColor }) =>
                !backgroundColor &&
                `
        background-image: url("/images/counters-bg.jpg");
        background-size: 100rem;
        background-position: center;
        background-repeat: no-repeat;
        `}
        }
    }
    @media screen and (max-width: 374px) {
        min-width: 375px;
    }
`;
