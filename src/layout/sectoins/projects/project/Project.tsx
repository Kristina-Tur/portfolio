import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../styles/Theme';
import {FlexWrapper} from '../../../../component/FlexWrapper';

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
            <FlexWrapper justifyContent={'space-around'}>
                <Link href={'#'}>View project</Link>
                <Link href={'#'}>Code</Link>
            </FlexWrapper>
            {/*</StyledProject2>
            <StyledProject3></StyledProject3>*/}
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 300px;
  height: 510px;
  width: 100%;
  border: 1px solid ${Theme.colors.neutral};
  border-radius: 26px;
  text-align: center;

  position: relative;
`

const Title = styled.h3`
  color: ${Theme.colors.text.primary};
  font-size: 30px;
  font-weight: 700;

  position: absolute;
  top: 157px;
  left: 100px;
`

const Box = styled.div`
`

const Image = styled.img`
  width: 100%;
  border-radius: 26px 26px 0 0;
  margin-bottom: 40px;


`


const Text = styled.p`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
  margin-bottom: 35px;
`

const Link = styled.a`
  color: ${Theme.colors.text.primary};
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid ${Theme.colors.text.accent};
  border-radius: 83px;
  padding: 5px 25px;

  &:hover {
    background-image: ${Theme.colors.accent};
    border-bottom: none;
  }
`

