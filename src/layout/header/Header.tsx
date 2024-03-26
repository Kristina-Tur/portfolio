import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../component/menu/Menu';
import {Logo} from '../../component/logo/Logo';

// rsc

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

