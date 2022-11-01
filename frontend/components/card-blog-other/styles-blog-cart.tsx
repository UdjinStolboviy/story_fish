import styled from '@emotion/styled';
import StyleGuide from '../../style-guide';

export const LargeCardStyledBlog = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    margin-bottom: 100px;

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
        height: 500px;
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

    & div.card-img {
        width: 100%;
        max-width: 650px;
        height: auto;
        border-radius: 50% 50% 0 0;
        overflow: hidden;
        & img {
            min-width: 100%;
            min-height: 100%;
            flex-shrink: 0;
            transition: transform 0.5s ease;
        }
        & img:hover {
            transform: scale(1.2);
        }
    }
    @media screen and (min-width: 320px) and (max-width: 739px) {
        flex-direction: column-reverse;
        width: 100%;
        & h3 {
            width: 320px;
            font-size: 30px;
            line-height: 40px;
        }
        & div.card-wrapper {
            width: 100%;
            min-width: 320px;

            & div {
                display: flex;
                align-items: center;
                width: 100px;
                height: 100px;
                margin-left: 10px;
            }
            & p {
                margin-left: -200px;
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
            width: 100%;
            min-width: 320px;
            margin-left: auto;
            margin-right: auto;
        }
        & div.card-img {
            width: 100%;
            margin-bottom: 10px;
        }
    }
    @media screen and (min-width: 740px) and (max-width: 1200px) {
        width: 100%;
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
export const SmallCardStyledBlog = styled.div`
    display: flex;
    flex-direction: column-reverse;
    text-align: left;
    max-width: 350px;

    & span.card-tag {
        text-transform: uppercase;
        color: ${StyleGuide.Colors.Brand.purple};
        font-weight: 400;
        font-size: 14px;
        font-style: normal;
        line-height: 24px;
    }
    & h3 {
        text-align: left;
        font-size: 24px;
        font-weight: 450;
        line-height: 32px;
        width: 350px;
        margin: 0;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    & div.card-wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        & div {
            display: flex;
            align-items: center;

            & div {
                border-radius: 50%;
                margin-top: 10px;
            }
            & p {
                flex: 1;
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
        position: relative;
        height: 100%;
        width: 350px;
        border-radius: 50% 50% 0 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        object-fit: cover;
        z-index: 4;
        & img {
            min-width: 100%;
            min-height: 100%;
            flex-shrink: 0;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        & img:hover {
            transform: scale(1.2);
        }
    }

    @media screen and (min-width: 320px) and (max-width: 739px) {
        align-items: center;
        & h3 {
            max-width: 320px;
        }
        & div.card-wrapper div {
            align-items: center;
            justify-content: center;
            height: 100px;
        }
        & div.card-img {
            width: 320px;
            margin-bottom: 20px;
        }
    }
`;
