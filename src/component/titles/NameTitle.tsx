import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

type NameTitlePropsType = {
    color?: string
}
export const NameTitle = styled.h2<NameTitlePropsType>`
  color: ${props => props.color || Theme.colors.text.primary};
  /*font-size: 60px;*/
  font-size: calc( (100vw - 375px)/(1280 - 375) * (60 - 34) + 34px);
  font-weight: 700;
  
  /*position: relative;
  
  &::before{
    content: '';
    display: inline-block;
    width: 120px;
    height: 3px;
    background-color: #73c9ec;
    border-radius: 4px;
    
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }*/
`