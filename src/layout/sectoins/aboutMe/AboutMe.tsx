import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import backgroundImage from './../../../assets/images/map.png'
import {Button} from '../../../component/Button';

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <Title>I’m Kristina Tur</Title>
            <Text>Hello again everyone! So, you already know that my name is Kristina. A little about myself:</Text>
            <List>
                <li>28 years old</li>
                <li>Higher technological education in the field of garment production </li>
                <li>Started to get interested in programming in 2022</li>
                <li>languages:English, Russian</li>
                <li>I live in Brest, Belarus</li>
            </List>
            <Button>Download CV</Button>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  height: 50vh;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const List = styled.ul`

`