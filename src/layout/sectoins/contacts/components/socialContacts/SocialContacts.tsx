import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../../styles/Theme';

type SocialPropsType = {
    iconId: any
}
export const SocialContacts: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <List>
            <a href="">
                {props.iconId}
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