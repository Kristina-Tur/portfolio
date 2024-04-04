import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import backgroundImage from './../../../assets/images/map2.png'
import {Link} from '../../../component/Link';
import {Theme} from '../../../styles/Theme';
import {Container} from '../../../component/Container';
import {NameTitle} from '../../../component/NameTitle';
import ins from './../../../assets/images/instagram-gray.svg';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle color={`${Theme.colors.text.secondary}`}>About me</SectionTitle>
                <Wrapper>
                    <IconWrapper>
                    <Img src={ins} alt=""/>
                    <Img src={ins} alt=""/>
                    <Img src={ins} alt=""/>
                   </IconWrapper>
                    <NameTitle color={`${Theme.colors.text.secondary}`}>I’m Kristina Tur</NameTitle>
                    <List>
                        <ListItem>28 years old</ListItem>
                        <ListItem>Higher technological education in the field of garment production</ListItem>
                        <ListItem>Started to get interested in programming in 2023</ListItem>
                        <ListItem>I’am coding with a clean and beautiful problem
                            solving in mind.
                        </ListItem>
                        <ListItem>Languages: English, Russian</ListItem>
                        <ListItem>I live in Brest, Belarus</ListItem>
                    </List>
                    <Link>Download CV</Link>
                </Wrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`

const IconWrapper = styled.div`
  text-align: right;
  margin-bottom: 20px;
`

const Img = styled.img`
  max-width: 28px;
  width: 100%;
  margin-left: 15px;
`

const Wrapper = styled.div`
  max-width: 560px;
  width: 100%;
  border-radius: 100px 0;
  border: 2px solid #FFF;
  background: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);
  padding: 30px 40px 65px;
`

const List = styled.ul`
  list-style-image: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%);
  list-style-position: unset;
  margin: 0 20px 30px;
`

const ListItem = styled.li`
  color: ${Theme.colors.text.secondary};
  font-size: 20px;
  font-weight: 400;
  line-height: 136%;
  padding-left: 15px;
  margin-bottom: 5px;
`