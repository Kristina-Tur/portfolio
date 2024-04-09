import React from 'react';
import styled from 'styled-components';
import {Projects} from '../sectoins/projects/Projects';
import {Container} from '../../component/Container';
import {Theme} from '../../styles/Theme';
import {MenuHeader} from './menuHeader/MenuHeader';
import {MenuBurger} from './mobileMenu/MenuBurger';

// rsc
const headerItems = ['Home', 'Projects', 'About', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                    <MenuHeader menuItems={headerItems}/>
                    <MenuBurger menuItems={headerItems}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
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

