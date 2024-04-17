import React from 'react';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Skill} from './skill/Skill';
import {Container} from '../../../component/Container';

const skillData = [
    {
        iconId: 'HTML',
        title: 'HTML5',
        viewBox: '10 5 105 110'
    },
    {
        iconId: 'css',
        title: 'CSS3',
        viewBox: '10 5 105 110'
    },
    {
        iconId: 'js',
        title: 'JavaScript',
        viewBox: '0 0 32 32'
    },
    {
        iconId: 'ts',
        title: 'TypeScript',
        viewBox: '0 0 32 32'
    },
    {
        iconId: 'react',
        title: 'React',
        viewBox: '0 -5 115 115'
    },
    {
        iconId: 'git',
        title: 'GitHub',
        viewBox: '0 0 90 90'
    },
    {
        iconId: 'styledComponents',
        title: 'Styled',
        viewBox: '-15 0 130 130'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        viewBox: '0 0 210 314'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        viewBox: '0 0 210 314'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        viewBox: '0 0 210 314'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        viewBox: '0 0 210 314'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        viewBox: '0 0 210 314'
    },

]

export const Skills:React.FC = () => {
    // @ts-ignore
    return (
        <section>
            {/*можно сделать скролл*/}
            <Container>
                <FlexWrapper justifyContent={'space-evenly'} flexWrap={'wrap'} rowGap={'80px'} columnGap={'20px'}>
                    {skillData.map((s, index)=>{
                        return <Skill key={index} iconId={s.iconId} title={s.title} viewBox={s.viewBox}/>
                    })}
                </FlexWrapper>
            </Container>
        </section>
    );
};

