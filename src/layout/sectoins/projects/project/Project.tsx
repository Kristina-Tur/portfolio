import React from 'react';
import styled from 'styled-components';

type ProjectPropsTitle = {
    src: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsTitle) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={'Project'}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>View project</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 300px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`