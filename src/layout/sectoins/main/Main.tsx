import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from '../../../component/FlexWrapper';
import styled from 'styled-components';
import {Button} from '../../../component/Button';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <Photo></Photo>
                    <Box>
                        <Text>Hello,</Text>
                        <Title>I’m Kristina Tur</Title>
                        <MainTitle>Front-End Developer</MainTitle>
                        <Button>Download CV</Button>
                    </Box>
                </Wrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 90vh;
  display: flex;

  position: relative;

&::before, 
&::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px; /* Ширина линии крестика */
  height: 80px; /* Длина линии крестика */
  background-image: ${Theme.colors.accent};
}

&::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

&::after {
  transform: translate(-50%, -50%) rotate(-135deg);
}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  max-height: 500px;
  margin-top: 100px;

  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;
  
  position: relative;
  z-index: 0;
  
  &::before{
    content: '';
    border-image: repeating-linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%) 1;
    border: 25px solid;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    
    position: absolute;
    bottom: 0;
    right: 0;
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
  border: 25px solid ${Theme.colors.secondaryBg};
`

const Box = styled.div`

`
const Text = styled.span`
  color: ${Theme.colors.text.primary};
  font-size: 18px;
  line-height: 1.6;
`
const Title = styled.h2`
  color: ${Theme.colors.text.primary};
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;
  margin-bottom: 30px;
  
  position: relative;
  
  &::before{
    content: '';
    display: inline-block;
    width: 120px;
    height: 3px;
    background-color: #73c9ec;
    border-radius: 4px;
    
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`
const MainTitle = styled.h1`
  color: #73c9ec;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 50px;
  margin-bottom: 40px;
`


