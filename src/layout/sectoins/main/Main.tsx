import React from 'react';
import {LinkCV} from '../../../component/LinkCV';
import {Container} from '../../../component/Container';
import {Circle} from './components/Circle';
import {Cross} from './components/Cross';
import {S} from './Main_styles'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <S.Wrapper>
                    <S.CrossWrapper>
                        <Cross/>
                    </S.CrossWrapper>
                    <S.WrapperContent>
                        <S.Photo></S.Photo>
                        <S.Box>
                            <S.Text>Hello,</S.Text>
                            <S.NameTitle>I’m Kristina Tur</S.NameTitle>
                            <S.MainTitle>
                                <p>Front-End Developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['Front-End Developer', 'Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                </S.MainTitle>
                            <S.Desc>Being Front End is amazing. We don not just create beautiful interfaces, we also create experiences that make people's lives easier.</S.Desc>
                            <LinkCV/>
                        </S.Box>
                    </S.WrapperContent>
                    <S.CircleWrapper>
                        <Circle/>
                    </S.CircleWrapper>
                </S.Wrapper>
            </Container>
        </S.Main>
    );
};








