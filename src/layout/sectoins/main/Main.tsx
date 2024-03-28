import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from '../../../component/FlexWrapper';
import styled from 'styled-components';
import {Button} from '../../../component/Button';
import {Container} from '../../../component/Container';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'space-around'} alignItems={'center'}>
                    <Photo src={photo} alt=""/>
                    <Box>
                        <Text>Hello,</Text>
                        <Title>I’m Kristina Tur</Title>
                        <MainTitle>Front-End Developer</MainTitle>
                        <MainText>Front-End developer based in Brest, Belarus.
                            I’am coding with a clean and beautiful problem
                            solving in mind.</MainText>
                        <Button>Download CV</Button>
                    </Box>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`

`
const Box = styled.div`

`
const Text = styled.span`

`
const Title = styled.h2`

`
const MainTitle = styled.h1`

`
const MainText = styled.p`

`

const Photo = styled.img`

`
