import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

const Header = styled.header`
  background-color: ${Theme.colors.primaryBg};
  min-height: 60px;
  
  display: flex;
  align-items: center;
  
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`

export const S = {
    Header
}