import React from 'react';
import {FlexWrapper} from '../../../../component/FlexWrapper';
import {S} from '../Projects_Styles'
import Tilt from 'react-parallax-tilt';
import project2x from './../../../../assets/images/project@2x.png'

type ProjectPropsTitle = {
    src: string
    srcSet: string
    title: string
    text: string
}

export const Project: React.FC<ProjectPropsTitle> = (props: ProjectPropsTitle) => {
    return (
        <S.Project>
            <Tilt perspective={500}>
            <picture>
                <source srcSet={props.srcSet} type='image/webp' />
                    <source srcSet={props.src} type='image/png' />
                        <S.Image loading={'lazy'} src={props.src} srcSet={`${project2x} 2x`} alt={'Project'} />
            </picture>
            <S.Title>{props.title}</S.Title>
            </Tilt>
            <S.Text>{props.text}</S.Text>
            <FlexWrapper justifyContent={'space-around'} flexWrap={'wrap'} rowGap={'20px'}>
                <S.Link active href={'#'}>View project</S.Link>
                <S.Link href={'#'}>Code</S.Link>
            </FlexWrapper>
        </S.Project>
    );
};



