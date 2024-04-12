import React from 'react';
import {FlexWrapper} from '../../../../component/FlexWrapper';
import {S} from '../Projects_Styles'

type ProjectPropsTitle = {
    src: string
    srcSet: string
    title: string
    text: string
}

export const Project: React.FC<ProjectPropsTitle> = (props: ProjectPropsTitle) => {
    return (
        <S.Project>
            <picture>
                <source srcSet={props.srcSet} type='image/webp' />
                    <source srcSet={props.src} type='image/png' />
                        <S.Image src={props.src} alt={'Project'} />
            </picture>
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
            <FlexWrapper justifyContent={'space-around'} flexWrap={'wrap'} rowGap={'20px'}>
                <S.Link href={'#'}>View project</S.Link>
                <S.Link href={'#'}>Code</S.Link>
            </FlexWrapper>
        </S.Project>
    );
};



