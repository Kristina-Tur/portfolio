import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../component/menu/Menu';
import {Logo} from '../../component/logo/Logo';
import {Projects} from '../sectoins/projects/Projects';
import {Container} from '../../component/Container';
import {FlexWrapper} from '../../component/FlexWrapper';
import {Theme} from '../../styles/Theme';

// rsc
const headerItems = ['Home', 'Projects', 'About', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <Menu menuItems={headerItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${Theme.colors.primaryBg};
  min-height: 96px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`

