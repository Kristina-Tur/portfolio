import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import backgroundImageWebp from './../../../assets/images/map.webp'
import backgroundImagePng from './../../../assets/images/map.png'
import {Link} from '../../../component/Link';
import {Theme} from '../../../styles/Theme';
import {Container} from '../../../component/Container';
import {NameTitle} from '../../../component/titles/NameTitle';
import {Icon} from '../../../component/icon/icon';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle color={`${Theme.colors.text.secondary}`}>About me</SectionTitle>
                <Wrapper>
                    <WrapperIconList>
                        <li>
                            <a href="">
                                <Icon iconId={'instagramGray'} height={'28'} width={'28'} viewBox={'0 0 24 24'}/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon iconId={'telegramGray'} height={'28'} width={'28'} viewBox={'1 0 22 22'}/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Icon iconId={'linkedinGray'} height={'28'} width={'28'} viewBox={'0 0 24 24'}/>
                            </a>
                        </li>
                    </WrapperIconList>
                    <NameTitle color={`${Theme.colors.text.secondary}`}>I’m Kristina Tur</NameTitle>
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

const Wrapper = styled.div`
  max-width: 560px;
  width: 100%;
  border-radius: 100px 0;
  border: 2px solid ${Theme.colors.secondary};
  background-image: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  padding: 30px 40px 65px;
`

const WrapperIconList = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-bottom: 20px;
`

const WrapperList = styled.ul`
  list-style-image: ${Theme.colors.accent};
  margin: 20px 20px 30px;
`

const ListItem = styled.li`
  color: ${Theme.colors.text.secondary};
  font-size: 20px;
  font-weight: 400;
  padding-left: 15px;
  margin-bottom: 10px;
`