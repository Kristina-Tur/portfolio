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
    /*display: inline-block;
  width: 55px;
  height: 55px;
  border: 2px solid black;
  background-color: ${Theme.colors.text.secondary};
  border-radius: 50%;

  position: absolute;
  transform: translate(95%, -82%);*/
  /*width: 100%; !* Задаем ширину изображения *!
  height: 100%; !* Задаем высоту изображения *!
  object-fit: contain;*/
  &::placeholder{
    flex-direction: column-reverse;
  }
`


