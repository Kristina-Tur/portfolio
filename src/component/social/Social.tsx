import React from 'react';
import {Icon} from '../icon/icon';

type SocialPropsType = {
    iconId: string
    height?: string
    width?: string
    viewBox?: string
}
export const Social = (props: SocialPropsType) => {
    return (
            <li>
                <a href="">
                    <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
                </a>
            </li>
    );
};


