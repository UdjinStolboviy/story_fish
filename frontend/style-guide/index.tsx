import { Colors, IColors } from './Colors'
import { FontStyles, IFontStyles } from './Fount'

interface IStyleGuide {
    Colors: IColors,
    FontStyles:IFontStyles
}

const StyleGuide : IStyleGuide = {
    Colors,
    FontStyles
}

export default StyleGuide;