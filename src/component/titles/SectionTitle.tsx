import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

type SectionTitlePropsType = {
    color?:string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${props => props.color || Theme.colors.text.primary} ;
  font-weight: 600;
  font-size: calc( (100vw - 375px)/(1280 - 375) * (32 - 20) + 20px);
  text-align: center;
  margin-bottom: 70px;

  position: relative;

  &::before{
    content: '';
    display: inline-block;
    width: 120px;
    height: 3px;
    background-color: ${Theme.colors.text.accent};
    border-radius: 4px;

    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`