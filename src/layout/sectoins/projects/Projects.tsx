import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import project1 from './../../../assets/images/project.png'
import {Container} from '../../../component/Container';

const projectsItems = ['All', '1', '2']
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems}/>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-around'} rowGap={'50px'} columnGap={'50px'}>
                    <Project src={project1} title={'Project 1'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={project1} title={'Project 2'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={project1} title={'Project 3'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={project1} title={'Project 4'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={project1} title={'Project 5'}
                             text={'Application that can help you in learning by flashcards'}/>
                    <Project src={project1} title={'Project 6'}
                             text={'Application that can help you in learning by flashcards'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`