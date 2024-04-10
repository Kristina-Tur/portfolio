import React from 'react';
import photoWebp from '../../../assets/images/photo.webp'
import photoGpg from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import {Link} from '../../../component/Link';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <ElementCross></ElementCross>
                {/*<BgWrapper></BgWrapper>*/}
                <Wrapper>
                    <Photo></Photo>
                    <Box>
                        <Text>Hello,</Text>
                        <NameTitle>I’m Kristina Tur</NameTitle>
                        <MainTitle>Front-End Developer</MainTitle>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perferendis reprehenderit velit. Animi consequatur debitis eius esse </Desc>
                        <Link href={''}>Download CV</Link>
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
`
const BgWrapper = styled.div`
  background-image: linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;
  
  max-width: 1110px; 
  width: 100%;
  min-height: 480px;
  
  position: absolute;
  z-index: 1;
  
  @media ${Theme.media.desktop}{
    max-width: 590px;
    width: 100%;
    min-height: 845px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*flex-wrap: wrap;*/
  /*max-width: 1110px;*/
  padding: 40px 100px; 

  position: relative;
  z-index: 1;

  @media ${Theme.media.desktop}{
    flex-direction: column;
  }
`

const Element = styled.div`
  position: relative;
  z-index: 0;
  left: 990px;
  bottom: 125px;
  width: 100px;
  height: 100px;
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

const ElementCross = styled.div`
  position: relative;

  &::after,
  &::before{
    content: '';
    position: absolute;
    z-index: -1;
    left: 50px;
    top: -10px;
    width: 14px;
    height: 74px;
    background-image: linear-gradient(147deg, rgba(57, 57, 57, 0.60) -6.76%, rgba(148, 93, 214, 0.5) 102.96%);
  }
  
  &::after {
    transform: rotate(-135deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`

const Photo = styled.div`
  background-image: image-set('${photoWebp}' type('image/webp'),
  '${photoGpg}' type('image/jpg'));
  background-repeat: no-repeat;
  background-size: cover/*220%*/;
  background-position: 32% 0;
  max-width: 400px;
  width: 100%;
  min-height: 400px;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.text.primary};

  /*@media ${Theme.media.desktop}{
    max-width: 350px;
    min-height: 350px;
    margin-right: 30px;
  }*/
`

const Box = styled.div`
  height: 400px;
`

const Text = styled.span`
  ${font({weight: 400, color: Theme.colors.text.primary, lineHeight: 1.6, FMax: 18, FMin: 14})};

  /*@media ${Theme.media.desktop}{
    text-align: center;
  }*/
`

const NameTitle = styled.h2`
  ${font({weight: 700, color: Theme.colors.text.primary, FMax: 60, FMin: 34})};

  /*@media ${Theme.media.desktop}{
    text-align: center;
  }*/
`

const MainTitle = styled.h1`
  ${font({color: Theme.colors.text.accent, letter: '1px', FMax: 30, FMin: 20})};
  margin: 15px 0 18px;
`

const Desc = styled.p`
  ${font({weight: 400, lineHeight: 1.5, FMax: 20, FMin: 14})};
  max-width: 410px;
  width: 100%;
  margin-bottom: 45px;

  /*@media ${Theme.media.desktop}{
    margin-bottom: 30px;
  }*/
`



