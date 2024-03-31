import React from 'react';
import {Icon} from '../../../component/icon/icon';
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';
import html from './../../../assets/images/svg/akar-icons_github-fill.svg'

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
                {/*<Icon iconId={props.iconId}/>*/}
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 160px;
  height: 90px;
  border-radius: 24px;
  background-color: ${Theme.colors.neutral};
  box-shadow: 0 3px 10px ${Theme.colors.text.secondary};
  color: ${Theme.colors.text.secondary};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 136%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-bottom: 50px;
`

const IconWrapper = styled.div`
  position: relative;
  
  &::before{
  content: '';
  position: absolute;
  width: 75px;
  height: 75px; /* Толщина границы */
  border-radius: 50%;
  background: ${Theme.colors.secondaryBg};

  transform: translate(-50%, -78%);
}
  &::after{
    content: '';
    display: inline-block;
    width: 55px;
    height: 55px;
    background-image: url(${html});
    background-size: cover;
    border: 2px solid black;
    border-radius: 50%;
    
    position: absolute;
    transform: translate(-50%, -90%);
  }
  
  
`

const SkillTitle = styled.p`

`