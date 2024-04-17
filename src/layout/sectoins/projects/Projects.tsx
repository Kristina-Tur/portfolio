import React, {useState} from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu';
import {Project} from './project/Project';
import {Container} from '../../../component/Container';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import {projectsData} from './projectsData/projectsData';

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

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredProjects = projectsData;

    if (currentFilterStatus === 'landing') {
        filteredProjects = projectsData.filter(project => project.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredProjects = projectsData.filter(project => project.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredProjects = projectsData.filter(project => project.type === 'spa')
    }

    const changeFilterStatus = (value: TabsStatusType) => {
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
  overflow: hidden; //for Dots
`

