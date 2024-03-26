import React from 'react';
import {Icon} from '../../../component/icon/icon';
import styled from 'styled-components';

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: aqua;
  margin: 20px;
`

const SkillTitle = styled.p`

`