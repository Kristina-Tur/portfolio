import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Icon} from '../../../component/icon/icon';
import {SectionTitle} from '../../../component/SectionTitle';
import {Skill} from './Skill';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                {/*<FlexWrapper >*/}
                <Box>
                    <Skill iconId={'HTML'} title={'HTML'}/>
                    <Skill iconId={'css'} title={'CSS'}/>
                    <Skill iconId={'js'} title={'JavaScript'} width="121" height="120" viewBox="0 0 121 120"/>
                    <Skill iconId={'ts'} title={'TypeScript'}/>
                    <Skill iconId={'react'} title={'React'}/>
                    <Skill iconId={'git'} title={'GitHub'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                </Box>
                {/*</FlexWrapper>*/}
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px;
`
