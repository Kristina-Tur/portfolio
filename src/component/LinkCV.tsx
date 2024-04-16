import styled from 'styled-components';
import {Theme} from '../styles/Theme';
import {font} from '../styles/Common';


import React from 'react';

export const LinkCV = () => {
  return (
      <WrapperLink>
        <StyledLink href={''}>Download CV</StyledLink>
      </WrapperLink>
  );
};

const WrapperLink = styled.div`
  transform: scale(1);
  transition: ${Theme.animations.transition};

  &:hover {
    transform: scale(1.1);
  }
`
export const StyledLink = styled.a`
  ${font({color: Theme.colors.text.primary, lineHeight: 1.6, FMax: 20, FMin: 18})};
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 12px 45px;
`