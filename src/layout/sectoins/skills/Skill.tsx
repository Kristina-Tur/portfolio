import React from 'react';
import {Icon} from '../../../component/icon/icon';
import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

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
  max-width: 160px;
  width: 100%;
  height: 85px;
  border-radius: 24px;
  background-color: ${Theme.colors.neutral};
  box-shadow: 0 3px 10px ${Theme.colors.text.secondary};

  position: relative;
  
  @media ${Theme.media.mobile}{
    margin-top: -20px;
  }
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

  /*@media ${Theme.media.mobile}{
    width: 65px;
    height: 65px;
  }*/
`

const SkillTitle = styled.p`
  ${font({color: Theme.colors.text.secondary,FMax: 20, FMin: 20, lineHeight: 5.5})}
  text-align: center;
`