import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../component/logo/Logo';
import {Projects} from '../sectoins/projects/Projects';
import {Container} from '../../component/Container';
import {FlexWrapper} from '../../component/FlexWrapper';
import {Theme} from '../../styles/Theme';
import {MenuHeader} from './menuHeader/MenuHeader';

// rsc
const headerItems = ['Home', 'Projects', 'About', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent={'flex-end'} alignItems={'center'} minHeight={'100%'}>
                    <MenuHeader menuItems={headerItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${Theme.colors.primaryBg};
  min-height: 60px;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`

