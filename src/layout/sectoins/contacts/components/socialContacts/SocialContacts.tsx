import React from 'react';
import styled from 'styled-components';

type SocialPropsType = {
    iconId: any
}
export const SocialContacts:React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <li>
            <Link href="">
                {props.iconId}
            </Link>
        </li>
    );
};

const Link = styled.a`
&:hover{
  transform: translateY(-5px);
}
`