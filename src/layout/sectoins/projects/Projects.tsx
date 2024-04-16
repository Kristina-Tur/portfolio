import React, {useState} from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import projectPng from './../../../assets/images/project.png'
import projectWebp from './../../../assets/images/project.webp'
import {Container} from '../../../component/Container';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';

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
        type: 'react',
        id: 1
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'react',
        id: 2
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'spa',
        id: 3
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing',
        id: 4
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing',
        id: 5
    },
    {
        src: projectPng,
        srcSet: projectWebp,
        title: 'Project',
        text: 'Application that can help you in learning by flashcards',
        type: 'landing',
        id: 6
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

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledProjects id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-around'} rowGap={'70px'} columnGap={'20px'}>

                    <AnimatePresence>
                        {filteredProjects.map((p) => {
                            return (<motion.div layout
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                key={p.id}>
                                    <Project
                                        key={p.id}
                                        src={p.src}
                                        srcSet={p.srcSet}
                                        title={p.title}
                                        text={p.text}/>
                                </motion.div>
                            )
                        })}

                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  position: relative; //for animation of Particles
`

