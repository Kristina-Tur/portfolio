import {Theme} from './Theme';

type fontPropsType = {
    weight?: number
    color?: string
    lineHeight?: number
    letter?: string
    FMax?: number
    FMin?: number
}

export const font = ({weight, color, lineHeight, letter, FMax, FMin}: fontPropsType) => `
    font-weight: ${weight || 600};
    color: ${color || Theme.colors.secondary};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${letter || undefined};
    font-size: calc( (100vw - 375px)/(1280 - 375) * (${FMax} - ${FMin}) + ${FMin}px);
`