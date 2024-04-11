import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

type ContactPropsType = {
    src: string
    title: string
    text: string
}
export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact>
            <Image src={props.src} />
            <div>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`

`
const Title = styled.h4`
  ${font({color: Theme.colors.text.secondary, FMax: 22, FMin: 18, weight: 500})};
  margin-bottom: 3px;
`
const Text = styled.p`
  ${font({color: Theme.colors.text.secondary, FMax: 18, FMin: 16, weight: 400})};
`

