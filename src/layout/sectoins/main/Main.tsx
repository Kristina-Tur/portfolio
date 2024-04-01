import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from '../../../component/FlexWrapper';
import styled from 'styled-components';
import {Button} from '../../../component/Button';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import rec from './../../../assets/images/svg/Ellipse.svg'
import {NameTitle} from '../../../component/NameTitle';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
              <Element>
                <img src={rec} alt={''}/>
              </Element>
                <Wrapper>
                    <Photo></Photo>
                    <Box>
                        <Text>Hello,</Text>
                        <NameTitle>I’m Kristina Tur</NameTitle>
                        <MainTitle>Front-End Developer</MainTitle>
                        <Button>Download CV</Button>
                    </Box>
                </Wrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 80vh;
  display: flex;

  position: relative;
  
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
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  max-height: 500px;
  margin-top: 20px;
  
  background: linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;
 
  position: relative;
`
const Element = styled.div`
  /*width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 25px solid transparent;
  background-image: linear-gradient(270deg, #13ADC7, #945DD6), radial-gradient(circle at center, transparent 50%, white 50%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 0;*/
  position: absolute;
  bottom: 11%;
  right: 13%;
`

const Photo = styled.div`
  background-image: url(${photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.secondaryBg};
  position: relative;
`

const Box = styled.div`

`

const Text = styled.span`
  color: ${Theme.colors.text.primary};
  font-size: 18px;
  line-height: 1.6;
`

const MainTitle = styled.h1`
  color: #73c9ec;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 50px;
  margin-bottom: 40px;
`


