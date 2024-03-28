import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Icon} from '../../../component/icon/icon';
import {SectionTitle} from '../../../component/SectionTitle';
import {Skill} from './Skill';
import {Container} from '../../../component/Container';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Skill iconId={'js'} title={'JavaScript'}/>
                    <Skill iconId={'HTML'} title={'HTML'}/>
                    <Skill iconId={'css'} title={'CSS'}/>
                    <Skill iconId={'ts'} title={'TypeScript'}/>
                    <Skill iconId={'react'} title={'React'}/>
                    <Skill iconId={'git'} title={'GitHub'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
