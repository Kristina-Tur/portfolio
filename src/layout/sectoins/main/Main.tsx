import React from 'react';
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from '../../../component/FlexWrapper';
import styled from 'styled-components';
import {Button} from '../../../component/Button';

export const Main = () => {
    return (
        <FlexWrapper justifyContent={'space-around'} alignItems={'center'}>
            <Photo src={photo} alt=""/>
            <div>
                <span>Hello,</span>
                <h2>I’m Kristina Tur</h2>
                <h1>Front-End Developer</h1>
                <p>Front-End developer based in Brest, Belarus.
                    I’am coding with a clean and beautiful problem
                    solving in mind.</p>
                <Button>Download CV</Button>
            </div>
        </FlexWrapper>
    );
};

const Photo = styled.img`

`
