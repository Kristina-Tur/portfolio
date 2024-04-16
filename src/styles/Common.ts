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
    font-size: calc( clamp( ${FMin}px, (100vw - 576px)/(1440 - 576) * (${FMax} - ${FMin}) + ${FMin}px, ${FMax}px) );
`