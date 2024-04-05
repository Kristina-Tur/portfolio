import React from 'react';
import {Icon} from '../../../component/icon/icon';
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <IconWrapper>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 160px;
  height: 85px;
  border-radius: 24px;
  background-color: ${Theme.colors.neutral};
  box-shadow: 0 3px 10px ${Theme.colors.text.secondary};

  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  transform: translate(96%, -50%);
  
  &::before{
    content: '';
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${Theme.colors.secondary};
    
    position: absolute;
    top: -8px;
    left: -8px;
    z-index: -1;
  }
`

const SkillTitle = styled.p`
  color: ${Theme.colors.text.secondary};
  font-size: 20px;
  font-weight: 600;
  line-height: 5.5;
  text-align: center;
`