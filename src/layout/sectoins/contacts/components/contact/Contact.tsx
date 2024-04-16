import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../../styles/Theme';
import {font} from '../../../../../styles/Common';
import {FlexWrapper} from '../../../../../component/FlexWrapper';

type ContactPropsType = {
    src: string
    title: string
    text: string
}
export const Contact: React.FC<ContactPropsType> = (props: ContactPropsType) => {
    return (
        <FlexWrapper alignItems={'center'} rowGap={'20px'} columnGap={'20px'}>
            <A href={''}>
                <img src={props.src} alt={'Contacts'}/>
            </A>
            <div>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </div>
        </FlexWrapper>
    );
};

const A = styled.a`
&:hover{
  transform: translateY(-5px);
}
`

const Title = styled.h4`
  ${font({color: Theme.colors.text.secondary, FMax: 22, FMin: 18, weight: 500})};
  margin-bottom: 3px;
`
const Text = styled.p`
  ${font({color: Theme.colors.text.secondary, FMax: 18, FMin: 16, weight: 400})};
`

