import React from 'react';

type SocialPropsType = {
    iconId: any
}
export const SocialContacts:React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <li>
            <a href="">
                {props.iconId}
            </a>
        </li>
    );
};