export const FontStyles: IFontStyles = {
    title: {
        h1: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "70px",
            lineHeight: "84px",
        },
        h2: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "64px",
            lineHeight: "76px",
        },
        h3: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "60px",
        },
        h4: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "36px",
            lineHeight: "44px",
        },
        h5: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "32px",
        },
        h6: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "28px",
        }

    },
    tab: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "24px"
    },
    subheading: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "36px"
    },
    quote: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "58px"
    },
    paragraph: {
        paragraph1: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "28px"
        },
        paragraph2: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "24px"
        }
    },
    counter: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "80px",
        lineHeight: "96px"
    },
    link: {
        huge: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "72px",
            lineHeight: "86px"
        },
        defoult: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "17px",
            lineHeight: "24px"
        },
        nav: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "15px",
            lineHeight: "20px"
        },
        small: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px"
        }
    },
    percentageIncrease: "10%",
}

export interface IFontStyles {
    title: ITitle,
    subheading: IFontStyle,
    quote: IFontStyle,
    paragraph: {
        paragraph1: IFontStyle,
        paragraph2: IFontStyle
    },
    tab: IFontStyle,
    counter: IFontStyle,
    link: ILink,
    percentageIncrease: string;
}

interface ITitle {
    h1: IFontStyle;
    h2: IFontStyle;
    h3: IFontStyle;
    h4: IFontStyle;
    h5: IFontStyle;
    h6: IFontStyle;
}
interface ILink {
    defoult: IFontStyle;
    small: IFontStyle;
    huge: IFontStyle;
    nav: IFontStyle;
}

interface IFontStyle {
    fontStyle: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: string;
}