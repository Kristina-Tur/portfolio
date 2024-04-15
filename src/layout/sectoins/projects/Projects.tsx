import React, {useState} from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import projectPng from './../../../assets/images/project.png'
import projectWebp from './../../../assets/images/project.webp'
import {Container} from '../../../component/Container';

export const projectsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    },

]

const projectData = [
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'react'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'react'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'spa'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing'
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing'
    },

]
export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredProjects = projectData;

    if (currentFilterStatus === 'landing') {
        filteredProjects = projectData.filter(project => project.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredProjects = projectData.filter(project => project.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredProjects = projectData.filter(project => project.type === 'spa')
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <section>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-around'} rowGap={'70px'} columnGap={'20px'}>
                    {filteredProjects.map((p, index) => {
                        return <Project key={index} src={p.src} srcSet={p.srcSet} title={p.title}
                                        text={p.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </section>
    );
};


