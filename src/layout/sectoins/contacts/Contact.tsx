import React from 'react';
import styled from 'styled-components';
import location from '../../../assets/images/location.svg';

type ContactPropsType = {
    title: string
    text: string
}
export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact>
            <Image src={location}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledContact>
    );
};

const StyledContact = styled.div`
`
const Image = styled.img`

`
const Title = styled.h4`

`
const Text = styled.p`

`

