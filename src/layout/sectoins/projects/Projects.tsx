import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import projectPng from './../../../assets/images/project.png'
import projectWebp from './../../../assets/images/project.webp'
import {Container} from '../../../component/Container';

const projectsItems = ['All', 'landing page', 'React', 'spa']
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems}/>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-around'} rowGap={'70px'} columnGap={'20px'}>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={projectPng} srcSet={projectWebp} title={'Project'}
                             text={'Application that can help you in learning by flashcards'}/>

                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  
`

