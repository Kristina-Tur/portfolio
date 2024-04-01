import React from 'react';
import styled from 'styled-components';
import {Theme} from '../styles/Theme';

type ButtonPropsType = {
    maxWidth?: string
}
export const Button = styled.button<ButtonPropsType>`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
  max-width: ${props => props.maxWidth};
`