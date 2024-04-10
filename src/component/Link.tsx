import styled from 'styled-components';
import {Theme} from '../styles/Theme';
import {font} from '../styles/Common';


export const Link = styled.a`
  ${font({color: Theme.colors.text.primary, lineHeight: 1.6, FMax: 20, FMin: 18})};
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 12px 45px;
  
  &:hover {
    transform: translateY(-5px);
    transition: .2s;
  }
`