import React from 'react';
import {Icon} from '../../../../component/icon/icon';
import {S} from '../Skills_Styles'

type SkillPropsType = {
    iconId: string
    title: string
    viewBox?: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <S.IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </S.IconWrapper>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    );
};

