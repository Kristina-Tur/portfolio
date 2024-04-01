import styled from 'styled-components';
import {Theme} from '../styles/Theme';

type NameTitlePropsType = {
    color?: string
}
export const NameTitle = styled.h2<NameTitlePropsType>`
  color: ${props => props.color || Theme.colors.text.primary};
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;
  margin-bottom: 30px;
  
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