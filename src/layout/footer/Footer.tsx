import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Copyright>© 2024 All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};

  position: relative; //for animation of Particles
`
const Copyright = styled.small`
  display: block;
  color: ${Theme.colors.text.primary};
  font-size: 12px;
  font-weight: 400;
  border-top: 1px solid ${Theme.colors.neutral};
  padding: 20px 0;
  text-align: center;
`
