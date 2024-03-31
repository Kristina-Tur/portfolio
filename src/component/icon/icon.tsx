import React from 'react';
import sprite from '../../assets/images/svg/sprite.svg'
import styled from 'styled-components';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <Svg width={props.width || '55'} height={props.height || '55'} viewBox={props.viewBox || "0 0 314 314"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${sprite}#${props.iconId}` }/>
        </Svg>
    );
};

const Svg = styled.svg`
`

