import React from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {LinkCV} from '../../../component/LinkCV';
import {Theme} from '../../../styles/Theme';
import {Container} from '../../../component/Container';
import {Social} from './components/Social';
import {S} from './AboutMe_Styles'
import {Fade} from 'react-awesome-reveal';

const socialData = [
    {
        iconId: 'instagramGray',
        width: '28',
        height: '28',
        viewBox: '0 0 24 24'
    },
    {
        iconId: 'telegramGray',
        width: '28',
        height: '28',
        viewBox: '1 0 22 22'
    },
    {
        iconId: 'linkedinGray',
        width: '28',
        height: '28',
        viewBox: '0 0 24 24'
    },

]
export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe id={'about'}>
            <Container>
                <SectionTitle color={`${Theme.colors.text.secondary}`}>About me</SectionTitle>
                <Fade>
                    <S.Wrapper>
                        <S.BlurWrapper></S.BlurWrapper>
                        <S.ContentWrapper>
                            <S.WrapperIconList>
                                {socialData.map((s, index) => {
                                    return <Social key={index} iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox}/>
                                })}
                            </S.WrapperIconList>
                            <S.NameTitle>I’m Kristina Tur</S.NameTitle>
                            <S.WrapperList>
                                <S.ListItem>28 years old</S.ListItem>
                                {/*I like to implement designs that inspire and attract people. Use best practices to optimize the user experience. Every day I enjoy and love challenges, overcoming them motivates me to keep learning and makes me a better professional.

                                Besides programming, I also like doing Freestyle Soccer ⚽ as a hobby.*/}
                                <S.ListItem>Higher technological education in the field of garment
                                    production</S.ListItem>
                                <S.ListItem>Started to get interested in programming in 2023</S.ListItem>
                                <S.ListItem>I’am coding with a clean and beautiful problem
                                    solving in mind.
                                </S.ListItem>
                                <S.ListItem>Languages: English, Russian</S.ListItem>
                                <S.ListItem>I live in Brest, Belarus</S.ListItem>
                            </S.WrapperList>
                            <LinkCV/>
                        </S.ContentWrapper>
                    </S.Wrapper>
                </Fade>
            </Container>
        </S.AboutMe>
    );
};

