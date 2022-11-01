import styled from '@emotion/styled';

export const Wrapper = styled.div`
        width: 100%;
        display: flex;
      align-items: center;
    justify-content: center;
    
`;

export const StyledLink = styled.a<{ color: string; fontSize: string }>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        margin-left: 30px;
      
        transform: translate(0%);
    }
    &:hover,
    &:focus {
        & svg {
            animation-name: infinityMovements;
            animation-duration: 1.3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;

            @keyframes infinityMovements {
                0% {
                    transform: translate(30%, 0%);
                }
                50% {
                    transform: translate(10%, 0%);
                }
                100% {
                    transform: translate(30%, 0%);
                }
            }
        }
    }

    @media screen and (min-width: 320px) and (max-width: 739px) {
        font-size: 20px;
        svg {
            width: 2em;
            height: 1em;
        }
    }
    @media screen and (min-width: 740px) and (max-width: 1200px) {
        font-size: 20px;
        svg {
            width: 3em;
            height: 1em;
        }
    }
`;
