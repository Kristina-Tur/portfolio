import React from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import projectPng from './../../../assets/images/project.png'
import projectWebp from './../../../assets/images/project.webp'
import {Container} from '../../../component/Container';

const projectsItems = ['All', 'landing page', 'React', 'spa']

const projectData = [
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards'
    },

]
export const Projects: React.FC = () => {
    return (
        <section>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems}/>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-around'} rowGap={'70px'} columnGap={'20px'}>
                    {projectData.map((p, index) => {
                        return <Project key={index} src={p.src} srcSet={p.srcSet} title={p.title}
                                 text={p.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </section>
    );
};


