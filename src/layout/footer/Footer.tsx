import React from 'react';
import styled from 'styled-components';
import {Link} from '../../component/Link';
import {Theme} from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>© 2024 All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${Theme.colors.primaryBg};
`
const Copyright = styled.small`
  display: block;
  color: ${Theme.colors.text.primary};
  font-size: 12px;
  font-weight: 400;
  border-top: 1px solid ${Theme.colors.neutral};
 /* min-height: 52px;*/
  padding: 20px 0;
  text-align: center;
`
