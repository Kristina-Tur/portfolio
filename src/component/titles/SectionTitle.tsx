import styled from 'styled-components';
import {Theme} from '../../styles/Theme';
import {font} from '../../styles/Common';

type SectionTitlePropsType = {
    color?:string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  ${font({FMax: 32, FMin: 25})}
  color: ${props => props.color || Theme.colors.text.primary} ;
  text-align: center;
  margin-bottom: 70px;

  position: relative;

  &::before{
    content: '';
    display: inline-block;
    /*width: 120px;
    height: 3px;*/
    width: 18px;
    height: 18px;
    background-color: ${Theme.colors.text.accent};
    /*border-radius: 4px;*/
    border-radius: 50%;
    opacity: 0.5;

    position: absolute;
    left: 50%;
    bottom: -23px;
    transform: translateX(-50%);
  }

  @media ${Theme.media.mobile}{
    margin-top: -20px;
  }
`