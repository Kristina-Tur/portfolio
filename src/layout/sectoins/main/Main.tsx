import React from 'react';
import photoWebp from '../../../assets/images/photo.webp'
import photoGpg from '../../../assets/images/photo.jpg'
import styled from 'styled-components';
import {Link} from '../../../component/Link';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';
import {Circle} from './components/Circle';
import {Cross} from './components/Cross';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Wrapper>
                    <CrossWrapper>
                        <Cross/>
                    </CrossWrapper>
                    <WrapperContent>
                        <Photo></Photo>
                        <Box>
                            <Text>Hello,</Text>
                            <NameTitle>I’m Kristina Tur</NameTitle>
                            <MainTitle>Front-End Developer</MainTitle>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perferendis reprehenderit velit. Animi consequatur debitis eius esse </Desc>
                            <Link href={''}>Download CV</Link>
                        </Box>
                    </WrapperContent>
                    <CircleWrapper>
                        <Circle/>
                    </CircleWrapper>
                </Wrapper>

             {/*   <Element></Element>*/}
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 0 auto;
  
  @media ${Theme.media.tablet}{
    width: fit-content;
  }
`

const CrossWrapper = styled.div`
  position: absolute;
  width: fit-content;
  top: -30px;
  left: 15px;
`

const CircleWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: fit-content;
  right: -5px;
  bottom: -15px;
`

const WrapperContent = styled.div`
  background-image: linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(26, 27, 26, .31);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
  box-shadow: 0 10px 30px #000;

  max-width: 1110px;
  width: 100%;
  min-height: 480px;  
    
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 100px; 

  @media ${Theme.media.desktop}{
    padding: 40px 50px;
  }
  
  @media ${Theme.media.tablet}{
    max-width: 590px;
    /*min-height: 845px;*/
    margin: 0 auto;
    justify-content: center;
  }
`

const Photo = styled.div`
  background-image: image-set('${photoWebp}' type('image/webp'),
  '${photoGpg}' type('image/jpg'));
  background-repeat: no-repeat;
  background-size: cover/*220%*/;
  background-position: 23% 0;
  border-radius: 50%;
  border: 25px solid ${Theme.colors.text.primary};
  
  max-width: 400px;
  width: 100%;
  min-height: 400px;
  

  @media ${Theme.media.tablet}{
    max-width: 330px;
    min-height: 330px;
    margin-bottom: 25px;
  }
`

const Box = styled.div`
  min-height: 400px;
  
  @media ${Theme.media.tablet}{
    min-height: 350px;
  }
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



