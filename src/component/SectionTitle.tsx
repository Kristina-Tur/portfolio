import styled from 'styled-components';
import {Theme} from '../styles/Theme';

export const SectionTitle = styled.h2`
  color: ${Theme.colors.text.primary};
  font-size: 32px;
  font-weight: 600;
  line-height: 136%;
  text-align: center;
  margin-bottom: 70px;

  position: relative;

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
  }
`