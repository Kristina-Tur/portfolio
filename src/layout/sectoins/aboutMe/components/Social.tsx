import React from 'react';
import {Icon} from '../../../../component/icon/icon';
import styled from 'styled-components';
import {Theme} from '../../../../styles/Theme';

type SocialPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
}
export const Social:React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
            <List>
                <a href="">
                    <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
                </a>
            </List>
    );
};
const List = styled.a`
  &:hover {
    transition: ${Theme.animations.transition};
    transform: translateY(-5px);
  }
`


