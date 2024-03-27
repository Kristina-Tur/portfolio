import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Menu} from '../../../component/menu/Menu';

const projectsItems = ["All", "1", "2"]
export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper>
                <Menu menuItems={projectsItems}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`