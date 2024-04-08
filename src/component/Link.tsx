import styled from 'styled-components';
import {Theme} from '../styles/Theme';


export const Link = styled.a`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 12px 45px;
  
  &:hover {
    transform: translateY(-5px);
    transition: .2s;
  }
`