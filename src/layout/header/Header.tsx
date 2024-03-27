import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../component/menu/Menu';
import {Logo} from '../../component/logo/Logo';
import {Projects} from '../sectoins/projects/Projects';

// rsc
const headerItems = ["Home", "Projects", "About", "Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={headerItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

