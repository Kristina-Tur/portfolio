import React from 'react';
import sprite from '../../assets/images/svg/sprite.svg'
import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <Svg width={props.width || '55'} height={props.height || '55'} viewBox={props.viewBox || '10 5 105 110'}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </Svg>
    );
};

const Svg = styled.svg`
`


