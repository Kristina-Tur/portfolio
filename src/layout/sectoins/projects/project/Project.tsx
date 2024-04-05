import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../styles/Theme';
import {FlexWrapper} from '../../../../component/FlexWrapper';
import project1 from './../../../../assets/images/project.webp'

type ProjectPropsTitle = {
    src: string
    srcSet: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsTitle) => {
    return (
        <StyledProject>
            <picture>
                <source srcSet={props.srcSet} type='image/webp' />
                    <source srcSet={props.src} type='image/png' />
                        <Image src={props.src} alt={'Project'} />
            </picture>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <FlexWrapper justifyContent={'space-around'}>
                <Link href={'#'}>View project</Link>
                <Link href={'#'}>Code</Link>
            </FlexWrapper>
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
  box-shadow: 0 8px 32px 0 ${Theme.colors.border.projectBoxShadow};

  position: relative;
`

const Title = styled.h3`
  color: ${Theme.colors.secondary};
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  background-image: ${Theme.colors.translucentAccent};
  padding: 10px;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%);
  transform-origin: top left;
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

