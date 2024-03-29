import React from 'react';
import {Icon} from '../../../component/icon/icon';
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';

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
  width: 160px;
  height: 90px;
  border-radius: 24px;
  background-color: ${Theme.colors.neutral};
  box-shadow: 0 3px 20px #000;
  color: ${Theme.colors.text.secondary};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 136%;
`

const SkillTitle = styled.p`

`