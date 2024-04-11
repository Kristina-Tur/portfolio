import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import backgroundImageWebp from './../../../assets/images/map.webp'
import backgroundImagePng from './../../../assets/images/map.png'
import {Link} from '../../../component/Link';
import {Theme} from '../../../styles/Theme';
import {Container} from '../../../component/Container';
import {Social} from '../../../component/social/Social';
import {font} from '../../../styles/Common';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle color={`${Theme.colors.text.secondary}`}>About me</SectionTitle>
                <Wrapper1>
                <BlurWrapper></BlurWrapper>
                <Wrapper>
                    <WrapperIconList>
                        <Social iconId={'instagramGray'} width={'28'} height={'28'} viewBox={'0 0 24 24'}/>
                        <Social iconId={'telegramGray'} width={'28'} height={'28'} viewBox={'1 0 22 22'}/>
                        <Social iconId={'linkedinGray'} width={'28'} height={'28'} viewBox={'0 0 24 24'}/>
                    </WrapperIconList>
                    <NameTitle>I’m Kristina Tur</NameTitle>
                    <WrapperList>
                        <ListItem>28 years old</ListItem>
                        <ListItem>Higher technological education in the field of garment production</ListItem>
                        <ListItem>Started to get interested in programming in 2023</ListItem>
                        <ListItem>I’am coding with a clean and beautiful problem
                            solving in mind.
                        </ListItem>
                        <ListItem>Languages: English, Russian</ListItem>
                        <ListItem>I live in Brest, Belarus</ListItem>
                    </WrapperList>
                    <Link>Download CV</Link>
                </Wrapper>
                </Wrapper1>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-image: image-set('${backgroundImageWebp}' type('image/webp'),
  '${backgroundImagePng}' type('image/png'));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  
`

const Wrapper1 = styled.div`
  position: relative;
  z-index: 0;

  @media ${Theme.media.tablet}{
    display: flex;
    justify-content: center;
  }
`

const BlurWrapper = styled.div`
  max-width: 560px;
  width: 100%;
  min-height: 562px;
  border-radius: 100px 0;
  border: 2px solid ${Theme.colors.secondary};
  background-image: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);

  position: absolute;
  z-index: -1;

  @media ${Theme.media.tablet}{
    max-width: 490px;
    min-height: 490px;
  }
`

const Wrapper = styled.div`
  max-width: 560px;
  width: 100%;
  border-radius: 100px 0;
  /*border: 2px solid ${Theme.colors.secondary};
  background-image: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);*/
  padding: 30px 40px 65px;
  @media ${Theme.media.tablet}{
    max-width: 490px;
  }
 
`

const WrapperIconList = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-bottom: 20px;
`

const NameTitle = styled.h2`
  ${font({weight: 700, color: Theme.colors.text.secondary, FMax: 60, FMin: 34})};
`

const WrapperList = styled.ul`
  list-style-image: ${Theme.colors.accent};
  margin: 20px 20px 30px;
`

const ListItem = styled.li`
  ${font({weight: 400, color: Theme.colors.text.secondary, FMax: 20, FMin: 16})};
  padding-left: 15px;
  margin-bottom: 10px;
`