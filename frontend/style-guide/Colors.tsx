
export const Colors : IColors = {
    Basic: {
        white: "#FFFFFF",
        black:"#000000",
        black900: "#1A1A1A",
        black60:"#F0F0F0",
    },
    Brand: {
        purple: "#A057A2",
        blue: "#3D5DA9",
        green: "#80C242",
        red: "#E9262A",
        orange: "#FF810C",
        yellow:"#FFCD0C"
    },
    Gradient: {
        purple: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #A057A2",
        blue: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #3D5DA9",
        red: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #E9262A",
        green: " linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #80C242",
        yellow: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #FFCD0C",
        orange:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #FF810C"        
    }
}

export interface IColors {
    Basic: IBasicColors;
    Brand: IBrandColors;
    Gradient: IGradientColors;
}

interface IBasicColors {
    white: string;
    black:string;
    black900: string;
    black60:string;
}

interface IBrandColors {
    purple: string;
    green: string;
    red: string;
    blue: string;
    yellow: string;
    orange: string;
}

interface IGradientColors {
    purple: string;
    green: string;
    red: string;
    blue: string;
    yellow: string;
    orange: string;
}