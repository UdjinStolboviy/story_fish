import styled from '@emotion/styled';
import StyleGuide from '../../style-guide';

export const LargeCardStyled = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    margin-bottom: 100px;
    & .card-container {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        margin-bottom: 100px;
    }
    & h3 {
        font-family: inherit;
        color: ${StyleGuide.Colors.Basic.black};
        font-weight: ${StyleGuide.FontStyles.title.h3.fontWeight};
        font-size: ${StyleGuide.FontStyles.title.h3.fontSize};
        font-style: ${StyleGuide.FontStyles.title.h3.fontStyle};
        line-height: ${StyleGuide.FontStyles.title.h3.lineHeight};
        text-align: left;
        margin-bottom: 55px;
    }

    & div.card-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 50%;
        margin-right: 20px;
        max-height: 500px;
        justify-content: center;

        & div {
            display: flex;
            align-items: center;
        }
        & p {
            margin-left: 20px;
            & span {
                display: block;
                font-size: 20px;
            }

            & span:last-of-type {
                margin-top: 5px;
                font-size: 14px;
            }
        }
        & img {
            min-width: 100%;
            min-height: 100%;
            flex-shrink: 0;
        }
    }

    & div.card-container:hover {
        & .card-img {
            img {
                transform: scale(1.2);
            }
        }
    }

    & div.card-img {
        width: 100%;
        max-width: 650px;
        height: auto;
        border-radius: 50% 50% 0 0;
        //overflow: hidden;

        & img {
            min-width: 100%;
            min-height: 100%;
            flex-shrink: 0;
            transition: transform 0.5s ease;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 739px) {
        margin-bottom: -30px;
        max-width: 739px;
        & .card-container {
            flex-direction: column-reverse;
            width: 100%;
        }

        & h3 {
            width: 100%;
            font-size: 25px;
            line-height: 40px;
            margin-bottom: 20px;
        }
        & div.card-wrapper {
            max-width: 85%;

            & div {
                display: flex;
                width: 100%;
            }
            & p {
                width: 270%;
                margin-left: 0px;

                & span {
                    display: block;
                    font-size: 20px;
                }

                & span:last-of-type {
                    margin-top: 5px;
                    font-size: 14px;
                }
            }
        }
        & div.card-wrapper div {
            min-width: 65px;
        }
        & div.card-img {
            width: 93%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
        }
    }
    @media screen and (min-width: 740px) and (max-width: 1200px) {
        & .card-container {
            width: 100%;
        }

        & h3 {
            width: 400px;
            font-size: 40px;
            line-height: 50px;
        }
        & div.card-img {
            width: 100%;
            margin-bottom: 50px;
        }
    }
`;

export const SmallCardStyled = styled.div`
    & .card-container {
        display: flex;
        flex-direction: column-reverse;
        text-align: left;
        max-width: 400px;
        border-radius: 50% 50% 0 0;
    }

    & span.card-tag {
        text-transform: uppercase;
        color: ${StyleGuide.Colors.Brand.purple};
        font-weight: 400;
        font-size: 14px;
        font-style: normal;
        line-height: 24px;
    }
    & h3 {
        margin-top: 10px;
        min-height: 50px;
        position: absolute;
        width: 400px;
    }
    & div.card-wrapper {
        display: flex;
        flex-direction: column;

        & div {
            display: flex;
            align-items: center;
            margin-top: 60px;
            margin-bottom: 28px;

            & div {
                border-radius: 50%;
            }

            & p {
                margin-top: 30px;
                justify-content: center;
                align-items: center;
                margin-left: 20px;
                max-width: 250px;
            }
            & span {
                display: block;
                font-weight: ${StyleGuide.FontStyles.subheading.fontWeight};
                font-size: ${StyleGuide.FontStyles.subheading.fontSize};
                font-style: ${StyleGuide.FontStyles.subheading.fontStyle};
                line-height: ${StyleGuide.FontStyles.subheading.lineHeight};
            }
            & span:last-of-type {
                font-weight: 400;
                font-size: 14px;
                font-style: normal;
                line-height: 24px;
            }
        }
    }
    & div.card-img {
        // width: 400px;
        position: relative;
        height: 100%;
        width: 400px;
        border-radius: 50% 50% 0 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 28px;
        object-fit: cover;
        z-index: 4;

        & img {
            min-width: 100%;
            height: 100%;
            flex-shrink: 0;
            object-fit: cover;
            border-radius: 50% 50% 0 0;
            transition: transform 0.5s ease;
        }
        & img:hover {
            transform: scale(1.2);
            border-radius: 50% 50% 0 0;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 739px) {
        & .card-container {
            align-items: center;
        }

        & h3 {
            max-width: 320px;
            position: relative;
            width: 100%;
        }
        & div.card-wrapper div {
            align-items: center;

            height: 120px;
            margin-top: 0px;
            & p {
                margin-top: -20px;
            }
        }
        & div.card-img {
            width: 320px;
        }
    }
`;
