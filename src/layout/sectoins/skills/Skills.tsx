import React from 'react';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Skill} from './Skill';
import {Container} from '../../../component/Container';

export const Skills = () => {
    return (
        <section>
            <Container>
                <FlexWrapper justifyContent={'space-evenly'} flexWrap={'wrap'} rowGap={'80px'} columnGap={'20px'}>
                    <Skill iconId={'HTML'} title={'HTML'}/>
                    <Skill iconId={'css'} title={'CSS'}/>
                    <Skill iconId={'js'} title={'JavaScript'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={'ts'} title={'TypeScript'} viewBox={'0 0 32 32'}/>
                    <Skill iconId={'react'} title={'React'} viewBox={'0 -5 115 115'}/>
                    <Skill iconId={'git'} title={'GitHub'} viewBox={'0 0 90 90'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                    <Skill iconId={'figma'} title={'Figma'} viewBox={'0 0 210 314'}/>
                </FlexWrapper>
            </Container>
        </section>
    );
};

