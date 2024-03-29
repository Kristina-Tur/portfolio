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
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  max-height: 500px;
  margin-top: 140px;

  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;
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
    display: block;
    width: 30%;
    height: 3px;
    margin: -15px 0;
    
    background-color: #73c9ec;
    border-radius: 4px;
    
    position: absolute;
    bottom: 0;
    right: 35%;
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


