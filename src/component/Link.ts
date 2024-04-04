import styled from 'styled-components';
import {Theme} from '../styles/Theme';

type LinkPropsType = {
    maxWidth?: string
}
export const Link = styled.a<LinkPropsType>`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
  max-width: ${props => props.maxWidth};
`