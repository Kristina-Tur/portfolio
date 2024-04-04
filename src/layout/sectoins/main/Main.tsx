import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from '../../../component/FlexWrapper';
import styled from 'styled-components';
import {Link} from '../../../component/Link';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import {NameTitle} from '../../../component/NameTitle';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <Photo></Photo>
                    <Box>
                        <Text>Hello,</Text>
                        <NameTitle>I’m Kristina Tur</NameTitle>
                        <MainTitle>Front-End Developer</MainTitle>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perferendis reprehenderit velit. Animi consequatur debitis eius esse </Desc>
                        <Link href={'#'}>Download CV</Link>
                    </Box>
                </Wrapper>
                <Element></Element>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;

  /*position: relative;

    &::after,
  &::before {
    content: '';
    position: absolute;
    top: 22%;
    left: 18%;
    width: 12px;
    height: 75px;
    background-image: ${Theme.colors.accent};
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }*/
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 40px 100px;

  background: linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;
  
  position: relative;
  z-index: 1;
`

const Element = styled.div`
  position: relative;
  left: 940px;
  bottom: 155px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${Theme.colors.primaryBg};
  margin-bottom: -150px;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    bottom: -25px;
    left: -25px;
    right: -25px;
    background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 50%;
    z-index: -1;
  }
`

const Photo = styled.div`
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.secondary};
`

const Box = styled.div`
  height: 400px;
`

const Text = styled.span`
  color: ${Theme.colors.text.primary};
  font-size: 18px;
  line-height: 1.6;
`

const MainTitle = styled.h1`
  color: ${Theme.colors.text.accent};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 50px;
  margin-bottom: 10px;
`

const Desc = styled.p`
  color: ${Theme.colors.secondary};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 410px;
  width: 100%;
  margin-bottom: 45px;
`


