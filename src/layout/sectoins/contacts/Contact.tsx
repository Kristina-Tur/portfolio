import React from 'react';
import styled from 'styled-components';
import location from '../../../assets/images/svg/location.svg';
import {Theme} from '../../../styles/Theme';

type ContactPropsType = {
    title: string
    text: string
}
export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact>
            <Image src={location}/>
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
  color: ${Theme.colors.text.secondary};
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 3px;
`
const Text = styled.p`
  color: ${Theme.colors.text.secondary};
  font-size: 18px;
  font-weight: 400;
`

