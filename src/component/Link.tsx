import styled from 'styled-components';
import {Theme} from '../styles/Theme';


export const Link = styled.a`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
  
  &:hover {
    transform: translateY(-5px);
    transition: .2s;
  }
`